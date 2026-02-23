import { useState, useEffect } from "react";
import { useWorkflow } from "./WorkflowContext";
import { toast } from "sonner";
import { X } from "lucide-react";

interface WorkflowEditPopoverProps {
  onClose: () => void;
}

export function WorkflowEditPopover({ onClose }: WorkflowEditPopoverProps) {
  const { activeWorkflowId, workflows, updateWorkflow } = useWorkflow();
  const activeWorkflow = workflows.find((w) => w.id === activeWorkflowId);

  const [name, setName] = useState(activeWorkflow?.name || "");
  const [description, setDescription] = useState(""); 

  useEffect(() => {
    if (activeWorkflow) {
      setName(activeWorkflow.name);
    }
  }, [activeWorkflow]);

  const handleSave = () => {
    if (!activeWorkflowId) return;
    
    updateWorkflow(activeWorkflowId, { name });
    toast.success("Workflow updated");
    onClose();
  };

  return (
    <div
      className="absolute top-[calc(100%+8px)] left-0 w-[300px] z-50 bg-card border border-border rounded-[20px] p-[15px] flex flex-col gap-[15px] cursor-default"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
            <div className="size-[16px] text-foreground">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.83437 2.35962C9.6476 1.54541 10.9655 1.54469 11.7787 2.35766L13.4408 4.01977C14.2471 4.82612 14.2549 6.13222 13.4584 6.94946L7.3041 13.2629C6.78627 13.7941 6.07565 14.095 5.33437 14.095H3.49941C2.50518 14.0947 1.7115 13.265 1.75332 12.2707L1.83242 10.3987C1.8614 9.70974 2.148 9.05657 2.63515 8.5686L8.83437 2.35962ZM13.6781 12.6291C14.0459 12.6294 14.3441 12.928 14.3441 13.2961C14.3441 13.6643 14.046 13.9629 13.6781 13.9631H9.59609C9.22827 13.9629 8.93008 13.6643 8.93008 13.2961C8.93016 12.928 9.22832 12.6294 9.59609 12.6291H13.6781ZM3.6957 9.62817C3.47428 9.84994 3.34368 10.1471 3.33047 10.4602L3.25136 12.3332C3.24542 12.4753 3.35932 12.594 3.50136 12.594H5.33633C5.67297 12.5939 5.99559 12.4572 6.23086 12.2161L10.4135 7.92407L7.90273 5.41333L3.6957 9.62817ZM10.7191 3.41919C10.4915 3.19178 10.1226 3.19241 9.89492 3.42016L8.96328 4.3518L11.4613 6.84985L12.3861 5.90161C12.609 5.67284 12.6068 5.30706 12.3812 5.0813L10.7191 3.41919Z" fill="currentColor"/>
                </svg>
            </div>
            <span className="text-[14px] font-medium text-foreground">Basic Workflow Information</span>
        </div>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X size={16} />
        </button>
      </div>

      {/* Name Input */}
      <div className="flex flex-col gap-[8px]">
        <label className="text-[13px] font-medium text-muted-foreground text-center w-full">Name</label>
        <div className="h-[40px] relative rounded-[20px] w-full border border-border bg-transparent flex items-center px-[15px]">
          <input
            className="w-full bg-transparent border-none outline-none text-[15px] font-bold text-foreground placeholder:text-muted-foreground text-center"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      {/* Description Input */}
      <div className="flex flex-col gap-[8px]">
        <label className="text-[13px] font-medium text-muted-foreground text-center w-full">Introduce</label>
        <div className="h-[120px] relative rounded-[20px] w-full border border-border bg-transparent flex items-start p-[15px]">
          <textarea
            className="w-full h-full bg-transparent border-none outline-none text-[13px] font-bold text-foreground placeholder:text-muted-foreground resize-none text-center"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description..."
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2">
         <button onClick={handleSave} className="w-full h-[36px] bg-foreground text-background rounded-full hover:opacity-90 font-medium text-[13px]">Save</button>
      </div>
    </div>
  );
}