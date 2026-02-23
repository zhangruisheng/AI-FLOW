import {
  Handle,
  Position,
  NodeProps,
  NodeResizer,
} from "@xyflow/react";
import { useWorkflow } from "../WorkflowContext";
import { toast } from "sonner";
import { useState } from "react";
import AddNodeButton from "./AddNodeButton";
import svgPaths from "../../imports/svg-b30tbogavy";
import { useNodeConnections, useNodesData } from "@xyflow/react";
import { useLanguage } from "../LanguageContext";

export default function PreviewNode({ data, id, selected }: NodeProps) {
  const { images, processedImages, nodes } = useWorkflow();
  const { t } = useLanguage();

  // Get connections to this node
  const connections = useNodeConnections({ handleType: "target" });
  
  // Get image from connected nodes
  let connectedNodeImage = null;
  let connectedNodeProcessedImage = null;
  if (connections && connections.length > 0) {
    const sourceNodeId = connections[0].source;
    const sourceNode = nodes.find(node => node.id === sourceNodeId);
    if (sourceNode) {
      // Check if source node has direct output
      if (sourceNode.data?.output) {
        connectedNodeImage = sourceNode.data.output;
        console.log("Found image from connected node output:", sourceNodeId);
      }
      // Also check if source node has processed image in workflow context
      if (processedImages[sourceNodeId]) {
        connectedNodeProcessedImage = processedImages[sourceNodeId];
        console.log("Found image from connected node processedImages:", sourceNodeId);
      }
    }
  }

  // Get the image from multiple sources
  const previewImage =
    data.image || connectedNodeImage || connectedNodeProcessedImage || processedImages[id] || (images[id] ? images[id] : null);
  
  console.log("Preview image sources:");
  console.log("Data image:", data.image ? "Yes" : "No");
  console.log("Connected node image:", connectedNodeImage ? "Yes" : "No");
  console.log("Connected node processed image:", connectedNodeProcessedImage ? "Yes" : "No");
  console.log("Processed image:", processedImages[id] ? "Yes" : "No");
  console.log("Images store:", images[id] ? "Yes" : "No");
  console.log("Final preview image:", previewImage ? "Yes" : "No");
  if (connections && connections.length > 0) {
    console.log("Connected source node:", connections[0].source);
  }

  const handleUse = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.success("已选择图片");
  };

  const handleSave = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (previewImage) {
      if (typeof previewImage === 'string' && previewImage.startsWith('figma:asset')) {
        toast.error("Cannot download internal asset directly");
        return;
      }

      try {
        let blob;
        if (typeof previewImage === 'string' && previewImage.startsWith('data:image')) {
          // Handle base64 image
          const base64Data = previewImage.split(',')[1];
          const byteCharacters = atob(base64Data);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          blob = new Blob([byteArray], { type: 'image/png' });
        } else {
          // Handle URL image
          const response = await fetch(previewImage);
          if (!response.ok) throw new Error("Network response was not ok");
          blob = await response.blob();
        }
        
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `preview-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        toast.success("图片已下载！");
      } catch (error) {
        console.error("Download failed:", error);
        toast.error("下载图片失败");
      }
    } else {
      toast.error("没有可保存的图片");
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
        minWidth={240}
        minHeight={400}
      />
      <div className="flex gap-[10px] items-center relative h-full w-full">
        <div
          className="backdrop-blur-[10px] bg-card flex flex-col gap-[4px] items-start p-[4px] rounded-[20px] border border-border transition-all duration-300 relative group w-full h-full min-w-[240px] min-h-[400px]"
        >
          {/* Image Container */}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
              <div
                className="bg-secondary/50 content-stretch flex flex-[1_0_0] items-start justify-center overflow-clip relative rounded-[16px] w-full"
                style={{
                  minHeight: "157px",
                }}
              >
                <div className="flex-[1_0_0] h-full min-h-px min-w-px relative w-full">
                  {previewImage && (
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons Frame */}
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
            {/* Use Button */}
            <button
              onClick={handleUse}
              className="bg-secondary/50 flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[30px] hover:bg-secondary transition-colors"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-sans justify-center leading-[0] min-h-px min-w-px not-italic relative text-[length:var(--text-p)] text-foreground tracking-[-0.16px] font-medium">
                    <p className="leading-[16.5px]">{t('use')}</p>
                  </div>
                  <div className="relative shrink-0 size-[16px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d={svgPaths.p7af9000}
                        fill="var(--foreground)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="bg-secondary/50 flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[30px] hover:bg-secondary transition-colors"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-sans justify-center leading-[0] min-h-px min-w-px not-italic relative text-[length:var(--text-p)] text-foreground tracking-[-0.16px] font-medium">
                    <p className="leading-[16.5px]">{t('save_btn')}</p>
                  </div>
                  <div className="relative shrink-0 size-[16px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 16 16"
                    >
                      <g>
                        <path
                          d={svgPaths.p27930380}
                          fill="var(--foreground)"
                        />
                        <path
                          d={svgPaths.p18a5d080}
                          stroke="var(--foreground)"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="absolute bg-gradient-to-b from-transparent h-[80px] right-0 top-1/2 translate-y-[-50%] via-1/2 via-border w-px opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Footer Info */}
          <div className="h-[32px] relative shrink-0 w-full">
            <div className="flex flex-row items-end size-full">
              <div className="content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative size-full">
                {/* Label and Icon */}
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24.72px] items-center min-h-px min-w-px overflow-clip relative">
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 18 18"
                      >
                        <g>
                          <path
                            clipRule="evenodd"
                            d={svgPaths.p9a6a300}
                            fill="var(--foreground)"
                            fillRule="evenodd"
                          />
                          <path
                            d={svgPaths.p3c3abd80}
                            stroke="var(--foreground)"
                            strokeWidth="1.125"
                          />
                          <path
                            d={svgPaths.p22723b00}
                            fill="var(--foreground)"
                            stroke="var(--foreground)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.125"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-foreground text-[length:var(--text-h1)] tracking-[-0.21px] font-semibold">
                    <p className="leading-[22.5px] text-[length:var(--text-h2)]">{t('result_preview')}</p>
                  </div>
                </div>
                {/* Type */}
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-[length:var(--text-h2)] text-muted-foreground tracking-[-0.21px]">
                    <p className="leading-[22.5px]">{t('images')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Node Button on Hover */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-[50%] z-50">
            <div className="h-[80px] w-px bg-gradient-to-b from-transparent via-border to-transparent" />
            <AddNodeButton
              sourceNodeId={id}
              sourceHandlePosition={{ x: 0, y: 0 }}
            />
          </div>

          <Handle
            type="target"
            position={Position.Left}
            className="!w-[16px] !h-[16px] !bg-primary !border-[1.5px] !border-card !left-[-12px] !rounded-full"
          />
          
          <Handle
            type="source"
            position={Position.Right}
            className="!w-[16px] !h-[16px] !bg-primary !border-[1.5px] !border-card !right-[-12px] !rounded-full"
          />
        </div>
      </div>
    </>
  );
}