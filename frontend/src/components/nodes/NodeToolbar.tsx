import { useState } from 'react';
import svgPaths from '../../imports/svg-0rolesr1t5';
import { useWorkflow } from '../WorkflowContext';
import { useLanguage } from '../LanguageContext';

interface NodeToolbarProps {
  nodeId: string;
  onResize?: () => void;
  onSkip?: () => void;
  onDelete?: () => void;
  onMore?: () => void;
  className?: string;
}

export default function NodeToolbar({
  nodeId,
  onResize,
  onSkip,
  onDelete,
  onMore,
  className = '',
}: NodeToolbarProps) {
  const { deleteNode } = useWorkflow();
  const { t } = useLanguage();
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    } else {
      deleteNode(nodeId);
    }
  };

  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      // TODO: Implement skip functionality in workflow context
      console.log('Skip node:', nodeId);
    }
  };

  const handleResize = () => {
    if (onResize) {
      onResize();
    } else {
      // Resize is typically handled by NodeResizer component
      console.log('Resize node:', nodeId);
    }
  };

  const handleMore = () => {
    if (onMore) {
      onMore();
    } else {
      setShowMoreMenu(!showMoreMenu);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Toolbar */}
      <div className="backdrop-blur-[8px] bg-card flex gap-[8px] h-[32px] items-center px-[12px] rounded-[16px] border border-border">
        {/* Resize Button */}
        <button
          onClick={handleResize}
          className="flex items-center justify-center p-[5px] rounded-[8px] shrink-0 size-[24px] hover:bg-secondary transition-colors"
          aria-label="调整大小"
          title="调整大小"
        >
          <div className="flex items-center justify-center size-[16px]">
            <div className="grid grid-cols-[max-content] grid-rows-[max-content] items-start justify-items-start leading-[0] relative">
              <div className="col-1 flex h-[4.199px] items-center justify-center ml-0 mt-[6px] relative row-1 w-[4px]">
                <div className="flex-none rotate-[180deg]">
                  <div className="h-[4.199px] relative w-[4px]">
                    <div className="absolute inset-[-17.86%_-18.75%_-17.87%_-18.75%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.50001 5.69959">
                        <path d={svgPaths.p283a4110} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p192c33c0} stroke="var(--foreground)" strokeLinecap="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 h-[4.199px] ml-[6px] mt-0 relative row-1 w-[4px]">
                <div className="absolute inset-[-17.86%_-18.75%_-17.87%_-18.75%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.50001 5.69959">
                    <path d={svgPaths.p283a4110} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <path d={svgPaths.p192c33c0} stroke="var(--foreground)" strokeLinecap="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="flex items-center justify-center p-[5px] rounded-[8px] shrink-0 size-[24px] hover:bg-secondary transition-colors"
          aria-label="跳过节点"
          title="跳过节点"
        >
          <div className="flex items-center justify-center size-[16px]">
            <div className="flex items-center justify-center relative shrink-0 size-[11.899px]">
              <div className="flex-none rotate-[90deg]">
                <div className="relative size-[11.899px]">
                  <div className="absolute inset-[-6.31%_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8995 12.6495">
                      <path d={svgPaths.p3b0ed200} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p1c6fa900} fill="var(--foreground)" />
                      <circle cx="5.94975" cy="11.6495" fill="var(--foreground)" r="1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Delete Button */}
        <button
          onClick={handleDelete}
          className="flex items-center justify-center p-[5px] rounded-[8px] shrink-0 size-[24px] hover:bg-secondary transition-colors"
          aria-label="删除节点"
          title="删除节点"
        >
          <div className="flex h-[16px] items-center overflow-clip px-[3px] py-[2px]">
            <div className="h-[12px] relative shrink-0 w-[10px]">
              <div className="absolute inset-[-6.25%_-17.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
                  <path d="M5.25 0.75H8.25" stroke="var(--foreground)" strokeLinecap="round" strokeWidth="1.5" />
                  <path d="M0.75 2.75H12.75" stroke="var(--foreground)" strokeLinecap="round" strokeWidth="1.5" />
                  <path d={svgPaths.pc502b80} stroke="var(--foreground)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* More Button */}
        <button
          onClick={handleMore}
          className="flex items-center justify-center p-[5px] rounded-[8px] shrink-0 size-[24px] hover:bg-secondary transition-colors"
          aria-label="更多操作"
          title="更多操作"
        >
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p2025da80} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p36e45a00} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p39c9bf80} stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </button>
      </div>

      {/* More Menu - Optional dropdown */}
      {showMoreMenu && (
        <div className="absolute top-[calc(100%+8px)] left-0 bg-card border border-border rounded-[16px] p-[8px] min-w-[160px] z-50">
          <button
            onClick={handleSkip}
            className="w-full text-left px-[12px] py-[8px] rounded-[8px] hover:bg-secondary transition-colors"
          >
            <p className="text-foreground text-[length:var(--text-p)]">{t('skip_node')}</p>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            className="w-full text-left px-[12px] py-[8px] rounded-[8px] hover:bg-secondary transition-colors"
          >
            <p className="text-foreground text-[length:var(--text-p)]">{t('delete_node')}</p>
          </button>
        </div>
      )}
    </div>
  );
}