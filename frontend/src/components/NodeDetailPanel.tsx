import { useState } from 'react';
import { useWorkflow } from './WorkflowContext';
import { X, Loader2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { getPresetOptions, getPresetConfig } from '../lib/presets';
import { generateImage, isApiKeyConfigured } from '../lib/googleAI';
import { toast } from 'sonner';
import svgPaths from '../imports/svg-90l3few2n4';

const modelPresets = ['imagen-3', 'imagen-2', 'Flux Pro', 'DALL-E 3', 'Stable Diffusion'];

export default function NodeDetailPanel() {
  const { selectedNodeId, nodes, setProcessedImage, isProcessing, setIsProcessing, images } = useWorkflow();
  const [preset, setPreset] = useState('Nano Banana');
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  
  const presetOptions = getPresetOptions();
  const selectedNode = selectedNodeId ? nodes.find(n => n.id === selectedNodeId) : null;

  if (!selectedNode || selectedNode.type !== 'imageEditor') {
    return null;
  }

  const handlePresetSelect = (presetKey: string) => {
    const presetConfig = getPresetConfig(presetKey);
    if (presetConfig) {
      setSelectedPreset(presetKey);
      setPrompt(presetConfig.prompt);
      toast.success(`已应用���设: ${presetConfig.label}`, { duration: 2000 });
    }
  };

  const handleProcess = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt', { duration: 2000 });
      return;
    }

    setIsProcessing(true);
    
    if (!isApiKeyConfigured()) {
      toast.warning('Using mock image generation. Set VITE_GOOGLE_AI_API_KEY to use Google AI.', { 
        duration: 3000 
      });
    } else {
      toast.info('Generating image with Google AI...', { duration: 2000 });
    }
    
    try {
      const sourceImages = Object.values(images);
      
      const result = await generateImage({
        prompt,
        model: preset,
        mode: '内容组合',
        steps: 4,
        sourceImages,
      });

      if (result.success && result.imageUrl) {
        setProcessedImage(selectedNodeId!, result.imageUrl);
        toast.success('Image generated successfully!', { duration: 2000 });
      } else {
        toast.error(result.error || 'Failed to generate image', { duration: 3000 });
      }
    } catch (error: any) {
      const errorMessage = error?.message || 'An error occurred during generation';
      const isQuotaError = errorMessage.includes("daily free quota") || errorMessage.includes("Quota exceeded");
      
      if (!isQuotaError) {
          console.error('Error generating image:', error);
      }
      
      if (errorMessage.includes("daily free quota")) {
          toast.error("当前模型每日免费额度已耗尽", {
              description: "请明天再试，或更换 API Key",
              duration: 5000
          });
      } else {
          toast.error(errorMessage, { duration: 3000 });
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="absolute right-[20px] top-[100px] z-10 flex gap-[16px] items-start">
      {/* Main Panel */}
      <div className="bg-card border border-border rounded-[16px] p-[8px] flex flex-col gap-[8px] w-[214px]">
        {/* Model Preset Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="bg-secondary h-[32px] rounded-[15px] flex items-center justify-center px-[10px] py-[4px] gap-[6px] hover:bg-muted transition-colors">
              <div className="flex items-center justify-center size-[16px] p-[2px]">
                <div className="relative shrink-0 size-[9px]">
                  <div className="absolute inset-[-8.333%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 11 11">
                      <path d="M1 1L4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M7 4L10 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M1 10L4 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M7 7L10 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="flex-1 text-left">{preset}</p>
              <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {modelPresets.map((p) => (
              <DropdownMenuItem key={p} onClick={() => setPreset(p)}>
                {p}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Preset Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="bg-transparent h-[32px] rounded-[15px] flex items-center justify-center px-[10px] py-[4px] gap-[6px] hover:bg-secondary transition-colors border border-primary relative">
              <div className="flex items-center justify-center size-[16px]">
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p3f813280} fill="currentColor" />
                </svg>
              </div>
              <p className="flex-1 text-left text-muted-foreground">
                {selectedPreset ? getPresetConfig(selectedPreset)?.label : '未添加 预设'}
              </p>
              {!selectedPreset ? (
                <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              ) : (
                // Rotated chevron when preset is selected
                <div className="flex items-center justify-center size-[12px] rotate-[270deg]">
                  <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="start" 
            className="bg-card border border-border rounded-[16px] w-[173px] max-h-[500px] overflow-y-auto p-[8px]"
          >
            {/* Preset Label */}
            <div className="px-[8px] py-[4px]">
              <p className="opacity-40">预设</p>
            </div>
            
            {/* Preset Options */}
            {presetOptions.map((option) => (
              <DropdownMenuItem 
                key={option.value} 
                onClick={() => handlePresetSelect(option.value)}
                className="h-[32px] rounded-[30px] flex items-center px-[10px] py-[4px] gap-[6px] hover:bg-secondary cursor-pointer"
              >
                <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p3f813280} fill="currentColor" />
                </svg>
                <span>{option.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Text Input Area */}
        <div className="bg-secondary rounded-[16px] h-[97px] p-[10px] flex flex-col items-end justify-between relative">
          <div className="flex-1 w-full">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter text …"
              className="w-full h-full bg-transparent resize-none outline-none placeholder:text-muted-foreground placeholder:opacity-40"
            />
          </div>
          <div className="flex items-center justify-center p-[6px] rounded-[8px] size-[16px]">
            <svg className="w-[15px] h-[12px]" fill="none" viewBox="0 0 15 12">
              <path clipRule="evenodd" d={svgPaths.p31d6600} fill="currentColor" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2db0400} fill="currentColor" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3ecb1200} fill="currentColor" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2af07280} fill="currentColor" fillRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex gap-[10px] items-center w-full h-[24.72px]">
          <div className="flex-1 flex gap-[8px] items-center overflow-clip">
            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
              <path d={svgPaths.p2cb71500} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
              <path d={svgPaths.p1fd06980} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
              <path d="M5.86579 13.8364H5.87329" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
              <path d="M9.60938 2.77405H9.60188" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
              <path d={svgPaths.pa6a5f00} stroke="currentColor" strokeWidth="1.125" />
              <path d={svgPaths.p2fb3d200} fill="currentColor" />
            </svg>
            <p>Image Editor</p>
          </div>
          
          <button 
            onClick={handleProcess}
            disabled={isProcessing}
            className="bg-primary text-primary-foreground flex items-center justify-center p-[10px] rounded-[51px] size-[24px] hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isProcessing ? (
              <Loader2 className="size-[12px] animate-spin" />
            ) : (
              <svg className="size-[12px]" fill="none" viewBox="0 0 12 12">
                <path d={svgPaths.p2c610f00} stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}