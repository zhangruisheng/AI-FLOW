import {
  Handle,
  Position,
  NodeProps,
  NodeResizer,
} from "@xyflow/react";
import { useState, useRef, useEffect } from "react";
import { useWorkflow } from "../WorkflowContext";
import { toast } from "sonner";
import NodeToolbar from "./NodeToolbar";
import { useAssets } from "../AssetsContext";
import { DataType } from "../FloraCanvas";
import { generateImage } from "../../lib/googleAI";
import { useLanguage } from "../LanguageContext";

interface ProcessingNodeProps extends NodeProps {
  data: {
    label: string;
    type: "subject" | "style";
    inputs?: any[];
    prompt?: string;
  };
}

const ProcessingNode = ({ data, id }: ProcessingNodeProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const { setProcessedImage, setImage } = useWorkflow();
  const { addAsset } = useAssets();
  const { t } = useLanguage();

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target?.result as string;
      setReferenceImage(imageUrl);
      setImage(id, imageUrl);
      toast.success(`${data.type === "subject" ? t('subject') : t('style')}${t('reference_image_upload_success')}`);
    };
    reader.readAsDataURL(file);
  };

  const handleProcess = async () => {
    if (!referenceImage) {
      toast.error(`${t('please_upload_reference')}${data.type === "subject" ? t('subject') : t('style')}`);
      return;
    }

    try {
      setIsProcessing(true);
      toast.loading(`${data.type === "subject" ? t('processing_subject') : t('processing_style')}`);

      // 准备图像数据
      const connectedImages = [];
      if (referenceImage) {
        const base64Data = referenceImage.startsWith('data:') 
          ? referenceImage.split(',')[1] 
          : referenceImage;
        const mimeType = referenceImage.startsWith('data:') 
          ? referenceImage.split(';')[0].split(':')[1] 
          : 'image/png';
        
        connectedImages.push({
          base64: base64Data,
          mimeType: mimeType
        });
      }

      // 生成提示词
      const processingPrompt = data.type === "subject" 
        ? `严格还原主体特征，包括面部特征（眼睛、鼻子、嘴唇、肤色、年龄）、发型、体型和表情。确保100%匹配参考图像中的主体特征。`
        : `精准复刻风格构图，包括拍摄角度、构图、姿势、光影、色彩 palette、背景和整体氛围。确保完全匹配参考图像的视觉风格。`;

      console.log(`Processing ${data.type} with prompt:`, processingPrompt);

      // 调用API生成图像
      const result = await generateImage(
        connectedImages,
        processingPrompt,
        {
          imageWeight: 90,
          aspectRatio: '9:16',
          model: 'doubao-seedream-4-5-251128',
          imageSize: '2K',
          sequential_image_generation: 'disabled',
          guidance_scale: 8.5,
          seed: 0
        }
      );

      console.log(`Processing ${data.type} result received:`, result ? 'Success' : 'Failed');
      
      // 保存结果
      if (result) {
        const imageUrl = result.startsWith('http') ? result : `data:image/png;base64,${result}`;
        // 使用节点 id 作为处理结果的 key，使 PreviewNode 能根据 source node id 正确取图
        setProcessedImage(id, imageUrl);
        
        // 保存到资产
        try {
          addAsset({
            type: 'image',
            title: `${data.type === "subject" ? "主体还原" : "风格复刻"}结果 - ${new Date().toLocaleString()}`,
            tags: [data.type === "subject" ? "主体还原" : "风格复刻", "Processing"],
            prompt: processingPrompt,
            images: [imageUrl],
            isFavorite: false
          });
        } catch (error) {
          console.error('Failed to save image to assets:', error);
        }
        
        toast.success(`${data.type === "subject" ? "主体特征还原" : "风格构图复刻"}完成！`);
      }
    } catch (error: any) {
      console.error(`Processing ${data.type} error:`, error);
      toast.error(error.message || '处理失败，请重试');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div 
      className="bg-card border border-border/50 rounded-[16px] overflow-hidden min-w-[280px]"
      data-nodeid={id}
    >
      <NodeToolbar nodeId={id} />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">
          {data.type === "subject" ? t('subject_restore') : t('style_replicate')}
        </h3>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">{t('reference_image')}</h4>
          <div 
            className="border-2 border-dashed border-border rounded-[12px] p-4 min-h-[120px] flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors"
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'image/*';
              input.onchange = (e) => {
                const file = (e.target as HTMLInputElement).files?.[0];
                if (file) handleImageUpload(file);
              };
              input.click();
            }}
          >
            {referenceImage ? (
              <img 
                src={referenceImage} 
                alt={`${data.type === "subject" ? t('subject') : t('style')}`} 
                className="max-h-[110px] max-w-full object-contain rounded-[8px]"
              />
            ) : (
              <>
                <svg className="w-8 h-8 text-muted-foreground mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-muted-foreground">{t('click_upload_reference')}</span>
              </>
            )}
          </div>
        </div>
        
        <button
          className="w-full bg-primary text-primary-foreground py-2 rounded-[12px] font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleProcess}
          disabled={!referenceImage || isProcessing}
          style={{ opacity: isProcessing ? 0.7 : 1, cursor: (isProcessing || !referenceImage) ? 'not-allowed' : 'pointer' }}
        >
          {isProcessing ? t('processing') : `${data.type === "subject" ? t('start_restore') : t('start_replicate')}`}
        </button>
      </div>
      
      <Handle
        type="target"
        position={Position.Left}
        id="input"
        style={{ top: '50%' }}
        data-datatype={DataType.ANY}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="output"
        style={{ top: '50%' }}
        data-datatype={DataType.IMAGE}
      />
      
      <NodeResizer color="var(--primary)" lineWidth={2} isVisible={false} />
    </div>
  );
};

export const SubjectProcessingNode = (props: ProcessingNodeProps) => (
  <ProcessingNode {...props} data={{ ...props.data, type: "subject" }} />
);

export const StyleProcessingNode = (props: ProcessingNodeProps) => (
  <ProcessingNode {...props} data={{ ...props.data, type: "style" }} />
);

export default ProcessingNode;