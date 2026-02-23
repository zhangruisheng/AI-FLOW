// 已自动安装 @types/react，无需修改导入
import { useState, useEffect } from "react";
import { Settings, CheckCircle2 } from "lucide-react";
import ApiKeyDialog from "./ApiKeyDialog";
import ComfyBackendManager from "./ComfyBackendManager";
import { toast } from "sonner";
import { isApiKeyConfigured } from "../lib/googleAI";
import { useWorkflow } from "./WorkflowContext";
import { useLanguage } from "./LanguageContext";
import { DeleteConfirmDialog } from "./DeleteConfirmDialog";
import { STORAGE_KEYS, UI } from "../config";
import { Icon } from "./icons";

const svgPaths = {
  p10acb280: "M1.875 7.92507L11.625 12.4251",
  p2136c500:
    "M11.1148 3.02238C12.0908 2.04497 13.6731 2.04451 14.649 3.02042L16.7262 5.09757C17.6937 6.06517 17.7034 7.63155 16.7476 8.61222L9.05428 16.5048C8.4266 17.1488 7.56616 17.5127 6.66756 17.5126H4.37362C3.18994 17.5123 2.24473 16.5253 2.29452 15.3417L2.39315 13.0009C2.42836 12.166 2.7764 11.3745 3.36678 10.7831L11.1148 3.02238ZM17.0963 15.786C17.5562 15.786 17.9291 16.1588 17.9293 16.6191C17.9293 17.0795 17.5563 17.453 17.0963 17.453H11.9947C11.5349 17.4528 11.1627 17.0793 11.1627 16.6191C11.1629 16.159 11.535 15.7863 11.9947 15.786H17.0963ZM4.54452 11.9609C4.24935 12.2566 4.07575 12.6528 4.05819 13.0702L3.95955 15.411C3.9496 15.6478 4.1388 15.8446 4.37557 15.8446L6.66952 15.8456C7.11864 15.8455 7.54913 15.6636 7.86287 15.3417L13.1627 9.90421L9.87752 6.61906L4.54452 11.9609ZM13.4722 4.19913C13.1469 3.87382 12.6179 3.8743 12.2926 4.20011L11.0543 5.43937L14.3258 8.71085L15.5562 7.44913C15.8746 7.12222 15.8709 6.59874 15.5484 6.27628L13.4722 4.19913Z",
  p24ab6f00:
    "M16 19L7 19C5.34315 19 4 17.6569 4 16L4 7C4 5.89543 4.89543 5 6 5L9.58539 5C10.4708 5 11.2993 5.43645 11.8 6.16667C12.3007 6.89688 13.1292 7.33333 14.0146 7.33333L17 7.33333C18.1046 7.33333 19 8.22876 19 9.33333L19 10",
  p25e0a2e0: "M11.8709 11.8709L15.8709 15.8709",
  p29b4780:
    "M13.117 14.4436C13.0529 14.9678 12.5771 15.375 12 15.375L11.8684 15.3671C11.3093 15.3075 10.8751 14.8609 10.8751 14.321L10.874 7.98471L9.43744 9.4189C9.22443 9.6315 8.93577 9.7509 8.63482 9.7509C8.33386 9.7509 8.0452 9.6315 7.83219 9.4189C7.72689 9.3138 7.64334 9.18896 7.58634 9.05153C7.52934 8.9141 7.5 8.76679 7.5 8.61801C7.5 8.46923 7.52934 8.32191 7.58634 8.18448C7.64334 8.04706 7.72689 7.92222 7.83219 7.81711L11.1979 4.4583C11.3031 4.35266 11.4281 4.26884 11.5657 4.21164C11.7034 4.15444 11.8509 4.125 12 4.125C12.1491 4.125 12.2966 4.15444 12.4343 4.21164C12.5719 4.26884 12.6969 4.35266 12.8021 4.4583L16.1678 7.81711C16.2731 7.92222 16.3567 8.04706 16.4137 8.18448C16.4707 8.32191 16.5 8.46923 16.5 8.61801C16.5 8.76679 16.4707 8.9141 16.4137 9.05153C16.3567 9.18896 16.2731 9.3138 16.1678 9.4189C15.9548 9.63115 15.6664 9.75034 15.3657 9.75034C15.0651 9.75034 14.7766 9.63115 14.5637 9.4189L13.1238 7.98359L13.1249 14.3199L13.117 14.4436Z",
  p2d12d80:
    "M4.5 16.875V18.375C4.5 19.2034 5.17157 19.875 6 19.875H18C18.8284 19.875 19.5 19.2034 19.5 18.375V16.875",
  p3106a200:
    "M12.2891 3.00684L13.2478 3.29115C13.3359 2.99394 13.2812 2.67266 13.0997 2.42135C12.9182 2.17004 12.6305 2.01711 12.3206 2.00733L12.2891 3.00684ZM12 5L11 5V5H12ZM20.9922 11.71L21.9917 11.6783C21.9819 11.3685 21.829 11.0808 21.5777 10.8993C21.3264 10.7178 21.0051 10.6631 20.708 10.7512L20.9922 11.71ZM12.2891 3.00684L11.3303 2.72252C11.1162 3.44452 11 4.20898 11 5L12 5H13C13 4.40583 13.0872 3.83275 13.2478 3.29115L12.2891 3.00684ZM12 5H11C11 9.41828 14.5817 13 19 13V12V11C15.6863 11 13 8.31371 13 5H12ZM19 12V13C19.7919 13 20.5558 12.8823 21.2764 12.6687L20.9922 11.71L20.708 10.7512C20.1654 10.9121 19.5928 11 19 11V12ZM20.9922 11.71L19.9927 11.7416C19.9965 11.8613 20 11.924 20 12H21H22C22 11.8818 21.994 11.7513 21.9917 11.6783L20.9922 11.71ZM21 12H20C20 16.4183 16.4183 20 12 20V21V22C17.5228 22 22 17.5228 22 12H21ZM12 21V20C7.58172 20 4 16.4183 4 12H3H2C2 17.5228 6.47715 22 12 22V21ZM3 12H4C4 7.58172 7.58172 4 12 4V3V2C6.47715 2 2 6.47715 2 12H3ZM12 3V4C12.0764 4 12.1503 4.00296 12.2575 4.00634L12.2891 3.00684L12.3206 2.00733C12.2358 2.00466 12.1171 2 12 2V3Z",
  p33809c00:
    "M5.08304 16.2639L6.81206 11.8959C7.265 10.7516 8.37083 10 9.60148 10H19.0573C20.4692 10 21.4366 11.4233 20.917 12.7361L19.1879 17.1041C18.735 18.2484 17.6292 19 16.3985 19H6.94265C5.53079 19 4.56341 17.5767 5.08304 16.2639Z",
  p356e7680:
    "M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z",
  p97656c0: "M13.125 9.25007L7.125 1.00007",
  pe15f120: "M1.51962 15.9853L5.51962 11.9853",
  pfdcc500: "M11.8905 5.61438L15.8905 1.61438",
  p265c6080:
    "M8.83437 2.35962C9.6476 1.54541 10.9655 1.54469 11.7787 2.35766L13.4408 4.01977C14.2471 4.82612 14.2549 6.13222 13.4584 6.94946L7.3041 13.2629C6.78627 13.7941 6.07565 14.095 5.33437 14.095H3.49941C2.50518 14.0947 1.7115 13.265 1.75332 12.2707L1.83242 10.3987C1.8614 9.70974 2.148 9.05657 2.63515 8.5686L8.83437 2.35962ZM13.6781 12.6291C14.0459 12.6294 14.3441 12.928 14.3441 13.2961C14.3441 13.6643 14.046 13.9629 13.6781 13.9631H9.59609C9.22827 13.9629 8.93008 13.6643 8.93008 13.2961C8.93016 12.928 9.22832 12.6294 9.59609 12.6291H13.6781ZM3.6957 9.62817C3.47428 9.84994 3.34368 10.1471 3.33047 10.4602L3.25136 12.3332C3.24542 12.4753 3.35932 12.594 3.50136 12.594H5.33633C5.67297 12.5939 5.99559 12.4572 6.23086 12.2161L10.4135 7.92407L7.90273 5.41333L3.6957 9.62817ZM10.7191 3.41919C10.4915 3.19178 10.1226 3.19241 9.89492 3.42016L8.96328 4.3518L11.4613 6.84985L12.3861 5.90161C12.609 5.67284 12.6068 5.30706 12.3812 5.0813L10.7191 3.41919Z",
};

import IconContainer from "../imports/IconContainer";

function IconImage() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">

       <IconContainer />
    </div>
  );
}

function IconContainerWrapper() {
  return (
    <div className="backdrop-blur-md bg-card content-stretch flex h-[40px] items-center justify-center overflow-clip p-[6px] relative rounded-full shrink-0 w-[64px] border border-border">
      <IconImage />
    </div>
  );
}

function WorkflowTab({
  label,
  isActive,
  onClick,
  onEdit,
  onDelete,
  t,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  t: (key: string) => string;
}) {
  const showActions = isActive && (onEdit || onDelete);

  return (
    <div
      className={`group backdrop-blur-md bg-card content-stretch flex items-center overflow-clip h-[40px] px-[16px] py-[6px] relative rounded-full shrink-0 border border-border cursor-pointer transition-colors ${isActive ? "bg-accent/20 border-accent" : "hover:bg-muted/50"} ${showActions ? "gap-[7px]" : ""}`}
      onClick={onClick}
    >
      <div className="content-stretch flex h-[40px] items-center justify-center relative rounded-full shrink-0">
        <div
          className={`capitalize flex flex-col justify-center leading-[0] relative shrink-0 text-[length:var(--text-h1)] text-foreground font-bold font-sans ${isActive ? "" : "opacity-60"}`}
        >
          <p className="leading-[normal]">{label}</p>
        </div>
      </div>
      {showActions && (
        <>
          {onEdit && (
            <div
              className="hidden group-hover:block relative shrink-0 size-[16px] hover:text-accent cursor-pointer text-foreground"
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              title={t('edit')}
              aria-label={t('edit_workflow')}
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
          {onDelete && (
            <div
              className="hidden group-hover:block relative shrink-0 size-[16px] hover:text-destructive cursor-pointer text-foreground"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              title={t('delete')}
              aria-label={t('delete_workflow')}
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
        </>
      )}
    </div>
  );
}

function Add({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="backdrop-blur-md bg-card content-stretch flex items-center justify-center overflow-clip py-[6px] relative rounded-full shrink-0 size-[40px] border border-border cursor-pointer hover:bg-muted/50 transition-colors"
      onClick={onClick}
    >
      <div className="content-stretch flex items-center justify-center relative rounded-full shrink-0 size-[40px]">
        <Icon name="plus" size={18} className="text-foreground" strokeWidth={2} />
      </div>
    </div>
  );
}

function Upload() {
  const { importWorkflow } = useWorkflow();
  const { t } = useLanguage();

  const handleUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target?.result as string;
          const workflow = JSON.parse(content);
          
          if (workflow.nodes && Array.isArray(workflow.nodes)) {
             importWorkflow(workflow.nodes, workflow.edges || []);
             toast.success(t('workflow_imported'));
          } else {
            toast.error(t('invalid_workflow_format'));
          }
        } catch (error) {
          console.error(error);
          toast.error(t('file_parse_failed'));
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  return (
    <div 
      onClick={handleUpload}
      className="backdrop-blur-md bg-card/80 content-stretch flex flex-col items-center justify-center px-[20px] py-[6px] relative rounded-full shrink-0 size-[40px] border border-border cursor-pointer hover:bg-muted/50 transition-colors"
    >
      <div className="relative shrink-0 size-[20px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d={svgPaths.p29b4780}
              fill="var(--foreground)"
            />
            <path
              d={svgPaths.p2d12d80}
              stroke="var(--foreground)"
              strokeLinecap="round"
              strokeWidth="2.25"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Nav Button Component
function NavButton({
  active,
  label,
  onClick,
  children,
}: {
  active: boolean;
  label?: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative rounded-full flex items-center transition-all duration-300
        ${active ? "bg-foreground text-background px-4 py-2 h-[32px] gap-2 justify-start" : "bg-transparent text-foreground size-[32px] hover:bg-muted justify-center"}
      `}
    >
      <div
          className={`flex items-center justify-center ${active ? "size-[24px]" : "size-full"}`}
        >
        {children}
      </div>
      {active && label && (
        <div className="capitalize flex flex-col justify-center leading-[0] relative shrink-0 text-[14px] font-bold whitespace-nowrap overflow-hidden">
          <p className="leading-[normal]">{label}</p>
        </div>
      )}
    </button>
  );
}

// Center Controls
function CenterControls({
  currentView,
  onViewChange,
  t,
}: {
  currentView: "editor" | "creation" | "assets" | "inspiration";
  onViewChange: (view: "editor" | "creation" | "assets" | "inspiration") => void;
  t: (key: string) => string;
}) {
  return (
    <div className="backdrop-blur-md bg-card content-stretch flex gap-[7px] h-[40px] items-center p-[6px] relative rounded-full shrink-0 border border-border">
      {/* Creation Button */}
      <NavButton
        active={currentView === "creation"}
        label={t('creation')}
        onClick={() => onViewChange("creation")}
      >
        <div className="relative shrink-0 size-[13px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15.25 15.25"
          >
            <path
              d="M1.125 1.125L5.625 5.625"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
            <path
              d="M9.625 5.625L14.125 1.125"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
            <path
              d="M1.125 14.125L5.625 9.625"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
            <path
              d="M9.625 9.625L14.125 14.125"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
          </svg>
        </div>
      </NavButton>

      {/* Editor Button */}
      <NavButton
        active={currentView === "editor"}
        label={t('editor')}
        onClick={() => onViewChange("editor")}
      >
        <div className="content-center flex flex-wrap gap-[4px_2px] items-center justify-center relative shrink-0 w-[14px]">
          <div className="h-[13px] relative shrink-0 w-[4.5px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 6.5 15"
            >
              <path
                d="M1 1L5.5 5.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M1 14L5.5 9.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="h-[13px] relative shrink-0 w-[4.5px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 6.5 15"
            >
              <path
                d="M5.5 5.5L1 1"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M5.5 9.5L1 14"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </NavButton>

      {/* Inspiration Button */}
      <NavButton
        active={currentView === "inspiration"}
        label={t('inspiration')}
        onClick={() => onViewChange("inspiration")}
      >
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[14.25px] relative w-[15.75px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 15.75 17.0001"
            >
              <path
                d={svgPaths.p10acb280}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p97656c0}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M1.125 16.0001H11.625"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </NavButton>

      {/* Assets Button */}
      <NavButton
        active={currentView === "assets"}
        label={t('assets')}
        onClick={() => onViewChange("assets")}
      >
        <div className="relative shrink-0 size-[24px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <g>
              <path
                d={svgPaths.p24ab6f00}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p33809c00}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </NavButton>
    </div>
  );
}

export default function Header({
  currentView = "editor",
  onViewChange = () => {},
}: {
  currentView?: "editor" | "creation" | "assets" | "inspiration";
  onViewChange?: (view: "editor" | "creation" | "assets" | "inspiration") => void;
}) {
  const [showApiDialog, setShowApiDialog] = useState(false);
  const [showBackendManager, setShowBackendManager] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [apiConfigured, setApiConfigured] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark"> ("light");
  const [isDeleting, setIsDeleting] = useState(false);
  const [editingWorkflowId, setEditingWorkflowId] = useState<string | null>(null);
  const [editingWorkflowName, setEditingWorkflowName] = useState("");

  const {
    workflows,
    activeWorkflowId,
    setActiveWorkflowId,
    addWorkflow,
    updateWorkflow,
  } = useWorkflow();

  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Wrap in try-catch to prevent "Failed to fetch" from crashing
    // if the function ever attempts a network request in future versions
    try {
      setApiConfigured(isApiKeyConfigured());
    } catch (e) {
      console.warn("Failed to check API configuration:", e);
      setApiConfigured(false);
    }
  }, []);

  // Close settings menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const settingsMenu = document.querySelector('.settings-menu-container');
      const settingsButton = document.querySelector('[title="配置 API 密钥"]');
      
      if (settingsMenu && settingsButton && !settingsMenu.contains(event.target as Node) && !settingsButton.contains(event.target as Node)) {
        setShowSettingsMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", isDark);
    } else {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  const handleSaveApiKey = (apiKey: string) => {
    localStorage.setItem(STORAGE_KEYS.GEMINI_API_KEY, apiKey);
    setApiConfigured(true);
    toast.success(t('api_key_saved'), {
      duration: UI.ANIMATION.TOAST_DURATION,
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
  };

  // Workflow editing functions
  const handleStartEdit = (workflow: any) => {
    setEditingWorkflowId(workflow.id);
    setEditingWorkflowName(workflow.name);
  };

  const handleSaveEdit = () => {
    if (editingWorkflowId && editingWorkflowName.trim()) {
      updateWorkflow(editingWorkflowId, { name: editingWorkflowName.trim() });
      setEditingWorkflowId(null);
      setEditingWorkflowName("");
    }
  };

  const handleCancelEdit = () => {
    setEditingWorkflowId(null);
    setEditingWorkflowName("");
  };

  return (
    <>
      <div className="absolute top-[10px] left-0 right-0 px-[10px] z-10 pointer-events-none">
        <div className="flex items-start justify-between relative size-full pointer-events-auto">
          {/* Left Section */}
          <div className="flex-1 basis-0 min-w-0 flex gap-[8px] items-center justify-start relative overflow-x-auto no-scrollbar  ">
            <IconContainerWrapper />
            {currentView === "editor" && (
              <>
                {workflows.map((workflow) => (
                  <>
                    <WorkflowTab
                      key={workflow.id}
                      label={workflow.name}
                      isActive={workflow.id === activeWorkflowId}
                      onClick={() =>
                        setActiveWorkflowId(workflow.id)
                      }
                      onEdit={
                        workflow.id !== "default"
                          ? () => handleStartEdit(workflow)
                          : undefined
                      }
                      onDelete={
                        workflow.id !== "default"
                          ? () => {
                              setIsDeleting(true);
                            }
                          : undefined
                      }
                      t={t}
                    />

                  </>
                ))}
                <Add onClick={addWorkflow} />
                <Upload />
              </>
            )}
          </div>

          {/* Center Section */}
          <div className="shrink-0 flex flex-col items-center justify-center relative">
            <CenterControls
              currentView={currentView}
              onViewChange={onViewChange}
              t={t}
            />
          </div>

          {/* Right Section */}
          <div className="flex-1 basis-0 min-w-0 flex gap-[8px] items-center justify-end relative">
            {/* Language Switch */}
            <div 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              title={language === 'zh' ? t('switch_to_english') : t('switch_to_chinese')}
            >
              <div className="text-xs font-bold text-foreground">{language.toUpperCase()}</div>
            </div>
            
            {/* DarkMode */}
            <div className="backdrop-blur-md bg-card content-stretch flex items-center justify-center overflow-clip py-[6px] relative rounded-full shrink-0 size-[40px] border border-border">
              <div 
                className="content-stretch flex items-center justify-center relative rounded-full shrink-0 size-[40px] cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={toggleTheme}
              >
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d={svgPaths.p3106a200}
                        fill="var(--foreground)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* User Icon (Settings) */}
            <div className="relative">
              <div
                className="backdrop-blur-md bg-card content-stretch flex items-center justify-center overflow-clip py-[6px] relative rounded-full shrink-0 size-[40px] border border-border cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setShowSettingsMenu(!showSettingsMenu)}
                title={t('configure_api_key')}
              >
                <div className="content-stretch flex items-center justify-center relative rounded-full shrink-0 size-[44px]">
                  <div className="relative shrink-0 size-[20px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d={svgPaths.p356e7680}
                        stroke="var(--foreground)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Settings Menu */}
              {showSettingsMenu && (
                <div className="settings-menu-container absolute right-0 top-full mt-2 backdrop-blur-md bg-card rounded-lg border border-border shadow-lg py-2 min-w-[200px] z-50">
                  {/* Backend Comfy Management */}
                  <div 
                    className="px-4 py-2 hover:bg-muted cursor-pointer flex items-center gap-2"
                    onClick={() => {
                      setShowBackendManager(true);
                      setShowSettingsMenu(false);
                    }}
                  >
                    <div className="relative shrink-0 size-[16px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="var(--foreground)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="var(--foreground)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="var(--foreground)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <span>后端comfy管理</span>
                  </div>
                  
                  {/* API Management */}
                  <div 
                    className="px-4 py-2 hover:bg-muted cursor-pointer flex items-center gap-2"
                    onClick={() => {
                      setShowApiDialog(true);
                      setShowSettingsMenu(false);
                    }}
                  >
                    <div className="relative shrink-0 size-[16px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z"
                          stroke="var(--foreground)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21"
                          stroke="var(--foreground)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <span>API管理</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Edit Dialog */}
      {editingWorkflowId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="backdrop-blur-md bg-card content-stretch flex flex-col items-start justify-center p-[20px] relative rounded-lg shrink-0 border border-border min-w-[300px]">
            <div className="flex flex-col gap-[12px] w-full">
              <label className="text-sm font-medium text-foreground">{t('workflow_name')}</label>
              <input
                type="text"
                value={editingWorkflowName}
                onChange={(e) => setEditingWorkflowName(e.target.value)}
                className="px-4 py-2 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder={t('enter_workflow_name')}
              />
              <div className="flex gap-[12px] justify-end">
                <button
                  onClick={handleCancelEdit}
                  className="px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  {t('cancel')}
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {t('save')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ApiKeyDialog
        open={showApiDialog}
        onOpenChange={setShowApiDialog}
      />
      
      <ComfyBackendManager
        open={showBackendManager}
        onOpenChange={setShowBackendManager}
      />
      
      {isDeleting && (
        <DeleteConfirmDialog onClose={() => setIsDeleting(false)} />
      )}
    </>
  );
}