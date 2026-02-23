import { ComfyUIWorkflow } from './comfyuiClient';
import { AI_MODELS } from '../config';

export interface ZImageModelConfig {
  vae: string;
  clip: string;
  unet?: string;
}

export const ZIMAGE_MODEL_CONFIG: Record<string, ZImageModelConfig> = {
  'z-image-turbo': {
    vae: 'flux_vae.safetensors',
    clip: 'qwen_3_4b.safetensors',
    unet: 'Z-image_8-12Steps_BF16.safetensors',
  },
  'z-image': {
    vae: 'flux_vae.safetensors',
    clip: 'qwen_3_4b.safetensors',
    unet: 'Z-image_8-12Steps_BF16.safetensors',
  },
  'z-image-edit': {
    vae: 'flux_vae.safetensors',
    clip: 'qwen_3_4b.safetensors',
    unet: 'Z-image_8-12Steps_BF16.safetensors',
  },
};

export function isLocalModel(modelId: string): boolean {
  const model = AI_MODELS.SUPPORTED_MODELS.find(m => m.id === modelId);
  return model?.type === 'local';
}

export interface ZImageWorkflowConfig {
  checkpointName: string;
  vaeName: string;
  clipName: string;
  width: number;
  height: number;
  steps: number;
  cfg: number;
  seed: number;
  prompt: string;
  negativePrompt: string;
  loraName?: string;
  loraStrength?: number;
  images?: string[];
}

export function buildZImageWorkflowFromConfig(config: ZImageWorkflowConfig): ComfyUIWorkflow {
  const {
    checkpointName,
    vaeName,
    clipName,
    width,
    height,
    steps,
    cfg,
    seed,
    prompt,
    negativePrompt,
    loraName,
    loraStrength = 1.0,
  } = config;

  const modelConfig = ZIMAGE_MODEL_CONFIG[checkpointName] || ZIMAGE_MODEL_CONFIG['z-image-turbo'];

  const workflow: ComfyUIWorkflow = {
    '10': {
      inputs: {
        unet_name: modelConfig.unet || 'Z-image_8-12Steps_BF16.safetensors',
        weight_dtype: 'default',
      },
      class_type: 'UNETLoader',
    },
    '11': {
      inputs: {
        clip_name: modelConfig.clip || 'qwen_3_4b.safetensors',
        type: 'stable_diffusion',
      },
      class_type: 'CLIPLoader',
    },
    '12': {
      inputs: {
        vae_name: modelConfig.vae || 'flux_vae.safetensors',
      },
      class_type: 'VAELoader',
    },
  };

  let modelRef: [string, number] = ['10', 0];
  let clipRef: [string, number] = ['11', 0];

  if (loraName) {
    workflow['20'] = {
      inputs: {
        model: ['10', 0],
        clip: ['11', 0],
        lora_name: loraName,
        strength_model: loraStrength,
        strength_clip: loraStrength,
      },
      class_type: 'LoraLoader',
    };
    modelRef = ['20', 0];
    clipRef = ['20', 1];
  }

  workflow['5'] = {
    inputs: {
      width: width,
      height: height,
      batch_size: 1,
    },
    class_type: 'EmptyLatentImage',
  };
  workflow['6'] = {
    inputs: {
      text: prompt,
      clip: clipRef,
    },
    class_type: 'CLIPTextEncode',
  };
  workflow['7'] = {
    inputs: {
      text: negativePrompt || '',
      clip: clipRef,
    },
    class_type: 'CLIPTextEncode',
  };
  workflow['3'] = {
    inputs: {
      seed: seed,
      steps: steps,
      cfg: cfg,
      sampler_name: 'euler',
      scheduler: 'normal',
      denoise: 1,
      model: modelRef,
      positive: ['6', 0],
      negative: ['7', 0],
      latent_image: ['5', 0],
    },
    class_type: 'KSampler',
  };
  workflow['8'] = {
    inputs: {
      samples: ['3', 0],
      vae: ['12', 0],
    },
    class_type: 'VAEDecode',
  };
  workflow['9'] = {
    inputs: {
      filename_prefix: 'ComfyUI',
      images: ['8', 0],
    },
    class_type: 'SaveImage',
  };

  return workflow;
}

export interface WorkflowValidation {
  isValid: boolean;
  errors: string[];
}

export function buildComfyUIWorkflow(
  nodes: any[],
  edges: any[]
): { workflow: ComfyUIWorkflow; validation: WorkflowValidation } {
  const errors: string[] = [];
  const workflow: ComfyUIWorkflow = {};

  const imageEditorNodes = nodes.filter(
    (n: any) => n.type === 'imageEditor' || n.data?.type === 'imageEditor'
  );

  if (imageEditorNodes.length === 0) {
    errors.push('No image editor node found in workflow');
  }

  const textNodes = nodes.filter(
    (n: any) => n.type === 'text' || n.data?.type === 'text'
  );

  const hasPromptConnection = edges.some(
    (e: any) =>
      imageEditorNodes.some((n: any) => n.id === e.target) &&
      textNodes.some((n: any) => n.id === e.source)
  );

  const hasPrompt = textNodes.length > 0 && hasPromptConnection;

  if (!hasPrompt && imageEditorNodes.length > 0) {
    const hasDirectPrompt = imageEditorNodes.some(
      (n: any) => n.data?.prompt && n.data.prompt.trim() !== ''
    );
    if (!hasDirectPrompt) {
      errors.push('No prompt provided. Add a text node or enter a prompt directly.');
    }
  }

  if (errors.length > 0) {
    return {
      workflow: {},
      validation: {
        isValid: false,
        errors,
      },
    };
  }

  const imageEditorNode = imageEditorNodes[0];
  const inputs = imageEditorNode?.data?.inputs || [];

  const modelInput = inputs.find((i: any) => i.type === 'model');
  const aspectRatioInput = inputs.find((i: any) => i.type === 'aspectRatio');
  const qualityInput = inputs.find((i: any) => i.type === 'quality');
  const guidanceInput = inputs.find((i: any) => i.type === 'guidance');
  const seedInput = inputs.find((i: any) => i.type === 'seed');

  const modelId = modelInput?.value || 'z-image-turbo';
  const modelConfig = ZIMAGE_MODEL_CONFIG[modelId] || ZIMAGE_MODEL_CONFIG['z-image-turbo'];

  const parseAspectRatio = (ratio: string): { width: number; height: number } => {
    const ratioMap: Record<string, [number, number]> = {
      '1:1': [1024, 1024],
      '16:9': [1344, 768],
      '9:16': [768, 1344],
      '4:3': [1152, 896],
      '3:4': [896, 1152],
      '3:2': [1216, 832],
      '2:3': [832, 1216],
    };
    const [w, h] = ratioMap[ratio] || [1024, 1024];
    return { width: w, height: h };
  };

  const parseQuality = (quality: string): number => {
    const qualitySteps: Record<string, number> = {
      '512': 8,
      '1K': 10,
      '2K': 12,
      '4K': 15,
    };
    return qualitySteps[quality] || 20;
  };

  const { width, height } = parseAspectRatio(aspectRatioInput?.value || '1:1');
  const steps = parseQuality(qualityInput?.value || '2K');
  const cfg = (guidanceInput?.value as number) || 7;
  const seed = (seedInput?.value as number) || Math.floor(Math.random() * 1000000);

  const textNode = textNodes.find((n: any) =>
    edges.some((e: any) => e.source === n.id && e.target === imageEditorNode?.id)
  );

  const promptText = textNode?.data?.label || textNode?.data?.text || imageEditorNode?.data?.prompt || '';

  const loraInput = inputs.find((i: any) => i.type === 'lora');
  const loraName = loraInput?.value as string | undefined;
  const loraStrength = (loraInput?.strength as number) || 1.0;

  workflow['10'] = {
    inputs: {
      unet_name: modelConfig.unet || 'Z-image_8-12Steps_BF16.safetensors',
      weight_dtype: 'default',
    },
    class_type: 'UNETLoader',
  };

  workflow['11'] = {
    inputs: {
      clip_name: modelConfig.clip || 'qwen_3_4b.safetensors',
      type: 'stable_diffusion',
    },
    class_type: 'CLIPLoader',
  };

  let modelRef = ['10', 0];
  let clipRef = ['11', 0];

  if (loraName) {
    workflow['20'] = {
      inputs: {
        model: ['10', 0],
        clip: ['11', 0],
        lora_name: loraName,
        strength_model: loraStrength,
        strength_clip: loraStrength,
      },
      class_type: 'LoraLoader',
    };
    modelRef = ['20', 0];
    clipRef = ['20', 1];
  }

  workflow['12'] = {
    inputs: {
      vae_name: modelConfig.vae || 'flux_vae.safetensors',
    },
    class_type: 'VAELoader',
  };

  workflow['5'] = {
    inputs: {
      width: width,
      height: height,
      batch_size: 1,
    },
    class_type: 'EmptyLatentImage',
  };

  workflow['6'] = {
    inputs: {
      text: promptText,
      clip: clipRef,
    },
    class_type: 'CLIPTextEncode',
  };

  workflow['7'] = {
    inputs: {
      text: '',
      clip: clipRef,
    },
    class_type: 'CLIPTextEncode',
  };

  workflow['3'] = {
    inputs: {
      seed: seed,
      steps: steps,
      cfg: cfg,
      sampler_name: 'euler',
      scheduler: 'normal',
      denoise: 1,
      model: modelRef,
      positive: ['6', 0],
      negative: ['7', 0],
      latent_image: ['5', 0],
    },
    class_type: 'KSampler',
  };

  workflow['8'] = {
    inputs: {
      samples: ['3', 0],
      vae: ['12', 0],
    },
    class_type: 'VAEDecode',
  };

  workflow['9'] = {
    inputs: {
      filename_prefix: 'ComfyUI',
      images: ['8', 0],
    },
    class_type: 'SaveImage',
  };

  return {
    workflow,
    validation: {
      isValid: true,
      errors: [],
    },
  };
}
