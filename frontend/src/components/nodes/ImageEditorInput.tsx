import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { SUPPORTED_MODELS } from '../../lib/googleAI';
import { useLanguage } from '../LanguageContext';

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

interface ImageEditorInputProps {
  item: InputItem;
  activePopup: string | null;
  setActivePopup: (popup: string | null) => void;
  inputs: InputItem[];
  setInputs: React.Dispatch<React.SetStateAction<InputItem[]>>;
  onModelSelect: (inputId: string, modelId: string, modelLabel: string) => void;
  onPresetSelect: (inputId: string, newValue: string) => void;
  onNumberChange: (inputId: string, delta: number) => void;
  onDeleteInput: (inputId: string) => void;
  PRESET_OPTIONS: string[];
}

const ImageEditorInput: React.FC<ImageEditorInputProps> = ({
  item,
  activePopup,
  setActivePopup,
  inputs,
  setInputs,
  onModelSelect,
  onPresetSelect,
  onNumberChange,
  onDeleteInput,
  PRESET_OPTIONS
}) => {
  const { t } = useLanguage();
  // 处理模型选择
  const handleModelSelect = (modelId: string, modelLabel: string) => {
    onModelSelect(item.id, modelId, modelLabel);
  };

  // 处理预设选择
  const handlePresetSelect = (newValue: string) => {
    onPresetSelect(item.id, newValue);
  };

  // 处理数字变化
  const handleNumberChange = (delta: number) => {
    onNumberChange(item.id, delta);
  };

  // 处理删除输入
  const handleDeleteInput = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDeleteInput(item.id);
  };

  // 渲染模型输入
  if (item.type === "model") {
    return (
      <div key={item.id} className="relative w-full z-20">
        <div 
          className="bg-secondary h-[32px] relative rounded-[var(--radius-sm)] shrink-0 w-full cursor-pointer hover:bg-muted transition-colors"
          onClick={(e) => { e.stopPropagation(); setActivePopup(activePopup === item.id ? null : item.id); }}
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
              <div className={`flex items-center justify-center relative shrink-0 size-[12px] transition-transform duration-200 ${activePopup === item.id ? "rotate-0" : "-rotate-90"}`}>
                <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {activePopup === item.id && (
          <div className="absolute left-[calc(100%+8px)] top-0 w-[200px] bg-card border border-border/20 rounded-[16px] p-[8px] flex flex-col gap-[4px] z-50 popup-container">
            {SUPPORTED_MODELS.map(m => (
              <div key={m.id} className="text-[length:var(--text-p)] px-3 py-2 hover:bg-muted rounded-md cursor-pointer text-foreground" onClick={(e) => { e.stopPropagation(); handleModelSelect(m.id, m.label); }}>
                {m.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // 渲染预设输入
  if (item.type === "mode") {
    return (
      <div key={item.id} className="relative w-full z-10">
        <div 
          className="bg-secondary h-[32px] relative rounded-[var(--radius-sm)] shrink-0 w-full cursor-pointer hover:bg-muted transition-colors"
          onClick={(e) => { e.stopPropagation(); setActivePopup(activePopup === item.id ? null : item.id); }}
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-1.5 items-center justify-center px-2.5 py-1 relative size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]">
                <div className="h-[12.25px] relative shrink-0 w-[18.083px] flex items-center justify-center">
                  <svg className="block w-[14px] h-[10px]" fill="none" viewBox="0 0 18.0833 12.25">
                    <circle cx="5.54167" cy="2.33333" r="1.58333" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12.5417" cy="9.91667" r="1.58333" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5.54167 2.33334L12.5417 9.91667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px relative text-foreground text-[length:var(--text-p)] font-medium text-muted-foreground">
                <p className="leading-[16.5px] whitespace-pre-wrap text-foreground">{item.label}</p>
              </div>
              <div className="relative shrink-0 size-[12px]">
                <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                  <path d="M2.49998 6H9.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 2.49998V9.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {activePopup === item.id && (
          <div className="absolute left-[calc(100%+8px)] top-0 w-[200px] bg-card border border-border/20 rounded-[var(--radius)] p-2 flex flex-col gap-1 z-50 popup-container max-h-[300px] overflow-y-auto hide-scrollbar">
            {PRESET_OPTIONS.map(opt => (
              <div key={opt} className="text-[length:var(--text-p)] px-3 py-2 hover:bg-muted rounded-md cursor-pointer truncate text-foreground" onClick={(e) => { e.stopPropagation(); handlePresetSelect(opt); }}>
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // 渲染图片输入
  if (item.type === "image") {
    return (
      <div key={item.id} className="content-stretch flex items-center justify-center relative rounded-[var(--radius-sm)] shrink-0 w-full">
        <div className="bg-secondary flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[var(--radius-sm)]">
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
                <p className="leading-[16.5px] overflow-hidden">{item.label}</p>
              </div>
              <div 
                className="content-stretch flex h-[12px] items-center opacity-40 overflow-clip px-[2.25px] py-[1.5px] relative shrink-0 cursor-pointer hover:opacity-100"
                onClick={handleDeleteInput}
              >
                <div className="h-[9px] relative shrink-0 w-[7.5px]">
                  <div className="absolute inset-[-5.56%_-16.67%]">
                    <svg className="block size-full" fill="none" viewBox="0 0 10 10">
                      <path d="M3.875 0.5H6.125" stroke="currentColor" strokeLinecap="round" />
                      <path d="M0.5 2H9.5" stroke="currentColor" strokeLinecap="round" />
                      <path d="M2.5 2V8C2.5 8.27614 2.60536 8.52949 2.77557 8.70711C2.94578 8.88472 3.18924 9 3.45 9H6.55C6.81076 9 7.05422 8.88472 7.22443 8.70711C7.39464 8.52949 7.5 8.27614 7.5 8V2" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 z-30">
                <Handle
                  type="target"
                  position={Position.Left}
                  id={item.id}
                  className={`!w-[16px] !h-[16px] !border-[1.5px] !border-card !bg-primary !rounded-full opacity-100`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 渲染参数输入
  if (["number", "aspectRatio", "quality", "sequential", "guidance", "seed"].includes(item.type)) {
    return (
      <div key={item.id} className="content-stretch flex items-center justify-center relative rounded-[var(--radius-sm)] shrink-0 w-full">
        <div className="bg-secondary flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[var(--radius-sm)]">
          <div className="flex flex-row items-center justify-end size-full">
            <div className="content-stretch flex gap-1.5 items-center justify-end px-2.5 py-1 relative size-full">
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute left-1/2 size-[8px] top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg className="block size-full" fill="none" viewBox="0 0 9.5 9.5">
                    <path d="M4.75 0.75V8.75M0.75 4.75H8.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-foreground text-[length:var(--text-p)] font-medium text-ellipsis whitespace-nowrap">
                <p className="leading-[16.5px] overflow-hidden">{item.label}</p>
              </div>
              
              {item.type === "number" ? (
                <>
                  <div className="relative shrink-0 size-[12px] cursor-pointer" onClick={(e) => { e.stopPropagation(); handleNumberChange(-1); }}>
                    <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                      <path d="M2.49998 6H9.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-foreground text-[length:var(--text-p)] font-medium whitespace-nowrap w-[20px] items-center">
                    <p className="leading-[16.5px]">{item.value}</p>
                  </div>
                  <div className="relative shrink-0 size-[12px] cursor-pointer" onClick={(e) => { e.stopPropagation(); handleNumberChange(1); }}>
                    <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                      <path d="M2.49998 6H9.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 2.49998V9.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </>
              ) : item.type === "guidance" || item.type === "seed" ? (
                <>
                  <div className="relative shrink-0 size-[12px] cursor-pointer" onClick={(e) => { e.stopPropagation(); handleNumberChange(-1); }}>
                    <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                      <path d="M2.49998 6H9.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-foreground text-[length:var(--text-p)] font-medium whitespace-nowrap w-[40px] items-center">
                    <p className="leading-[16.5px]">{item.value}</p>
                  </div>
                  <div className="relative shrink-0 size-[12px] cursor-pointer" onClick={(e) => { e.stopPropagation(); handleNumberChange(1); }}>
                    <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                      <path d="M2.49998 6H9.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 2.49998V9.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </>
              ) : (
                <div 
                  className="flex items-center gap-[6px] cursor-pointer"
                  onClick={(e) => { e.stopPropagation(); setActivePopup(activePopup === item.id ? null : item.id); }}
                >
                  <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-foreground text-[length:var(--text-p)] font-medium whitespace-nowrap">
                    <p className="leading-[16.5px]">{item.value}</p>
                  </div>
                  <div className={`flex items-center justify-center relative shrink-0 size-[12px] transition-transform duration-200 ${activePopup === item.id ? "rotate-0" : "-rotate-90"}`}>
                    <svg className="block size-full" fill="none" viewBox="0 0 12 12">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {activePopup === item.id && item.type === "aspectRatio" && (
          <div className="absolute left-[calc(100%+8px)] top-0 w-[120px] bg-card border border-border/20 rounded-[var(--radius)] p-2 flex flex-col gap-1 z-50 popup-container">
            {["1:1", "16:9", "9:16", "4:3", "3:4"].map((ratio) => (
              <div key={ratio} className="text-[length:var(--text-p)] px-3 py-2 hover:bg-muted rounded-md cursor-pointer text-foreground" onClick={(e) => { e.stopPropagation(); setInputs(inputs.map(i => i.id === item.id ? { ...i, value: ratio } : i)); setActivePopup(null); }}>
                {ratio}
              </div>
            ))}
          </div>
        )}
        {activePopup === item.id && item.type === "quality" && (
          <div className="absolute left-[calc(100%+8px)] top-0 w-[120px] bg-card border border-border/20 rounded-[var(--radius)] p-2 flex flex-col gap-1 z-50 popup-container">
            {["SD", "HD", "2K", "4K"].map((q) => (
              <div key={q} className="text-[length:var(--text-p)] px-3 py-2 hover:bg-muted rounded-md cursor-pointer text-foreground" onClick={(e) => { e.stopPropagation(); setInputs(inputs.map(i => i.id === item.id ? { ...i, value: q } : i)); setActivePopup(null); }}>
                {q}
              </div>
            ))}
          </div>
        )}
        {activePopup === item.id && item.type === "sequential" && (
          <div className="absolute left-[calc(100%+8px)] top-0 w-[120px] bg-card border border-border/20 rounded-[var(--radius)] p-2 flex flex-col gap-1 z-50 popup-container">
            {["disabled", "auto"].map((mode) => (
              <div key={mode} className="text-[length:var(--text-p)] px-3 py-2 hover:bg-muted rounded-md cursor-pointer text-foreground" onClick={(e) => { e.stopPropagation(); setInputs(inputs.map(i => i.id === item.id ? { ...i, value: mode } : i)); setActivePopup(null); }}>
                {mode === "disabled" ? t('single_image') : t('group_image')}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default ImageEditorInput;