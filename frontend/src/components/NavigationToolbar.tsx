import { useState } from "react";
import {
  Type,
  Image as ImageIcon,
  Video,
  Sparkles,
  Eye,
  Film,
  FileImage,
  Wand2,
} from "lucide-react";
import { Icon } from "./icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  getPresetOptions,
  getPresetConfig,
} from "../lib/presets";
import { useWorkflow } from "./WorkflowContext";
import { toast } from "sonner";
import NewCharacterSelectionList from "./NewCharacterSelectionList";
import { useLanguage } from "./LanguageContext";

function InputIcon({ active }: { active: boolean }) {
  return (
    <div className="relative size-[24px]">
      <div
        className={`absolute border-2 border-solid left-[2px] rounded-[7px] size-[20px] top-[2px] transition-colors duration-200 ${active ? "border-primary" : "border-current"}`}
      />
      <div
        className={`absolute border-2 border-solid left-[8px] rounded-[3px] size-[8px] top-[8px] transition-colors duration-200 ${active ? "border-primary" : "border-current"}`}
      />
    </div>
  );
}

function ProcessingIcon({ active }: { active: boolean }) {
  const svgPaths = {
    star1:
      "M1.91718 0.792179C1.75304 1.33202 1.33118 1.75462 0.792179 1.91887C1.33118 2.08322 1.75304 2.50572 1.91718 3.04556C2.08121 2.50572 2.50307 2.08322 3.04218 1.91887C2.50307 1.75462 2.08121 1.33202 1.91718 0.792179Z",
    star2:
      "M1.44645 0.597673C1.32261 1.00497 1.00433 1.32381 0.597673 1.44772C1.00433 1.57172 1.32261 1.89048 1.44645 2.29777C1.57021 1.89048 1.88849 1.57172 2.29522 1.44772C1.88849 1.32381 1.57021 1.00497 1.44645 0.597673Z",
  };

  return (
    <div className="relative size-[24px]">
      <div className="absolute left-[13.5px] top-[3px] w-[3.8px] h-[3.8px]">
        <svg
          viewBox="0 0 3.83436 3.83774"
          className="size-full overflow-visible"
        >
          <path
            d={svgPaths.star1}
            className={`transition-colors duration-200 ${active ? "stroke-primary" : "stroke-current"}`}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute left-[16.5px] top-[9px] w-[2.9px] h-[2.9px]">
        <svg
          viewBox="0 0 2.89289 2.89545"
          className="size-full overflow-visible"
        >
          <path
            d={svgPaths.star2}
            className={`transition-colors duration-200 ${active ? "stroke-primary" : "stroke-current"}`}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute left-[3.78px] top-[5.28px] size-[16.44px] flex items-center justify-center -rotate-45">
        <div className="flex flex-col gap-[1.5px] items-center w-[3.75px]">
          <div className="size-[6px] flex items-center justify-center">
            <div className="relative rounded-[1.5px] size-[3.75px]">
              <div
                className={`absolute inset-[-1.125px] border-[2.25px] border-solid rounded-[2.625px] transition-colors duration-200 ${active ? "border-primary" : "border-current"}`}
              />
            </div>
          </div>
          <div
            className={`h-[12px] w-[3px] rounded-[1.5px] transition-colors duration-200 ${active ? "bg-primary" : "bg-current"}`}
          />
        </div>
      </div>
    </div>
  );
}

function WorkflowIcon({ active }: { active: boolean }) {
  const path =
    "M13.1852 4H21.0592C23.2428 4 23.8463 6.99993 21.8326 7.84439L9.16739 13.1556C7.15369 14.0001 7.75725 17 9.94084 17H17.8519";
  return (
    <div className="relative size-[24px] flex items-center justify-center">
      <svg
        viewBox="0 0 31 21"
        className="w-[31px] h-[21px] scale-[1]"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          cx="9.5"
          cy="4"
          r="3"
          className={`transition-colors duration-200 ${active ? "stroke-primary" : "stroke-current"}`}
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="21.5"
          cy="17"
          r="3"
          className={`transition-colors duration-200 ${active ? "stroke-primary" : "stroke-current"}`}
          strokeWidth="2"
          fill="none"
        />
        <path
          d={path}
          className={`transition-colors duration-200 ${active ? "stroke-primary" : "stroke-current"}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

function ToolbarSeparator() {
  return (
    <div className="h-0 relative shrink-0 w-[8px]">
      <div className="absolute inset-[-0.5px_0]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 1"
        >
          <path
            d="M0 0.5H8"
            stroke="currentColor"
            strokeOpacity="0.1"
            className="text-foreground"
          />
        </svg>
      </div>
    </div>
  );
}

export default function NavigationToolbar() {
  const {
    addNode,
    setIsProcessing,
    setNodes,
    setEdges,
    nodes,
    edges,
  } = useWorkflow();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string | null>(
    null,
  );
  const [showCharacterList, setShowCharacterList] = useState(false);
  const presetOptions = getPresetOptions();
  
  // ✅ 移除唯一性约束 - 支持多个图像编辑节点

  const handleAddNode = (type: string, label: string) => {
    // ✅ 移除重复检查 - 允许添加多个相同类型的节点
    
    const id = `${type}-${Date.now()}`;
    const position = {
      x: window.innerWidth / 2 - 100 + Math.random() * 50,
      y: window.innerHeight / 2 - 50 + Math.random() * 50,
    };

    let data: any = { label };
    let inputs: any[] = [];

    // Configure inputs based on node type
    if (type === "imageEditor") {
      inputs = [
        {
          id: `model-${Date.now()}`,
          label: "Gemini 2.5 Flash",
          type: "model",
          value: "gemini-2.5-flash-image",
        },
        {
          id: `mode-${Date.now()}`,
          label: "内容组合",
          type: "mode",
        },
        {
          id: `img-${Date.now()}`,
          label: "图片1",
          type: "image",
        },
      ];
      data.inputs = inputs;
    } else if (
      type === "videoCreation" ||
      type === "videoProduction"
    ) {
      inputs = [
        {
          id: `img-${Date.now()}`,
          label: "参考图片",
          type: "image",
        },
        {
          id: `preset-${Date.now()}`,
          label: "视频风格",
          type: "preset",
        },
      ];
      data.inputs = inputs;
    } else if (type === "textInput") {
      // Input nodes usually just have a value
      data = { ...data, text: "" };
    } else if (type === "character") {
      // Character node configuration
      data = { ...data, characters: [] };
    } else if (type === "preview" || type === "imagePreview") {
      // Preview nodes just display
    }

    addNode({
      id,
      type:
        type === "imageEditor" ||
        type === "videoCreation" ||
        type === "videoProduction" ||
        type === "imageReconstruction"
          ? "imageEditorNode"
          : type, // Map types to registered node types
      position,
      data,
    });

    // Auto-close menu
    setActiveTab(null);
  };

  const handlePresetClick = (presetValue: string) => {
    // ✅ 移除重复检查 - 允许添加多个预设节点
    
    const config = getPresetConfig(presetValue);
    if (!config) return;

    // Logic to create a full workflow or configure selected node
    // For now, let's just add a node with that preset pre-configured
    const id = `preset-${Date.now()}`;
    const position = {
      x: window.innerWidth / 2 - 100,
      y: window.innerHeight / 2 - 50,
    };

    const inputs = config.inputs.map(
      (input: any, index: number) => ({
        id: `input-${Date.now()}-${index}`,
        label: input.label,
        type: input.type,
      }),
    );

    // Add prompt input if exists
    if (config.prompt) {
      // Could set this as a default
    }

    addNode({
      id,
      type: "imageEditorNode",
      position,
      data: {
        label: config.label,
        inputs: inputs,
      },
    });

    toast.success(`已添加预设: ${config.label}`);
    setActiveTab(null);
  };

  return (
    <>
      <div className="fixed left-[10px] top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
        <div className="backdrop-blur-[10px] backdrop-filter bg-card/80 flex flex-col gap-[8px] items-center overflow-clip px-[8px] py-[16px] rounded-[9999px] w-[52px] border border-border/10">
          {/* Input Nodes Menu */}
          <DropdownMenu
            open={activeTab === "input"}
            onOpenChange={(open) =>
              setActiveTab(open ? "input" : null)
            }
          >
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-center rounded-[9999px] shrink-0 size-[24px] hover:opacity-70 transition-opacity focus:outline-none">
                <InputIcon active={activeTab === "input"} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              align="start"
              sideOffset={16}
              className="w-[200px] bg-card rounded-[16px] p-[8px] border-border/20 "
            >
              <div className="px-[8px] py-[4px] opacity-40 text-xs text-foreground font-bold">
                {t('nav_input')}
              </div>
              <DropdownMenuItem
                onClick={() => handleAddNode("textInput", t('nav_text'))}
                className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer focus:bg-secondary"
              >
                <Type className="size-[16px]" strokeWidth={2} />
                <span className="font-medium text-[12px]">
                  {t('nav_text')}
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  handleAddNode("imageInput", t('nav_image'))
                }
                className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer focus:bg-secondary"
              >
                <ImageIcon
                  className="size-[16px]"
                  strokeWidth={2}
                />
                <span className="font-medium text-[12px]">
                  {t('nav_image')}
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  handleAddNode("videoInput", t('nav_video'))
                }
                className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer focus:bg-secondary"
              >
                <Video className="size-[16px]" strokeWidth={2} />
                <span className="font-medium text-[12px]">
                  {t('nav_video')}
                </span>
              </DropdownMenuItem>

              <div className="h-px bg-border/10 mx-[10px] my-[4px]" />

              <div className="px-[8px] py-[4px] opacity-40 text-xs text-foreground font-bold">
                {t('nav_output')}
              </div>
              <DropdownMenuItem
                onClick={() =>
                  handleAddNode("textPreview", t('nav_text_preview'))
                }
                className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer focus:bg-secondary"
              >
                <Type className="size-[16px]" strokeWidth={2} />
                <span className="font-medium text-[12px]">
                  {t('nav_text_preview')}
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  handleAddNode("preview", t('nav_image_preview'))
                }
                className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer focus:bg-secondary"
              >
                <ImageIcon
                  className="size-[16px]"
                  strokeWidth={2}
                />
                <span className="font-medium text-[12px]">
                  {t('nav_image_preview')}
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  handleAddNode("videoPreview", t('nav_video_preview'))
                }
                className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer focus:bg-secondary"
              >
                <Video className="size-[16px]" strokeWidth={2} />
                <span className="font-medium text-[12px]">
                  {t('nav_video_preview')}
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ToolbarSeparator />

          {/* Processing/Edit Menu */}
          <DropdownMenu
            open={activeTab === "processing"}
            onOpenChange={(open) =>
              setActiveTab(open ? "processing" : null)
            }
          >
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-center rounded-[9999px] shrink-0 size-[24px] hover:opacity-70 transition-opacity focus:outline-none">
                <ProcessingIcon
                  active={activeTab === "processing"}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              align="center"
              sideOffset={16}
              className="w-[200px] bg-card rounded-[16px] p-[8px] border-border/20"
            >
              <div className="px-[8px] py-[4px] opacity-40 text-xs text-foreground font-bold">
                {t('nav_processing')}
              </div>
              <DropdownMenuItem
                onClick={() =>
                  handleAddNode("imageEditor", t('nav_image_editor'))
                }
                className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer focus:bg-secondary"
              >
                <ImageIcon
                  className="size-[16px]"
                  strokeWidth={2}
                />
                <span className="font-medium text-[length:var(--text-p)]">
                  {t('nav_image_editor')}
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  handleAddNode(
                    "imageReconstruction",
                    t('nav_image_reconstruction'),
                  )
                }
                className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer focus:bg-secondary"
              >
                <ImageIcon
                  className="size-[16px]"
                  strokeWidth={2}
                />
                <span className="font-medium text-[length:var(--text-p)]">
                  {t('nav_image_reconstruction')}
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  handleAddNode(
                    "videoProduction",
                    t('nav_video_production'),
                  )
                }
                className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer focus:bg-secondary"
              >
                <Video className="size-[16px]" strokeWidth={2} />
                <span className="font-medium text-[12px]">
                  {t('nav_video_production')}
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ToolbarSeparator />

          {/* Presets/Templates Menu */}
          <DropdownMenu
            open={activeTab === "preset"}
            onOpenChange={(open) =>
              setActiveTab(open ? "preset" : null)
            }
          >
            <DropdownMenuTrigger asChild>
              <button className="flex items-center justify-center rounded-[9999px] shrink-0 size-[24px] hover:opacity-70 transition-opacity focus:outline-none">
                <WorkflowIcon active={activeTab === "preset"} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="right"
              align="end"
              sideOffset={16}
              className="w-[200px] bg-card rounded-[16px] p-[8px] border-border/20 max-h-[400px] overflow-y-auto hide-scrollbar"
            >
              <div className="px-[8px] py-[4px] opacity-40 text-xs text-foreground font-bold">
                {t('nav_preset')}
              </div>
              {presetOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => handlePresetClick(option.value)}
                  className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer focus:bg-secondary"
                >
                  <div className="size-[16px] flex items-center justify-center">
                    <WorkflowIcon active={false} />
                  </div>
                  <span className="font-medium text-[12px] truncate">
                    {option.label}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <ToolbarSeparator />

          {/* Character Menu */}
          <button 
            className="flex items-center justify-center rounded-[9999px] shrink-0 size-[24px] hover:opacity-70 transition-opacity focus:outline-none"
            onClick={() => setShowCharacterList(!showCharacterList)}
          >
            <Icon name="userCircle" size={24} className={`transition-colors duration-200 ${showCharacterList ? "text-primary" : "text-current"}`} strokeWidth={1.28} />
          </button>
        </div>
      </div>

      {/* Character Selection List */}
      {showCharacterList && (
        <NewCharacterSelectionList 
          onClose={() => setShowCharacterList(false)} 
        />
      )}
    </>
  );
}