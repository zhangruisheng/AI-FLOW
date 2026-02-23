import {
  Handle,
  Position,
  NodeProps,
  useReactFlow,
  NodeResizer,
} from "@xyflow/react";
import { useState } from "react";
import { toast } from "sonner";
import svgPaths from "../../imports/svg-cgmnt1o3om";
import AddNodeButton from "./AddNodeButton";
import { optimizePrompt } from "../../lib/googleAI";

export default function TextInputNode({ data, id, selected }: NodeProps) {
  const { updateNodeData } = useReactFlow();
  const [text, setText] = useState(data.text || "");
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimize = async () => {
    if (isOptimizing) return;
    if (!text) {
      toast.error("请输入文本后再优化");
      return;
    }

    const apiKey = localStorage.getItem("gemini_api_key") || prompt("请输入您的 Gemini API Key (generativelanguage.googleapis.com):");
    if (!apiKey) {
      toast.error("需要 API Key 才能优化");
      return;
    }
    localStorage.setItem("gemini_api_key", apiKey);

    setIsOptimizing(true);
    toast.info("正在优化文案...");

    try {
      const optimizedText = await optimizePrompt(text, apiKey);
      
      if (optimizedText && optimizedText !== text) {
        setText(optimizedText);
        updateNodeData(id, { text: optimizedText, label: optimizedText });
        toast.success("优化成功");
      } else {
        // If text didn't change, it might be an error or just no change needed. 
        // But since optimizePrompt catches errors, we assume it's fine or failed silently.
        // We can check if it really failed if we modified optimizePrompt, but we didn't.
        toast.success("优化完成"); 
      }
    } catch (error: any) {
      console.error("Optimization error:", error);
      toast.error(`优化失败: ${error.message}`);
    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <>
      <NodeResizer 
        color="transparent" 
        handleClassName="opacity-0 hover:opacity-100 transition-opacity"
        handleStyle={{
            width: 8,
            height: 8,
            borderRadius: 2,
            border: "1px solid var(--primary)",
            backgroundColor: "var(--background)",
        }}
        lineStyle={{
            borderWidth: 1,
            borderColor: "var(--primary)",
            opacity: 0.5,
        }}
        isVisible={selected} 
        minWidth={280}
        minHeight={220}
      />
      <div className="flex gap-[10px] items-center relative h-full w-full">
        <div className="backdrop-blur-[10px] bg-card content-stretch flex flex-col gap-[2px] items-start p-[4px] relative rounded-[20px] group border border-border w-full h-full min-w-[280px] min-h-[220px]">
          {/* Main Content Area */}
          <div className="bg-secondary relative rounded-[16px] shrink-0 w-full min-h-[160px] flex-1">
            <div className="flex flex-col items-end justify-end overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[12px] items-end justify-end p-[12px] relative w-full h-full">
                <textarea
                  className="nodrag w-full h-full bg-transparent resize-none outline-none text-[length:var(--text-p)] leading-[1.5] text-foreground tracking-[-0.2146px] font-sans min-h-[120px]"
                  value={text}
                  placeholder="Enter image description..."
                  onChange={(e) => {
                    const newVal = e.target.value;
                    setText(newVal);
                    updateNodeData(id, { text: newVal, label: newVal });
                  }}
                />
                
                {/* Optimization Button */}
                <div 
                  className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0 size-[28px] hover:bg-muted cursor-pointer transition-colors text-foreground"
                  onClick={handleOptimize}
                  title="一键优化文案"
                >
                  <div className={`h-[12px] relative shrink-0 w-[15px] ${isOptimizing ? "animate-pulse" : ""}`}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
                      <g id="Component 1">
                        <path clipRule="evenodd" d={svgPaths.p31d6600} fill="currentColor" fillRule="evenodd" id="Vector" />
                        <path clipRule="evenodd" d={svgPaths.p2db0400} fill="currentColor" fillRule="evenodd" id="Vector_2" />
                        <path clipRule="evenodd" d={svgPaths.p3ecb1200} fill="currentColor" fillRule="evenodd" id="Vector_3" />
                        <path clipRule="evenodd" d={svgPaths.p2af07280} fill="currentColor" fillRule="evenodd" id="Vector_4" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-end size-full">
              <div className="content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative w-full">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24.72px] items-center min-h-px min-w-px overflow-clip relative">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px] text-foreground">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g id="Krea 4">
                          <path d={svgPaths.p2137800} fill="currentColor" id="Vector" />
                          <path d={svgPaths.p366c4e00} fill="currentColor" id="Vector_2" />
                          <path d={svgPaths.p255f91c0} id="Vector_3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-foreground text-[length:var(--text-h2)] tracking-[-0.2146px] font-semibold">
                    <p className="leading-[22.499px]">Text Input</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-[length:var(--text-h2)] text-muted-foreground tracking-[-0.2146px]">
                    <p className="leading-[22.499px]">Text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Real Interactive Handle */}
          <Handle
            type="source"
            position={Position.Right}
            className="!w-[16px] !h-[16px] !bg-primary !border-[1.5px] !border-card !right-[-12px] !rounded-full"
          />

          <div className="absolute bg-gradient-to-b from-transparent h-[60px] right-[-2px] to-transparent top-[calc(50%-0.36px)] translate-y-[-50%] via-1/2 via-border w-[2px]" />

          {/* Vertical Divider and Add Node Button - shown on hover */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-[50%] z-50 pointer-events-none">
            <div className="h-[80px] w-px bg-transparent" />
            <div className="pointer-events-auto">
              <AddNodeButton
                sourceNodeId={id}
                sourceHandlePosition={{ x: 0, y: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}