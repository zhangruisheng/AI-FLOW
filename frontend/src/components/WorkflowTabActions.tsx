import { useState } from "react";
import { WorkflowEditPopover } from "./WorkflowEditPopover";
import { DeleteConfirmDialog } from "./DeleteConfirmDialog";

interface WorkflowTabActionsProps {
  canEdit: boolean;
  canDelete: boolean;
}

const svgPaths = {
  p265c6080: "M8.83437 2.35962C9.6476 1.54541 10.9655 1.54469 11.7787 2.35766L13.4408 4.01977C14.2471 4.82612 14.2549 6.13222 13.4584 6.94946L7.3041 13.2629C6.78627 13.7941 6.07565 14.095 5.33437 14.095H3.49941C2.50518 14.0947 1.7115 13.265 1.75332 12.2707L1.83242 10.3987C1.8614 9.70974 2.148 9.05657 2.63515 8.5686L8.83437 2.35962ZM13.6781 12.6291C14.0459 12.6294 14.3441 12.928 14.3441 13.2961C14.3441 13.6643 14.046 13.9629 13.6781 13.9631H9.59609C9.22827 13.9629 8.93008 13.6643 8.93008 13.2961C8.93016 12.928 9.22832 12.6294 9.59609 12.6291H13.6781ZM3.6957 9.62817C3.47428 9.84994 3.34368 10.1471 3.33047 10.4602L3.25136 12.3332C3.24542 12.4753 3.35932 12.594 3.50136 12.594H5.33633C5.67297 12.5939 5.99559 12.4572 6.23086 12.2161L10.4135 7.92407L7.90273 5.41333L3.6957 9.62817ZM10.7191 3.41919C10.4915 3.19178 10.1226 3.19241 9.89492 3.42016L8.96328 4.3518L11.4613 6.84985L12.3861 5.90161C12.609 5.67284 12.6068 5.30706 12.3812 5.0813L10.7191 3.41919Z",
};

export function WorkflowTabActions({ canEdit, canDelete }: WorkflowTabActionsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  if (!canEdit && !canDelete) return null;

  return (
    <>
      <div className="flex items-center gap-[7px] hidden group-hover:flex">
        {canEdit && (
          <div
            className="relative shrink-0 size-[16px] hover:text-accent cursor-pointer text-foreground transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(!isEditing);
            }}
            title="Edit"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 16 16"
            >
              <g>
                <path
                  d={svgPaths.p265c6080}
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
        )}
        {canDelete && (
          <div
            className="relative shrink-0 size-[16px] hover:text-destructive cursor-pointer text-foreground transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsDeleting(true);
            }}
            title="Delete"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 16 16"
            >
              <g>
                <path
                  d="M12 4L4 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 4L12 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </g>
            </svg>
          </div>
        )}
      </div>

      {isEditing && (
        <div onClick={e => e.stopPropagation()}>
             <WorkflowEditPopover onClose={() => setIsEditing(false)} />
        </div>
      )}

      {isDeleting && (
        <DeleteConfirmDialog onClose={() => setIsDeleting(false)} />
      )}
    </>
  );
}
