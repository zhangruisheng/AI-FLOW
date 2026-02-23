import { useWorkflow } from "../WorkflowContext";
import svgPaths from "../../imports/svg-o997651fby";
import { useLanguage } from "../LanguageContext";

interface NodeTypeMenuProps {
  sourceNodeId: string;
  onClose: () => void;
}

interface NodeTypeOption {
  id: string;
  type: "imageInput" | "imageEditor" | "imageCaption" | "preview";
  labelKey: string;
  icon: React.ReactNode;
}

export default function NodeTypeMenu({
  sourceNodeId,
  onClose,
}: NodeTypeMenuProps) {
  const { addConnectedNode } = useWorkflow();
  const { t } = useLanguage();

  const nodeTypes: NodeTypeOption[] = [
    {
      id: "imageInput",
      type: "imageInput",
      labelKey: "image_input",
      icon: (
        <svg
          className="size-[14.4px]"
          fill="none"
          viewBox="0 0 15 15"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p16ed3d80}
            fill="var(--foreground)"
            fillRule="evenodd"
          />
          <path
            d={svgPaths.pe3a2d00}
            stroke="var(--foreground)"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p20d5dc80}
            fill="var(--foreground)"
            stroke="var(--foreground)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
        </svg>
      ),
    },
    {
      id: "imageEditor",
      type: "imageEditor",
      labelKey: "image_edit",
      icon: (
        <svg
          className="size-[14.4px]"
          fill="none"
          viewBox="0 0 15 15"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p16ed3d80}
            fill="var(--foreground)"
            fillRule="evenodd"
          />
          <path
            d={svgPaths.pe3a2d00}
            stroke="var(--foreground)"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p20d5dc80}
            fill="var(--foreground)"
            stroke="var(--foreground)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
        </svg>
      ),
    },
    {
      id: "imageCaption",
      type: "imageCaption",
      labelKey: "image_caption",
      icon: (
        <svg
          className="size-[14.4px]"
          fill="none"
          viewBox="0 0 15 15"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p16ed3d80}
            fill="var(--foreground)"
            fillRule="evenodd"
          />
          <path
            d={svgPaths.pe3a2d00}
            stroke="var(--foreground)"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p20d5dc80}
            fill="var(--foreground)"
            stroke="var(--foreground)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
        </svg>
      ),
    },
    {
      id: "preview",
      type: "preview",
      labelKey: "preview",
      icon: (
        <svg
          className="size-[14.4px]"
          fill="none"
          viewBox="0 0 15 15"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p16ed3d80}
            fill="var(--foreground)"
            fillRule="evenodd"
          />
          <path
            d={svgPaths.pe3a2d00}
            stroke="var(--foreground)"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p20d5dc80}
            fill="var(--foreground)"
            stroke="var(--foreground)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.9"
          />
        </svg>
      ),
    },
  ];

  const handleNodeTypeClick = (
    nodeType: "imageInput" | "imageEditor" | "imageCaption" | "preview",
  ) => {
    addConnectedNode(sourceNodeId, nodeType);
    onClose();
  };

  return (
    <div
      className="bg-card box-border flex flex-col gap-[8px] items-start overflow-visible p-[8px] rounded-[16px] shrink-0 w-[180px] border border-border"
      onMouseLeave={onClose}
    >
      <div
        aria-hidden="true"
        className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[16px]"
      />

      {/* Editor Section Header */}
      <div className="box-border flex items-center justify-center px-[8px] py-[4px] shrink-0">
        <p className="opacity-40">Editor</p>
      </div>

      {/* Image Editor Button */}
      <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
        <button
          onClick={() => handleNodeTypeClick("imageEditor")}
          className="h-[32px] rounded-[30px] shrink-0 w-full hover:bg-secondary transition-colors"
        >
          <div className="flex items-center justify-center size-full">
            <div className="box-border flex gap-[6px] h-[32px] items-center justify-center px-[10px] py-[4px] w-full">
              <div className="flex items-center justify-center shrink-0 size-[16px]">
                {nodeTypes[1].icon}
              </div>
              <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px shrink-0">
                <p className="leading-[normal]">{t('image_edit')}</p>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Video Production Button */}
      <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
        <button
          onClick={() => handleNodeTypeClick("preview")}
          className="h-[32px] rounded-[30px] shrink-0 w-full hover:bg-secondary transition-colors"
        >
          <div className="flex items-center justify-center size-full">
            <div className="box-border flex gap-[6px] h-[32px] items-center justify-center px-[10px] py-[4px] w-full">
              <div className="flex items-center justify-center shrink-0 size-[16px]">
                {nodeTypes[2].icon}
              </div>
              <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px shrink-0">
                <p className="leading-[normal]">{t('video_production')}</p>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Divider */}
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 164 2"
          >
            <path d="M10 1H154" stroke="var(--border)" />
          </svg>
        </div>
      </div>

      {/* Output Section Header */}
      <div className="box-border flex items-center justify-center px-[8px] py-[4px] shrink-0">
        <p className="opacity-40">Output</p>
      </div>

      {/* Image Preview Button */}
      <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
        <button
          onClick={() => handleNodeTypeClick("preview")}
          className="h-[32px] rounded-[30px] shrink-0 w-full hover:bg-secondary transition-colors"
        >
          <div className="flex items-center justify-center size-full">
            <div className="box-border flex gap-[6px] h-[32px] items-center justify-center px-[10px] py-[4px] w-full">
              <div className="flex items-center justify-center shrink-0 size-[16px]">
                {nodeTypes[2].icon}
              </div>
              <div className="basis-0 flex flex-col grow justify-center leading-[0] min-h-px min-w-px shrink-0">
                <p className="leading-[normal]">{t('image_preview')}</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}