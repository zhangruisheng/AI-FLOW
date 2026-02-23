import { Handle, Position, NodeProps, NodeResizer } from '@xyflow/react';
import { useState, useRef } from 'react';
import { useWorkflow } from '../WorkflowContext';
import { Maximize2, Minimize2 } from 'lucide-react';
import svgPaths from '../../imports/svg-n2nlgz1fte';
import AddNodeButton from './AddNodeButton';
import NodeToolbar from './NodeToolbar';
import { useLanguage } from '../LanguageContext';

export default function ImageInputNode({ data, id, selected }: NodeProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { images, setImage } = useWorkflow();
  const { t } = useLanguage();
  
  // Get current image: uploaded image takes precedence over default
  const uploadedImage = images[id];
  const defaultImage = data?.image;
  const currentImage = uploadedImage || defaultImage;
  const hasImage = !!currentImage;

  // Handlers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setImage(id, imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <NodeResizer 
        color="transparent" 
        handleClassName="opacity-0 hover:opacity-100 transition-opacity"
        handleStyle={{
            width: 8,
            height: 8,
            borderRadius: 2,
            border: "1px solid var(--primary)",
            backgroundColor: "var(--background)",
        }}
        lineStyle={{
            borderWidth: 1,
            borderColor: "var(--primary)",
            opacity: 0.5,
        }}
        isVisible={selected} 
        minWidth={240}
        minHeight={200}
      />
      <div className="flex gap-[10px] items-center relative h-full w-full">
        {/* Node Toolbar - shown when selected */}
        {selected && (
          <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 z-50">
            <NodeToolbar nodeId={id} />
          </div>
        )}
        
        <div 
          className="backdrop-blur-[10px] bg-card box-border flex flex-col gap-[2px] items-start p-[4px] rounded-[20px] border border-border transition-all duration-300 group relative w-full h-full min-w-[240px] min-h-[200px]"
        >
          {/* Image Container */}
          <div className="basis-0 flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
            {hasImage ? (
              // State: Image Uploaded/Loaded
              <div className="basis-0 flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[16px] shrink-0 w-full group">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
                  <img 
                    alt="Image input" 
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                    src={currentImage} 
                  />
                  {/* Replace Image Button - shown on hover */}
                  <button
                    onClick={handleUploadClick}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-[4px] bg-black/40 backdrop-blur-md rounded-full px-[16px] py-[8px]">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                          <path d="M1.875 7.92507L11.625 12.4251" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M11.1148 3.02238C12.0908 2.04497 13.6731 2.04451 14.649 3.02042L16.7262 5.09757C17.6937 6.06517 17.7034 7.63155 16.7476 8.61222L9.05428 16.5048C8.4266 17.1488 7.56616 17.5127 6.66756 17.5126H4.37362C3.18994 17.5123 2.24473 16.5253 2.29452 15.3417L2.39315 13.0009C2.42836 12.166 2.7764 11.3745 3.36678 10.7831L11.1148 3.02238ZM17.0963 15.786C17.5562 15.786 17.9291 16.1588 17.9293 16.6191C17.9293 17.0795 17.5563 17.453 17.0963 17.453H11.9947C11.5349 17.4528 11.1627 17.0793 11.1627 16.6191C11.1629 16.159 11.535 15.7863 11.9947 15.786H17.0963ZM4.54452 11.9609C4.24935 12.2566 4.07575 12.6528 4.05819 13.0702L3.95955 15.411C3.9496 15.6478 4.1388 15.8446 4.37557 15.8446L6.66952 15.8456C7.11864 15.8455 7.54913 15.6636 7.86287 15.3417L13.1627 9.90421L9.87752 6.61906L4.54452 11.9609ZM13.4722 4.19913C13.1469 3.87382 12.6179 3.8743 12.2926 4.20011L11.0543 5.43937L14.3258 8.71085L15.5562 7.44913C15.8746 7.12222 15.8709 6.59874 15.5484 6.27628L13.4722 4.19913Z" fill="white" />
                        </svg>
                      </div>
                      <span className="text-white font-medium text-sm">{t('replace_image')}</span>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              // State: Upload Placeholder (No Image)
              <div className="basis-0 bg-secondary flex flex-col grow items-start min-h-px min-w-px relative rounded-[16px] shrink-0 w-full">
                <div className="basis-0 flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
                  {/* Vertical Divider */}
                  <div
                    className="absolute h-[80px] right-[-5px] top-[calc(50%-0.36px)] translate-y-[-50%] w-[2px]"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 0%, var(--card) 50%, transparent 100%)'
                    }}
                  />
                  
                  {/* Upload Button Container */}
                  <div className="basis-0 flex grow items-start justify-center min-h-[157.371px] min-w-[157.371px] overflow-clip relative rounded-[16px] shrink-0 w-full">
                    <button
                      onClick={handleUploadClick}
                      className="absolute flex flex-col gap-[10px] items-center justify-center left-1/2 top-[calc(50%+0.64px)] translate-x-[-50%] translate-y-[-50%] cursor-pointer hover:opacity-70 transition-opacity"
                    >
                      {/* Upload Icon */}
                      <div className="relative shrink-0 size-[32px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                          <path d={svgPaths.p45b6000} fill="var(--foreground)" />
                          <path d={svgPaths.p3f4a3300} stroke="var(--foreground)" strokeLinecap="round" strokeWidth="3" />
                        </svg>
                      </div>
                      
                      {/* Upload Text */}
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-center text-nowrap">
                        <p className="leading-[22.499px] underline whitespace-pre decoration-solid underline-offset-2 text-foreground font-sans">{t('upload_image')}</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer - Node Label and Type */}
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-end size-full">
              <div className="box-border flex gap-[4px] items-end px-[8px] py-[4px] relative w-full">
                {/* Left: Icon + Label */}
                <div className="basis-0 flex gap-[8px] grow h-[24.72px] items-center min-h-px min-w-px overflow-clip relative shrink-0">
                  {/* Icon Container */}
                  <div className="flex gap-[10px] items-center justify-center relative shrink-0 size-[20px]">
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path clipRule="evenodd" d={svgPaths.p9a6a300} fill="var(--foreground)" fillRule="evenodd" />
                        <path d={svgPaths.p3c3abd80} stroke="var(--foreground)" strokeWidth="1.125" />
                        <path d={svgPaths.p22723b00} fill="var(--foreground)" stroke="var(--foreground)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Node Label */}
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-nowrap">
                    <p className="leading-[22.499px] whitespace-pre text-[length:var(--text-h2)] font-bold text-foreground font-sans">{t('image_input')}</p>
                  </div>
                </div>
                {/* Type Label */}
                <div className="flex gap-[4px] items-center relative shrink-0">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-nowrap">
                    <p className="leading-[22.499px] whitespace-pre text-muted-foreground text-[length:var(--text-h3)] font-sans">{t('images')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Divider and Add Node Button - shown on hover */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-[50%] z-50">
            <div 
              className="h-[80px] w-px"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, var(--card) 50%, transparent 100%)'
              }}
            />
            <AddNodeButton sourceNodeId={id} sourceHandlePosition={{ x: 0, y: 0 }} />
          </div>
          
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          
          {/* Output Handle */}
          <Handle 
            type="source" 
            position={Position.Right} 
            className="!w-[16px] !h-[16px] !bg-primary !border-[1.5px] !border-card !right-[-12px] !rounded-full"
          />
        </div>
      </div>
    </>
  );
}