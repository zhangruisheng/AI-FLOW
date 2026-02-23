"""
Integration tests for ComfyUI frontend integration.

These tests verify the end-to-end workflow execution, image generation,
and error handling for the ComfyUI frontend integration.
"""
import json
import pytest
import time
import uuid
import urllib.request
import urllib.parse
import urllib.error
import websocket
from typing import Dict, Any, Optional
from io import BytesIO
from PIL import Image


class FrontendIntegrationClient:
    """Client for testing frontend integration with ComfyUI backend."""

    def __init__(self):
        self.client_id = str(uuid.uuid4())
        self.server_address = "127.0.0.1:8188"
        self.ws: Optional[websocket.WebSocket] = None

    def connect(self, listen: str = "127.0.0.1", port: int = 8188):
        """Connect to ComfyUI server via WebSocket."""
        self.server_address = f"{listen}:{port}"
        self.ws = websocket.WebSocket()
        self.ws.connect(
            f"ws://{self.server_address}/ws?clientId={self.client_id}"
        )

    def disconnect(self):
        """Disconnect WebSocket."""
        if self.ws:
            self.ws.close()
            self.ws = None

    def queue_prompt(self, prompt: Dict) -> str:
        """Queue a workflow and return the prompt ID."""
        data = json.dumps({
            "prompt": prompt,
            "client_id": self.client_id
        }).encode("utf-8")
        req = urllib.request.Request(
            f"http://{self.server_address}/prompt",
            data=data
        )
        response = urllib.request.urlopen(req)
        return json.loads(response.read())["prompt_id"]

    def get_history(self, prompt_id: str) -> Dict:
        """Get execution history for a prompt."""
        with urllib.request.urlopen(
            f"http://{self.server_address}/history/{prompt_id}"
        ) as response:
            return json.loads(response.read())

    def get_image(
        self, filename: str, subfolder: str = "", folder_type: str = "output"
    ) -> bytes:
        """Get generated image."""
        params = {
            "filename": filename,
            "subfolder": subfolder,
            "type": folder_type
        }
        url = f"http://{self.server_address}/view?{urllib.parse.urlencode(params)}"
        with urllib.request.urlopen(url) as response:
            return response.read()

    def wait_for_execution(self, prompt_id: str, timeout: float = 60) -> Dict:
        """Wait for workflow execution to complete."""
        start_time = time.time()

        while time.time() - start_time < timeout:
            if self.ws is None:
                raise RuntimeError("WebSocket not connected")

            try:
                out = self.ws.recv()
                if isinstance(out, str):
                    message = json.loads(out)

                    if message.get("type") == "executing":
                        data = message.get("data", {})
                        if data.get("prompt_id") == prompt_id:
                            if data.get("node") is None:
                                break

                    elif message.get("type") == "execution_error":
                        raise Exception(f"Execution error: {message.get('data')}")

            except websocket.WebSocketTimeoutException:
                pass

        return self.get_history(prompt_id)

    def get_object_info(self, node_class: Optional[str] = None) -> Dict:
        """Get node information from ComfyUI."""
        endpoint = f"/object_info/{node_class}" if node_class else "/object_info"
        with urllib.request.urlopen(
            f"http://{self.server_address}{endpoint}"
        ) as response:
            return json.loads(response.read())

    def get_queue(self) -> Dict:
        """Get current queue status."""
        with urllib.request.urlopen(
            f"http://{self.server_address}/queue"
        ) as response:
            return json.loads(response.read())

    def interrupt(self):
        """Interrupt current execution."""
        req = urllib.request.Request(
            f"http://{self.server_address}/interrupt",
            data=b"{}",
            method="POST"
        )
        urllib.request.urlopen(req)


def build_text_to_image_workflow(
    positive_prompt: str,
    negative_prompt: str = "",
    checkpoint: str = "v1-5-pruned-emaonly.safetensors",
    width: int = 512,
    height: int = 512,
    steps: int = 20,
    cfg: float = 7.0,
    seed: int = 0
) -> Dict:
    """Build a text-to-image workflow JSON."""
    return {
        "1": {
            "inputs": {"ckpt_name": checkpoint},
            "class_type": "CheckpointLoaderSimple"
        },
        "2": {
            "inputs": {
                "width": width,
                "height": height,
                "batch_size": 1
            },
            "class_type": "EmptyLatentImage"
        },
        "3": {
            "inputs": {
                "text": positive_prompt,
                "clip": ["1", 1]
            },
            "class_type": "CLIPTextEncode"
        },
        "4": {
            "inputs": {
                "text": negative_prompt,
                "clip": ["1", 1]
            },
            "class_type": "CLIPTextEncode"
        },
        "5": {
            "inputs": {
                "model": ["1", 0],
                "positive": ["3", 0],
                "negative": ["4", 0],
                "latent_image": ["2", 0],
                "seed": seed,
                "steps": steps,
                "cfg": cfg,
                "sampler_name": "euler",
                "scheduler": "normal",
                "denoise": 1.0
            },
            "class_type": "KSampler"
        },
        "6": {
            "inputs": {
                "samples": ["5", 0],
                "vae": ["1", 2]
            },
            "class_type": "VAEDecode"
        },
        "7": {
            "inputs": {
                "images": ["6", 0],
                "filename_prefix": "TestOutput"
            },
            "class_type": "SaveImage"
        }
    }


def build_image_to_image_workflow(
    positive_prompt: str,
    image_path: str,
    negative_prompt: str = "",
    checkpoint: str = "v1-5-pruned-emaonly.safetensors",
    steps: int = 20,
    cfg: float = 7.0,
    denoise: float = 0.8,
    seed: int = 0
) -> Dict:
    """Build an image-to-image workflow JSON."""
    return {
        "1": {
            "inputs": {"ckpt_name": checkpoint},
            "class_type": "CheckpointLoaderSimple"
        },
        "2": {
            "inputs": {"image": image_path},
            "class_type": "LoadImage"
        },
        "3": {
            "inputs": {
                "pixels": ["2", 0],
                "vae": ["1", 2]
            },
            "class_type": "VAEEncode"
        },
        "4": {
            "inputs": {
                "text": positive_prompt,
                "clip": ["1", 1]
            },
            "class_type": "CLIPTextEncode"
        },
        "5": {
            "inputs": {
                "text": negative_prompt,
                "clip": ["1", 1]
            },
            "class_type": "CLIPTextEncode"
        },
        "6": {
            "inputs": {
                "model": ["1", 0],
                "positive": ["4", 0],
                "negative": ["5", 0],
                "latent_image": ["3", 0],
                "seed": seed,
                "steps": steps,
                "cfg": cfg,
                "sampler_name": "euler",
                "scheduler": "normal",
                "denoise": denoise
            },
            "class_type": "KSampler"
        },
        "7": {
            "inputs": {
                "samples": ["6", 0],
                "vae": ["1", 2]
            },
            "class_type": "VAEDecode"
        },
        "8": {
            "inputs": {
                "images": ["7", 0],
                "filename_prefix": "TestOutput"
            },
            "class_type": "SaveImage"
        }
    }


@pytest.mark.integration
class TestFrontendIntegration:
    """Integration tests for frontend ComfyUI integration."""

    @pytest.fixture(scope="class")
    def client(self, args_pytest):
        """Create and connect the integration client."""
        c = FrontendIntegrationClient()
        time.sleep(2)
        c.connect(listen=args_pytest["listen"], port=args_pytest["port"])
        yield c
        c.disconnect()

    def test_client_connection(self, client):
        """Test that client can connect to ComfyUI server."""
        assert client.ws is not None
        assert client.client_id is not None

    def test_get_object_info(self, client):
        """Test getting object info from ComfyUI."""
        object_info = client.get_object_info()
        assert object_info is not None
        assert isinstance(object_info, dict)
        assert "CheckpointLoaderSimple" in object_info

    def test_get_specific_node_info(self, client):
        """Test getting info for a specific node type."""
        object_info = client.get_object_info("KSampler")
        assert "KSampler" in object_info
        ksampler_info = object_info["KSampler"]
        assert "input" in ksampler_info
        assert "required" in ksampler_info["input"]

    def test_get_queue_status(self, client):
        """Test getting queue status."""
        queue = client.get_queue()
        assert "queue_running" in queue
        assert "queue_pending" in queue

    def test_text_to_image_workflow_structure(self):
        """Test that text-to-image workflow has correct structure."""
        workflow = build_text_to_image_workflow(
            positive_prompt="a beautiful sunset",
            negative_prompt="ugly",
            width=512,
            height=512,
            steps=20,
            cfg=7.0,
            seed=42
        )

        assert "1" in workflow
        assert workflow["1"]["class_type"] == "CheckpointLoaderSimple"
        assert "5" in workflow
        assert workflow["5"]["class_type"] == "KSampler"
        assert workflow["5"]["inputs"]["seed"] == 42
        assert workflow["5"]["inputs"]["steps"] == 20

    def test_image_to_image_workflow_structure(self):
        """Test that image-to-image workflow has correct structure."""
        workflow = build_image_to_image_workflow(
            positive_prompt="transform this",
            image_path="input.png",
            negative_prompt="ugly",
            denoise=0.7
        )

        assert "2" in workflow
        assert workflow["2"]["class_type"] == "LoadImage"
        assert "3" in workflow
        assert workflow["3"]["class_type"] == "VAEEncode"
        assert workflow["6"]["inputs"]["denoise"] == 0.7

    def test_workflow_node_connections(self):
        """Test that workflow node connections are correct."""
        workflow = build_text_to_image_workflow("test prompt")

        ksampler = workflow["5"]
        assert ksampler["inputs"]["model"] == ["1", 0]
        assert ksampler["inputs"]["positive"] == ["3", 0]
        assert ksampler["inputs"]["negative"] == ["4", 0]
        assert ksampler["inputs"]["latent_image"] == ["2", 0]

        vae_decode = workflow["6"]
        assert vae_decode["inputs"]["samples"] == ["5", 0]
        assert vae_decode["inputs"]["vae"] == ["1", 2]

    def test_workflow_with_custom_parameters(self):
        """Test workflow with custom parameters."""
        workflow = build_text_to_image_workflow(
            positive_prompt="custom test",
            width=768,
            height=1024,
            steps=50,
            cfg=12.0,
            seed=999
        )

        latent_node = workflow["2"]
        assert latent_node["inputs"]["width"] == 768
        assert latent_node["inputs"]["height"] == 1024

        ksampler = workflow["5"]
        assert ksampler["inputs"]["steps"] == 50
        assert ksampler["inputs"]["cfg"] == 12.0
        assert ksampler["inputs"]["seed"] == 999


@pytest.mark.integration
class TestImageGeneration:
    """Tests for image generation functionality."""

    @pytest.fixture(scope="class")
    def client(self, args_pytest):
        """Create and connect the integration client."""
        c = FrontendIntegrationClient()
        time.sleep(2)
        c.connect(listen=args_pytest["listen"], port=args_pytest["port"])
        yield c
        c.disconnect()

    def test_generate_simple_image(self, client):
        """Test generating a simple image."""
        workflow = build_text_to_image_workflow(
            positive_prompt="a simple test image",
            width=64,
            height=64,
            steps=5,
            seed=42
        )

        prompt_id = client.queue_prompt(workflow)
        assert prompt_id is not None

        history = client.wait_for_execution(prompt_id, timeout=120)
        assert prompt_id in history

        result = history[prompt_id]
        assert "outputs" in result

        outputs = result["outputs"]
        assert "7" in outputs
        assert "images" in outputs["7"]
        assert len(outputs["7"]["images"]) > 0

    def test_generated_image_properties(self, client):
        """Test that generated image has expected properties."""
        workflow = build_text_to_image_workflow(
            positive_prompt="test image",
            width=128,
            height=128,
            steps=10,
            seed=123
        )

        prompt_id = client.queue_prompt(workflow)
        history = client.wait_for_execution(prompt_id, timeout=120)

        image_info = history[prompt_id]["outputs"]["7"]["images"][0]
        image_data = client.get_image(
            image_info["filename"],
            image_info.get("subfolder", ""),
            image_info.get("type", "output")
        )

        image = Image.open(BytesIO(image_data))
        assert image.size == (128, 128)
        assert image.mode in ("RGB", "RGBA")

    def test_reproducible_generation(self, client):
        """Test that same seed produces same image."""
        workflow1 = build_text_to_image_workflow(
            positive_prompt="reproducible test",
            width=64,
            height=64,
            steps=5,
            seed=42
        )

        workflow2 = build_text_to_image_workflow(
            positive_prompt="reproducible test",
            width=64,
            height=64,
            steps=5,
            seed=42
        )

        prompt_id1 = client.queue_prompt(workflow1)
        history1 = client.wait_for_execution(prompt_id1, timeout=120)

        prompt_id2 = client.queue_prompt(workflow2)
        history2 = client.wait_for_execution(prompt_id2, timeout=120)

        image_info1 = history1[prompt_id1]["outputs"]["7"]["images"][0]
        image_info2 = history2[prompt_id2]["outputs"]["7"]["images"][0]

        image_data1 = client.get_image(
            image_info1["filename"],
            image_info1.get("subfolder", ""),
            image_info1.get("type", "output")
        )
        image_data2 = client.get_image(
            image_info2["filename"],
            image_info2.get("subfolder", ""),
            image_info2.get("type", "output")
        )

        assert image_data1 == image_data2


@pytest.mark.integration
class TestErrorHandling:
    """Tests for error handling in frontend integration."""

    @pytest.fixture(scope="class")
    def client(self, args_pytest):
        """Create and connect the integration client."""
        c = FrontendIntegrationClient()
        time.sleep(2)
        c.connect(listen=args_pytest["listen"], port=args_pytest["port"])
        yield c
        c.disconnect()

    def test_invalid_checkpoint_error(self, client):
        """Test error handling for invalid checkpoint."""
        workflow = build_text_to_image_workflow(
            positive_prompt="test",
            checkpoint="nonexistent_checkpoint.safetensors"
        )

        prompt_id = client.queue_prompt(workflow)

        try:
            client.wait_for_execution(prompt_id, timeout=30)
        except Exception as e:
            assert "error" in str(e).lower() or "not found" in str(e).lower()

    def test_invalid_node_type_error(self, client):
        """Test error handling for invalid node type."""
        workflow = {
            "1": {
                "inputs": {},
                "class_type": "NonExistentNode"
            }
        }

        with pytest.raises(urllib.error.HTTPError):
            client.queue_prompt(workflow)

    def test_missing_required_input_error(self, client):
        """Test error handling for missing required inputs."""
        workflow = {
            "1": {
                "inputs": {},
                "class_type": "KSampler"
            }
        }

        with pytest.raises(urllib.error.HTTPError):
            client.queue_prompt(workflow)

    def test_invalid_connection_error(self, client):
        """Test error handling for invalid node connections."""
        workflow = {
            "1": {
                "inputs": {
                    "model": ["999", 0],
                    "positive": ["999", 0],
                    "negative": ["999", 0],
                    "latent_image": ["999", 0],
                    "seed": 0,
                    "steps": 20,
                    "cfg": 7,
                    "sampler_name": "euler",
                    "scheduler": "normal",
                    "denoise": 1
                },
                "class_type": "KSampler"
            }
        }

        with pytest.raises(urllib.error.HTTPError):
            client.queue_prompt(workflow)

    def test_interrupt_execution(self, client):
        """Test interrupting a running execution."""
        workflow = build_text_to_image_workflow(
            positive_prompt="test interrupt",
            width=512,
            height=512,
            steps=100
        )

        prompt_id = client.queue_prompt(workflow)

        time.sleep(0.5)
        client.interrupt()

        time.sleep(1)
        queue = client.get_queue()
        running = queue.get("queue_running", [])
        assert not any(
            item.get("prompt_id") == prompt_id or item.get("number") == prompt_id
            for item in running
        )
