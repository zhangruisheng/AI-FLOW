import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { ComfyUIClient, createComfyUIClient, ModelList, QueueInfo, WebSocketMessage, ComfyUIWorkflow, HistoryInfo, SystemStats } from '../lib/comfyuiClient';
import { STORAGE_KEYS } from '../config';

export interface ComfyUIState {
  isConnected: boolean;
  isLoading: boolean;
  error: string | null;
  models: ModelList;
  queue: QueueInfo | null;
  currentPromptId: string | null;
  progress: {
    node: string | null;
    current: number;
    total: number;
  } | null;
  systemStats: SystemStats | null;
}

export interface ComfyUIContextValue extends ComfyUIState {
  client: ComfyUIClient | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  refreshModels: () => Promise<void>;
  refreshQueue: () => Promise<void>;
  refreshSystemStats: () => Promise<void>;
  queuePrompt: (workflow: ComfyUIWorkflow) => Promise<string>;
  interrupt: () => Promise<void>;
  getHistory: (promptId?: string) => Promise<HistoryInfo>;
  updateServerUrl: (url: string) => void;
  serverUrl: string;
  on: (event: string, callback: (message: any) => void) => void;
  off: (event: string, callback: (message: any) => void) => void;
}

const ComfyUIContext = createContext<ComfyUIContextValue | null>(null);

export interface ComfyUIProviderProps {
  children: React.ReactNode;
}

export function ComfyUIProvider({ children }: ComfyUIProviderProps) {
  const clientRef = useRef<ComfyUIClient | null>(null);
  const [serverUrl, setServerUrl] = useState<string>(() => {
    const savedUrl = localStorage.getItem(STORAGE_KEYS.LOCAL_SERVER_URL);
    if (savedUrl && savedUrl.includes('127.0.0.1')) {
      const newUrl = savedUrl.replace('127.0.0.1', 'localhost');
      localStorage.setItem(STORAGE_KEYS.LOCAL_SERVER_URL, newUrl);
      return newUrl;
    }
    return savedUrl || 'http://localhost:8188';
  });
  
  const [state, setState] = useState<ComfyUIState>({
    isConnected: false,
    isLoading: false,
    error: null,
    models: {},
    queue: null,
    currentPromptId: null,
    progress: null,
    systemStats: null,
  });

  const updateState = useCallback((updates: Partial<ComfyUIState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  }, []);

  const handleWebSocketMessage = useCallback((message: WebSocketMessage) => {
    switch (message.type) {
      case 'status':
        updateState({ queue: message.data as QueueInfo });
        break;
      case 'execution_start':
        updateState({
          currentPromptId: message.prompt_id || null,
          progress: { node: null, current: 0, total: 0 },
        });
        break;
      case 'executing':
        updateState({
          progress: {
            node: message.node || null,
            current: state.progress?.current || 0,
            total: state.progress?.total || 0,
          },
        });
        break;
      case 'progress':
        updateState({
          progress: {
            node: state.progress?.node || null,
            current: message.current || 0,
            total: message.total || 0,
          },
        });
        break;
      case 'executed':
      case 'execution_error':
        updateState({
          currentPromptId: null,
          progress: null,
        });
        break;
    }
  }, [state.progress, updateState]);

  const updateServerUrl = useCallback((url: string) => {
    setServerUrl(url);
    localStorage.setItem(STORAGE_KEYS.LOCAL_SERVER_URL, url);
    if (clientRef.current) {
      clientRef.current.disconnect();
      clientRef.current = null;
      updateState({ isConnected: false });
    }
  }, [updateState]);

  const connect = useCallback(async () => {
    if (clientRef.current?.isConnected()) {
      return;
    }

    updateState({ isLoading: true, error: null });

    try {
      const wsUrl = serverUrl.replace('http', 'ws') + '/ws';
      const client = createComfyUIClient({
        baseUrl: serverUrl,
        wsUrl: wsUrl,
        timeout: 30000,
      });

      client.on('progress', handleWebSocketMessage);
      client.on('executing', handleWebSocketMessage);
      client.on('executed', handleWebSocketMessage);
      client.on('execution_start', handleWebSocketMessage);
      client.on('execution_error', handleWebSocketMessage);
      client.on('status', handleWebSocketMessage);

      await client.connect();
      clientRef.current = client;

      updateState({
        isConnected: true,
        isLoading: false,
      });

      const models = await client.getModels();
      updateState({ models });
    } catch (error) {
      updateState({
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to connect to ComfyUI',
      });
    }
  }, [serverUrl, handleWebSocketMessage, updateState]);

  useEffect(() => {
    connect().catch((error) => {
      console.error('Auto-connect failed:', error);
    });
  }, [connect]);

  const disconnect = useCallback(() => {
    if (clientRef.current) {
      clientRef.current.disconnect();
      clientRef.current = null;
    }
    updateState({
      isConnected: false,
      models: {},
      queue: null,
      currentPromptId: null,
      progress: null,
      systemStats: null,
    });
  }, [updateState]);

  const refreshModels = useCallback(async () => {
    if (!clientRef.current) return;
    try {
      const models = await clientRef.current.getModels();
      updateState({ models });
    } catch (error) {
      console.error('Failed to refresh models:', error);
    }
  }, [updateState]);

  const refreshQueue = useCallback(async () => {
    if (!clientRef.current) return;
    try {
      const queue = await clientRef.current.getQueue();
      updateState({ queue });
    } catch (error) {
      console.error('Failed to refresh queue:', error);
    }
  }, [updateState]);

  const refreshSystemStats = useCallback(async () => {
    if (!clientRef.current) return;
    try {
      const systemStats = await clientRef.current.getSystemStats();
      updateState({ systemStats });
    } catch (error) {
      console.error('Failed to refresh system stats:', error);
    }
  }, [updateState]);

  const queuePrompt = useCallback(async (workflow: ComfyUIWorkflow): Promise<string> => {
    if (!clientRef.current) {
      throw new Error('Not connected to ComfyUI');
    }
    return await clientRef.current.queuePrompt(workflow);
  }, []);

  const interrupt = useCallback(async () => {
    if (!clientRef.current) return;
    await clientRef.current.interrupt();
  }, []);

  const getHistory = useCallback(async (promptId?: string): Promise<HistoryInfo> => {
    if (!clientRef.current) {
      throw new Error('Not connected to ComfyUI');
    }
    return await clientRef.current.getHistory(promptId);
  }, []);

  const on = useCallback((event: string, callback: (message: any) => void) => {
    if (clientRef.current) {
      clientRef.current.on(event, callback);
    }
  }, []);

  const off = useCallback((event: string, callback: (message: any) => void) => {
    if (clientRef.current) {
      clientRef.current.off(event, callback);
    }
  }, []);

  const value: ComfyUIContextValue = {
    ...state,
    client: clientRef.current,
    connect,
    disconnect,
    refreshModels,
    refreshQueue,
    refreshSystemStats,
    queuePrompt,
    interrupt,
    getHistory,
    updateServerUrl,
    serverUrl,
    on,
    off,
  };

  return (
    <ComfyUIContext.Provider value={value}>
      {children}
    </ComfyUIContext.Provider>
  );
}

export function useComfyUI(): ComfyUIContextValue {
  const context = useContext(ComfyUIContext);
  if (!context) {
    throw new Error('useComfyUI must be used within a ComfyUIProvider');
  }
  return context;
}

export default ComfyUIContext;
