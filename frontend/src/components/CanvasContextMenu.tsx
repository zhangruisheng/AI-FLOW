import React, { useEffect, useRef } from "react";
import { Type, Image as ImageIcon, Video } from "lucide-react";

interface CanvasContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  onAddNode: (
    type: string,
    label: string,
    position: { x: number; y: number },
  ) => void;
}

export default function CanvasContextMenu({
  x,
  y,
  onClose,
  onAddNode,
}: CanvasContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, [onClose]);

  const handleAddNode = (type: string, label: string) => {
    onAddNode(type, label, { x, y });
    onClose();
  };

  return (
    <div
      ref={menuRef}
      className="fixed z-50 w-[200px] bg-card backdrop-blur-md border border-border/20 rounded-[16px] p-[8px] animate-in fade-in zoom-in-95 duration-100"
      style={{ top: y, left: x }}
    >
      <div className="px-[8px] py-[4px] opacity-40 text-xs text-foreground font-bold font-sans">
        添加节点
      </div>

      <div className="flex flex-col gap-[4px]">
        <button
          onClick={() => handleAddNode("textInput", "文本")}
          className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer focus:bg-secondary text-foreground w-full text-left transition-colors"
        >
          <Type className="size-[16px]" strokeWidth={2} />
          <span className="font-medium text-[length:var(--text-p)]">文本</span>
        </button>
        <button
          onClick={() => handleAddNode("imageInput", "图像")}
          className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer"
        >
          <ImageIcon className="size-[16px]" strokeWidth={2} />
          <span className="font-medium text-[length:var(--text-p)]">图像</span>
        </button>
        <button
          onClick={() => handleAddNode("videoInput", "视频")}
          className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer"
        >
          <Video className="size-[16px]" strokeWidth={2} />
          <span className="font-medium text-[length:var(--text-p)]">视频</span>
        </button>

        <div className="h-px bg-border/10 mx-[10px] my-[4px]" />

        <button
          onClick={() => handleAddNode("imageEditor", "图像编辑")}
          className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer"
        >
          <ImageIcon className="size-[16px]" strokeWidth={2} />
          <span className="font-medium text-[length:var(--text-p)]">
            图像编辑
          </span>
        </button>
        <button
          onClick={() => handleAddNode("videoCreation", "视频制作")}
          className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer"
        >
          <Video className="size-[16px]" strokeWidth={2} />
          <span className="font-medium text-[length:var(--text-p)]">
            视频制作
          </span>
        </button>
        <button
          onClick={() => handleAddNode("preview", "图像预览")}
          className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer"
        >
          <ImageIcon className="size-[16px]" strokeWidth={2} />
          <span className="font-medium text-[length:var(--text-p)]">
            图像预览
          </span>
        </button>

        <div className="h-px bg-border/10 mx-[10px] my-[4px]" />

        <button
          onClick={() => handleAddNode("subjectProcessing", "主体特征严格还原")}
          className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer"
        >
          <ImageIcon className="size-[16px]" strokeWidth={2} />
          <span className="font-medium text-[length:var(--text-p)]">
            主体特征严格还原
          </span>
        </button>
        <button
          onClick={() => handleAddNode("styleProcessing", "风格构图精准复刻")}
          className="h-[32px] rounded-[30px] flex items-center gap-[8px] px-[10px] py-[4px] hover:bg-secondary cursor-pointer"
        >
          <ImageIcon className="size-[16px]" strokeWidth={2} />
          <span className="font-medium text-[length:var(--text-p)]">
            风格构图精准复刻
          </span>
        </button>
      </div>
    </div>
  );
}