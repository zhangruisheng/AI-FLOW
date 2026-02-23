import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useWorkflow } from "./WorkflowContext";
import { useAssets } from "./AssetsContext";
import { useLanguage } from "./LanguageContext";
import { generateImage, checkLocalServerStatus, isLocalModel, LocalServerStatus } from "../lib/googleAI";
import { toast } from "sonner";
import { getPresetConfig } from "../lib/presets";
import { AI_MODELS } from "../config";
import { Icon } from "./icons";

const defaultOption = { label: { en: 'None', zh: '无' }, value: 'None' };

const facialControls = [
  {
    id: 'gender',
    name: { en: '🚻 Gender', zh: '🚻 性别' },
    options: [
      defaultOption,
      { label: { en: 'Man', zh: '男性' }, value: 'Man' },
      { label: { en: 'Woman', zh: '女性' }, value: 'Woman' },
    ],
  },
  {
    id: 'age',
    name: { en: '🧑 Age', zh: '🧑 年龄' },
    options: [
      defaultOption,
      { label: { en: 'Teenager (13-19)', zh: '青少年 (13-19)' }, value: 'Teenager' },
      { label: { en: 'Young Adult (20-29)', zh: '青年 (20-29)' }, value: 'Young Adult' },
      { label: { en: 'Mid-Young Adult (30-49)', zh: '中青年 (30-49)' }, value: 'Mid-Young Adult' },
      { label: { en: 'Middle-aged Adult (50-69)', zh: '中老年 (50-69)' }, value: 'Middle-aged Adult' },
      { label: { en: 'Senior (70+)', zh: '老年 (70+)' }, value: 'Senior' },
    ],
  },
  {
    id: 'body_weight',
    name: { en: '💪 Body Weight', zh: '💪 体重' },
    options: [
      defaultOption,
      { label: { en: 'Underweight', zh: '瘦' }, value: 'Underweight' },
      { label: { en: 'Normal weight', zh: '正常' }, value: 'Normal weight' },
      { label: { en: 'Overweight', zh: '超重' }, value: 'Overweight' },
      { label: { en: 'Obese', zh: '肥胖' }, value: 'Obese' },
    ],
  },
  {
    id: 'face_shape',
    name: { en: '😊 Face Shape', zh: '😊 脸型' },
    options: [
      defaultOption,
      { label: { en: "Oval", zh: "椭圆形" }, value: "Oval" },
      { label: { en: "Round", zh: "圆形" }, value: "Round" },
      { label: { en: "Square", zh: "方形" }, value: "Square" },
      { label: { en: "Heart-shaped", zh: "心形" }, value: "Heart-shaped" },
      { label: { en: "Long", zh: "长形" }, value: "Long" },
      { label: { en: "Rectangle", zh: "长方形" }, value: "Rectangle" },
      { label: { en: "Triangle", zh: "三角形" }, value: "Triangle" },
      { label: { en: "Inverted Triangle", zh: "倒三角形" }, value: "Inverted Triangle" },
      { label: { en: "Pear-shaped", zh: "梨形" }, value: "Pear-shaped" },
      { label: { en: "Oblong", zh: "长椭圆形" }, value: "Oblong" },
    ],
  },
  {
    id: 'skin_details',
    name: { en: '✨ Skin Details', zh: '✨ 皮肤细节' },
    options: [
      defaultOption,
      { label: { en: 'Smooth skin', zh: '光滑皮肤' }, value: 'Smooth skin' },
      { label: { en: 'Spotted skin', zh: '斑点皮肤' }, value: 'Spotted skin' },
      { label: { en: 'Dull skin', zh: '暗沉皮肤' }, value: 'Dull skin' },
      { label: { en: 'Healthy glow', zh: '健康光泽' }, value: 'Healthy glow' },
      { label: { en: 'Natural skin tone', zh: '自然肤色' }, value: 'Natural skin tone' },
      { label: { en: 'Acne/Freckles', zh: '痘痘/雀斑' }, value: 'Acne/Freckles' },
      { label: { en: 'Wrinkles/Aged look', zh: '皱纹/衰老感' }, value: 'Wrinkles/Aged look' },
    ],
  },
  {
    id: 'skin_texture',
    name: { en: '🧴 Skin Texture', zh: '🧴 皮肤纹理' },
    options: [
      defaultOption,
      { label: { en: 'Flawless skin', zh: '皮肤细腻' }, value: 'Flawless skin' },
      { label: { en: 'Textured skin', zh: '皮肤质感' }, value: 'Textured skin' },
      { label: { en: 'Matte skin', zh: '皮肤磨砂效果' }, value: 'Matte skin' },
      { label: { en: 'Glossy skin', zh: '光泽皮肤' }, value: 'Glossy skin' },
      { label: { en: 'Enhanced detail texture', zh: '细节纹理增强' }, value: 'Enhanced detail texture' },
    ],
  },
  {
    id: 'hairstyle',
    name: { en: '💇 Hairstyle', zh: '💇 发型' },
    options: [
      defaultOption,
      { label: { en: "Asymmetrical cut", zh: "不对称剪裁" }, value: "Asymmetrical cut" },
      { label: { en: "Blunt cut", zh: "直剪" }, value: "Blunt cut" },
      { label: { en: "Bob cut", zh: "波波头" }, value: "Bob cut" },
      { label: { en: "Buzz cut", zh: "寸头" }, value: "Buzz cut" },
      { label: { en: "Choppy cut", zh: "碎发剪裁" }, value: "Choppy cut" },
      { label: { en: "Curtain bangs", zh: "幕帘刘海" }, value: "Curtain bangs" },
      { label: { en: "Faux hawk", zh: "飞机头" }, value: "Faux hawk" },
      { label: { en: "Layered cut", zh: "层次剪裁" }, value: "Layered cut" },
      { label: { en: "Long bob", zh: "长波波头" }, value: "Long bob" },
      { label: { en: "Mohawk", zh: "莫霍克发型" }, value: "Mohawk" },
      { label: { en: "Pixie cut", zh: "精灵短发" }, value: "Pixie cut" },
      { label: { en: "Shag cut", zh: "散乱剪裁" }, value: "Shag cut" },
      { label: { en: "Undercut", zh: "底层剪裁" }, value: "Undercut" },
      { label: { en: "French braids", zh: "法式辫" }, value: "French braids" },
      { label: { en: "Box braids", zh: "盒子辫" }, value: "Box braids" },
      { label: { en: "Dreadlocks", zh: "脏辫" }, value: "Dreadlocks" },
    ],
  },
  {
    id: 'hair_color',
    name: { en: '🎨 Hair Color', zh: '🎨 发色' },
    options: [
      defaultOption,
      { label: { en: "Black", zh: "黑色" }, value: "Black" },
      { label: { en: "Brown", zh: "棕色" }, value: "Brown" },
      { label: { en: "Blonde", zh: "金色" }, value: "Blonde" },
      { label: { en: "Red", zh: "红色" }, value: "Red" },
      { label: { en: "Auburn", zh: "赤褐色" }, value: "Auburn" },
      { label: { en: "Gray", zh: "灰色" }, value: "Gray" },
      { label: { en: "White", zh: "白色" }, value: "White" },
      { label: { en: "Salt and pepper", zh: "灰白混合色" }, value: "Salt and pepper" },
    ],
  },
];

// Import icons - 使用Figma生成的组件中的图标
const icons = {
  // 角色设定图标
  m23zwch: "../.figma/image/mliv6m21-m23zwch.svg",
  a722s7s: "../.figma/image/mliv6m21-a722s7s.svg",
  "2itw43l": "../.figma/image/mliv6m21-2itw43l.svg",
  puqregy: "../.figma/image/mliv6m21-puqregy.svg",
  pm4clce: "../.figma/image/mliv6m21-pm4clce.svg",
  "8d48svb": "../.figma/image/mliv6m21-8d48svb.svg",
  // 面部特征提取图标 (402_5930)
  l9pa8j3: "../.figma/image/mliw1mdp-l9pa8j3.svg",
  i66amv4: "../.figma/image/mliw1mdp-i66amv4.svg",
  s613aei: "../.figma/image/mliw1mdp-s613aei.svg",
  ud8ou86: "../.figma/image/mliw1mdp-ud8ou86.svg",
  wd6pb0b: "../.figma/image/mliw1mdp-wd6pb0b.svg",
  // 姿势参考图标
  n48mtah: "../.figma/image/mliv6m22-n48mtah.svg",
  midq3sr: "../.figma/image/mliv6m2e-midq3sr.png",
  zz79bm9: "../.figma/image/mliv6m22-zz79bm9.svg",
  "30bogp1": "../.figma/image/mliv6m22-30bogp1.svg",
  // 衣服图标
  uj01jhr: "../.figma/image/mliv6m22-uj01jhr.svg",
  lzto829: "../.figma/image/mliv6m2e-lzto829.png",
  t7zyz7a: "../.figma/image/mliv6m22-t7zyz7a.svg",
  // 场景构图图标
  g1khgin: "../.figma/image/mliv6m22-g1khgin.svg",
  "6oypjsa": "../.figma/image/mliv6m22-6oypjsa.svg",
  q66z3w7: "../.figma/image/mliv6m22-q66z3w7.svg",
  // 风格设定图标
  jgbqgyd: "../.figma/image/mliv6m22-jgbqgyd.svg",
  xqjh207: "../.figma/image/mliv6m2e-xqjh207.png",
  b7dzasf: "../.figma/image/mliv6m22-b7dzasf.svg",
  // 其他图标
  e5tcel1: "../.figma/image/mlhua12r-e5tcel1.svg",
  a0vfaom: "../.figma/image/mlhua12r-a0vfaom.svg",
  xife7k4: "../.figma/image/mlhua12r-xife7k4.svg",
  kcnyw7q: "../.figma/image/mlhua12r-kcnyw7q.svg",
  // 生成区域图标
  ijjgawt: "../.figma/image/mlhua12r-ijjgawt.svg",
  ujzvev2: "../.figma/image/mlhua12r-ujzvev2.svg",
  ea31gl8: "../.figma/image/mlhua12r-ea31gl8.svg",
  // 预览区域图标
  jw6f45k: "../.figma/image/mlhua12r-jw6f45k.svg",
  m7bxkp0: "../.figma/image/mlhua12r-m7bxkp0.svg",
  g6hn347: "../.figma/image/mlhua12r-g6hn347.svg",
};

const PROMPT_ENGINEERING_SYSTEM_INSTRUCTION = `
You are a world-class Fashion Editor and Art Director for Vogue, Harper's Bazaar, and cinematic art houses.
Your goal is to engineer a prompt for a generative AI based on the "Fashion Magazine Cover / Movie Poster" template below.

The user will provide:
1.  **Reference Image 1 (Subject)**: The person who must be 100% strictly restored in features.
2.  **Reference Image 2 (Style/Composition)**: The visual language, lighting, and pose to be replicated.
3.  **Optional Text**: Additional context.

### OUTPUT STRUCTURE
Return a JSON object with:
1.  **reasoning**: Brief analysis of how you merged Subject 1 into Style 2.
2.  **visualPrompt**: The final detailed prompt strictly following the template below.

### PROMPT TEMPLATE (Strictly Follow)

"**Photographer Persona**: A defining cinematic fashion image shot by [PHOTOGRAPHER_STYLE_FROM_REF_2] (e.g. Steven Meisel/Paolo Roversi).

**I. Subject Restoration (Critical Priority)**
The subject is **[DETAILED_DESCRIPTION_OF_REF_1_SUBJECT]**.
- **Face**: [EYES], [NOSE], [LIPS], [SKIN_TONE], [AGE] - 100% match to Reference 1.
- **Hair**: [HAIRSTYLE_COLOR_TEXTURE] - 100% match to Reference 1.
- **Body**: [BODY_TYPE] - 100% match to Reference 1.
- **Vibe**: [UNIQUE_EXPRESSION_FROM_REF_1].

**II. Composition & Narrative (Derived from Reference 2)**
- **Shot**: [ANGLE_AND_FRAMING_FROM_REF_2] (e.g. Low angle, full body on industrial stool).
- **Pose**: [EXACT_POSE_FROM_REF_2].
- **Narrative**: [MOOD_FROM_REF_2] (e.g. Meditative elite, aloof authority).

**III. Styling (Avant-Garde High Fashion)**
- **Outfit**: [OUTFIT_DETAILS_FROM_REF_2]. [FABRIC_TEXTURES].
- **Accessories**: [ACCESSORIES_FROM_REF_2].
- **Aesthetic**: 1960-70s retro elite mixed with contemporary avant-garde.

**IV. Setting & Props (Derived from Reference 2)**
- **Props**: [PROPS_FROM_REF_2].
- **Background**: [BACKGROUND_COLOR_AND_TEXTURE_FROM_REF_2].

**V. Technical Aesthetics (Hyper-Realism + Cinematic)**
- **Lighting**: [LIGHTING_SETUP_FROM_REF_2] (e.g. Chiaroscuro, rim light).
- **Color Palette**: [COLORS_FROM_REF_2] (e.g. Desaturated grey/green, subtle gold).
- **Texture**: 4K resolution, visible skin pores, fabric weave, film grain (ISO 400).

**VI. Text Elements (Magazine/Poster)**
- **Typography**: Magazine cover style. Title '[SUGGESTED_TITLE]' in elegant font.
"
`;

function CreationPage({ onSwitchToEditor }: { onSwitchToEditor?: () => void }) {
  const [localServerStatus, setLocalServerStatus] = useState<LocalServerStatus>({ online: false, models: [] });
  const [showModelDropdown, setShowModelDropdown] = useState<boolean>(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const modelButtonRef = useRef<HTMLDivElement>(null);
  const { 
    images, 
    setProcessedImage, 
    prompt, 
    setPrompt, 
    isProcessing, 
    setIsProcessing,
    selectedModel,
    setSelectedModel,
    selectedQuantity,
    setSelectedQuantity,
    selectedAspectRatio,
    setSelectedAspectRatio,
    selectedQuality,
    setSelectedQuality,
    guidanceScale,
    setGuidanceScale,
    seed,
    setSeed,
    facialSelections,
    setFacialSelections,
    enableStates,
    setEnableStates
  } = useWorkflow();
  const { addAsset } = useAssets();
  const { t, language } = useLanguage();
  
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const [showAspectDropdown, setShowAspectDropdown] = useState<boolean>(false);
  const [showQualityDropdown, setShowQualityDropdown] = useState<boolean>(false);
  const aspectButtonRef = useRef<HTMLDivElement>(null);
  const qualityButtonRef = useRef<HTMLDivElement>(null);
  
  const ASPECT_RATIOS = [
    { value: '1:1', label: '1:1', icon: 'square' },
    { value: '16:9', label: '16:9', icon: 'landscape' },
    { value: '9:16', label: '9:16', icon: 'portrait' },
    { value: '4:3', label: '4:3', icon: 'landscape' },
    { value: '3:4', label: '3:4', icon: 'portrait' },
    { value: '3:2', label: '3:2', icon: 'landscape' },
    { value: '2:3', label: '2:3', icon: 'portrait' },
  ];
  
  const QUALITY_OPTIONS = [
    { value: '512', label: '512 (快速)' },
    { value: '1K', label: '1K' },
    { value: '2K', label: '2K' },
    { value: '4K', label: '4K (高清)' },
  ];
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  useEffect(() => {
    setIsProcessing(false);
  }, []);
  
  useEffect(() => {
    const checkServer = async () => {
      const status = await checkLocalServerStatus();
      setLocalServerStatus(status);
    };
    checkServer();
    const interval = setInterval(checkServer, 30000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const updatePosition = () => {
      if (modelButtonRef.current && showModelDropdown) {
        const rect = modelButtonRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.top - 4,
          left: rect.left
        });
      }
    };
    if (showModelDropdown) {
      updatePosition();
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
    }
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [showModelDropdown]);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modelButtonRef.current && !modelButtonRef.current.contains(event.target as Node)) {
        const dropdown = document.getElementById('model-dropdown-portal');
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setShowModelDropdown(false);
        }
      }
      if (aspectButtonRef.current && !aspectButtonRef.current.contains(event.target as Node)) {
        const dropdown = document.getElementById('aspect-dropdown-portal');
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setShowAspectDropdown(false);
        }
      }
      if (qualityButtonRef.current && !qualityButtonRef.current.contains(event.target as Node)) {
        const dropdown = document.getElementById('quality-dropdown-portal');
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setShowQualityDropdown(false);
        }
      }
    };
    if (showModelDropdown || showAspectDropdown || showQualityDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showModelDropdown, showAspectDropdown, showQualityDropdown]);
  
  const handleSelectOption = (controlId: string, value: string) => {
    setFacialSelections(prev => ({ ...prev, [controlId]: value }));
    setOpenDropdown(null);
  };
  
  const getOptionLabel = (controlId: string, value: string) => {
    const control = facialControls.find(c => c.id === controlId);
    if (!control) return value;
    const option = control.options.find(o => o.value === value);
    if (!option) return value;
    return language === 'zh' ? option.label.zh : option.label.en;
  };

  const handleGenerate = async () => {
    console.log('handleGenerate called');
    const enabledSettingsPrompt = buildSettingsPrompt();
    const finalPrompt = enabledSettingsPrompt 
      ? `${enabledSettingsPrompt}\n\nUser additional prompt: ${prompt}` 
      : prompt;

    if (!finalPrompt.trim()) {
      toast.error(t('please_enter_prompt'));
      return;
    }

    try {
      setIsProcessing(true);
      console.log('Selected model:', selectedModel);
      console.log('Selected aspect ratio:', selectedAspectRatio);
      console.log('Selected quality:', selectedQuality);
      
      const recentImageKeys = Object.keys(images).filter(key => key.startsWith('temp-image-'));
      const mostRecentImageKey = recentImageKeys.length > 0 
        ? recentImageKeys.sort().reverse()[0] 
        : null;
      const uploadedImage = mostRecentImageKey ? images[mostRecentImageKey] : null;

      const connectedImages = [];
      if (uploadedImage) {
        const base64Data = uploadedImage.startsWith('data:') 
          ? uploadedImage.split(',')[1] 
          : uploadedImage;
        const mimeType = uploadedImage.startsWith('data:') 
          ? uploadedImage.split(';')[0].split(':')[1] 
          : 'image/png';
        
        connectedImages.push({
          base64: base64Data,
          mimeType: mimeType
        });
      }

      console.log('Generating image with prompt:', finalPrompt);
      console.log('Connected images:', connectedImages.length);

      const result = await generateImage(
        connectedImages,
        finalPrompt,
        {
          imageWeight: 80,
          aspectRatio: selectedAspectRatio,
          model: selectedModel,
          imageSize: selectedQuality as '1K' | '2K' | '4K',
          guidance_scale: guidanceScale,
          seed: seed,
        }
      );

      console.log('Generated image result:', result ? 'success' : 'failed');
      console.log('Result type:', typeof result);
      console.log('Result length:', result?.length);

      if (result && typeof result === 'string' && result.length > 100) {
        const imageData = result.startsWith('data:') ? result : `data:image/png;base64,${result}`;
        console.log('Image data prepared, length:', imageData.length);
        
        const imagesArray = [imageData];
        setGeneratedImages(imagesArray);
        setSelectedImageIndex(0);
        
        imagesArray.forEach((img, index) => {
          const tempResultId = `temp-result-${Date.now()}-${index}`;
          setProcessedImage(tempResultId, img);
          
          addAsset({
            id: tempResultId,
            name: `Generated ${Date.now()}-${index}`,
            type: 'image',
            url: img,
            timestamp: Date.now(),
          });
        });

        toast.success(t('image_generated_success'));
      } else {
        console.error('Invalid result:', result);
        toast.error(t('generation_failed_no_data'));
      }
    } catch (error: any) {
      console.error('Image generation failed:', error);
      toast.error(t('image_generation_failed') + ': ' + (error.message || t('unknown_error')));
    } finally {
      setIsProcessing(false);
    }
  };

  const buildSettingsPrompt = (): string => {
    const parts: string[] = [];
    
    if (enableStates.facialFeatures) {
      const facialParts: string[] = [];
      if (facialSelections.gender !== 'None') {
        facialParts.push(`Gender: ${facialSelections.gender}`);
      }
      if (facialSelections.age !== 'None') {
        facialParts.push(`Age: ${facialSelections.age}`);
      }
      if (facialSelections.body_weight !== 'None') {
        facialParts.push(`Body type: ${facialSelections.body_weight}`);
      }
      if (facialSelections.face_shape !== 'None') {
        facialParts.push(`Face shape: ${facialSelections.face_shape}`);
      }
      if (facialSelections.skin_details !== 'None') {
        facialParts.push(`Skin details: ${facialSelections.skin_details}`);
      }
      if (facialSelections.skin_texture !== 'None') {
        facialParts.push(`Skin texture: ${facialSelections.skin_texture}`);
      }
      if (facialSelections.hairstyle !== 'None') {
        facialParts.push(`Hairstyle: ${facialSelections.hairstyle}`);
      }
      if (facialSelections.hair_color !== 'None') {
        facialParts.push(`Hair color: ${facialSelections.hair_color}`);
      }
      if (facialParts.length > 0) {
        parts.push(`Character settings: ${facialParts.join(', ')}`);
      }
    }
    
    if (enableStates.cameraControl) {
      parts.push('Camera settings: 50mm lens, f/2.8 aperture, 1/125s shutter speed, ISO 100, eye-level angle');
    }
    
    if (enableStates.imageStyle) {
      parts.push('Style: natural photography style, medium depth of field');
    }
    
    return parts.join('. ');
  };

  const toggleEnable = (key: keyof typeof enableStates) => {
    setEnableStates({ ...enableStates, [key]: !enableStates[key] });
  };

  return (
    <div className="w-full h-full flex flex-col bg-background relative z-0" style={{ paddingTop: '60px' }}>
      {/* 主内容区 */}
      <div className="flex flex-1 overflow-hidden gap-[10px] p-[10px]">
        {/* 内容容器 */}
        <div className="flex flex-1 gap-[10px]">
          {/* 左侧面板 - 设定选项 */}
          <div 
            className="flex-shrink-0 flex flex-col gap-[10px] overflow-y-auto items-stretch left-panel-scroll" 
            style={{ 
              width: '480px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
          {/* 角色设定 */}
          <div className="w-full rounded-[20px] px-2 py-4 bg-[rgba(0,0,0,0.03)] dark:bg-[rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="userCircle" size={20} className="text-foreground" />
              <h3 className="text-base font-bold text-foreground">{t('character_settings')}</h3>
            </div>
            
            {/* 面部特征提取 */}
            <div className="w-full rounded-[20px] p-[8px] mb-3 bg-creation-card-bg">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-[6px] flex-1">
                  <Icon name="faceExtract" size={16} className="text-foreground" />
                  <span className="text-[13px] font-medium text-foreground">{t('facial_feature_extraction')}</span>
                </div>
                <button className="flex items-center justify-center rounded-full bg-black/[0.03] dark:bg-white/[0.1]" style={{ width: '36px', height: '36px' }}>
                  <Icon name="plus" size={16} strokeWidth={1.5} className="text-foreground" />
                </button>
                <button className="flex items-center justify-center rounded-full border border-foreground" style={{ width: '36px', height: '36px' }}>
                  <Icon name="refresh" size={16} className="text-foreground" />
                </button>
              </div>
              
              <div className="w-full h-[2px] bg-border mb-3" />
              
              <div className="flex flex-col gap-1 mb-3" ref={dropdownRef}>
                {facialControls.map((control) => (
                  <div key={control.id} className="relative">
                    <div 
                      className="flex items-center justify-between p-2 cursor-pointer rounded-lg" style={{ backgroundColor: 'transparent' }}
                      onClick={() => setOpenDropdown(openDropdown === control.id ? null : control.id)}
                    >
                      <span className="text-[13px] text-foreground">{language === 'zh' ? control.name.zh : control.name.en}</span>
                      <div className="flex items-center gap-[10px]">
                        <span className={`text-[13px] font-medium ${facialSelections[control.id] === 'None' ? 'text-muted-foreground' : 'text-foreground'}`}>
                          {getOptionLabel(control.id, facialSelections[control.id])}
                        </span>
                        <Icon name="chevronDown" size={20} className={`transition-transform ${openDropdown === control.id ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                    
                    {openDropdown === control.id && (
                      <div className="absolute left-0 right-0 top-full mt-1 bg-card rounded-lg shadow-lg border border-border z-50 max-h-48 overflow-y-auto">
                        {control.options.map((option) => (
                          <div
                            key={option.value}
                            className={`px-3 py-2 text-[13px] cursor-pointer hover:bg-muted/50 ${
                              facialSelections[control.id] === option.value 
                                ? 'bg-primary/10 text-primary font-medium' 
                                : 'text-foreground'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectOption(control.id, option.value);
                            }}
                          >
                            {language === 'zh' ? option.label.zh : option.label.en}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="w-full h-[2px] bg-border mb-3" />
              
              <div className="flex items-center justify-end gap-2 px-2 py-[10px]">
                <span className="text-[13px] text-foreground">{t('enable')}</span>
                <div 
                  className={`w-12 h-7 rounded-full p-1 flex cursor-pointer transition-all duration-200 ${enableStates.facialFeatures ? 'bg-primary' : ''}`} style={{ backgroundColor: enableStates.facialFeatures ? undefined : 'rgba(0, 0, 0, 0.05)' }}
                  onClick={() => toggleEnable('facialFeatures')}
                >
                  <div className={`w-5 h-5 rounded-full shadow-md transition-transform duration-200 bg-white dark:bg-[#323232] ${enableStates.facialFeatures ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
              </div>
            </div>
            
            {/* 姿势参考 */}
            <div className="w-full rounded-[16px] p-4 mb-3 bg-creation-card-bg" style={{ marginTop: '8px' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="pose" size={20} className="text-foreground" />
                  <span className="text-sm font-medium text-foreground">{t('pose_reference')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center justify-center rounded-full bg-black/[0.03] dark:bg-white/[0.1]" style={{ width: '36px', height: '36px' }}>
                      <Icon name="refresh" size={20} className="text-foreground" />
                    </button>
                    <button className="flex items-center justify-center rounded-full bg-black/[0.03] dark:bg-white/[0.1]" style={{ width: '36px', height: '36px' }}>
                    <Icon name="plus" size={20} className="text-foreground" />
                  </button>
                </div>
              </div>
              
              <div className="w-full h-[2px] bg-border mb-4" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-20 h-24 rounded-lg bg-muted flex items-center justify-center overflow-hidden border border-primary">
                  <img src="../.figma/image/mliv6m2e-midq3sr.png" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="w-full h-[2px] bg-border mb-4" />
              
              <div className="flex items-center justify-between px-2">
                <span className="text-sm font-medium text-foreground">{t('enable')}</span>
                <div 
                  className={`w-12 h-7 rounded-full p-1 flex cursor-pointer transition-all duration-200 ${enableStates.poseReference ? 'bg-primary' : ''}`} style={{ backgroundColor: enableStates.poseReference ? undefined : 'rgba(0, 0, 0, 0.05)' }}
                  onClick={() => toggleEnable('poseReference')}
                >
                  <div className={`w-5 h-5 rounded-full shadow-md transition-transform duration-200 bg-white dark:bg-[#323232] ${enableStates.poseReference ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
              </div>
            </div>
            
            {/* 衣服 */}
            <div className="w-full rounded-[16px] p-4 bg-creation-card-bg" style={{ marginTop: '8px' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="tshirt" size={20} className="text-foreground" />
                  <span className="text-sm font-medium text-foreground">{t('clothing')}</span>
                </div>
                <button className="flex items-center justify-center rounded-full bg-black/[0.03] dark:bg-white/[0.1]" style={{ width: '36px', height: '36px' }}>
                  <Icon name="plus" size={20} className="text-foreground" />
                </button>
              </div>
              
              <div className="w-full h-[2px] bg-border mb-4" />
              
              <div className="flex flex-wrap gap-3 mb-4 px-2">
                <span className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">{t('all')}</span>
                <span className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">{t('tops_outerwear')}</span>
                <span className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">{t('bottoms')}</span>
                <span className="px-4 py-2 rounded-full bg-foreground text-sm font-medium text-card">{t('dresses')}</span>
                <span className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">{t('footwear')}</span>
                <span className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">{t('accessories')}</span>
                <span className="px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground">{t('other')}</span>
              </div>
              
              <div className="flex items-center gap-3 mb-4 px-2">
                <div className="w-24 h-24 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                  <img src="../.figma/image/mliv6m2e-lzto829.png" className="w-full h-full object-cover" />
                </div>
                <button className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted">
                  <Icon name="plus" size={24} className="text-foreground" />
                </button>
              </div>
              
              <div className="w-full h-[2px] bg-border mb-4" />
              
              <div className="flex items-center justify-between px-2">
                <span className="text-sm font-medium text-foreground">{t('enable')}</span>
                <div 
                  className={`w-12 h-7 rounded-full p-1 flex cursor-pointer transition-all duration-200 ${enableStates.clothing ? 'bg-primary' : ''}`} style={{ backgroundColor: enableStates.clothing ? undefined : 'rgba(0, 0, 0, 0.05)' }}
                  onClick={() => toggleEnable('clothing')}
                >
                  <div className={`w-5 h-5 rounded-full shadow-md transition-transform duration-200 bg-white dark:bg-[#323232] ${enableStates.clothing ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 场景构图 */}
          <div className="w-full rounded-[20px] px-2 py-4 bg-[rgba(0,0,0,0.03)] dark:bg-[rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="userCircle" size={20} className="text-foreground" />
              <h3 className="text-base font-bold text-foreground">{t('scene_composition')}</h3>
            </div>
            
            {/* 相机控制 */}
            <div className="rounded-[20px] p-[8px] mb-3 bg-creation-card-bg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="cameraControl" size={20} className="text-foreground" />
                  <span className="text-sm font-medium text-foreground">{t('camera_control')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center justify-center rounded-full border border-foreground" style={{ width: '36px', height: '36px' }}>
                    <Icon name="settings" size={20} className="text-foreground" />
                  </button>
                </div>
              </div>
              
              <div className="w-full h-[2px] bg-border mb-4" />
              
              <div className="grid grid-cols-1 gap-1 mb-4">
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">🔭 {t('lens_type')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{t('none')}</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">📏 {t('focal_length')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">50mm</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">⚙️ {t('aperture')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">f/2.8</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">⏱️ {t('shutter_speed')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">1/125s</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">🎞️ {t('iso_value')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">100</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">📐 {t('shooting_angle')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{t('eye_level')}</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
              </div>
              
              <div className="w-full h-[2px] bg-border mb-4" />
              
              <div className="flex items-center justify-between px-2">
                <span className="text-sm font-medium text-foreground">{t('enable')}</span>
                <div 
                  className={`w-12 h-7 rounded-full p-1 flex cursor-pointer transition-all duration-200 ${enableStates.cameraControl ? 'bg-primary' : ''}`} style={{ backgroundColor: enableStates.cameraControl ? undefined : 'rgba(0, 0, 0, 0.05)' }}
                  onClick={() => toggleEnable('cameraControl')}
                >
                  <div className={`w-5 h-5 rounded-full shadow-md transition-transform duration-200 bg-white dark:bg-[#323232] ${enableStates.cameraControl ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
              </div>
            </div>
            
            {/* 图像风格 */}
            <div className="rounded-[20px] p-[8px] bg-white dark:bg-[#323232]" style={{ marginTop: '8px' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="imageStyle" size={20} className="text-foreground" />
                  <span className="text-sm font-medium text-foreground">{t('image_style')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center justify-center rounded-full bg-black/[0.03] dark:bg-white/[0.1]" style={{ width: '36px', height: '36px' }}>
                      <Icon name="refresh" size={20} className="text-foreground" />
                    </button>
                    <button className="flex items-center justify-center rounded-full border border-foreground" style={{ width: '36px', height: '36px' }}>
                    <Icon name="settings" size={20} className="text-foreground" />
                  </button>
                </div>
              </div>
              
              <div className="w-full h-[2px] bg-border mb-4" />
              
              <div className="grid grid-cols-1 gap-1 mb-4">
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">🖼️ {t('portrait_type')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{t('none')}</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">🎨 {t('imaging_style')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{t('natural')}</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">🎭 {t('art_style')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{t('none')}</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">🖌️ {t('art_effect')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{t('none')}</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">🏞️ {t('depth_of_field')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{t('medium')}</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">✨ {t('photo_effect')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{t('none')}</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">🪄 {t('special_effect')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{t('none')}</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-sm text-foreground">🔧 {t('post_processing')}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{t('none')}</span>
                    <Icon name="chevronDown" size={16} className="text-muted-foreground" />
                  </div>
                </div>
              </div>
              
              <div className="w-full h-[2px] bg-border mb-4" />
              
              <div className="flex items-center justify-between px-2">
                <span className="text-sm font-medium text-foreground">{t('enable')}</span>
                <div 
                  className={`w-12 h-7 rounded-full p-1 flex cursor-pointer transition-all duration-200 ${enableStates.imageStyle ? 'bg-primary' : ''}`} style={{ backgroundColor: enableStates.imageStyle ? undefined : 'rgba(0, 0, 0, 0.05)' }}
                  onClick={() => toggleEnable('imageStyle')}
                >
                  <div className={`w-5 h-5 rounded-full shadow-md transition-transform duration-200 bg-white dark:bg-[#323232] ${enableStates.imageStyle ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 风格设定 */}
          <div className="w-full rounded-[20px] px-2 py-4 bg-[rgba(0,0,0,0.03)] dark:bg-[rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="wand" size={20} className="text-foreground" />
              <h3 className="text-base font-bold text-foreground">{t('style_settings')}</h3>
            </div>
            
            {/* 视觉解构 */}
            <div className="rounded-[20px] p-[8px] mb-3 bg-creation-card-bg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="wand" size={20} className="text-foreground" />
                  <span className="text-sm font-medium text-foreground">{t('visual_deconstruction')}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center overflow-hidden outline outline-1 outline-primary">
                  <img src="../.figma/image/mliv6m2e-xqjh207.png" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center justify-center rounded-full bg-black/[0.03] dark:bg-white/[0.1]" style={{ width: '36px', height: '36px' }}>
                    <Icon name="refresh" size={20} className="text-foreground" />
                  </button>
                </div>
              </div>
              
              <div className="w-full h-[2px] bg-border mb-4" />
              
              <div className="grid grid-cols-2 gap-4 mb-4 px-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{t('english')}</span>
                  <span className="text-sm text-muted-foreground">{t('chinese')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{t('description')}</span>
                  <span className="text-sm text-muted-foreground">{t('matrix')}</span>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-3 mb-4 mx-2">
                <p className="text-sm text-foreground">Cinematic mirror selfie of an elegant woman in a shimmering champagne gown holding a vintage camera. Dressing room setting with soft studio lighting, Dutch angle composition, and shallow depth of field. High-end fashion aesthetic with bokeh backstage details.</p>
              </div>
              
              <div className="w-full h-[2px] bg-border mb-4" />
              
              <div className="flex items-center justify-between px-2">
                <span className="text-sm font-medium text-foreground">{t('enable')}</span>
                <div 
                  className={`w-12 h-7 rounded-full p-1 flex cursor-pointer transition-all duration-200 ${enableStates.visualDeconstruction ? 'bg-primary' : ''}`} style={{ backgroundColor: enableStates.visualDeconstruction ? undefined : 'rgba(0, 0, 0, 0.05)' }}
                  onClick={() => toggleEnable('visualDeconstruction')}
                >
                  <div className={`w-5 h-5 rounded-full shadow-md transition-transform duration-200 bg-white dark:bg-[#323232] ${enableStates.visualDeconstruction ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
              </div>
            </div>
            
            {/* 提示词预设 */}
            <div className="rounded-[20px] p-[8px] bg-white dark:bg-[#323232]" style={{ marginTop: '8px' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="wand" size={20} className="text-foreground" />
                  <span className="text-sm font-medium text-foreground">{t('prompt_preset')}</span>
                </div>
                <button className="flex items-center justify-center rounded-full bg-black/[0.03] dark:bg-white/[0.1]" style={{ width: '36px', height: '36px' }}>
                  <Icon name="plus" size={20} className="text-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧面板 - 生成结果 */}
        <div className="flex-1 flex flex-col p-[10px] overflow-y-auto rounded-[20px] bg-[rgba(0,0,0,0.03)] dark:bg-[rgba(255,255,255,0.05)]">
          {/* 生成结果标题和操作按钮 */}
          <div className="flex items-start justify-between w-full mb-4">
            <div className="flex items-center justify-center gap-2 rounded-[11px] bg-muted px-3 py-2">
              <span className="text-[13px] font-medium text-foreground">{t('generation_results')}</span>
            </div>
          </div>
          
          {/* 主预览区域 - 缩略图叠在右侧 */}
          <div className="flex-1 flex items-start justify-between gap-4 relative min-h-[300px]">
            {/* 主预览图 */}
            <div className="flex-1 flex items-center justify-center w-full h-full">
              {generatedImages.length > 0 && generatedImages[selectedImageIndex] && generatedImages[selectedImageIndex].length > 100 ? (
                <img 
                  src={generatedImages[selectedImageIndex]} 
                  className="rounded-xl object-contain max-w-full max-h-[400px]" 
                  alt="Generated result"
                  onError={(e) => {
                    console.error('Image loading failed');
                    setGeneratedImages([]);
                    toast.error('图片加载失败，请重试');
                  }}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full min-h-[300px] text-muted-foreground">
                  <span>{t('no_generated_images')}</span>
                </div>
              )}
            </div>
            
            {/* 生成结果缩略图 - 叠在右侧 */}
            {generatedImages.length > 0 && (
              <div className="flex flex-col gap-1 absolute right-0 top-0">
                {generatedImages.map((img, index) => (
                  <div 
                    key={index}
                    className={`flex items-center rounded-xl p-[3px] cursor-pointer ${selectedImageIndex === index ? 'border border-black' : ''}`}
                    style={{ width: '56px' }}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img src={img} className="w-12 h-12 rounded-lg object-cover" alt={`Result ${index + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* 提示词输入区域 */}
          <div className="rounded-[24px] border border-border px-4 py-4 bg-creation-card-bg">
            <div className="mb-3">
              <p className="text-[13px] font-medium text-foreground mb-2">{t('prompt_supplement')}</p>
              <textarea
                className="w-full h-[100px] resize-none border-none focus:ring-0 bg-transparent outline-none font-normal text-foreground text-sm"
                placeholder={t('describe_image')}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            
            {/* 选项和生成按钮 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* 模型选择 */}
                <div className="relative" ref={modelButtonRef}>
                  <div 
                    className="flex items-center gap-1 rounded-full bg-muted border border-border px-4 h-10 cursor-pointer hover:bg-muted/80 transition-colors"
                    onClick={() => setShowModelDropdown(!showModelDropdown)}
                  >
                    <Icon name="settings" size={16} className="text-foreground" />
                    <span className="text-xs text-muted-foreground max-w-[120px] truncate">
                      {AI_MODELS.SUPPORTED_MODELS.find(m => m.id === selectedModel)?.label || selectedModel}
                    </span>
                    {isLocalModel(selectedModel) && (
                      <span className={`w-2 h-2 rounded-full ${localServerStatus.online ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    )}
                    <Icon name="chevronUp" size={12} className="text-muted-foreground" />
                  </div>
                  
                  {showModelDropdown && createPortal(
                    <div 
                      id="model-dropdown-portal"
                      className="fixed bg-card rounded-lg shadow-lg border border-border z-[9999] min-w-[200px] max-h-64 overflow-y-auto"
                      style={{ 
                        top: dropdownPosition.top,
                        left: dropdownPosition.left,
                        transform: 'translateY(-100%)'
                      }}
                    >
                      {AI_MODELS.SUPPORTED_MODELS.map((model) => {
                        const isLocal = model.type === 'local';
                        const isDisabled = isLocal && !localServerStatus.online;
                        
                        return (
                          <div
                            key={model.id}
                            className={`px-3 py-2 text-xs cursor-pointer flex items-center justify-between ${
                              isDisabled 
                                ? 'text-muted-foreground cursor-not-allowed' 
                                : selectedModel === model.id 
                                  ? 'bg-primary/10 text-primary font-medium' 
                                  : 'text-foreground hover:bg-muted'
                            }`}
                            onClick={() => {
                              if (!isDisabled) {
                                setSelectedModel(model.id);
                                setShowModelDropdown(false);
                              }
                            }}
                          >
                            <span>{model.label}</span>
                            {isLocal && (
                              <span className={`w-2 h-2 rounded-full ${localServerStatus.online ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            )}
                          </div>
                        );
                      })}
                      {!localServerStatus.online && (
                        <div className="px-3 py-2 text-xs text-muted-foreground border-t border-border">
                          {t('local_server_offline')}
                        </div>
                      )}
                    </div>,
                    document.body
                  )}
                </div>
                
                {/* 数量选择 */}
                <div className="flex items-center gap-2 rounded-full bg-muted border border-border px-4 h-10">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">{t('quantity')}</span>
                  <div className="flex items-center gap-1">
                    <div 
                      className={`flex items-center justify-center rounded-lg ${selectedQuantity === 1 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                      style={{ width: '28px', height: '28px' }}
                      onClick={() => setSelectedQuantity(1)}
                    >
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div 
                      className={`flex items-center justify-center rounded-lg ${selectedQuantity === 2 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                      style={{ width: '28px', height: '28px' }}
                      onClick={() => setSelectedQuantity(2)}
                    >
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div 
                      className={`flex items-center justify-center rounded-lg ${selectedQuantity === 4 ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                      style={{ width: '28px', height: '28px' }}
                      onClick={() => setSelectedQuantity(4)}
                    >
                      <span className="text-xs font-bold">4</span>
                    </div>
                  </div>
                </div>
                
                {/* 比例选择 */}
                <div className="relative" ref={aspectButtonRef}>
                  <div 
                    className="flex items-center gap-2 rounded-full bg-muted border border-border px-4 h-10 cursor-pointer hover:bg-muted/80 transition-colors"
                    onClick={() => setShowAspectDropdown(!showAspectDropdown)}
                  >
                    <div className={`border-2 border-primary ${selectedAspectRatio === '1:1' ? 'w-4 h-4 rounded-md' : selectedAspectRatio === '9:16' || selectedAspectRatio === '2:3' ? 'w-3 h-4 rounded-sm' : 'w-4 h-3 rounded-sm'}`}></div>
                    <span className="text-xs font-bold text-foreground">{selectedAspectRatio}</span>
                    <Icon name="chevronUp" size={12} className="text-muted-foreground" />
                  </div>
                  
                  {showAspectDropdown && createPortal(
                    <div 
                      id="aspect-dropdown-portal"
                      className="fixed bg-card rounded-lg shadow-lg border border-border z-[9999] min-w-[120px] p-2"
                      style={{ 
                        top: aspectButtonRef.current ? aspectButtonRef.current.getBoundingClientRect().top - 4 : 0,
                        left: aspectButtonRef.current ? aspectButtonRef.current.getBoundingClientRect().left : 0,
                        transform: 'translateY(-100%)'
                      }}
                    >
                      <div className="grid grid-cols-4 gap-1">
                        {ASPECT_RATIOS.map((ratio) => (
                          <div
                            key={ratio.value}
                            className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-colors ${
                              selectedAspectRatio === ratio.value 
                                ? 'bg-primary/10 text-primary' 
                                : 'text-foreground hover:bg-muted'
                            }`}
                            onClick={() => {
                              setSelectedAspectRatio(ratio.value);
                              setShowAspectDropdown(false);
                            }}
                          >
                            <div className={`border-2 ${ratio.value === '1:1' ? 'w-4 h-4 rounded-md' : ratio.value === '9:16' || ratio.value === '2:3' ? 'w-3 h-4 rounded-sm' : 'w-4 h-3 rounded-sm'} ${selectedAspectRatio === ratio.value ? 'border-primary' : 'border-foreground'}`}></div>
                            <span className="text-[10px] mt-1">{ratio.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>,
                    document.body
                  )}
                </div>
                
                {/* 质量选择 */}
                <div className="relative" ref={qualityButtonRef}>
                  <div 
                    className="flex items-center gap-2 rounded-full bg-muted border border-border px-4 h-10 cursor-pointer hover:bg-muted/80 transition-colors"
                    onClick={() => setShowQualityDropdown(!showQualityDropdown)}
                  >
                    <Icon name="sparkle" size={14} className="text-foreground" />
                    <span className="text-xs font-bold text-foreground">{selectedQuality}</span>
                    <Icon name="chevronUp" size={12} className="text-muted-foreground" />
                  </div>
                  
                  {showQualityDropdown && createPortal(
                    <div 
                      id="quality-dropdown-portal"
                      className="fixed bg-card rounded-lg shadow-lg border border-border z-[9999] min-w-[120px] overflow-hidden"
                      style={{ 
                        top: qualityButtonRef.current ? qualityButtonRef.current.getBoundingClientRect().top - 4 : 0,
                        left: qualityButtonRef.current ? qualityButtonRef.current.getBoundingClientRect().left : 0,
                        transform: 'translateY(-100%)'
                      }}
                    >
                      {QUALITY_OPTIONS.map((quality) => (
                        <div
                          key={quality.value}
                          className={`px-3 py-2 text-xs cursor-pointer ${
                            selectedQuality === quality.value 
                              ? 'bg-primary/10 text-primary font-medium' 
                              : 'text-foreground hover:bg-muted'
                          }`}
                          onClick={() => {
                            setSelectedQuality(quality.value);
                            setShowQualityDropdown(false);
                          }}
                        >
                          {quality.label}
                        </div>
                      ))}
                    </div>,
                    document.body
                  )}
                </div>
              </div>
              
              {/* 生成按钮 */}
              <button 
                type="button"
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-7 h-10 hover:opacity-90 transition-opacity relative z-10"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Button clicked!');
                  handleGenerate();
                }}
                style={{ opacity: isProcessing ? 0.7 : 1 }}
                disabled={isProcessing}
              >
                <Icon name="sparkle" size={20} className="text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">{isProcessing ? t('generating') : t('generate')}</span>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CreationPage;