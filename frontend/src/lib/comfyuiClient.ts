export interface ComfyUIWorkflow {
  [nodeId: string]: {
    inputs: Record<string, any>;
    class_type: string;
    outputs?: Array<{
      name: string;
      type: string;
    }>;
  };
}

export interface ModelList {
  checkpoints?: Array<{
    title: string;
    model_name: string;
  }>;
  vae?: Array<{
    title: string;
    model_name: string;
  }>;
  loras?: Array<{
    title: string;
    model_name: string;
  }>;
  controlnet?: Array<{
    title: string;
    model_name: string;
  }>;
  clip?: Array<{
    title: string;
    model_name: string;
  }>;
}

export interface QueueInfo {
  queue_running: Array<any>;
  queue_pending: Array<any>;
}

export interface HistoryInfo {
  [promptId: string]: {
    prompt: ComfyUIWorkflow;
    outputs: Record<string, any>;
    node_errors?: Record<string, any>;
  };
}

export interface SystemStats {
  system: {
    os: string;
    ram_total: number;
    ram_free: number;
    comfyui_version: string;
    python_version: string;
    pytorch_version: string;
    embedded_python: boolean;
  };
  devices: Array<{
    name: string;
    type: string;
    index: number | null;
    vram_total: number;
    vram_free: number;
    torch_vram_total: number;
    torch_vram_free: number;
  }>;
}

export type WebSocketMessage = {
  type: 'status';
  data: QueueInfo;
} | {
  type: 'progress';
  current: number;
  total: number;
  prompt_id: string;
} | {
  type: 'executing';
  node: string;
  prompt_id: string;
} | {
  type: 'executed';
  node: string;
  prompt_id: string;
  output: any;
} | {
  type: 'execution_start';
  prompt_id: string;
} | {
  type: 'execution_error';
  node: string;
  prompt_id: string;
  error: string;
};

interface ComfyUIClientOptions {
  baseUrl: string;
  wsUrl: string;
  timeout?: number;
}

interface EventCallback {
  (message: WebSocketMessage): void;
}

export interface ComfyUIClient {
  connect: () => Promise<void>;
  disconnect: () => void;
  isConnected: () => boolean;
  on: (event: string, callback: EventCallback) => void;
  off: (event: string, callback: EventCallback) => void;
  getModels: () => Promise<ModelList>;
  getQueue: () => Promise<QueueInfo>;
  queuePrompt: (workflow: ComfyUIWorkflow) => Promise<string>;
  interrupt: () => Promise<void>;
  getHistory: (promptId?: string) => Promise<HistoryInfo>;
  getSystemStats: () => Promise<SystemStats>;
}

class ComfyUIClientImpl implements ComfyUIClient {
  private options: ComfyUIClientOptions;
  private ws: WebSocket | null = null;
  private eventListeners: Record<string, EventCallback[]> = {};
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 3;
  private reconnectDelay = 1000;
  private isConnecting = false;
  private clientId: string;

  constructor(options: ComfyUIClientOptions) {
    this.options = options;
    this.clientId = Math.random().toString(36).substring(2, 15);
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.isConnecting) {
        reject(new Error('Already connecting'));
        return;
      }

      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        resolve();
        return;
      }

      this.isConnecting = true;

      try {
        const wsUrl = `${this.options.wsUrl}?clientId=${this.clientId}`;
        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {
          this.isConnecting = false;
          this.reconnectAttempts = 0;
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const message = JSON.parse(event.data) as WebSocketMessage;
            this.emitEvent(message.type, message);
          } catch (error) {
            console.error('Error parsing WebSocket message:', error);
          }
        };

        this.ws.onclose = () => {
          this.isConnecting = false;
          this.attemptReconnect();
        };

        this.ws.onerror = (error) => {
          this.isConnecting = false;
          reject(error);
        };
      } catch (error) {
        this.isConnecting = false;
        reject(error);
      }
    });
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.eventListeners = {};
  }

  isConnected(): boolean {
    return this.ws !== null && this.ws.readyState === WebSocket.OPEN;
  }

  on(event: string, callback: EventCallback): void {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(callback);
  }

  off(event: string, callback: EventCallback): void {
    if (this.eventListeners[event]) {
      this.eventListeners[event] = this.eventListeners[event].filter(cb => cb !== callback);
    }
  }

  private emitEvent(event: string, message: WebSocketMessage): void {
    if (this.eventListeners[event]) {
      this.eventListeners[event].forEach(callback => {
        try {
          callback(message);
        } catch (error) {
          console.error('Error in event listener:', error);
        }
      });
    }
  }

  private attemptReconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      setTimeout(() => {
        this.connect().catch(() => {
          console.error(`Reconnect attempt ${this.reconnectAttempts} failed`);
        });
      }, this.reconnectDelay * this.reconnectAttempts);
    }
  }

  private async fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.options.baseUrl}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.options.timeout || 30000);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      if (response.status === 204) {
        return {} as T;
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  async getModels(): Promise<ModelList> {
    const response = await this.fetchApi<Record<string, any>>('/object_info');
    const modelList: ModelList = {};
    
    if (response.LoraLoader?.input?.required?.lora_name) {
      const loraNames = response.LoraLoader.input.required.lora_name[0];
      if (Array.isArray(loraNames)) {
        modelList.loras = loraNames.map((name: string) => ({
          title: name,
          model_name: name,
        }));
      }
    }
    
    if (response.CheckpointLoaderSimple?.input?.required?.ckpt_name) {
      const ckptNames = response.CheckpointLoaderSimple.input.required.ckpt_name[0];
      if (Array.isArray(ckptNames)) {
        modelList.checkpoints = ckptNames.map((name: string) => ({
          title: name,
          model_name: name,
        }));
      }
    }
    
    if (response.VAELoader?.input?.required?.vae_name) {
      const vaeNames = response.VAELoader.input.required.vae_name[0];
      if (Array.isArray(vaeNames)) {
        modelList.vae = vaeNames.map((name: string) => ({
          title: name,
          model_name: name,
        }));
      }
    }
    
    if (response.CLIPLoader?.input?.required?.clip_name) {
      const clipNames = response.CLIPLoader.input.required.clip_name[0];
      if (Array.isArray(clipNames)) {
        modelList.clip = clipNames.map((name: string) => ({
          title: name,
          model_name: name,
        }));
      }
    }
    
    return modelList;
  }

  async getQueue(): Promise<QueueInfo> {
    return this.fetchApi<QueueInfo>('/queue');
  }

  async queuePrompt(workflow: ComfyUIWorkflow): Promise<string> {
    const response = await this.fetchApi<{ prompt_id: string }>('/prompt', {
      method: 'POST',
      body: JSON.stringify({ 
        prompt: workflow,
        client_id: this.clientId
      }),
    });
    return response.prompt_id;
  }

  async interrupt(): Promise<void> {
    await this.fetchApi<void>('/interrupt', {
      method: 'POST',
    });
  }

  async getHistory(promptId?: string): Promise<HistoryInfo> {
    const endpoint = promptId ? `/history/${promptId}` : '/history';
    return this.fetchApi<HistoryInfo>(endpoint);
  }

  async getSystemStats(): Promise<SystemStats> {
    return this.fetchApi<SystemStats>('/system_stats');
  }
}

export function createComfyUIClient(options: ComfyUIClientOptions): ComfyUIClient {
  return new ComfyUIClientImpl(options);
}
