import { useState } from "react";
import { Plus } from "lucide-react";
import NodeTypeMenu from "./NodeTypeMenu";

interface AddNodeButtonProps {
  sourceNodeId: string;
  sourceHandlePosition: { x: number; y: number };
}

export default function AddNodeButton({
  sourceNodeId,
  sourceHandlePosition,
}: AddNodeButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="absolute -right-[56px] top-1/2 -translate-y-1/2 z-20">
      <button
        onMouseEnter={() => {
          setIsHovered(true);
          setShowMenu(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className={`content-stretch flex items-center justify-center size-[24px] rounded-full transition-all ${
          isHovered || showMenu
            ? "bg-primary text-primary-foreground scale-110"
            : "bg-card text-foreground border border-border"
        }`}
      >
        <div className="relative shrink-0 size-[12px]">
          <svg className="block size-full" fill="none" viewBox="0 0 12 12">
            <path d="M2.5 6H9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 2.5V9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {showMenu && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2">
          <NodeTypeMenu
            sourceNodeId={sourceNodeId}
            onClose={() => setShowMenu(false)}
          />
        </div>
      )}
    </div>
  );
}