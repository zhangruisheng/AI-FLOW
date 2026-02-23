import { useWorkflow } from "./WorkflowContext";
import { toast } from "sonner";

interface DeleteConfirmDialogProps {
  onClose: () => void;
}

export function DeleteConfirmDialog({ onClose }: DeleteConfirmDialogProps) {
  const { activeWorkflowId, removeWorkflow } = useWorkflow();

  const handleConfirm = () => {
    if (activeWorkflowId && activeWorkflowId !== 'default') {
      removeWorkflow(activeWorkflowId);
      toast.success("Workflow deleted");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
      <div
        className="bg-card border border-border rounded-[20px] p-6 w-[320px] max-w-full flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', zIndex: 10000 }}
      >
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-lg font-bold text-foreground">Delete Workflow?</h3>
          <p className="text-sm text-muted-foreground">
            Are you sure you want to delete this workflow? This action cannot be undone.
          </p>
        </div>
        
        <div className="flex gap-3 justify-center">
          <button
            className="flex-1 px-4 py-2.5 rounded-full bg-muted text-foreground text-sm font-bold hover:bg-muted/80 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="flex-1 px-4 py-2.5 rounded-full bg-destructive text-destructive-foreground text-sm font-bold hover:bg-destructive/90 transition-colors"
            onClick={handleConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}