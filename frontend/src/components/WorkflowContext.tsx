import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { Node, Edge, MarkerType } from '@xyflow/react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from 'sonner';
import { useAssets } from './AssetsContext';
import { WORKFLOW, API, API_URLS, STORAGE_KEYS, AI_MODELS } from '../config';

// Disable server sync to prevent "Failed to fetch" errors
// The app works entirely with local state
const ENABLE_SERVER_SYNC = false;

// Import initial images
import img1 from "figma:asset/2d7160601086bc4a3294287ad45cd52a2430ea18.png";
import img2 from "figma:asset/fc6bc9a065ba741c116a3c69872b5372e54c51ac.png";
import img3 from "figma:asset/65c0d73b733245479f5c5a2cdd6ff1ab4bd17846.png";
import img4 from "figma:asset/9af5ac1f50087a6f8a64eb8de01852907537f857.png";
import imgPreview from "figma:asset/05bd0e17ef904ff5fe2eb9ea076cc4e0db7973b9.png";

interface NodeState {
  prompt: string;
  isProcessing: boolean;
  isLoadingModel: boolean;
  loadingProgress: number;
  generationProgress: number;
  currentStep: string;
}

interface Workflow {
  id: string;
  name: string;
  nodes: Node[];
  edges: Edge[];
  selectedNodeId: string | null;
  images: Record<string, string>;
  processedImages: Record<string, string>;
  isProcessing: boolean;
  prompt: string;
  selectedModel: string;
  selectedQuantity: number;
  selectedAspectRatio: string;
  selectedQuality: string;
  guidanceScale: number;
  seed: number;
  facialSelections: Record<string, string>;
  enableStates: {
    facialFeatures: boolean;
    poseReference: boolean;
    clothing: boolean;
    cameraControl: boolean;
    imageStyle: boolean;
    visualDeconstruction: boolean;
  };
  viewport?: { x: number; y: number; zoom: number };
  nodeStates: Record<string, NodeState>;
}

interface WorkflowContextType {
  workflows: Workflow[];
  activeWorkflowId: string;
  setActiveWorkflowId: (id: string) => void;
  addWorkflow: () => void;
  importWorkflow: (nodes: Node[], edges: Edge[]) => void;
  removeWorkflow: (id: string) => void;
  updateWorkflow: (id: string, data: Partial<Workflow>) => void;
  
  // Helpers for active workflow
  images: Record<string, string>;
  setImage: (nodeId: string, imageUrl: string) => void;
  processedImages: Record<string, string>;
  setProcessedImage: (nodeId: string, imageUrl: string) => void;
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
  selectedNodeId: string | null;
  setSelectedNodeId: (nodeId: string | null) => void;
  nodes: Node[];
  setNodes: (nodes: Node[]) => void;
  addNode: (node: Node) => void;
  deleteNode: (nodeId: string) => void;
  edges: Edge[];
  setEdges: (edges: Edge[]) => void;
  addConnectedNode: (sourceNodeId: string, nodeType: 'imageInput' | 'imageEditor' | 'preview') => void;
  
  // Prompt related
  prompt: string;
  setPrompt: (prompt: string) => void;
  
  // Creation page settings
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  selectedQuantity: number;
  setSelectedQuantity: (quantity: number) => void;
  selectedAspectRatio: string;
  setSelectedAspectRatio: (ratio: string) => void;
  selectedQuality: string;
  setSelectedQuality: (quality: string) => void;
  guidanceScale: number;
  setGuidanceScale: (scale: number) => void;
  seed: number;
  setSeed: (seed: number) => void;
  facialSelections: Record<string, string>;
  setFacialSelections: (selections: Record<string, string>) => void;
  enableStates: {
    facialFeatures: boolean;
    poseReference: boolean;
    clothing: boolean;
    cameraControl: boolean;
    imageStyle: boolean;
    visualDeconstruction: boolean;
  };
  setEnableStates: (states: {
    facialFeatures: boolean;
    poseReference: boolean;
    clothing: boolean;
    cameraControl: boolean;
    imageStyle: boolean;
    visualDeconstruction: boolean;
  }) => void;
  
  // Viewport related
  viewport: { x: number; y: number; zoom: number };
  setViewport: (viewport: { x: number; y: number; zoom: number }) => void;
  
  // Node-level state management
  getNodeState: (nodeId: string) => NodeState;
  setNodeState: (nodeId: string, state: Partial<NodeState>) => void;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'imageInput',
    position: { x: 66, y: 764 },
    data: { label: 'Image input', image: img1 },
  },
  {
    id: '2',
    type: 'imageInput',
    position: { x: 399, y: 104 },
    data: { label: 'Image input', image: img2 },
  },
  {
    id: '3',
    type: 'imageInput',
    position: { x: 399, y: 614 },
    data: { label: 'Image input', image: img3 },
  },
  {
    id: '4',
    type: 'imageInput',
    position: { x: 399, y: 909 },
    data: { label: 'Image input', image: img4 },
  },
  {
    id: '5',
    type: 'imageEditor',
    position: { x: 777, y: 525 },
    data: { label: 'Image Editor', preset: 'Nano Banana', mode: '内容组合', steps: 4 },
  },
  {
    id: '6',
    type: 'preview',
    position: { x: 1289, y: 241 },
    data: { label: 'Preview', image: imgPreview },
  },
  {
    id: 'text-empty',
    type: 'textInput',
    position: { x: 66, y: 1100 },
    data: { text: '' },
  },
  {
    id: 'text-filled',
    type: 'textInput',
    position: { x: 399, y: 1100 },
    data: { text: 'The image shows a person sitting on a chair with their hands clasped together. The individual is dressed in a black suit, and their hair is long and dark. The background consists of a white curtain, which creates a soft, diffused light effect. The person appears to be in a contemplative or relaxed pose, with their head slightly bowed. The image has a minimalist and professional aesthetic, with a focus on the subject and the subtle lighting.' },
  },
];

const initialEdges: Edge[] = [
  { 
    id: 'e1-5', 
    source: '1', 
    target: '5', 
    targetHandle: 'img1', 
    type: 'deletable', 
    animated: true,
  },
  { 
    id: 'e2-5', 
    source: '2', 
    target: '5', 
    targetHandle: 'img2', 
    type: 'deletable', 
    animated: true,
  },
  { 
    id: 'e3-5', 
    source: '3', 
    target: '5', 
    targetHandle: 'img3', 
    type: 'deletable', 
    animated: true,
  },
  { 
    id: 'e4-5', 
    source: '4', 
    target: '5', 
    targetHandle: 'img4', 
    type: 'deletable', 
    animated: true,
  },
  { 
    id: 'e-text-5', 
    source: 'text-filled', 
    target: '5', 
    targetHandle: 'prompt-input', 
    type: 'deletable', 
    animated: true,
  },
  { 
    id: 'e5-6', 
    source: '5', 
    target: '6', 
    type: 'deletable', 
    animated: true,
  },
];

const defaultWorkflow: Workflow = {
  id: WORKFLOW.DEFAULT_ID,
  name: WORKFLOW.DEFAULT_NAME,
  nodes: initialNodes,
  edges: initialEdges,
  selectedNodeId: null,
  images: {},
  processedImages: {},
  isProcessing: false,
  prompt: '',
  selectedModel: AI_MODELS.DEFAULT_MODEL,
  selectedQuantity: 2,
  selectedAspectRatio: '1:1',
  selectedQuality: '2K',
  guidanceScale: 7,
  seed: 0,
  facialSelections: {
    gender: 'Woman',
    age: 'Young Adult',
    body_weight: 'None',
    face_shape: 'None',
    skin_details: 'None',
    skin_texture: 'None',
    hairstyle: 'None',
    hair_color: 'None',
  },
  enableStates: {
    facialFeatures: true,
    poseReference: false,
    clothing: true,
    cameraControl: true,
    imageStyle: false,
    visualDeconstruction: true,
  },
  viewport: { x: 0, y: 0, zoom: 1 },
  nodeStates: {},
};

const defaultNodeState: NodeState = {
  prompt: '',
  isProcessing: false,
  isLoadingModel: false,
  loadingProgress: 0,
  generationProgress: 0,
  currentStep: '',
};

const loadFromStorage = (): { workflows: Workflow[]; activeWorkflowId: string } | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.WORKFLOW_DATA);
    if (stored) {
      const parsed = JSON.parse(stored);
      const loadedWorkflows = parsed.workflows || [defaultWorkflow];
      const migratedWorkflows = loadedWorkflows.map((w: Workflow) => ({
        ...w,
        nodeStates: w.nodeStates || {},
        selectedModel: w.selectedModel || AI_MODELS.DEFAULT_MODEL,
        selectedQuantity: w.selectedQuantity || 2,
        selectedAspectRatio: w.selectedAspectRatio || '1:1',
        selectedQuality: w.selectedQuality || '2K',
        guidanceScale: w.guidanceScale || 7,
        seed: w.seed || 0,
        facialSelections: w.facialSelections || {
          gender: 'Woman',
          age: 'Young Adult',
          body_weight: 'None',
          face_shape: 'None',
          skin_details: 'None',
          skin_texture: 'None',
          hairstyle: 'None',
          hair_color: 'None',
        },
        enableStates: w.enableStates || {
          facialFeatures: true,
          poseReference: false,
          clothing: true,
          cameraControl: true,
          imageStyle: false,
          visualDeconstruction: true,
        },
      }));
      return {
        workflows: migratedWorkflows,
        activeWorkflowId: parsed.activeWorkflowId || WORKFLOW.DEFAULT_ID
      };
    }
  } catch (error) {
    console.error('Error loading from localStorage:', error);
  }
  return null;
};

const saveToStorage = (data: { workflows: Workflow[]; activeWorkflowId: string }) => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEYS.WORKFLOW_DATA, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export function WorkflowProvider({ children }: { children: ReactNode }) {
  // Load initial state from localStorage or use default
  const initialState = loadFromStorage();
  const [workflows, setWorkflows] = useState<Workflow[]>(initialState?.workflows || [defaultWorkflow]);
  const [activeWorkflowId, setActiveWorkflowId] = useState<string>(initialState?.activeWorkflowId || WORKFLOW.DEFAULT_ID);
  const [isLoaded, setIsLoaded] = useState(false);

  // Save to localStorage with debounce to reduce frequency
  useEffect(() => {
    if (isLoaded) {
      const saveTimeout = setTimeout(() => {
        saveToStorage({ workflows, activeWorkflowId });
      }, API.DEBOUNCE_DELAY);

      return () => clearTimeout(saveTimeout);
    }
  }, [workflows, activeWorkflowId, isLoaded]);

  // Load workflows on mount
  useEffect(() => {
    const loadWorkflows = async () => {
      // Server sync is disabled - use local state only
      if (!ENABLE_SERVER_SYNC) {
        setIsLoaded(true);
        return;
      }

      // Skip loading if projectId or publicAnonKey is not available
      if (!projectId || !publicAnonKey) {
        console.warn("Supabase credentials not configured, using default workflow");
        setIsLoaded(true);
        return;
      }

      try {
        // Add timeout to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), API.REQUEST_TIMEOUT);

        const response = await fetch(API_URLS.SUPABASE_FUNCTIONS(projectId), {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          },
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          if (data.workflows && Array.isArray(data.workflows) && data.workflows.length > 0) {
            setWorkflows(data.workflows);
            
            // Restore active workflow ID if it exists and is valid
            if (data.activeWorkflowId && data.workflows.some((w: Workflow) => w.id === data.activeWorkflowId)) {
              setActiveWorkflowId(data.activeWorkflowId);
            } else if (!data.workflows.some((w: Workflow) => w.id === activeWorkflowId)) {
               // Fallback if current activeWorkflowId is invalid
               setActiveWorkflowId(data.workflows[0].id);
            }
          }
        }
      } catch (error: any) {
        // Completely suppress fetch errors - they're expected if server isn't running
        // The app works fine with local state
      } finally {
        setIsLoaded(true);
      }
    };
    loadWorkflows();
  }, []);

  // Save workflows when they change
  useEffect(() => {
    if (!isLoaded) return;
    if (!ENABLE_SERVER_SYNC) return; // Server sync disabled
    if (!projectId || !publicAnonKey) return; // Skip if credentials not available

    const saveTimeout = setTimeout(async () => {
      try {
        await fetch(API_URLS.SUPABASE_FUNCTIONS(projectId), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({ workflows, activeWorkflowId })
        });
      } catch (error) {
      }
    }, WORKFLOW.SAVE_DEBOUNCE);

    return () => clearTimeout(saveTimeout);
  }, [workflows, activeWorkflowId, isLoaded]);

  const activeWorkflow = workflows.find(w => w.id === activeWorkflowId) || workflows[0];

  const updateActiveWorkflow = useCallback((data: Partial<Workflow> | ((prev: Workflow) => Partial<Workflow>)) => {
    setWorkflows(prev => prev.map(w => 
      w.id === activeWorkflowId ? {
        ...w,
        ...(typeof data === 'function' ? data(w) : data)
      } : w
    ));
  }, [activeWorkflowId]);

  const updateWorkflow = useCallback((id: string, data: Partial<Workflow>) => {
    setWorkflows(prev => prev.map(w => 
      w.id === id ? { ...w, ...data } : w
    ));
  }, []);

  const addWorkflow = useCallback(() => {
    const newId = `workflow-${Date.now()}`;
    const newWorkflow: Workflow = {
      id: newId,
      name: `工作流 ${workflows.length + 1}`,
      nodes: [],
      edges: [],
      selectedNodeId: null,
      images: {},
      processedImages: {},
      isProcessing: false,
      prompt: '',
      selectedModel: AI_MODELS.DEFAULT_MODEL,
      selectedQuantity: 2,
      selectedAspectRatio: '1:1',
      selectedQuality: '2K',
      guidanceScale: 7,
      seed: 0,
      facialSelections: {
        gender: 'Woman',
        age: 'Young Adult',
        body_weight: 'None',
        face_shape: 'None',
        skin_details: 'None',
        skin_texture: 'None',
        hairstyle: 'None',
        hair_color: 'None',
      },
      enableStates: {
        facialFeatures: true,
        poseReference: false,
        clothing: true,
        cameraControl: true,
        imageStyle: false,
        visualDeconstruction: true,
      },
      viewport: { x: 0, y: 0, zoom: 1 },
      nodeStates: {},
    };
    setWorkflows(prev => [...prev, newWorkflow]);
    setActiveWorkflowId(newId);
  }, [workflows.length]);

  const importWorkflow = useCallback((nodes: Node[], edges: Edge[]) => {
    const newId = `workflow-${Date.now()}`;
    const newWorkflow: Workflow = {
      id: newId,
      name: `导入工作流 ${workflows.length + 1}`,
      nodes,
      edges,
      selectedNodeId: null,
      images: {},
      processedImages: {},
      isProcessing: false,
      prompt: '',
      selectedModel: AI_MODELS.DEFAULT_MODEL,
      selectedQuantity: 2,
      selectedAspectRatio: '1:1',
      selectedQuality: '2K',
      guidanceScale: 7,
      seed: 0,
      facialSelections: {
        gender: 'Woman',
        age: 'Young Adult',
        body_weight: 'None',
        face_shape: 'None',
        skin_details: 'None',
        skin_texture: 'None',
        hairstyle: 'None',
        hair_color: 'None',
      },
      enableStates: {
        facialFeatures: true,
        poseReference: false,
        clothing: true,
        cameraControl: true,
        imageStyle: false,
        visualDeconstruction: true,
      },
      viewport: { x: 0, y: 0, zoom: 1 },
      nodeStates: {},
    };
    setWorkflows(prev => [...prev, newWorkflow]);
    setActiveWorkflowId(newId);
  }, [workflows.length]);

  const removeWorkflow = useCallback((id: string) => {
    if (workflows.length <= 1) return; // Prevent deleting last workflow
    
    setWorkflows(prev => {
      const filtered = prev.filter(w => w.id !== id);
      return filtered;
    });
    
    if (activeWorkflowId === id) {
      setActiveWorkflowId(workflows.find(w => w.id !== id)?.id || workflows[0].id);
    }
  }, [activeWorkflowId, workflows]);

  // Adapters for existing components
  const setImage = useCallback((nodeId: string, imageUrl: string) => {
    updateActiveWorkflow({ 
      images: { ...activeWorkflow.images, [nodeId]: imageUrl } 
    });
  }, [activeWorkflow.images, updateActiveWorkflow]);

  const setProcessedImage = useCallback((nodeId: string, imageUrl: string) => {
    updateActiveWorkflow({ 
      processedImages: { ...activeWorkflow.processedImages, [nodeId]: imageUrl } 
    });
  }, [activeWorkflow.processedImages, updateActiveWorkflow]);

  const setIsProcessing = useCallback((processing: boolean) => {
    updateActiveWorkflow({ isProcessing: processing });
  }, [updateActiveWorkflow]);

  const setSelectedNodeId = useCallback((nodeId: string | null) => {
    updateActiveWorkflow({ selectedNodeId: nodeId });
  }, [updateActiveWorkflow]);

  const setNodes = useCallback((nodes: Node[] | ((prevNodes: Node[]) => Node[])) => {
    if (typeof nodes === 'function') {
      updateActiveWorkflow((prev) => ({ 
        nodes: nodes(prev.nodes) 
      }));
    } else {
      updateActiveWorkflow({ nodes });
    }
  }, [updateActiveWorkflow]);

  const setPrompt = useCallback((prompt: string) => {
    updateActiveWorkflow({ prompt });
  }, [updateActiveWorkflow]);

  const setViewport = useCallback((viewport: { x: number; y: number; zoom: number }) => {
    updateActiveWorkflow({ viewport });
  }, [updateActiveWorkflow]);

  const addNode = useCallback((node: Node) => {
    updateActiveWorkflow({ nodes: [...activeWorkflow.nodes, node] });
  }, [activeWorkflow.nodes, updateActiveWorkflow]);

  const deleteNode = useCallback((nodeId: string) => {
    // Remove the node and all edges connected to it
    const filteredNodes = activeWorkflow.nodes.filter(n => n.id !== nodeId);
    const filteredEdges = activeWorkflow.edges.filter(e => 
      e.source !== nodeId && e.target !== nodeId
    );
    
    updateActiveWorkflow({ 
      nodes: filteredNodes,
      edges: filteredEdges,
      selectedNodeId: activeWorkflow.selectedNodeId === nodeId ? null : activeWorkflow.selectedNodeId
    });
  }, [activeWorkflow.nodes, activeWorkflow.edges, activeWorkflow.selectedNodeId, updateActiveWorkflow]);

  const setEdges = useCallback((edges: Edge[] | ((prevEdges: Edge[]) => Edge[])) => {
    if (typeof edges === 'function') {
      updateActiveWorkflow((prev) => ({ 
        edges: edges(prev.edges) 
      }));
    } else {
      updateActiveWorkflow({ edges });
    }
  }, [updateActiveWorkflow]);

  // Creation page settings setters
  const setSelectedModel = useCallback((model: string) => {
    updateActiveWorkflow({ selectedModel: model });
  }, [updateActiveWorkflow]);

  const setSelectedQuantity = useCallback((quantity: number) => {
    updateActiveWorkflow({ selectedQuantity: quantity });
  }, [updateActiveWorkflow]);

  const setSelectedAspectRatio = useCallback((ratio: string) => {
    updateActiveWorkflow({ selectedAspectRatio: ratio });
  }, [updateActiveWorkflow]);

  const setSelectedQuality = useCallback((quality: string) => {
    updateActiveWorkflow({ selectedQuality: quality });
  }, [updateActiveWorkflow]);

  const setGuidanceScale = useCallback((scale: number) => {
    updateActiveWorkflow({ guidanceScale: scale });
  }, [updateActiveWorkflow]);

  const setSeed = useCallback((seed: number) => {
    updateActiveWorkflow({ seed: seed });
  }, [updateActiveWorkflow]);

  const setFacialSelections = useCallback((selections: Record<string, string>) => {
    updateActiveWorkflow({ facialSelections: selections });
  }, [updateActiveWorkflow]);

  const setEnableStates = useCallback((states: {
    facialFeatures: boolean;
    poseReference: boolean;
    clothing: boolean;
    cameraControl: boolean;
    imageStyle: boolean;
    visualDeconstruction: boolean;
  }) => {
    updateActiveWorkflow({ enableStates: states });
  }, [updateActiveWorkflow]);

  const addConnectedNode = useCallback((sourceNodeId: string, nodeType: 'imageInput' | 'imageEditor' | 'preview') => {
    const sourceNode = activeWorkflow.nodes.find(n => n.id === sourceNodeId);
    if (!sourceNode) return;

    const newNodeId = `node-${Date.now()}`;
    const baseX = sourceNode.position.x || 0;
    const baseY = sourceNode.position.y || 0;

    let nodeData: any = {};
    if (nodeType === 'imageInput') {
      nodeData = { label: 'Image input' };
    } else if (nodeType === 'imageEditor') {
      nodeData = { label: 'Image Editor', preset: 'imagen-3', mode: '内容组合', steps: 4 };
    } else if (nodeType === 'preview') {
      nodeData = { label: 'Preview' };
    }

    const newNode: Node = {
      id: newNodeId,
      type: nodeType,
      position: { 
        x: baseX + 400, 
        y: baseY 
      },
      data: nodeData,
    };

    const edgeParams: any = {
      id: `e${sourceNodeId}-${newNodeId}`,
      source: sourceNodeId,
      target: newNodeId,
      animated: true,
      type: 'deletable'
    };

    if (nodeType === 'imageEditor') {
      edgeParams.targetHandle = 'img1';
    }

    updateActiveWorkflow({
      nodes: [...activeWorkflow.nodes, newNode],
      edges: [...activeWorkflow.edges, edgeParams]
    });
  }, [activeWorkflow.nodes, activeWorkflow.edges, updateActiveWorkflow]);

  const getNodeState = useCallback((nodeId: string): NodeState => {
    const workflow = workflows.find(w => w.id === activeWorkflowId);
    return workflow?.nodeStates?.[nodeId] || defaultNodeState;
  }, [workflows, activeWorkflowId]);

  const setNodeState = useCallback((nodeId: string, state: Partial<NodeState>) => {
    setWorkflows(prev => prev.map(w => 
      w.id === activeWorkflowId ? {
        ...w,
        nodeStates: {
          ...w.nodeStates,
          [nodeId]: {
            ...defaultNodeState,
            ...w.nodeStates[nodeId],
            ...state
          }
        }
      } : w
    ));
  }, [activeWorkflowId]);

  return (
    <WorkflowContext.Provider
      value={{
        workflows,
        activeWorkflowId,
        setActiveWorkflowId,
        addWorkflow,
        importWorkflow,
        removeWorkflow,
        updateWorkflow,
        
        images: activeWorkflow.images,
        setImage,
        processedImages: activeWorkflow.processedImages,
        setProcessedImage,
        isProcessing: activeWorkflow.isProcessing,
        setIsProcessing,
        selectedNodeId: activeWorkflow.selectedNodeId,
        setSelectedNodeId,
        nodes: activeWorkflow.nodes,
        setNodes,
        addNode,
        deleteNode,
        edges: activeWorkflow.edges,
        setEdges,
        addConnectedNode,
        prompt: activeWorkflow.prompt,
        setPrompt,
        
        // Creation page settings
        selectedModel: activeWorkflow.selectedModel,
        setSelectedModel,
        selectedQuantity: activeWorkflow.selectedQuantity,
        setSelectedQuantity,
        selectedAspectRatio: activeWorkflow.selectedAspectRatio,
        setSelectedAspectRatio,
        selectedQuality: activeWorkflow.selectedQuality,
        setSelectedQuality,
        guidanceScale: activeWorkflow.guidanceScale,
        setGuidanceScale,
        seed: activeWorkflow.seed,
        setSeed,
        facialSelections: activeWorkflow.facialSelections,
        setFacialSelections,
        enableStates: activeWorkflow.enableStates,
        setEnableStates,
        
        viewport: activeWorkflow.viewport || { x: 0, y: 0, zoom: 1 },
        setViewport,
        getNodeState,
        setNodeState,
      }}
    >
      {children}
    </WorkflowContext.Provider>
  );
}

export function useWorkflow() {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error('useWorkflow must be used within WorkflowProvider');
  }
  return context;
}