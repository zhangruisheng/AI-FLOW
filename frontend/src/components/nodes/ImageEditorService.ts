import { generateImage } from '../../lib/googleAI';
import { getPresetConfig, PRESET_CONFIGS } from '../../lib/presets';
import { Node } from '@xyflow/react';

interface ConnectedImage {
  base64: string;
  mimeType: string;
}

interface ImageGenerationParams {
  connectedImages: ConnectedImage[];
  prompt: string;
  model: string;
  aspectRatio: string;
  imageSize: string;
  sequential: string;
  guidanceScale: number;
  seed: number;
}

interface ImageEditorService {
  generateImage: (params: ImageGenerationParams) => Promise<string>;
  getConnectedImages: (edges: any[], id: string, getNode: (nodeId: string) => Node | undefined, images: Record<string, string>, processedImages: Record<string, string>) => ConnectedImage[];
  getPresetPrompt: (presetName: string) => string;
}

const ImageEditorService: ImageEditorService = {
  // 生成图片
  async generateImage(params: ImageGenerationParams): Promise<string> {
    try {
      const { connectedImages, prompt, model, aspectRatio, imageSize, sequential, guidanceScale, seed } = params;

      console.log('Starting image generation with:', {
        model,
        prompt: prompt || 'Generate a beautiful image',
        connectedImages: connectedImages.length,
        aspectRatio,
        imageSize,
        sequential,
        guidanceScale,
        seed
      });

      const result = await generateImage(
        connectedImages,
        prompt || 'Generate a beautiful image',
        {
          imageWeight: 80,
          aspectRatio,
          model,
          imageSize,
          sequential_image_generation: sequential as 'auto' | 'disabled' || "disabled",
          guidance_scale: guidanceScale,
          seed
        }
      );

      console.log('Generation result received:', result ? 'Success' : 'Failed');
      console.log('Result type:', typeof result);
      console.log('Result length:', result ? result.length : 0);

      return result;
    } catch (error) {
      console.error('Image generation error:', error);
      throw error;
    }
  },

  // 获取连接的图片
  getConnectedImages(edges: any[], id: string, getNode: (nodeId: string) => Node | undefined, images: Record<string, string>, processedImages: Record<string, string>): ConnectedImage[] {
    const connectedImages: ConnectedImage[] = [];

    for (const imgInput of edges.filter((e: any) => e.target === id && e.targetHandle && e.targetHandle.startsWith('img'))) {
      const connection = edges.find((e: any) => e.target === id && e.targetHandle === imgInput.targetHandle);
      if (connection) {
        const sourceNodeId = connection.source;
        const sourceNode = getNode(sourceNodeId);
        
        // 尝试从多个来源获取图片
        let imageData = null;
        
        // 1. 检查源节点是否有直接输出
        if (sourceNode?.data?.output) {
          imageData = sourceNode.data.output;
          console.log('Found image from source node output:', sourceNodeId);
        }
        // 2. 检查源节点是否在工作流上下文中有图片
        else if (images[sourceNodeId]) {
          imageData = images[sourceNodeId];
          console.log('Found image from workflow images:', sourceNodeId);
        }
        // 3. 检查源节点是否在工作流上下文中有处理后的图片
        else if (processedImages[sourceNodeId]) {
          imageData = processedImages[sourceNodeId];
          console.log('Found image from workflow processedImages:', sourceNodeId);
        }
        
        if (imageData) {
          // 将 base64 字符串转换为 ImagePart 格式
          // 如果已经是 base64 字符串，提取它
          const base64Data = imageData.startsWith('data:') 
            ? imageData.split(',')[1] 
            : imageData;
          const mimeType = imageData.startsWith('data:') 
            ? imageData.split(';')[0].split(':')[1] 
            : 'image/png';
          
          connectedImages.push({
            base64: base64Data,
            mimeType: mimeType
          });
        }
      }
    }

    return connectedImages;
  },

  // 获取预设提示词
  getPresetPrompt(presetName: string): string {
    const entry = Object.entries(PRESET_CONFIGS).find(([_, config]) => config.label === presetName);
    if (entry) {
      const config = entry[1];
      return config.prompt || "";
    }
    return "";
  }
};

export default ImageEditorService;