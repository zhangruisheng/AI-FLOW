import React, { useState, useEffect } from 'react';
import { Node, Edge } from '@xyflow/react';
import { toast } from 'sonner';
import { Heart, Play, Copy, Download, X, Trash2 } from 'lucide-react';

import { cn } from './ui/utils';
import { Icon } from './icons';
import { useAssets } from './AssetsContext';
import { useWorkflow } from './WorkflowContext';
import { useLanguage } from './LanguageContext';

interface AssetDetailModalProps {
  asset: any;
  isOpen: boolean;
  onClose: () => void;
  onUsePrompt: (prompt: string, asset: any) => void;
  onToggleFavorite: (id: string) => void;
  onDelete: (id: string) => void;
  language: string;
}

const AssetDetailModal: React.FC<AssetDetailModalProps> = ({
  asset,
  isOpen,
  onClose,
  onUsePrompt,
  onToggleFavorite,
  onDelete,
  language
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!asset) return null;

  const handleDownload = async () => {
    try {
      const imageUrl = asset.images[0];
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          canvas.toBlob((blob) => {
            if (blob) {
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${(asset.title || 'asset').replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_')}-${Date.now()}.png`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);
              toast.success(language === 'zh' ? '已下载到本地' : 'Downloaded successfully');
            }
          }, 'image/png');
        }
      };
      img.onerror = () => {
        window.open(imageUrl, '_blank');
        toast.success(language === 'zh' ? '已在新窗口打开图片' : 'Opened in new tab');
      };
      img.src = imageUrl;
    } catch (error) {
      console.error('Download failed:', error);
      toast.error(language === 'zh' ? '下载失败' : 'Download failed');
    }
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setZoomLevel(1);
      onClose();
    }, 200);
  };

  const handleDelete = () => {
    if (window.confirm(language === 'zh' ? '确定要删除这个资源吗？' : 'Are you sure you want to delete this asset?')) {
      onDelete(asset.id);
      handleClose();
    }
  };

  const params = asset.generationParams;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer overflow-hidden transition-opacity duration-200",
        isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={handleClose}
    >
      <div 
        className={cn(
          "relative w-full max-w-6xl mx-4 flex flex-col lg:flex-row gap-4 transition-all duration-300",
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 flex flex-col items-center justify-center min-w-0 bg-card/95 backdrop-blur-md rounded-xl border border-border p-4 overflow-hidden relative min-h-[300px] h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] lg:max-h-[80vh]">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="text-white/60 text-sm mb-2 text-center shrink-0">
            {language === 'zh' ? '滚轮缩放' : 'Scroll to zoom'} | {Math.round(zoomLevel * 100)}%
          </div>
          
          <div className="relative overflow-hidden rounded-lg bg-black/40 flex items-center justify-center flex-1 min-h-0 w-full">
            <img 
              src={asset.images[0]} 
              alt={asset.title}
              className="max-w-full max-h-full object-contain transition-transform duration-100"
              style={{ transform: `scale(${zoomLevel})` }}
              draggable={false}
              onWheel={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const delta = e.deltaY > 0 ? -0.1 : 0.1;
                setZoomLevel(prev => Math.min(Math.max(prev + delta, 0.5), 5));
              }}
            />
          </div>
        </div>

        <div className="w-full lg:w-80 flex flex-col bg-card/95 backdrop-blur-md rounded-xl border border-border overflow-hidden shrink-0 min-h-[280px] max-h-[40vh] sm:max-h-[45vh] md:max-h-[50vh] lg:max-h-[80vh] lg:h-[70vh]">
          <div className="p-4 border-b border-border shrink-0">
            <h3 className="text-lg font-semibold text-foreground truncate">{asset.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{asset.date}</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 overscroll-contain">
            {params && (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {language === 'zh' ? '生成参数' : 'Generation Parameters'}
                </h4>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {params.modelLabel && (
                    <div className="bg-secondary/50 rounded-lg p-2">
                      <span className="text-muted-foreground text-xs">{language === 'zh' ? '模型' : 'Model'}</span>
                      <p className="text-foreground font-medium truncate">{params.modelLabel}</p>
                    </div>
                  )}
                  
                  {params.aspectRatio && (
                    <div className="bg-secondary/50 rounded-lg p-2">
                      <span className="text-muted-foreground text-xs">{language === 'zh' ? '比例' : 'Ratio'}</span>
                      <p className="text-foreground font-medium">{params.aspectRatio}</p>
                    </div>
                  )}
                  
                  {params.resolution && (
                    <div className="bg-secondary/50 rounded-lg p-2">
                      <span className="text-muted-foreground text-xs">{language === 'zh' ? '分辨率' : 'Resolution'}</span>
                      <p className="text-foreground font-medium">{params.resolution.width}×{params.resolution.height}</p>
                    </div>
                  )}
                  
                  {params.quality && (
                    <div className="bg-secondary/50 rounded-lg p-2">
                      <span className="text-muted-foreground text-xs">{language === 'zh' ? '质量' : 'Quality'}</span>
                      <p className="text-foreground font-medium">{params.quality}</p>
                    </div>
                  )}
                  
                  {params.steps && (
                    <div className="bg-secondary/50 rounded-lg p-2">
                      <span className="text-muted-foreground text-xs">{language === 'zh' ? '步数' : 'Steps'}</span>
                      <p className="text-foreground font-medium">{params.steps}</p>
                    </div>
                  )}
                  
                  {params.cfg !== undefined && (
                    <div className="bg-secondary/50 rounded-lg p-2">
                      <span className="text-muted-foreground text-xs">CFG</span>
                      <p className="text-foreground font-medium">{params.cfg}</p>
                    </div>
                  )}
                  
                  {params.seed !== undefined && (
                    <div className="bg-secondary/50 rounded-lg p-2 col-span-2">
                      <span className="text-muted-foreground text-xs">{language === 'zh' ? '种子值' : 'Seed'}</span>
                      <p className="text-foreground font-medium font-mono text-xs">{params.seed}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                {language === 'zh' ? '提示词' : 'Prompt'}
              </h4>
              <div className="bg-secondary/50 rounded-lg p-3 max-h-32 overflow-y-auto">
                <p className="text-sm text-foreground whitespace-pre-wrap break-words">{asset.prompt || (language === 'zh' ? '无提示词' : 'No prompt')}</p>
              </div>
            </div>

            {asset.tags && asset.tags.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {language === 'zh' ? '标签' : 'Tags'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {asset.tags.map((tag: string, index: number) => (
                    <span key={index} className="px-2 py-1 bg-secondary rounded-full text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-border bg-secondary/30">
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => onToggleFavorite(asset.id)}
                className={cn(
                  "p-2.5 rounded-full transition-colors",
                  asset.isFavorite 
                    ? "bg-red-500/80 text-white hover:bg-red-500" 
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                )}
                title={language === 'zh' ? '收藏' : 'Favorite'}
              >
                <Heart className={cn("w-5 h-5", asset.isFavorite && "fill-white")} />
              </button>
              
              <button
                onClick={() => { handleClose(); onUsePrompt(asset.prompt, asset); }}
                className="p-2.5 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                title={language === 'zh' ? '使用提示词' : 'Use Prompt'}
              >
                <Play className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => { navigator.clipboard.writeText(asset.prompt); toast.success(language === 'zh' ? '已复制提示词' : 'Prompt copied'); }}
                className="p-2.5 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                title={language === 'zh' ? '复制提示词' : 'Copy Prompt'}
              >
                <Copy className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleDownload}
                className="p-2.5 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                title={language === 'zh' ? '导出到本地' : 'Download'}
              >
                <Download className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleDelete}
                className="p-2.5 rounded-full bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-colors"
                title={language === 'zh' ? '删除' : 'Delete'}
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AssetCardProps {
  asset: any;
  onUsePrompt: (prompt: string, asset: any) => void;
  onToggleFavorite: (id: string) => void;
  onDelete: (id: string) => void;
  onClick: () => void;
  language: string;
}

const AssetCard: React.FC<AssetCardProps> = ({ asset, onUsePrompt, onToggleFavorite, onDelete, onClick, language }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const imageUrl = asset.images[0];
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          canvas.toBlob((blob) => {
            if (blob) {
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${(asset.title || 'asset').replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_')}-${Date.now()}.png`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);
              toast.success(language === 'zh' ? '已下载到本地' : 'Downloaded successfully');
            }
          }, 'image/png');
        }
      };
      img.onerror = () => {
        window.open(imageUrl, '_blank');
        toast.success(language === 'zh' ? '已在新窗口打开图片' : 'Opened in new tab');
      };
      img.src = imageUrl;
    } catch (error) {
      console.error('Download failed:', error);
      toast.error(language === 'zh' ? '下载失败' : 'Download failed');
    }
  };

  return (
    <div 
      className="asset-image-item overflow-hidden rounded-[50px] relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        src={asset.images[0]}
        alt={asset.title}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Hover Overlay */}
      <div className={cn(
        "absolute inset-0 bg-black/40 flex flex-col justify-end p-4 transition-opacity duration-300",
        isHovered ? "opacity-100" : "opacity-0"
      )}>
        {/* Asset Title */}
        <p className="text-white text-sm font-medium mb-3 truncate">{asset.title}</p>
        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(asset.id);
            }}
            className={cn(
              "p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors",
              asset.isFavorite && "bg-red-500/80 hover:bg-red-500"
            )}
            title={language === 'zh' ? '收藏' : 'Favorite'}
          >
            <Heart className={cn("w-4 h-4 text-white", asset.isFavorite && "fill-white")} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onUsePrompt(asset.prompt, asset);
            }}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            title={language === 'zh' ? '使用提示词' : 'Use Prompt'}
          >
            <Play className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(asset.prompt);
              toast.success(language === 'zh' ? '已复制提示词' : 'Prompt copied');
            }}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            title={language === 'zh' ? '复制提示词' : 'Copy Prompt'}
          >
            <Copy className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={handleDownload}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            title={language === 'zh' ? '导出到本地' : 'Download'}
          >
            <Download className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(asset.id);
            }}
            className="p-2 rounded-full bg-white/20 hover:bg-red-500/80 transition-colors"
            title={language === 'zh' ? '删除' : 'Delete'}
          >
            <Trash2 className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * AssetsPage Component
 * 
 * @description This component displays the assets page with saved images, text, videos, and workflows.
 * @figma https://www.figma.com/design/Jb7pr5rFcVWdPhE39UlDW0/workflow?node-id=1-2857&m=dev
 * @figmaComponent 资产 (1:3034)
 */
const AssetsPage: React.FC<{
  onSwitchToEditor: () => void;
}> = ({ onSwitchToEditor }) => {
  const { assets, toggleFavorite, deleteAsset } = useAssets();
  const { importWorkflow, setActiveWorkflowId } = useWorkflow();
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'image' | 'text' | 'video' | 'workflow' | 'character'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('assets-category') as any) || 'all';
    }
    return 'all';
  });
  const [activeFilter, setActiveFilter] = useState<'recent' | 'favorite'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('assets-filter') as any) || 'recent';
    }
    return 'recent';
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGridSize, setActiveGridSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('assets-grid-size') || '75%';
    }
    return '75%';
  });
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gridColumnsStyle: Record<string, React.CSSProperties> = {
    '100%': { gridTemplateColumns: 'repeat(2, 1fr)' },
    '75%': { gridTemplateColumns: 'repeat(4, 1fr)' },
    '50%': { gridTemplateColumns: 'repeat(6, 1fr)' },
  };

  const handleOpenDetail = (asset: any) => {
    setSelectedAsset(asset);
    setIsModalOpen(true);
  };

  const handleCloseDetail = () => {
    setIsModalOpen(false);
    setSelectedAsset(null);
  };

  // Filter assets based on active category and filter
  const filteredAssets = assets.filter(asset => {
    const matchesCategory = activeCategory === 'all' || asset.type === activeCategory;
    const matchesFilter = activeFilter === 'recent' || asset.isFavorite;
    const matchesSearch = asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         asset.prompt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesFilter && matchesSearch;
  });

  const handleUsePrompt = (prompt: string, asset: any) => {
    try {
      // 切换到编辑页面
      onSwitchToEditor();
      
      // 检查是否是工作流类型
      if (asset.type === 'workflow' && asset.workflowData) {
        // 解析工作流数据
        const workflowData = JSON.parse(asset.workflowData);
        const { nodes, edges } = workflowData;
        
        // 导入完整的工作流
        importWorkflow(nodes, edges);
        toast.success(t('workflow_import_success'));
      } else {
        // 创建包含提示词的新工作流
        // 这里我们创建一个简单的工作流，包含 ImageEditor 节点并设置提示词
        const newNodes = [
          {
            id: `node-${Date.now()}`,
            type: 'imageEditor',
            position: { x: 200, y: 200 },
            data: {
              label: 'Image Editor',
              prompt: prompt,
              preset: 'imagen-3',
              mode: '内容组合',
              steps: 4
            },
          },
          {
            id: `node-${Date.now() + 1}`,
            type: 'preview',
            position: { x: 600, y: 200 },
            data: {
              label: 'Preview'
            },
          }
        ];
        
        const newEdges = [
          {
            id: `edge-${Date.now()}`,
            source: newNodes[0].id,
            target: newNodes[1].id,
            animated: true,
            type: 'deletable'
          }
        ];
        
        // 导入新工作流
        importWorkflow(newNodes, newEdges);
        toast.success('已创建新画板并设置提示词');
      }
    } catch (error) {
      console.error('Failed to create new canvas:', error);
      toast.error(t('canvas_create_failed'));
    }
  };

  const handleGridSizeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetSize = e.currentTarget.dataset.size;
    if (!targetSize || targetSize === activeGridSize) return;
    setActiveGridSize(targetSize);
    localStorage.setItem('assets-grid-size', targetSize);
  };

  const handleCategoryChange = (category: 'all' | 'image' | 'text' | 'video' | 'workflow' | 'character') => {
    setActiveCategory(category);
    localStorage.setItem('assets-category', category);
  };

  const handleFilterChange = (filter: 'recent' | 'favorite') => {
    setActiveFilter(filter);
    localStorage.setItem('assets-filter', filter);
  };

  return (
    <div className="absolute inset-0 top-[64px] overflow-y-auto p-6 bg-background">
      {/* Header - Note: Figma design integrates title in top nav, but keeping for better UX */}
      <div className="max-w-5xl mx-auto mb-8">
        <h1 className="text-[21px] font-medium text-foreground mb-2">{t('asset_library')}</h1>
      </div>

      {/* Search Bar - Figma: borderRadius 16px, padding 12px 16px 12px 44px, bg rgba(28,28,28,0.05) */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="relative w-full">
          <input
            type="text"
            placeholder={language === 'zh' ? '搜索提示词...' : 'Search prompts...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-[rgba(28,28,28,0.05)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-base transition-all"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            <Icon name="search" size={20} className="text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Category and Filter Tabs */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleCategoryChange('all')}
              className={cn(
                "px-4 py-2 rounded-full font-medium transition-all",
                activeCategory === 'all' 
                  ? "border border-foreground text-foreground bg-background" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {language === 'zh' ? '全部' : 'All'}
            </button>
            <button
              onClick={() => handleCategoryChange('image')}
              className={cn(
                "px-4 py-2 rounded-full font-medium transition-all",
                activeCategory === 'image' 
                  ? "border border-foreground text-foreground bg-background" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {language === 'zh' ? '图片' : 'Images'}
            </button>
            <button
              onClick={() => handleCategoryChange('text')}
              className={cn(
                "px-4 py-2 rounded-full font-medium transition-all",
                activeCategory === 'text' 
                  ? "border border-foreground text-foreground bg-background" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {language === 'zh' ? '文本' : 'Text'}
            </button>
            <button
              onClick={() => handleCategoryChange('video')}
              className={cn(
                "px-4 py-2 rounded-full font-medium transition-all",
                activeCategory === 'video' 
                  ? "border border-foreground text-foreground bg-background" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t('videos')}
            </button>
            <button
              onClick={() => handleCategoryChange('workflow')}
              className={cn(
                "px-4 py-2 rounded-full font-medium transition-all",
                activeCategory === 'workflow' 
                  ? "border border-foreground text-foreground bg-background" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t('workflows')}
            </button>
            <button
              onClick={() => handleCategoryChange('character')}
              className={cn(
                "px-4 py-2 rounded-full font-medium transition-all",
                activeCategory === 'character' 
                  ? "border border-foreground text-foreground bg-background" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t('characters')}
            </button>
          </div>

          {/* Filter and Grid Size Tabs */}
          <div className="flex items-center gap-6">
            {/* Filter Tabs */}
            <div className="flex gap-4">
              <button
                onClick={() => handleFilterChange('recent')}
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-all",
                  activeFilter === 'recent' 
                    ? "border border-foreground text-foreground bg-background" 
                    : "bg-background text-muted-foreground hover:text-foreground"
                )}
              >
                {t('recent')}
              </button>
              <button
                onClick={() => handleFilterChange('favorite')}
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-all",
                  activeFilter === 'favorite' 
                    ? "border border-foreground text-foreground bg-background" 
                    : "bg-background text-muted-foreground hover:text-foreground"
                )}
              >
                {language === 'zh' ? '收藏' : 'Favorites'}
              </button>
            </div>

            {/* Grid Size Tabs */}
            <div className="flex gap-2">
              <button
                data-size="100%"
                onClick={(e) => handleGridSizeChange(e)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                  activeGridSize === '100%' ? "border border-foreground text-foreground bg-background" : "bg-background text-muted-foreground hover:text-foreground"
                )}
              >
                {language === 'zh' ? '大' : 'Large'}
              </button>
              <button
                data-size="75%"
                onClick={(e) => handleGridSizeChange(e)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                  activeGridSize === '75%' ? "border border-foreground text-foreground bg-background" : "bg-background text-muted-foreground hover:text-foreground"
                )}
              >
                {language === 'zh' ? '中' : 'Medium'}
              </button>
              <button
                data-size="50%"
                onClick={(e) => handleGridSizeChange(e)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                  activeGridSize === '50%' ? "border border-foreground text-foreground bg-background" : "bg-background text-muted-foreground hover:text-foreground"
                )}
              >
                {t('small')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Assets Grid */}
      <div 
        className="max-w-5xl mx-auto"
        data-size-grid={activeGridSize}
      >
        {filteredAssets.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <div className="mb-4 opacity-50">
              <Icon name="search" size={48} className="text-muted-foreground mx-auto" />
            </div>
            <h3 className="text-lg font-medium mb-2">{t('no_assets_found')}</h3>
            <p className="text-sm">{t('try_adjust_filters')}</p>
          </div>
        ) : (
          <div className="space-y-8">
            <div>
              <div 
                className="grid gap-5 transition-all duration-300"
                style={gridColumnsStyle[activeGridSize]}
              >
                {filteredAssets.slice(0, 5).map((asset) => (
                  <AssetCard
                    key={asset.id}
                    asset={asset}
                    onUsePrompt={handleUsePrompt}
                    onToggleFavorite={toggleFavorite}
                    onDelete={deleteAsset}
                    onClick={() => handleOpenDetail(asset)}
                    language={language}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <div 
                className="grid gap-5 transition-all duration-300"
                style={gridColumnsStyle[activeGridSize]}
              >
                {filteredAssets.slice(5).map((asset) => (
                  <AssetCard
                    key={asset.id}
                    asset={asset}
                    onUsePrompt={handleUsePrompt}
                    onToggleFavorite={toggleFavorite}
                    onDelete={deleteAsset}
                    onClick={() => handleOpenDetail(asset)}
                    language={language}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Asset Detail Modal */}
      <AssetDetailModal
        asset={selectedAsset}
        isOpen={isModalOpen}
        onClose={handleCloseDetail}
        onUsePrompt={handleUsePrompt}
        onToggleFavorite={toggleFavorite}
        onDelete={deleteAsset}
        language={language}
      />
    </div>
  );
};

export default AssetsPage;