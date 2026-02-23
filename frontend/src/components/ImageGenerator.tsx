import React, { useState, useRef } from 'react';
import { useWorkflow } from './WorkflowContext';
import { generateImage } from '../lib/googleAI';
import { toast } from 'sonner';

interface ImageGeneratorProps {
  className?: string;
}

export default function ImageGenerator({ className = '' }: ImageGeneratorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setIsProcessing, isProcessing, setProcessedImage } = useWorkflow();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('变换姿势');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setUploadedImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleGenerate = async () => {
    if (!uploadedImage) {
      toast.error('请先上传图片');
      return;
    }

    if (!prompt) {
      toast.error('请输入提示词');
      return;
    }

    try {
      setIsProcessing(true);

      // Convert uploaded image to ImagePart format
      const base64Data = uploadedImage.split(',')[1];
      const mimeType = uploadedImage.split(';')[0].split(':')[1];

      const connectedImages = [{
        base64: base64Data,
        mimeType: mimeType
      }];

      console.log('Generating image with prompt:', prompt);
      console.log('Uploaded image:', uploadedImage);

      const result = await generateImage(
        connectedImages,
        prompt,
        {
          imageWeight: 80,
          aspectRatio: '9:16',
          model: 'doubao-seedream-4-5-251128',
          imageSize: '2K',
          sequential_image_generation: 'disabled',
          guidance_scale: 7,
          seed: 0
        }
      );

      console.log('Generated image result:', result);
      setGeneratedImage(result);
      
      // Also save to processed images
      setProcessedImage('image-generator', result);

      toast.success('生成完成！');
    } catch (error: any) {
      console.error('Generation error:', error);
      toast.error(error.message || '生成失败，请重试');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      {/* Uploaded Image Preview */}
      <div className="w-full max-w-2xl">
        <h3 className="text-lg font-medium mb-2">上传的图片</h3>
        <div 
          className="flex-1 w-full relative min-h-0 my-2 overflow-hidden bg-secondary rounded-[14px] border border-border cursor-pointer hover:bg-secondary/80 transition-colors z-10"
          onClick={(e) => {
            e.stopPropagation();
            console.log('Upload area clicked');
            handleUploadClick();
          }}
          style={{ height: '300px' }}
        >
          {uploadedImage ? (
            <div className="relative h-full w-full">
              <img 
                alt="上传的图片" 
                className="absolute inset-0 size-full object-contain pointer-events-none rounded-[8px] transition-transform duration-75 ease-out"
                src={uploadedImage}
              />
              <div 
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Change image area clicked');
                  handleUploadClick();
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-foreground font-medium">点击更换图片</p>
                </div>
              </div>
            </div>
          ) : (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-secondary/50 rounded-[14px]"
              onClick={(e) => {
                e.stopPropagation();
                console.log('Placeholder area clicked');
                handleUploadClick();
              }}
            >
              <div className="text-center">
                <div className="mb-2">
                  <div 
                    className="bg-secondary content-stretch flex flex-col items-center justify-center overflow-clip pb-[1.5px] relative rounded-[14px] shadow-[0px_0px_0px_1px_var(--border)] shrink-0 size-[64px] mx-auto cursor-pointer hover:bg-secondary/80 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Icon area clicked');
                      handleUploadClick();
                    }}
                  >
                    <div className="h-[18.286px] relative shrink-0 w-[16px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 16 18.2857">
                        <path d="M8 16.7619V3.04758" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                        <path d="M1.14286 9.90473H14.8571" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p 
                  className="text-muted-foreground"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Text area clicked');
                    handleUploadClick();
                  }}
                >
                  点击上传图片
                </p>
              </div>
            </div>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Prompt Input */}
      <div className="w-full max-w-2xl">
        <h3 className="text-lg font-medium mb-2">提示词</h3>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full px-4 py-2 bg-secondary/50 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="输入提示词..."
        />
      </div>

      {/* Generate Button */}
      <div className="w-full max-w-2xl">
        <button
          onClick={handleGenerate}
          disabled={isProcessing || !uploadedImage}
          className="w-full flex items-center justify-center gap-[8px] h-full px-[28px] py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="relative shrink-0 size-[20px]">
            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
              <g>
                <path clipRule="evenodd" d="M12.2474 3.07728C12.5919 2.02981 14.0736 2.02981 14.4181 3.07728L15.4503 6.2158L18.5889 7.24797C19.6363 7.59247 19.6363 9.07422 18.5889 9.41872L15.4503 10.4509L14.4181 13.5894C14.0736 14.6369 12.5919 14.6369 12.2474 13.5894L11.2152 10.4509L8.07669 9.41872C7.02923 9.07422 7.02923 7.59247 8.07669 7.24797L11.2152 6.2158L12.2474 3.07728Z" fill="white" fillRule="evenodd"></path>
                <path d="M7.6634 10.5137C7.34677 9.55096 5.98477 9.55096 5.66815 10.5137L4.90785 12.8254L2.5962 13.5857C1.6334 13.9023 1.6334 15.2643 2.5962 15.581L4.90785 16.3412L5.66815 18.6529C5.98477 19.6157 7.34677 19.6157 7.6634 18.6529L8.42369 16.3412L10.7354 15.581C11.6981 15.2643 11.6981 13.9023 10.7354 13.5857L8.42369 12.8254L7.6634 10.5137Z" fill="white"></path>
                <path d="M5.9567 1.31788C5.65287 0.394061 4.34603 0.394059 4.0422 1.31788L3.36783 3.36839L1.31732 4.04277C0.393495 4.3466 0.393493 5.65343 1.31732 5.95727L3.36783 6.63164L4.0422 8.68214C4.34603 9.60597 5.65287 9.60597 5.9567 8.68214L6.63107 6.63164L8.68157 5.95727C9.60541 5.65343 9.60541 4.3466 8.68157 4.04277L6.63107 3.36839L5.9567 1.31788Z" fill="white"></path>
              </g>
            </svg>
          </div>
          <p className="font-medium text-[14px]">{isProcessing ? '生成中...' : '生成'}</p>
        </button>
      </div>

      {/* Generated Result */}
      {generatedImage && (
        <div className="w-full max-w-2xl">
          <h3 className="text-lg font-medium mb-2">生成结果</h3>
          <div 
            className="flex-1 w-full relative min-h-0 my-2 overflow-hidden bg-secondary rounded-[14px] border border-border"
            style={{ height: '300px' }}
          >
            <img 
              alt="生成结果" 
              className="absolute inset-0 size-full object-contain pointer-events-none rounded-[8px] transition-transform duration-75 ease-out"
              src={generatedImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
