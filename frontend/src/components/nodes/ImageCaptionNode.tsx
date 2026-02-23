import { Handle, Position, NodeProps, NodeResizer } from '@xyflow/react';
import { useState, useRef, useEffect } from 'react';
import { useWorkflow } from '../WorkflowContext';
import { useComfyUI } from '../ComfyUIContext';
import NodeToolbar from './NodeToolbar';
import { useLanguage } from '../LanguageContext';
import { PlayButton } from '../icons';

const FLORENCE2_MODELS = [
  { id: 'Florence-2-base-PromptGen-v2.0', label: 'Florence2 Base' },
  { id: 'Florence-2-large-PromptGen-v2.0', label: 'Florence2 Large' },
  { id: 'Florence-2-base', label: 'Florence2 Base (Original)' },
  { id: 'Florence-2-large', label: 'Florence2 Large (Original)' },
];

const CAPTION_TASKS = [
  { id: 'more_detailed_caption', label: '详细描述' },
  { id: 'caption', label: '简单描述' },
  { id: 'dense_region_caption', label: '密集区域描述' },
  { id: 'region_proposal', label: '区域建议' },
  { id: 'odv', label: '目标检测' },
];

interface InputItem {
  id: string;
  label: string;
  type: 'model' | 'task' | 'image';
  value?: string;
}

export default function ImageCaptionNode({ data, id, selected }: NodeProps) {
  const { t } = useLanguage();
  const { images, setImage } = useWorkflow();
  const { isConnected, connect, queuePrompt, getHistory, on, off } = useComfyUI();
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [inputs, setInputs] = useState<InputItem[]>([
    { id: 'model', label: 'Florence2 Base', type: 'model', value: 'Florence-2-base-PromptGen-v2.0' },
    { id: 'task', label: '详细描述', type: 'task', value: 'more_detailed_caption' },
    { id: 'image', label: `${t('image_n')}1`, type: 'image' },
  ]);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [captionResult, setCaptionResult] = useState('');
  const [activePopup, setActivePopup] = useState<string | null>(null);
  
  const uploadedImage = images[id];
  const hasImage = !!uploadedImage;
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if ((event.target as Element).closest('.popup-container') === null) {
        setActivePopup(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setImage(id, imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleModelSelect = (modelId: string, modelLabel: string) => {
    setInputs(inputs.map(i => i.id === 'model' ? { ...i, label: modelLabel, value: modelId } : i));
    setActivePopup(null);
  };
  
  const handleTaskSelect = (taskId: string, taskLabel: string) => {
    setInputs(inputs.map(i => i.id === 'task' ? { ...i, label: taskLabel, value: taskId } : i));
    setActivePopup(null);
  };
  
  const buildFlorence2Workflow = () => {
    const modelInput = inputs.find(i => i.type === 'model');
    const taskInput = inputs.find(i => i.type === 'task');
    
    return {
      '1': {
        inputs: {
          model: modelInput?.value || 'Florence-2-base-PromptGen-v2.0',
          precision: 'fp16',
          attention: 'sdpa',
          convert_to_safetensors: false
        },
        class_type: 'Florence2ModelLoader'
      },
      '2': {
        inputs: {
          text_input: '',
          task: taskInput?.value || 'more_detailed_caption',
          fill_mask: true,
          keep_model_loaded: false,
          max_new_tokens: 1024,
          num_beams: 3,
          do_sample: true,
          output_mask_select: '',
          seed: Math.floor(Math.random() * 100000000000000),
          image: ['3', 0],
          florence2_model: ['1', 0]
        },
        class_type: 'Florence2Run'
      },
      '3': {
        inputs: {
          image: uploadedImage || ''
        },
        class_type: 'LoadImage'
      },
      '5': {
        inputs: {
          text: ['2', 2]
        },
        class_type: 'ShowText|pysssss'
      }
    };
  };
  
  const handleRun = async () => {
    if (!hasImage) {
      return;
    }
    
    try {
      setIsProcessing(true);
      setProgress(0);
      setCurrentStep(t('connecting_server') || 'Connecting to server...');
      
      if (!isConnected) {
        await connect();
      }
      
      setProgress(30);
      setCurrentStep(t('loading_model') || 'Loading model...');
      
      const workflow = buildFlorence2Workflow();
      const promptId = await queuePrompt(workflow);
      
      setProgress(50);
      setCurrentStep(t('generating') || 'Generating caption...');
      
      const handleProgress = (message: any) => {
        if (message.type === 'progress') {
          const prog = (message.current / message.total) * 100;
          setProgress(50 + prog * 0.5);
        }
      };
      
      on('progress', handleProgress);
      
      const checkResult = async () => {
        try {
          const history = await getHistory(promptId);
          const promptHistory = history[promptId];
          
          if (promptHistory && promptHistory.outputs) {
            for (const [nodeId, output] of Object.entries(promptHistory.outputs)) {
              if (output.text && output.text.length > 0) {
                const captionText = output.text[0];
                setCaptionResult(captionText);
                off('progress', handleProgress);
                setProgress(100);
                setCurrentStep(t('complete') || 'Complete!');
                setIsProcessing(false);
                setTimeout(() => {
                  setProgress(0);
                  setCurrentStep('');
                }, 2000);
                return;
              }
            }
          }
          
          setProgress(prev => Math.min(prev + 5, 90));
          setTimeout(checkResult, 1000);
        } catch (error) {
          console.error('Error getting history:', error);
          off('progress', handleProgress);
          setIsProcessing(false);
          setProgress(0);
          setCurrentStep('');
        }
      };
      
      setTimeout(checkResult, 2000);
      
    } catch (error: any) {
      console.error('Caption error:', error);
      setIsProcessing(false);
      setProgress(0);
      setCurrentStep('');
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
        minWidth={210}
        minHeight={150}
      />
      {selected && (
        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 z-50">
          <NodeToolbar nodeId={id} />
        </div>
      )}
      
      <div className="bg-card flex flex-col gap-1 items-start p-1 relative rounded-[var(--radius)] group" style={{ width: '210px' }}>
        <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
        
        {/* Model Selector */}
        {inputs.filter(i => i.type === 'model').map(item => (
          <div key={item.id} className="relative w-full">
            <div 
              className="bg-secondary h-[32px] relative rounded-[var(--radius-sm)] shrink-0 w-full cursor-pointer hover:bg-muted transition-colors"
              onClick={() => setActivePopup(activePopup === 'model' ? null : 'model')}
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-1.5 items-center justify-center px-2.5 py-1 relative size-full">
                  <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative shrink-0 size-[16px]">
                    <div className="relative shrink-0 size-[9px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 10.5 10.5">
                        <path d="M0.75 0.75L3.75 3.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M6.75 3.75L9.75 0.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M0.75 9.75L3.75 6.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M6.75 6.75L9.75 9.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px relative text-foreground text-[length:var(--text-p)] font-medium tracking-[-0.16px]">
                    <p className="leading-[16.5px] whitespace-pre-wrap">{item.label}</p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[12px] transition-transform duration-200" style={{ transform: activePopup === 'model' ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                    <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {activePopup === 'model' && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-[var(--radius-sm)] shadow-lg z-50 popup-container max-h-[200px] overflow-y-auto">
                {FLORENCE2_MODELS.map(model => (
                  <div
                    key={model.id}
                    className="px-3 py-2 hover:bg-muted cursor-pointer text-sm"
                    onClick={() => handleModelSelect(model.id, model.label)}
                  >
                    {model.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {/* Task Selector */}
        {inputs.filter(i => i.type === 'task').map(item => (
          <div key={item.id} className="relative w-full">
            <div 
              className="bg-secondary h-[32px] relative rounded-[var(--radius-sm)] shrink-0 w-full cursor-pointer hover:bg-muted transition-colors"
              onClick={() => setActivePopup(activePopup === 'task' ? null : 'task')}
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-1.5 items-center justify-center px-2.5 py-1 relative size-full">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]">
                    <div className="relative shrink-0 size-[14.4px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 14.4 14.4">
                        <path clipRule="evenodd" d="M1.44 3.6C1.44 2.81672 1.86607 2.12946 2.52 1.8H11.88C12.5339 2.12946 12.96 2.81672 12.96 3.6V10.8C12.96 11.5833 12.5339 12.2705 11.88 12.6H2.52C1.86607 12.2705 1.44 11.5833 1.44 10.8V3.6Z" fill="currentColor" fillRule="evenodd" />
                        <path d="M8.64 7.2C8.64 7.99513 8.01513 8.62 7.2 8.62C6.40487 8.62 5.78 7.99513 5.78 7.2C5.78 6.40487 6.40487 5.78 7.2 5.78C8.01513 5.78 8.64 6.40487 8.64 7.2Z" stroke="currentColor" strokeWidth="0.9" />
                        <path d="M11.88 1.8V3.6" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-foreground text-[length:var(--text-p)] font-medium text-ellipsis whitespace-nowrap">
                    <p className="leading-[16.5px] overflow-hidden">{item.label}</p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[12px] transition-transform duration-200" style={{ transform: activePopup === 'task' ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                    <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {activePopup === 'task' && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-[var(--radius-sm)] shadow-lg z-50 popup-container">
                {CAPTION_TASKS.map(task => (
                  <div
                    key={task.id}
                    className="px-3 py-2 hover:bg-muted cursor-pointer text-sm"
                    onClick={() => handleTaskSelect(task.id, task.label)}
                  >
                    {task.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {/* Image Input */}
        <div className="relative w-full">
          <div 
            className="bg-secondary h-[32px] relative rounded-[var(--radius-sm)] shrink-0 w-full cursor-pointer hover:bg-muted transition-colors"
            onClick={handleUploadClick}
          >
            <div className="flex flex-row items-center justify-end size-full">
              <div className="content-stretch flex gap-1.5 items-center justify-end px-2.5 py-1 relative size-full">
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]">
                  <div className="relative shrink-0 size-[14.4px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 14.4 14.4">
                      <path clipRule="evenodd" d="M1.44 3.6C1.44 2.81672 1.86607 2.12946 2.52 1.8H11.88C12.5339 2.12946 12.96 2.81672 12.96 3.6V10.8C12.96 11.5833 12.5339 12.2705 11.88 12.6H2.52C1.86607 12.2705 1.44 11.5833 1.44 10.8V3.6Z" fill="currentColor" fillRule="evenodd" />
                      <path d="M8.64 7.2C8.64 7.99513 8.01513 8.62 7.2 8.62C6.40487 8.62 5.78 7.99513 5.78 7.2C5.78 6.40487 6.40487 5.78 7.2 5.78C8.01513 5.78 8.64 6.40487 8.64 7.2Z" stroke="currentColor" strokeWidth="0.9" />
                      <path d="M11.88 1.8V3.6" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-foreground text-[length:var(--text-p)] font-medium text-ellipsis whitespace-nowrap">
                  <p className="leading-[16.5px] overflow-hidden">{hasImage ? t('image_uploaded') || '图片已上传' : t('image') || '图片'}</p>
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
          <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 z-30">
            <Handle
              type="target"
              position={Position.Left}
              id="image-input"
              className="!w-[16px] !h-[16px] !border-[1.5px] !border-card !bg-primary !rounded-full opacity-100"
            />
          </div>
        </div>
        
        {/* Caption Result */}
        {captionResult && (
          <div className="bg-secondary relative rounded-[var(--radius-sm)] shrink-0 w-full p-2">
            <p className="text-[length:var(--text-p)] text-foreground leading-[1.5] whitespace-pre-wrap text-sm">{captionResult}</p>
          </div>
        )}
        
        {/* Footer */}
        <div className="relative shrink-0 w-full mt-1">
          <div className="h-[32px] relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[10px] items-center px-[4px] relative size-full">
                <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic relative text-foreground text-[length:var(--text-p)] font-semibold">
                  <div className="flex items-center gap-2">
                    <p className="leading-[22.5px] whitespace-pre-wrap">{t('image_caption') || '图片反推'}</p>
                    {isProcessing && (
                      <span className="text-[8px] text-muted-foreground font-normal">
                        {currentStep} {Math.round(progress)}%
                      </span>
                    )}
                  </div>
                  {isProcessing && (
                    <div className="h-[2px] bg-secondary rounded-full overflow-hidden mt-0.5">
                      <div 
                        className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
                
                <PlayButton 
                  onClick={(e) => { e.stopPropagation(); handleRun(); }} 
                  className={isProcessing || !hasImage ? 'opacity-50 cursor-not-allowed' : ''} 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Output Handle */}
        <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 z-30">
          <Handle
            type="source"
            position={Position.Right}
            id="output"
            className="!w-[16px] !h-[16px] !border-[1.5px] !border-card !bg-primary !rounded-full opacity-100"
          />
        </div>
        
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </>
  );
}
