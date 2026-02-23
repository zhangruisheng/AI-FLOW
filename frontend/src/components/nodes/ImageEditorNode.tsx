import {
  Handle,
  Position,
  NodeProps,
  useStore,
  useReactFlow,
  useNodeConnections,
  useNodesData,
  NodeResizer,
} from "@xyflow/react";
import { useState, useRef, useEffect, useMemo } from "react";
import { useWorkflow } from "../WorkflowContext";
import { useComfyUI } from "../ComfyUIContext";
import { toast } from "sonner";
import NodeToolbar from "./NodeToolbar";
import { useAssets } from "../AssetsContext";
import ImageEditorInput from "./ImageEditorInput";
import { buildComfyUIWorkflow, buildZImageWorkflowFromConfig, isLocalModel, ZIMAGE_MODEL_CONFIG } from "../../lib/workflowBuilder";
import { PlayButton } from "../icons";
import Icon from "../icons";
import { useLanguage } from "../LanguageContext";

interface InputItem {
  id: string;
  label: string;
  type:
    | "preset"
    | "mode"
    | "image"
    | "model"
    | "number"
    | "aspectRatio"
    | "quality"
    | "text"
    | "sequential"
    | "guidance"
    | "seed";
  value?: string | number;
}

const getDefaultInputs = (t: (key: string) => string): InputItem[] => [
  {
    id: "model",
    label: "Doubao Seedream 4.5",
    type: "model",
    value: "doubao-seedream-4-5-251128",
  },
  { id: "mode", label: t('no_preset_added'), type: "mode" },
  { id: "img1", label: `${t('image_n')}1`, type: "image" },
  { id: "quantity", label: t('quantity'), type: "number", value: 1 },
  {
    id: "aspectRatio",
    label: t('size'),
    type: "aspectRatio",
    value: "9:16",
  },
  {
    id: "quality",
    label: t('clarity'),
    type: "quality",
    value: "2K",
  },
  {
    id: "sequential",
    label: t('sequential_mode'),
    type: "sequential",
    value: "disabled",
  },
  {
    id: "guidance",
    label: t('prompt_consistency'),
    type: "guidance",
    value: 7,
  },
  {
    id: "seed",
    label: t('random_seed'),
    type: "seed",
    value: 0,
  },
];

const getPresetOptions = (t: (key: string) => string): string[] => [
  t('preset_image_reverse'),
  t('preset_switch_view'),
  t('preset_arch_to_model'),
  t('preset_combine_objects'),
  t('preset_hd_enhance'),
  t('preset_to_lineart'),
  t('preset_color_with_palette'),
  t('preset_character_set'),
  t('preset_virtual_real'),
  t('preset_anime_to_real'),
  t('preset_pose_ref'),
  t('preset_to_figure'),
  t('preset_to_funko'),
  t('preset_to_lego'),
  t('preset_to_barbie'),
  t('preset_to_gundam'),
  t('preset_cyber_baby'),
  t('preset_product_render'),
  t('preset_pro_photo'),
  t('preset_light_ref'),
  t('preset_paint_process'),
  t('preset_style_to_real'),
  t('preset_to_pendant'),
  t('preset_effect_stack'),
  t('preset_product_pack'),
  t('preset_virtual_makeup'),
  t('preset_expression_ref'),
];

function parseAspectRatio(aspectRatio: string): { width: number; height: number } {
  const defaultSize = { width: 1024, height: 1024 };
  if (!aspectRatio) return defaultSize;
  
  const parts = aspectRatio.split(':');
  if (parts.length !== 2) return defaultSize;
  
  const w = parseInt(parts[0], 10);
  const h = parseInt(parts[1], 10);
  
  if (isNaN(w) || isNaN(h)) return defaultSize;
  
  const totalPixels = 1024 * 1024;
  const ratio = w / h;
  const height = Math.round(Math.sqrt(totalPixels / ratio));
  const width = Math.round(height * ratio);
  
  return { width: Math.round(width / 8) * 8, height: Math.round(height / 8) * 8 };
}

function parseQuality(quality: string): number {
  const qualitySteps: Record<string, number> = {
    '512': 15,
    '1K': 20,
    '2K': 25,
    '4K': 30
  };
  return qualitySteps[quality] || 20;
}

export default function ImageEditorNode({
  data,
  id,
  selected,
}: NodeProps) {
  const { t } = useLanguage();
  const defaultInputs = useMemo(() => getDefaultInputs(t), [t]);
  const PRESET_OPTIONS = useMemo(() => getPresetOptions(t), [t]);
  const { updateNodeData } = useReactFlow();
  
  const [inputs, setInputs] = useState<InputItem[]>(() => {
    if (data.inputs && Array.isArray(data.inputs)) {
      const savedInputs = data.inputs as InputItem[];
      const result: InputItem[] = [];
      
      const modelInput = savedInputs.find(i => i.type === "model") || defaultInputs.find(i => i.type === "model")!;
      result.push(modelInput);
      
      const modeInput = savedInputs.find(i => i.type === "mode") || defaultInputs.find(i => i.type === "mode")!;
      result.push(modeInput);
      
      const imageInputs = savedInputs.filter(i => i.type === "image");
      if (imageInputs.length > 0) {
        result.push(...imageInputs.map(i => ({...i, id: i.id || `img-${Date.now()}-${Math.random()}`})));
      }
      
      const quantityInput = savedInputs.find(i => i.type === "number") || defaultInputs.find(i => i.type === "number")!;
      result.push(quantityInput);
      
      const aspectRatioInput = savedInputs.find(i => i.type === "aspectRatio") || defaultInputs.find(i => i.type === "aspectRatio")!;
      result.push(aspectRatioInput);
      
      const qualityInput = savedInputs.find(i => i.type === "quality") || defaultInputs.find(i => i.type === "quality")!;
      result.push(qualityInput);
      
      const sequentialInput = savedInputs.find(i => i.type === "sequential") || defaultInputs.find(i => i.type === "sequential")!;
      result.push(sequentialInput);
      
      const guidanceInput = savedInputs.find(i => i.type === "guidance") || defaultInputs.find(i => i.type === "guidance")!;
      result.push(guidanceInput);
      
      const seedInput = savedInputs.find(i => i.type === "seed") || defaultInputs.find(i => i.type === "seed")!;
      result.push(seedInput);
      
      return result;
    }
    return defaultInputs;
  });

  const workflowContext = useWorkflow();
  const { setProcessedImage, images, processedImages, nodes, getNodeState, setNodeState } = workflowContext;
  const { addAsset } = useAssets();
  const { getNode } = useReactFlow();
  const [showAddMenu, setShowAddMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isConnected, connect, queuePrompt, getHistory, models, on, off } = useComfyUI();
  
  const nodeState = getNodeState(id);
  const prompt = nodeState.prompt;
  const isLoadingModel = nodeState.isLoadingModel;
  const loadingProgress = nodeState.loadingProgress;
  const generationProgress = nodeState.generationProgress;
  const currentStep = nodeState.currentStep;
  const isNodeProcessing = nodeState.isProcessing;

  const connections = useNodeConnections({
    handleType: "target",
    handleId: "text-input",
  });

  const nodeData = useNodesData(connections?.[0]?.source);
  const connectedText =
    (nodeData?.data?.label as string) ||
    (nodeData?.data?.text as string) ||
    "";

  const edges = useStore((state: any) => state.edges);
  const [activePopup, setActivePopup] = useState<string | null>(null);

  useEffect(() => {
    updateNodeData(id, { inputs });
  }, [inputs, id, updateNodeData]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setShowAddMenu(false);
      }
      if ((event.target as Element).closest(".popup-container") === null) {
          setActivePopup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
  }, []);

  const isHandleConnected = (
    handleId: string | null,
    type: "source" | "target",
  ) => {
    return edges.some((e: any) => {
      if (type === "target") {
        return e.target === id && e.targetHandle === handleId;
      } else {
        return e.source === id;
      }
    });
  };

  const handleAddInput = () => {
    const newInputId = `img-${Date.now()}`;
    const newInput: InputItem = {
      id: newInputId,
      label: `${t('image_n')}${inputs.filter((i) => i.type === "image").length + 1}`,
      type: "image",
    };
    
    const lastImageIndex = inputs.findLastIndex(i => i.type === "image");
    const insertIndex = lastImageIndex === -1 ? 2 : lastImageIndex + 1;
    
    const newInputs = [...inputs];
    newInputs.splice(insertIndex, 0, newInput);
    setInputs(newInputs);
    setShowAddMenu(false);
  };

  const handleDeleteInput = (inputId: string) => {
    const imageInputs = inputs.filter((i) => i.type === "image");
    if (imageInputs.length <= 1) {
      toast.error(t('at_least_one_image'));
      return;
    }
    setInputs(inputs.filter((i) => i.id !== inputId));
  };

  const handleModelSelect = (inputId: string, modelId: string, modelLabel: string) => {
    setInputs(inputs.map(i => i.id === inputId ? { ...i, label: modelLabel.split(" (")[0], value: modelId } : i));
    setActivePopup(null);
  };

  const handlePresetSelect = (inputId: string, newValue: string) => {
    setInputs(inputs.map(i => i.id === inputId ? { ...i, label: newValue } : i));
    
    const promptText = ImageEditorService.getPresetPrompt(newValue);
    if (promptText) {
      setNodeState(id, { prompt: promptText });
      toast.success(`${t('preset_applied')}: ${newValue}`);
    }
    setActivePopup(null);
  };
  
  const handleNumberChange = (inputId: string, delta: number) => {
    setInputs(inputs.map(i => {
        if (i.id === inputId) {
            const val = Number(i.value) || 1;
            return { ...i, value: Math.max(1, Math.min(10, val + delta)) };
        }
        return i;
    }));
  };

  const handleRun = async () => {
    console.log('handleRun called', { id, isNodeProcessing, prompt, connectedText });
    try {
      if (isNodeProcessing) {
        console.log('Already processing, returning');
        return;
      }
      
      setNodeState(id, { isProcessing: true, isLoadingModel: true, loadingProgress: 0, generationProgress: 0, currentStep: t('connecting_server') || 'Connecting to server...' });
      
      const modelInput = inputs.find(i => i.type === "model");
      const quantityInput = inputs.find(i => i.type === "number");
      const aspectRatioInput = inputs.find(i => i.type === "aspectRatio");
      const qualityInput = inputs.find(i => i.type === "quality");
      const guidanceInput = inputs.find(i => i.type === "guidance");
      const seedInput = inputs.find(i => i.type === "seed");
      
      const currentPrompt = isHandleConnected("text-input", "target") ? connectedText : prompt;
      console.log('currentPrompt:', currentPrompt, 'isHandleConnected:', isHandleConnected("text-input", "target"));
      
      if (!currentPrompt) {
        toast.error(t('enter_prompt_or_connect'));
        setNodeState(id, { isProcessing: false, isLoadingModel: false });
        return;
      }

      const modelId = modelInput?.value as string || '';
      const isZImageModel = isLocalModel(modelId);

      let workflow;
      
      if (isZImageModel) {
        setNodeState(id, { currentStep: t('loading_model') || 'Loading Z-Image model...', loadingProgress: 10 });
        
        const { width, height } = parseAspectRatio(aspectRatioInput?.value as string || '1:1');
        const steps = parseQuality(qualityInput?.value as string || '2K');
        const cfg = (guidanceInput?.value as number) || 7;
        const seed = (seedInput?.value as number) || Math.floor(Math.random() * 1000000);
        
        const imageInputs = inputs.filter(i => i.type === "image");
        const imageUrls: string[] = [];
        
        for (const imgInput of imageInputs) {
          const imgData = images[imgInput.id];
          if (imgData) {
            imageUrls.push(imgData);
          }
        }

        const modelConfig = ZIMAGE_MODEL_CONFIG[modelId] || ZIMAGE_MODEL_CONFIG['z-image'];
        
        const loraInput = inputs.find(i => i.type === "lora");
        const loraName = loraInput?.value as string | undefined;
        const loraStrength = (loraInput?.strength as number) || 1.0;
        
        workflow = buildZImageWorkflowFromConfig({
          checkpointName: modelId,
          vaeName: modelConfig.vae,
          clipName: modelConfig.clip,
          width,
          height,
          steps,
          cfg,
          seed,
          prompt: currentPrompt,
          negativePrompt: '',
          images: imageUrls,
          loraName,
          loraStrength,
        });
        
        setNodeState(id, { loadingProgress: 30 });
      } else {
        const { workflow: builtWorkflow, validation } = buildComfyUIWorkflow(nodes, edges);
        
        if (!validation.isValid) {
          toast.error(validation.errors.join('\n'));
          setNodeState(id, { isProcessing: false, isLoadingModel: false });
          return;
        }
        workflow = builtWorkflow;
      }

      if (!isConnected) {
        await connect();
      }
      
      setNodeState(id, { loadingProgress: 50, currentStep: t('submitting_workflow') || 'Submitting workflow...' });

      const promptId = await queuePrompt(workflow);
      
      setNodeState(id, { isLoadingModel: false, generationProgress: 0, currentStep: t('generating') || 'Generating...' });
      
      const handleProgress = (message: any) => {
        if (message.type === 'progress') {
          const progress = (message.current / message.total) * 100;
          setNodeState(id, { generationProgress: progress, currentStep: `${t('generating') || 'Generating'} ${message.current}/${message.total}` });
        } else if (message.type === 'executing') {
          setNodeState(id, { currentStep: `${t('executing_node') || 'Executing'}: ${message.node}` });
        }
      };
      
      on('progress', handleProgress);
      on('executing', handleProgress);
      
      const checkResult = async () => {
        try {
          const history = await getHistory(promptId);
          const promptHistory = history[promptId];
          
          if (promptHistory && promptHistory.outputs) {
            for (const [nodeId, output] of Object.entries(promptHistory.outputs)) {
              if (output.images && output.images.length > 0) {
                const imageData = output.images[0];
                let imageUrl: string;
                
                if (typeof imageData === 'string') {
                  imageUrl = imageData;
                } else if (imageData.filename) {
                  const baseUrl = 'http://localhost:8188';
                  imageUrl = `${baseUrl}/view?filename=${imageData.filename}&type=${imageData.type || 'output'}&subfolder=${imageData.subfolder || ''}`;
                } else {
                  imageUrl = imageData as unknown as string;
                }
                
                setProcessedImage(id, imageUrl);
                
                try {
                  const modelName = modelInput?.label || "ComfyUI";
                  const assetTitle = `${t('generation_result')} - ${new Date().toLocaleString()}`;
                  const { width, height } = parseAspectRatio(aspectRatioInput?.value as string || '1:1');
                  
                  addAsset({
                    type: 'image',
                    title: assetTitle,
                    tags: [
                      aspectRatioInput?.value as string || "Unknown Ratio",
                      qualityInput?.value as string || "Unknown Quality",
                      modelName
                    ],
                    prompt: currentPrompt || t('no_prompt'),
                    images: [imageUrl],
                    isFavorite: false,
                    generationParams: {
                      model: modelInput?.value as string,
                      modelLabel: modelName,
                      aspectRatio: aspectRatioInput?.value as string,
                      resolution: { width, height },
                      quality: qualityInput?.value as string,
                      steps: parseQuality(qualityInput?.value as string || '2K'),
                      cfg: (guidanceInput?.value as number) || 7,
                      seed: (seedInput?.value as number) || Math.floor(Math.random() * 1000000),
                      sequential: inputs.find(i => i.type === "sequential")?.value as string
                    }
                  });
                } catch (error) {
                  console.error("Failed to save image to assets:", error);
                }
                
                off('progress', handleProgress);
                off('executing', handleProgress);
                
                setNodeState(id, { generationProgress: 100, currentStep: t('complete') || 'Complete!', isProcessing: false });
                toast.success(t('generation_complete_saved'));
                setTimeout(() => {
                  setNodeState(id, { generationProgress: 0, currentStep: '' });
                }, 2000);
                return;
              }
            }
          }
          
          setNodeState(id, { generationProgress: Math.min(generationProgress + 5, 90) });
          setTimeout(checkResult, 1000);
        } catch (error) {
          console.error("Error getting history:", error);
          off('progress', handleProgress);
          off('executing', handleProgress);
          toast.error(t('generation_failed'));
          setNodeState(id, { isProcessing: false, isLoadingModel: false, generationProgress: 0, currentStep: '' });
        }
      };
      
      setTimeout(checkResult, 2000);
      
    } catch (error: any) {
      console.error("Generation error:", error);
      const errorMessage = error?.message || t('generation_failed');
      toast.error(errorMessage);
      setNodeState(id, { isProcessing: false, isLoadingModel: false, generationProgress: 0, currentStep: '' });
    }
  };

  return (
    <>
      <NodeResizer
        color="transparent"
        handleClassName="opacity-0 hover:opacity-100 transition-opacity"
        handleStyle={{ width: 8, height: 8, borderRadius: 2, border: "1px solid var(--primary)", backgroundColor: "var(--background)" }}
        lineStyle={{ borderWidth: 1, borderColor: "var(--primary)", opacity: 0.5 }}
        isVisible={selected}
        minWidth={214}
        minHeight={320}
      />
      {selected && (
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 z-50">
          <NodeToolbar nodeId={id} />
        </div>
      )}

      <div className="bg-card flex flex-col gap-2 items-start p-1 relative rounded-[var(--radius)] group min-h-full h-full">
        <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
        
        {/* Top Section - Fixed height items */}
        <div className="flex flex-col gap-1 items-start relative shrink-0 w-full">
            
            {/* Model Input */}
            {inputs.filter(i => i.type === "model").map(item => (
                <ImageEditorInput
                    key={item.id}
                    item={item}
                    activePopup={activePopup}
                    setActivePopup={setActivePopup}
                    inputs={inputs}
                    setInputs={setInputs}
                    onModelSelect={handleModelSelect}
                    onPresetSelect={handlePresetSelect}
                    onNumberChange={handleNumberChange}
                    onDeleteInput={handleDeleteInput}
                    PRESET_OPTIONS={PRESET_OPTIONS}
                />
            ))}

            {/* LoRA Selector - Only show for local models */}
            {isLocalModel(inputs.find(i => i.type === "model")?.value as string || '') && models.loras && models.loras.length > 0 && (
              <div className="w-full">
                <div 
                  className="bg-secondary h-[32px] relative rounded-[var(--radius-sm)] shrink-0 w-full cursor-pointer hover:bg-muted transition-colors px-[10px] py-[4px]"
                  onClick={() => setActivePopup(activePopup === 'lora' ? null : 'lora')}
                >
                  <div className="flex items-center justify-between h-full gap-[6px]">
                    <div className="flex items-center gap-[6px]">
                      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative shrink-0 size-[16px]" data-name="Icon">
                        <svg className="block size-[9px]" viewBox="0 0 9 3" fill="none">
                          <path d="M0 0L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 0L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className={`text-[12px] font-medium tracking-[-0.16px] ${inputs.find(i => i.type === "lora")?.value ? 'text-[var(--Black-100,#1c1c1c)] dark:text-foreground' : 'text-[var(--Black-40,#1c1c1c66)] dark:text-muted-foreground'}`}>
                        {inputs.find(i => i.type === "lora")?.value ? 
                          models.loras.find(l => l.model_name === inputs.find(i => i.type === "lora")?.value)?.title || 'LoRA' 
                          : t('select_lora') || '选择 LoRA'}
                      </span>
                    </div>
                    <div className="size-[12px] shrink-0 relative">
                      <svg className={`block size-full transition-transform ${activePopup === 'lora' ? 'rotate-0' : '-rotate-90'}`} fill="none" viewBox="0 0 12 12">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {activePopup === 'lora' && (
                  <div className="absolute z-50 mt-1 w-[calc(100%-8px)] bg-popover border border-border rounded-[var(--radius)] shadow-lg max-h-[200px] overflow-y-auto">
                    {inputs.find(i => i.type === "lora")?.value && (
                      <div
                        className="px-3 py-2 hover:bg-muted cursor-pointer text-sm text-muted-foreground border-b border-border"
                        onClick={() => {
                          const loraInput = inputs.find(i => i.type === "lora");
                          if (loraInput) {
                            setInputs(inputs.filter(i => i.id !== loraInput.id));
                          }
                          setActivePopup(null);
                        }}
                      >
                        {t('clear_lora') || '清除 LoRA'}
                      </div>
                    )}
                    {models.loras.map((lora) => (
                      <div
                        key={lora.model_name}
                        className="px-3 py-2 hover:bg-muted cursor-pointer text-sm"
                        onClick={() => {
                          const existingLora = inputs.find(i => i.type === "lora");
                          if (existingLora) {
                            setInputs(inputs.map(i => i.type === "lora" ? {...i, value: lora.model_name} : i));
                          } else {
                            setInputs([...inputs, {id: `lora-${Date.now()}`, type: "lora", value: lora.model_name, label: lora.title}]);
                          }
                          setActivePopup(null);
                        }}
                      >
                        {lora.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* LoRA Strength - Show when LoRA is selected */}
            {isLocalModel(inputs.find(i => i.type === "model")?.value as string || '') && inputs.find(i => i.type === "lora")?.value && (
              <div className="w-full h-[20px] flex items-center justify-between relative">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border -translate-y-1/2" />
                <div className="absolute top-1/2 left-[113px] -translate-y-1/2 bg-[var(--Brand-Doubao-100,#00e424)] rounded-[13px] px-[6px] py-[1px] min-w-[24px] h-[14px] flex items-center justify-center">
                  <span className="text-[10px] font-medium text-white leading-[10px] tracking-[-0.16px]">
                    {((inputs.find(i => i.type === "lora")?.strength as number) || 1).toFixed(1)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={(inputs.find(i => i.type === "lora")?.strength as number) || 1}
                  onChange={(e) => {
                    const loraInput = inputs.find(i => i.type === "lora");
                    if (loraInput) {
                      setInputs(inputs.map(i => i.type === "lora" ? {...i, strength: parseFloat(e.target.value)} : i));
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            )}

            {/* Mode/Preset Input */}
            {inputs.filter(i => i.type === "mode").map(item => (
                <ImageEditorInput
                    key={item.id}
                    item={item}
                    activePopup={activePopup}
                    setActivePopup={setActivePopup}
                    inputs={inputs}
                    setInputs={setInputs}
                    onModelSelect={handleModelSelect}
                    onPresetSelect={handlePresetSelect}
                    onNumberChange={handleNumberChange}
                    onDeleteInput={handleDeleteInput}
                    PRESET_OPTIONS={PRESET_OPTIONS}
                />
            ))}

            {/* Image Inputs - Only show for models that support image editing */}
            {!isLocalModel(inputs.find(i => i.type === "model")?.value as string || '') && (
              <>
                {inputs.filter(i => i.type === "image").map(item => (
                    <ImageEditorInput
                        key={item.id}
                        item={item}
                        activePopup={activePopup}
                        setActivePopup={setActivePopup}
                        inputs={inputs}
                        setInputs={setInputs}
                        onModelSelect={handleModelSelect}
                        onPresetSelect={handlePresetSelect}
                        onNumberChange={handleNumberChange}
                        onDeleteInput={handleDeleteInput}
                        PRESET_OPTIONS={PRESET_OPTIONS}
                    />
                ))}

                {/* Add Image Button */}
                <div className="content-stretch flex items-center justify-center relative rounded-[var(--radius-sm)] shrink-0 w-full">
                    <div 
                        className="bg-secondary flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[var(--radius-sm)] cursor-pointer hover:bg-muted transition-colors"
                        onClick={handleAddInput}
                    >
                        <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex gap-1.5 items-center justify-center px-2.5 py-1 relative size-full">
                                <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[length:var(--text-p)] font-medium text-muted-foreground whitespace-nowrap">
                                    <p className="leading-[16.5px]">{t('image')}</p>
                                </div>
                                <div className="relative shrink-0 size-[12px] opacity-40">
                                    <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                                        <path d="M2.49998 6H9.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 2.49998V9.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </>
            )}
        </div>

        {/* Text Input - flex-1 to fill remaining space when stretched */}
        <div className="bg-secondary relative rounded-[var(--radius-sm)] w-full flex-1 min-h-[80px] overflow-hidden flex flex-col">
            <div className="flex flex-col items-end justify-center flex-1 min-h-[80px]">
                <div className="content-stretch flex flex-col items-end justify-center p-3 relative size-full">
                    <div className="content-stretch flex flex-col items-start relative w-full h-full">
                        {isHandleConnected("text-input", "target") ? (
                            <div className="text-[length:var(--text-p)] text-foreground leading-[1.5] w-full h-full overflow-auto whitespace-pre-wrap opacity-60">
                                {connectedText}
                            </div>
                        ) : (
                            <textarea
                                value={prompt}
                                onChange={(e) => {
                                  setNodeState(id, { prompt: e.target.value });
                                }}
                                className="w-full h-full min-h-[60px] bg-transparent border-none outline-none resize-none text-[length:var(--text-p)] leading-[1.5] placeholder:text-muted-foreground text-foreground overflow-y-auto"
                                placeholder="Enter text …"
                            />
                        )}
                    </div>
                </div>
            </div>
            {/* Text Input Handle - Fixed: Now on Left side and visible */}
            <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 z-30">
               <Handle
                  type="target"
                  position={Position.Left}
                  id="text-input"
                  className="!w-[16px] !h-[16px] !border-[1.5px] !border-card !bg-primary !rounded-full opacity-100"
                />
            </div>
        </div>

        {/* Divider */}
        <div className="h-[2px] relative shrink-0 w-[206px] my-1">
             <svg className="block size-full" fill="none" viewBox="0 0 206 2">
                <path d="M4 1H202" stroke="currentColor" strokeLinecap="round" strokeOpacity="0.05" />
            </svg>
        </div>

        {/* Parameters */}
        <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full">
            {inputs.filter(i => ["number", "aspectRatio", "quality", "sequential", "guidance", "seed"].includes(i.type)).map((item) => (
                <ImageEditorInput
                    key={item.id}
                    item={item}
                    activePopup={activePopup}
                    setActivePopup={setActivePopup}
                    inputs={inputs}
                    setInputs={setInputs}
                    onModelSelect={handleModelSelect}
                    onPresetSelect={handlePresetSelect}
                    onNumberChange={handleNumberChange}
                    onDeleteInput={handleDeleteInput}
                    PRESET_OPTIONS={PRESET_OPTIONS}
                />
            ))}
        </div>

        {/* Progress Bar - Above Footer */}
        {(isLoadingModel || isNodeProcessing) && (
          <div className="w-full px-1">
            <div className="h-[2px] bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
                style={{ 
                  width: `${isLoadingModel ? loadingProgress : generationProgress}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="relative shrink-0 w-full mt-1">
            <div className="h-[32px] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[10px] items-center px-[4px] relative size-full">
                        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[16px]">
                            <Icon name="wand" size={16} />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic relative text-foreground text-[length:var(--text-p)] font-semibold">
                            <div className="flex items-center gap-2">
                              <p className="leading-[22.5px] whitespace-pre-wrap">Image Editor</p>
                              {(isLoadingModel || isNodeProcessing) && (
                                <span className="text-[8px] text-muted-foreground font-normal">
                                  {currentStep} {isLoadingModel ? `${Math.round(loadingProgress)}%` : `${Math.round(generationProgress)}%`}
                                </span>
                              )}
                            </div>
                        </div>
                        
                        <PlayButton 
                          onClick={(e) => { 
                            console.log('PlayButton clicked', { id, isNodeProcessing });
                            e.stopPropagation(); 
                            if (isNodeProcessing) {
                              setNodeState(id, { isProcessing: false, isLoadingModel: false, generationProgress: 0, loadingProgress: 0, currentStep: '' });
                              toast.info(t('generation_reset') || 'Generation reset');
                              return;
                            }
                            handleRun(); 
                          }} 
                          className={isNodeProcessing ? 'opacity-50 cursor-not-allowed' : ''} 
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Global Output Handle */}
        <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 z-30">
            <Handle
                type="source"
                position={Position.Right}
                id="output"
                className={`!w-[16px] !h-[16px] !border-[1.5px] !border-card !bg-primary !rounded-full opacity-100`}
            />
        </div>

      </div>
    </>
  );
}

const ImageEditorService = {
  getPresetPrompt(presetName: string): string | null {
    const presets: Record<string, string> = {
      'Image Reverse': 'Reverse the image style while maintaining the main subject',
      'Switch View': 'Change the viewing angle of the subject',
      'Arch to Model': 'Convert architectural design to realistic model',
      'Combine Objects': 'Combine multiple objects into one scene',
      'HD Enhance': 'Enhance the image to high definition quality',
      'To Lineart': 'Convert image to line art style',
      'Color with Palette': 'Apply a specific color palette to the image',
      'Character Set': 'Create a character set from the input',
      'Virtual to Real': 'Convert virtual/rendered image to realistic photo',
      'Anime to Real': 'Convert anime style to realistic photo',
      'Pose Reference': 'Use as pose reference for generation',
      'To Figure': 'Convert to figure/collectible style',
      'To Funko': 'Convert to Funko Pop style',
      'To Lego': 'Convert to Lego style',
      'To Barbie': 'Convert to Barbie doll style',
      'To Gundam': 'Convert to Gundam mecha style',
      'Cyber Baby': 'Apply cyberpunk baby style',
      'Product Render': 'Create professional product render',
      'Pro Photo': 'Apply professional photography style',
      'Light Reference': 'Use as lighting reference',
      'Paint Process': 'Convert to painted artwork style',
      'Style to Real': 'Convert stylized image to realistic',
      'To Pendant': 'Convert to pendant/jewelry style',
      'Effect Stack': 'Apply multiple effects stack',
      'Product Pack': 'Create product packaging design',
      'Virtual Makeup': 'Apply virtual makeup',
      'Expression Reference': 'Use as expression reference',
    };
    return presets[presetName] || null;
  }
};
