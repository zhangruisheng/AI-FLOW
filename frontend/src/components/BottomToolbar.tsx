import { useReactFlow, useViewport } from "@xyflow/react";
import { useWorkflow } from "./WorkflowContext";
import { useAssets } from "./AssetsContext";
import svgPaths from "../imports/svg-hczmulhsbg";
import { toast } from "sonner";
import { memo } from "react";

// --- Generic Components ---

interface ToolbarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  tooltip?: string;
}

function ToolbarButton({
  active,
  className,
  children,
  tooltip,
  ...props
}: ToolbarButtonProps) {
  return (
    <button
      title={tooltip}
      aria-label={tooltip}
      className={`
        flex items-center justify-center relative shrink-0 transition-colors rounded-full
        ${active ? "bg-primary/10 text-primary" : "bg-card/80 text-foreground hover:bg-muted"}
        ${className || ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

// --- Left Toolbar Components ---

function ZoomButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <ToolbarButton
      onClick={onClick}
      className="size-[20px]"
      tooltip={`Zoom ${label === "+" ? "In" : "Out"}`}
    >
      <div className="flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[length:var(--text-h2)] tracking-[-0.16px]">
        <p className="leading-[16.5px]">{label}</p>
      </div>
    </ToolbarButton>
  );
}

function ZoomControl() {
  const { zoomIn, zoomOut } = useReactFlow();
  const { zoom } = useViewport();

  return (
    <div className="bg-card flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 rounded-l-full">
      <ZoomButton onClick={() => zoomOut()} label="-" />
      <div className="flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[length:var(--text-h2)] text-foreground tracking-[-0.16px] w-[36px] items-center">
        <p className="leading-[16.5px]">
          {Math.round(zoom * 100)}%
        </p>
      </div>
      <ZoomButton onClick={() => zoomIn()} label="+" />
    </div>
  );
}

function FitViewButton() {
  const { fitView } = useReactFlow();

  return (
    <ToolbarButton
      onClick={() => fitView()}
      className="px-[6px] py-[6px] size-[32px]"
      tooltip="Fit View"
    >
      <div className="overflow-clip relative shrink-0 size-[24px]">
        <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <path
              d={svgPaths.p23616880}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p3d70a0}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p1b8de280}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p3017a570}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </ToolbarButton>
  );
}

function LeftToolbar() {
  return (
    <div className="backdrop-blur-md bg-card flex gap-[7px] h-[40px] items-center p-[6px] relative rounded-full shrink-0 border border-border">
      <FitViewButton />
      <div className="h-[20px] relative shrink-0 w-px bg-border" />
      <ZoomControl />
    </div>
  );
}

// --- Center Toolbar Components ---

function CenterToolbar({
  tool,
  setTool,
}: {
  tool: "hand" | "select";
  setTool: (t: "hand" | "select") => void;
}) {
  return (
    <div className="backdrop-blur-md bg-card flex gap-[7px] h-[40px] items-center p-[6px] relative rounded-full shrink-0 border border-border">
      <ToolbarButton
        active={tool === "hand"}
        onClick={() => setTool("hand")}
        className="px-[6px] py-[6px] size-[32px]"
        tooltip="Hand Tool"
      >
        <div className="flex items-center justify-center relative shrink-0 size-[20px]">
          <div className="relative shrink-0 size-[14px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 17 17"
            >
              <path
                d={svgPaths.p142f0a0}
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </ToolbarButton>

      <ToolbarButton
        active={tool === "select"}
        onClick={() => setTool("select")}
        className="px-[6px] py-[6px] size-[32px]"
        tooltip="Select Tool"
      >
        <div className="flex items-center justify-center relative shrink-0 size-[20px]">
          <div className="relative shrink-0 size-[14px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 17 17"
            >
              <path d={svgPaths.p83f39e0} fill="currentColor" />
            </svg>
          </div>
        </div>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => toast.info("Undo")}
        className="px-[6px] py-[6px] size-[32px]"
        tooltip="Undo"
      >
        <div className="relative shrink-0 size-[20px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <path
              d={svgPaths.p13ca960c}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => toast.info("Redo")}
        className="px-[6px] py-[6px] size-[32px]"
        tooltip="Redo"
      >
        <div className="relative shrink-0 size-[20px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <path
              d={svgPaths.p192447f0}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </ToolbarButton>
    </div>
  );
}

// --- Right Toolbar Components ---

function RightToolbar() {
  const { setNodes, setEdges, nodes, edges, workflows, activeWorkflowId } = useWorkflow();
  const { addAsset } = useAssets();

  // Get current workflow name
  const currentWorkflow = workflows.find(w => w.id === activeWorkflowId);
  const workflowName = currentWorkflow?.name || "workflow";

  const handleClear = () => {
    if (confirm("Are you sure you want to clear the canvas?")) {
      setNodes([]);
      setEdges([]);
      toast.success("Canvas cleared");
    }
  };

  const handleDownload = () => {
    // Download workflow as JSON file
    const data = JSON.stringify({ nodes, edges }, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${workflowName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success("工作流已下载到本地");
  };

  const handleSave = () => {
    // Save workflow to assets page
    try {
      // Create workflow preview
      const nodeCount = nodes.length;
      const edgeCount = edges.length;
      const workflowPreview = `工作流包含 ${nodeCount} 个节点和 ${edgeCount} 个连接`;
      
      // Save complete workflow data as JSON string
      const workflowData = JSON.stringify({ nodes, edges });
      
      // Generate workflow thumbnail prompt based on actual workflow structure
      const nodeTypes = nodes.map(node => node.type).filter((type, index, self) => self.indexOf(type) === index);
      const nodeTypeDescription = nodeTypes.join(' and ');
      const workflowThumbnailPrompt = `workflow diagram with ${nodeCount} nodes (${nodeTypeDescription}) and ${edgeCount} connections, minimal style, professional design, gray background`;
      const encodedPrompt = encodeURIComponent(workflowThumbnailPrompt);
      const workflowThumbnailUrl = `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodedPrompt}&image_size=landscape_16_9`;
      
      // Add to assets
      addAsset({
        type: 'workflow',
        title: workflowName,
        tags: [
          `节点: ${nodeCount}`,
          `连接: ${edgeCount}`,
          '工作流'
        ],
        prompt: workflowPreview,
        images: [workflowThumbnailUrl], // Add workflow thumbnail
        isFavorite: false,
        // Store complete workflow data in a custom field
        // We'll store it in the prompt field since it's a string field that can hold JSON
        // Note: This is a workaround, ideally we'd extend the Asset interface
        workflowData: workflowData
      });
      
      toast.success("工作流已保存到资产");
    } catch (error) {
      console.error("Failed to save workflow to assets:", error);
      toast.error("保存到资产页面失败");
    }
  };

  const buttonClass =
    "backdrop-blur-md flex flex-col items-center justify-center px-[20px] py-[6px] relative rounded-full shrink-0 size-[40px] border border-border";

  return (
    <div className="flex gap-[8px] items-center justify-end relative shrink-0">
      <ToolbarButton
        onClick={handleClear}
        className={buttonClass}
        tooltip="Clear Canvas"
      >
        <div className="relative shrink-0 size-[20px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <path
              d={svgPaths.p2448c380}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p3ddd2d80}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p40def80}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </ToolbarButton>

      <ToolbarButton
        onClick={handleDownload}
        className={buttonClass}
        tooltip="Download"
      >
        <div className="relative shrink-0 size-[20px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <path d={svgPaths.p167e7f00} fill="currentColor" />
            <path
              d={svgPaths.p2d12d80}
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.25"
            />
          </svg>
        </div>
      </ToolbarButton>

      <ToolbarButton
        onClick={handleSave}
        className={buttonClass}
        tooltip="Save"
      >
        <div className="flex items-center justify-center relative shrink-0 size-[20px]">
          <div className="h-[14px] relative shrink-0 w-[12px]">
            <div className="absolute inset-[-6.25%_-7.14%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 18"
              >
                <path
                  d={svgPaths.pe8dae00}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </ToolbarButton>
    </div>
  );
}

// --- Main Component ---

function BottomToolbar({
  tool,
  setTool,
}: {
  tool: "hand" | "select";
  setTool: (t: "hand" | "select") => void;
}) {
  return (
    <div className="absolute bottom-[10px] left-0 right-0 px-[10px] flex items-end justify-between z-10 pointer-events-none">
      <div className="pointer-events-auto">
        <LeftToolbar />
      </div>
      <div className="pointer-events-auto">
        <CenterToolbar tool={tool} setTool={setTool} />
      </div>
      <div className="pointer-events-auto">
        <RightToolbar />
      </div>
    </div>
  );
}

export default memo(BottomToolbar);