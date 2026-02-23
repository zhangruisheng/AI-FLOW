import React, { useState, useRef, useLayoutEffect } from 'react';
import { useWorkflow } from './WorkflowContext';
import { useLanguage } from './LanguageContext';
import { toast } from 'sonner';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

import { cn } from './ui/utils';

import img1 from "figma:asset/2d7160601086bc4a3294287ad45cd52a2430ea18.png";
import img2 from "figma:asset/fc6bc9a065ba741c116a3c69872b5372e54c51ac.png";
import img3 from "figma:asset/65c0d73b733245479f5c5a2cdd6ff1ab4bd17846.png";
import img4 from "figma:asset/9af5ac1f50087a6f8a64eb8de01852907537f857.png";
import img5 from "figma:asset/5efd1d1168ada3e6326fdf19d94c03a713ba677b.png";
import img6 from "figma:asset/427ddd34e517e3752ac06a4505e101313cc6804a.png";
import imgRetro from "../assets/retro-fingerheart.webp";
import imgDramatic from "../assets/dramatic-wide-angle.jpeg";

// Register Flip plugin
gsap.registerPlugin(Flip);

/**
 * InspirationPage Component
 * 
 * @description This component displays inspiration page with curated prompts and ideas.
 * @figma https://www.figma.com/design/Jb7pr5rFcVWdPhE39UlDW0/workflow?node-id=1-2781&m=dev
 */
interface InspirationPageProps {
  onSwitchToEditor: () => void;
}

const InspirationPage: React.FC<InspirationPageProps> = ({ onSwitchToEditor }) => {
  const { setPrompt } = useWorkflow();
  const { importWorkflow } = useWorkflow();
  const { language, t } = useLanguage();
  
  const [activeCategory, setActiveCategory] = useState(t('all'));
  const [activeFilter, setActiveFilter] = useState<'recent' | 'favorite'>('recent');
  const [activeGridSize, setActiveGridSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('inspiration-grid-size') || '100%';
    }
    return '100%';
  });
  const [animated, setAnimated] = useState(false);
  const [pendingFlip, setPendingFlip] = useState<any>(null);
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (pendingFlip && gridRef.current) {
      const { state } = pendingFlip;
      const flipDuration = 0.6;

      Flip.from(state, {
        absolute: true,
        duration: flipDuration,
        ease: "expo.inOut",
        onComplete: () => {
          setAnimated(false);
        },
        stagger: {
          amount: 0.15,
          from: "random",
        },
      });
      setPendingFlip(null);
    }
  }, [activeGridSize, pendingFlip]);

  // 预设工作流模板
  const workflowTemplates = [
    {
      id: '1',
      title: '人物肖像',
      category: '人物',
      description: '专业的人物肖像摄影工作流，包含完整的拍摄设置和后期处理',
      thumbnail: img1,
      prompt: {
        zh: '专业人物肖像摄影，包含完整的拍摄设置和后期处理流程',
        en: 'Professional portrait photography workflow with complete shooting setup and post-processing'
      },
      nodes: [
        {
          id: 'node-1',
          type: 'imageEditor',
          position: { x: 100, y: 100 },
          data: {
            label: 'Image Editor',
            prompt: 'Professional portrait photography, studio lighting setup, 85mm lens, f/2.8 aperture, ISO 100, natural lighting setup',
            preset: 'imagen-3',
            mode: '内容组合',
            steps: 4
          },
        },
        {
          id: 'node-2',
          type: 'preview',
          position: { x: 500, y: 100 },
          data: {
            label: 'Preview'
          },
        }
      ],
      edges: [
        {
          id: 'edge-1',
          source: 'node-1',
          target: 'node-2',
          animated: true,
          type: 'deletable'
        }
      ]
    },
    {
      id: '2',
      title: '产品摄影',
      category: '场景',
      description: '商业产品摄影工作流，包含产品展示、光影设置和后期处理',
      thumbnail: img2,
      prompt: {
        zh: '商业产品摄影工作流，包含产品展示、光影设置和后期处理流程',
        en: 'Commercial product photography workflow with product display, lighting setup and post-processing'
      },
      nodes: [
        {
          id: 'node-1',
          type: 'imageEditor',
          position: { x: 100, y: 100 },
          data: {
            label: 'Image Editor',
            prompt: 'Commercial product photography, studio lighting, white background, 50mm lens, f/8 aperture, ISO 200',
            preset: 'imagen-3',
            mode: '内容组合',
            steps: 4
          },
        },
        {
          id: 'node-2',
          type: 'preview',
          position: { x: 500, y: 100 },
          data: {
            label: 'Preview'
          },
        }
      ],
      edges: [
        {
          id: 'edge-1',
          source: 'node-1',
          target: 'node-2',
          animated: true,
          type: 'deletable'
        }
      ]
    },
    {
      id: '3',
      title: '风景摄影',
      category: '风格',
      description: '风景摄影工作流，包含自然光拍摄、色彩调整和构图优化',
      thumbnail: img3,
      prompt: {
        zh: '风景摄影工作流，包含自然光拍摄、色彩调整和构图优化流程',
        en: 'Landscape photography workflow with natural lighting, color adjustment and composition optimization'
      },
      nodes: [
        {
          id: 'node-1',
          type: 'imageEditor',
          position: { x: 100, y: 100 },
          data: {
            label: 'Image Editor',
            prompt: 'Landscape photography, golden hour lighting, wide angle lens, f/11 aperture, ISO 100, vivid colors',
            preset: 'imagen-3',
            mode: '内容组合',
            steps: 4
          },
        },
        {
          id: 'node-2',
          type: 'preview',
          position: { x: 500, y: 100 },
          data: {
            label: 'Preview'
          },
        }
      ],
      edges: [
        {
          id: 'edge-1',
          source: 'node-1',
          target: 'node-2',
          animated: true,
          type: 'deletable'
        }
      ]
    },
    {
      id: '4',
      title: '时尚摄影',
      category: '人物',
      description: '时尚摄影工作流，包含时尚拍摄、色彩管理和风格编辑',
      thumbnail: img4,
      prompt: {
        zh: '时尚摄影工作流，包含时尚拍摄、色彩管理和风格编辑流程',
        en: 'Fashion photography workflow with fashion shooting, color management and style editing'
      },
      nodes: [
        {
          id: 'node-1',
          type: 'imageEditor',
          position: { x: 100, y: 100 },
          data: {
            label: 'Image Editor',
            prompt: 'Fashion photography, studio lighting, 85mm lens, f/2.8 aperture, ISO 200, vibrant colors',
            preset: 'imagen-3',
            mode: '内容组合',
            steps: 4
          },
        },
        {
          id: 'node-2',
          type: 'preview',
          position: { x: 500, y: 100 },
          data: {
            label: 'Preview'
          },
        }
      ],
      edges: [
        {
          id: 'edge-1',
          source: 'node-1',
          target: 'node-2',
          animated: true,
          type: 'deletable'
        }
      ]
    },
    {
      id: '5',
      title: '3D渲染',
      category: '技术',
      description: '3D渲染工作流，包含3D建模、材质设置和渲染参数',
      thumbnail: img5,
      prompt: {
        zh: '3D渲染工作流，包含3D建模、材质设置和渲染参数流程',
        en: '3D rendering workflow with 3D modeling, material settings and rendering parameters'
      },
      nodes: [
        {
          id: 'node-1',
          type: 'imageEditor',
          position: { x: 100, y: 100 },
          data: {
            label: 'Image Editor',
            prompt: '3D rendering, high quality, 4K resolution, realistic materials, ambient lighting',
            preset: 'imagen-3',
            mode: '内容组合',
            steps: 4
          },
        },
        {
          id: 'node-2',
          type: 'preview',
          position: { x: 500, y: 100 },
          data: {
            label: 'Preview'
          },
        }
      ],
      edges: [
        {
          id: 'edge-1',
          source: 'node-1',
          target: 'node-2',
          animated: true,
          type: 'deletable'
        }
      ]
    },
    {
      id: '6',
      title: '抽象艺术',
      category: '风格',
      description: '抽象艺术创作工作流，包含创意构图、色彩实验和艺术效果',
      thumbnail: img6,
      prompt: {
        zh: '抽象艺术创作工作流，包含创意构图、色彩实验和艺术效果流程',
        en: 'Abstract art creation workflow with creative composition, color experimentation and artistic effects'
      },
      nodes: [
        {
          id: 'node-1',
          type: 'imageEditor',
          position: { x: 100, y: 100 },
          data: {
            label: 'Image Editor',
            prompt: 'Abstract art, geometric shapes, bold colors, minimalist composition, high contrast',
            preset: 'imagen-3',
            mode: '内容组合',
            steps: 4
          },
        },
        {
          id: 'node-2',
          type: 'preview',
          position: { x: 500, y: 100 },
          data: {
            label: 'Preview'
          },
        }
      ],
      edges: [
        {
          id: 'edge-1',
          source: 'node-1',
          target: 'node-2',
          animated: true,
          type: 'deletable'
        }
      ]
    }
  ];

  // 预设提示词
  const presetPrompts = [
    {
      id: '1',
      title: '人物肖像',
      category: '人物',
      prompt: {
        zh: '专业人物肖像，柔和的自然光，85mm镜头，f/2.8光圈，ISO 100，背景虚化',
        en: 'Professional portrait, soft natural light, 85mm lens, f/2.8 aperture, ISO 100, blurred background'
      },
      tags: ['人物', '肖像', '专业']
    },
    {
      id: '2',
      title: '产品摄影',
      category: '场景',
      prompt: {
        zh: '商业产品摄影，白色背景，50mm镜头，f/8光圈，ISO 200，产品居中',
        en: 'Commercial product photography, white background, 50mm lens, f/8 aperture, ISO 200, centered product'
      },
      tags: ['产品', '商业', '摄影']
    },
    {
      id: '3',
      title: '风景摄影',
      category: '风格',
      prompt: {
        zh: '风景摄影，黄金时刻光线，广角镜头，f/11光圈，ISO 100，鲜艳色彩',
        en: 'Landscape photography, golden hour lighting, wide angle lens, f/11 aperture, ISO 100, vivid colors'
      },
      tags: ['风景', '摄影', '黄金时刻']
    },
    {
      id: '4',
      title: '时尚摄影',
      category: '人物',
      prompt: {
        zh: '时尚摄影，影棚灯光，85mm镜头，f/2.8光圈，ISO 200，鲜艳色彩',
        en: 'Fashion photography, studio lighting, 85mm lens, f/2.8 aperture, ISO 200, vibrant colors'
      },
      tags: ['时尚', '摄影', '影棚']
    },
    {
      id: '5',
      title: '3D渲染',
      category: '技术',
      prompt: {
        zh: '3D渲染，高质量，4K分辨率，真实材质，环境光',
        en: '3D rendering, high quality, 4K resolution, realistic materials, ambient lighting'
      },
      tags: ['3D', '渲染', '高质量']
    },
    {
      id: '6',
      title: '抽象艺术',
      category: '风格',
      prompt: {
        zh: '抽象艺术，几何形状，大胆色彩，极简构图，高对比度',
        en: 'Abstract art, geometric shapes, bold colors, minimalist composition, high contrast'
      },
      tags: ['抽象', '艺术', '极简']
    },
    {
      id: '7',
      title: '90年代复古人像',
      category: '风格',
      thumbnail: imgRetro,
      prompt: {
        zh: '90年代低保真电影人像，带有摇摄运动，画幅4:5，模拟胶片效果。年轻可爱的韩国K-pop偶像，温柔温暖的微笑，脸颊旁做出小小的爱心手势。超大复古彩色针织开衫，Y2K/90年代舒适复古可爱风。大型复古壁镜，贴满可爱的贴纸和拍立得照片。直接闪光灯，清晰的闪光灯阴影，明显的水平运动模糊。富士Superia 800胶片效果，明显的胶片颗粒，低保真暖绿色调。',
        en: '90s lo-fi film portrait with panning motion, 4:5 aspect ratio, film simulation. Young cute Korean K-pop idol, gentle warm smile, small finger heart gesture by cheek. Oversized vintage colorful knit cardigan, Y2K/90s cozy retro cute style. Large vintage wall mirror with cute stickers and polaroid photos. Direct on-camera flash, sharp flash shadows, visible horizontal motion blur. Fuji Superia 800 film effect, noticeable film grain, lo-fi warm green tones.'
      },
      tags: ['复古', '90年代', '胶片']
    },
    {
      id: '8',
      title: '戏剧性超广角',
      category: '风格',
      thumbnail: imgDramatic,
      prompt: {
        zh: '将原始照片转化为一个戏剧性的、逼真的、超广角镜头，具有极端的相机角度（包括从正下方或正上方的视角），其中一个或多个身体部位紧挨着镜头并且看起来巨大，身体的其余部分在透视中后退，并且同一个人在原始环境的一致的、扩展的版本中摆出一个时尚的、复杂的、有力的姿势。',
        en: 'Transform the original photo into a dramatic, realistic, ultra-wide angle shot with extreme camera angles (including views from directly below or above), where one or more body parts are close to the lens and appear massive, the rest of the body recedes in perspective, and the same person strikes a stylish, sophisticated, powerful pose in a consistent, expanded version of the original environment.'
      },
      tags: ['广角', '戏剧性', '透视']
    }
  ];

  // 灵感分类
  const categories = [t('all'), t('people'), t('scenes'), t('styles'), t('tech')];

  const filteredWorkflows = workflowTemplates.filter(item => 
    activeCategory === t('all') || item.category === activeCategory
  );

  const filteredPrompts = presetPrompts.filter(item => 
    activeCategory === t('all') || item.category === activeCategory
  );

  const getCardWidth = () => {
    switch (activeGridSize) {
      case '100%':
        return '400px';
      case '125%':
        return '320px';
      case '150%':
        return '260px';
      default:
        return '320px';
    }
  };

  const cardWidth = getCardWidth();

  const handleUseWorkflow = (workflow: any) => {
    try {
      importWorkflow(workflow);
      onSwitchToEditor();
      toast.success(t('workflow_template_imported'));
    } catch (error) {
      console.error('Failed to import workflow:', error);
      toast.error(t('workflow_import_failed'));
    }
  };

  // 处理使用预设提示词
  const handleUsePrompt = (prompt: string) => {
    try {
      // 设置提示词到全局状态
      setPrompt(prompt);
      onSwitchToEditor();
      toast.success(t('prompt_applied'));
    } catch (error) {
      console.error('Failed to use prompt:', error);
      toast.error(t('prompt_apply_failed'));
    }
  };

  const handleGridSizeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (animated) return;

    const targetSize = e.currentTarget.dataset.size;
    if (!targetSize) return;

    if (targetSize === activeGridSize) return;

    setAnimated(true);

    const allGridItems = document.querySelectorAll('.workflow-item, .prompt-item');
    const state = Flip.getState(allGridItems);

    setPendingFlip({ state });
    setActiveGridSize(targetSize);
    localStorage.setItem('inspiration-grid-size', targetSize);
  };

  return (
    <div className="absolute inset-0 top-[64px] bg-background overflow-y-auto p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">{t('inspiration_library')}</h1>
        <p className="text-muted-foreground text-base">{t('explore_prompts')}</p>
      </div>

      {/* Category and Filter Tabs */}
      <div className="max-w-5xl mx-auto mb-6">
        <div className="flex items-start md:items-center gap-5" style={{ width: '100%', height: '36px' }}>
          <div className="flex flex-grow items-center gap-4">
            <button
              onClick={() => setActiveCategory(t('all'))}
              className={cn(
                "px-2 py-1 font-medium transition-all",
                activeCategory === t('all') 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{ fontSize: '17px', fontWeight: 500, lineHeight: '20px' }}
            >
              {t('all')}
            </button>
            <button
              onClick={() => setActiveCategory(t('people'))}
              className={cn(
                "px-2 py-1 font-medium transition-all",
                activeCategory === t('people') 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{ fontSize: '17px', fontWeight: 500, lineHeight: '20px' }}
            >
              {t('people')}
            </button>
            <button
              onClick={() => setActiveCategory(t('scenes'))}
              className={cn(
                "px-2 py-1 font-medium transition-all",
                activeCategory === t('scenes') 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{ fontSize: '17px', fontWeight: 500, lineHeight: '20px' }}
            >
              {t('scenes')}
            </button>
            <button
              onClick={() => setActiveCategory(t('styles'))}
              className={cn(
                "px-2 py-1 font-medium transition-all",
                activeCategory === t('styles') 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{ fontSize: '17px', fontWeight: 500, lineHeight: '20px' }}
            >
              {t('styles')}
            </button>
            <button
              onClick={() => setActiveCategory(t('tech'))}
              className={cn(
                "px-2 py-1 font-medium transition-all",
                activeCategory === t('tech') 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{ fontSize: '17px', fontWeight: 500, lineHeight: '20px' }}
            >
              {t('tech')}
            </button>
          </div>

          <div className="flex gap-2 bg-card rounded-full p-1">
            <button
              onClick={() => setActiveFilter('recent')}
              className={cn(
                "px-5 py-2 rounded-full font-medium transition-all",
                activeFilter === 'recent' 
                  ? "bg-white text-foreground" 
                  : "bg-white/40 text-muted-foreground hover:text-foreground"
              )}
              style={{ fontSize: '17px', fontWeight: 500, lineHeight: '20px' }}
            >
              {t('recent')}
            </button>
            <button
              onClick={() => setActiveFilter('favorite')}
              className={cn(
                "px-5 py-2 rounded-full font-medium transition-all",
                activeFilter === 'favorite' 
                  ? "bg-white text-foreground" 
                  : "bg-white/40 text-muted-foreground hover:text-foreground"
              )}
              style={{ fontSize: '17px', fontWeight: 500, lineHeight: '20px' }}
            >
              {t('favorites')}
            </button>
          </div>

          {/* Grid Size Tabs */}
          <div className="flex gap-2 bg-card rounded-full p-1">
            <button
              data-size="100%"
              onClick={(e) => handleGridSizeChange(e)}
              className={cn(
                "px-5 py-2 rounded-full font-medium transition-all",
                activeGridSize === '100%' ? "bg-white text-foreground" : "bg-white/40 text-muted-foreground hover:text-foreground"
              )}
              style={{ fontSize: '17px', fontWeight: 500, lineHeight: '20px' }}
            >
              {t('large')}
            </button>
            <button
              data-size="125%"
              onClick={(e) => handleGridSizeChange(e)}
              className={cn(
                "px-5 py-2 rounded-full font-medium transition-all",
                activeGridSize === '125%' ? "bg-white text-foreground" : "bg-white/40 text-muted-foreground hover:text-foreground"
              )}
              style={{ fontSize: '17px', fontWeight: 500, lineHeight: '20px' }}
            >
              {t('medium')}
            </button>
            <button
              data-size="150%"
              onClick={(e) => handleGridSizeChange(e)}
              className={cn(
                "px-5 py-2 rounded-full font-medium transition-all",
                activeGridSize === '150%' ? "bg-white text-foreground" : "bg-white/40 text-muted-foreground hover:text-foreground"
              )}
              style={{ fontSize: '17px', fontWeight: 500, lineHeight: '20px' }}
            >
              {t('small')}
            </button>
          </div>
        </div>
      </div>

      {/* Workflow Templates Section */}
      <section 
        className="max-w-5xl mx-auto flex flex-wrap gap-5 justify-start mt-6 mb-8" 
        ref={gridRef}
        data-size-grid={activeGridSize}
      >
        {filteredWorkflows.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <div className="mb-4 opacity-50">
              <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">{t('no_workflow_templates')}</h3>
            <p className="text-sm">{t('try_other_category')}</p>
          </div>
        ) : (
          <>
            {filteredWorkflows.map((item) => (
              <div 
                key={item.id} 
                className="workflow-item group cursor-pointer"
                style={{ width: cardWidth }}
              >
                <div className="bg-card rounded-[20px] border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  {item.thumbnail && (
                    <div 
                      className="relative w-full h-[160px] overflow-hidden cursor-pointer"
                      onClick={() => { setPreviewImage({ src: item.thumbnail, alt: item.title }); setZoomLevel(1); }}
                    >
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <span className="px-3 py-1 bg-secondary/50 text-xs font-medium text-muted-foreground rounded-full border border-border">
                        {item.category}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {language === 'zh' ? item.description : item.prompt.en}
                      </p>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleUseWorkflow(item)}
                        className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center gap-1 font-medium text-xs shadow-sm hover:shadow"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="whitespace-nowrap">{t('import_workflow')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </section>

      {/* Preset Prompts Section */}
      <section 
        className="max-w-5xl mx-auto flex flex-wrap gap-5 justify-start mt-8" 
        ref={gridRef}
        data-size-grid={activeGridSize}
      >
        {filteredPrompts.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <div className="mb-4 opacity-50">
              <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">{t('no_prompt_presets')}</h3>
            <p className="text-sm">{t('try_other_category')}</p>
          </div>
        ) : (
          <>
            {filteredPrompts.map((item) => (
              <div 
                key={item.id} 
                className="prompt-item group cursor-pointer"
                style={{ width: cardWidth }}
              >
                <div className="bg-card rounded-[20px] border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  {(item as any).thumbnail && (
                    <div 
                      className="relative w-full h-[160px] overflow-hidden cursor-pointer"
                      onClick={() => { setPreviewImage({ src: (item as any).thumbnail, alt: item.title }); setZoomLevel(1); }}
                    >
                      <img 
                        src={(item as any).thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-1">{item.title}</h3>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-secondary/50 text-xs font-medium text-muted-foreground rounded-full border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {language === 'zh' ? item.prompt.zh : item.prompt.en}
                      </p>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleUsePrompt(language === 'zh' ? item.prompt.zh : item.prompt.en)}
                        className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center gap-1 font-medium text-xs shadow-sm hover:shadow"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>{language === 'zh' ? '使用' : 'Use'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </section>

      {/* Image Preview Modal */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer overflow-hidden"
          onClick={() => { setPreviewImage(null); setZoomLevel(1); }}
          onWheel={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            setZoomLevel(prev => Math.min(Math.max(prev + delta, 0.5), 5));
          }}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={(e) => { e.stopPropagation(); setPreviewImage(null); setZoomLevel(1); }}
              className="absolute -top-10 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-white/60 text-sm mb-2 text-center">
              {language === 'zh' ? '滚轮缩放' : 'Scroll to zoom'} | {Math.round(zoomLevel * 100)}%
            </div>
            <img 
              src={previewImage.src} 
              alt={previewImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg cursor-pointer transition-transform duration-100"
              style={{ transform: `scale(${zoomLevel})` }}
              onClick={(e) => { e.stopPropagation(); }}
              draggable={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InspirationPage;