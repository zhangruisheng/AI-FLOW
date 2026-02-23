import { API, AI_MODELS, API_URLS, STORAGE_KEYS } from '../config';

// Lazy import to avoid initialization errors
let GoogleGenAI: any = null;
let Type: any = null;

const API_TIMEOUT = API.TIMEOUT;

// Error types for better error handling
export enum ApiErrorType {
  QUOTA_EXCEEDED = 'QUOTA_EXCEEDED',
  API_KEY_INVALID = 'API_KEY_INVALID',
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  RATE_LIMITED = 'RATE_LIMITED',
  SERVER_ERROR = 'SERVER_ERROR',
  CLIENT_ERROR = 'CLIENT_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

// API Error class for better error management
export class ApiError extends Error {
  public type: ApiErrorType;
  public originalError?: any;
  public retryable: boolean;

  constructor(message: string, type: ApiErrorType = ApiErrorType.UNKNOWN_ERROR, originalError?: any, retryable: boolean = false) {
    super(message);
    this.type = type;
    this.originalError = originalError;
    this.retryable = retryable;
    this.name = 'ApiError';
  }
}

const loadGoogleGenAI = async () => {
  if (!GoogleGenAI) {
    try {
      const module = await import("@google/genai");
      GoogleGenAI = module.GoogleGenAI;
      Type = module.Type;
    } catch (error) {
      console.error("Failed to load @google/genai:", error);
      throw new ApiError("Google AI SDK not available. Please check your installation.", ApiErrorType.CLIENT_ERROR, error);
    }
  }
  return { GoogleGenAI, Type };
};

// Helper to get API key safely
const getStoredApiKey = (modelType: 'google' | 'ark' = 'google') => {
  if (typeof window !== "undefined") {
    const storageKey = modelType === 'google' ? STORAGE_KEYS.GEMINI_API_KEY : STORAGE_KEYS.ARK_API_KEY;
    return localStorage.getItem(storageKey) || "";
  }
  return "";
};

// Helper function to add timeout to promises
const withTimeout = <T>(promise: Promise<T>, timeout: number = API_TIMEOUT, errorMessage: string = "API request timed out"): Promise<T> => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new ApiError(errorMessage, ApiErrorType.TIMEOUT_ERROR, null, false));
    }, timeout);

    promise
      .then((result) => {
        clearTimeout(timeoutId);
        resolve(result);
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
};

interface ImagePart {
  base64: string;
  mimeType: string;
}

interface GenerateOptions {
  imageWeight: number;
  aspectRatio?: string;
  model?: string;
  imageSize?: '1K' | '2K' | '4K';
  seed?: number;
  sequential_image_generation?: 'auto' | 'disabled';
  guidance_scale?: number;
  optimize_prompt_options?: any;
}

export interface AnalysisResult {
  english: string;
  chinese: string;
  features: {
    scene: { en: string; zh: string }[];
    character: { en: string; zh: string }[];
    clothing: { en: string; zh: string }[];
    technique: { en: string; zh: string }[];
    style: { en: string; zh: string }[];
  }
}

export const SUPPORTED_MODELS = AI_MODELS.SUPPORTED_MODELS;

export function isApiKeyConfigured(): boolean {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem(STORAGE_KEYS.GEMINI_API_KEY);
}

import { toast } from "sonner";
import { withExponentialBackoff } from "./retry";

async function executeWithRetry<T>(
  operation: () => Promise<T>,
  retries = API.MAX_RETRY_ATTEMPTS,
  initialDelay = API.INITIAL_RETRY_DELAY
): Promise<T> {
  let lastError: any;
  
  for (let i = 0; i <= retries; i++) {
    try {
      return await operation();
    } catch (error: any) {
      lastError = error;
      
      // Check if it's an ApiError
      if (error instanceof ApiError) {
        // Check if it's a rate limit error
        if (error.type === ApiErrorType.RATE_LIMITED && i < retries) {
          // Handle rate limit retry
          let delay = initialDelay * Math.pow(2, i);
          
          const errorMessage = error.message || '';
          const retryMatch = errorMessage.match(/retry in ([0-9.]+)s/);
          if (retryMatch && retryMatch[1]) {
             // Add a small buffer (1s) to the suggested wait time
             delay = (parseFloat(retryMatch[1]) * 1000) + 1000;
          }

          const waitSeconds = Math.round(delay / 1000);
          console.log(`Rate limit hit. Retrying in ${waitSeconds}s... (Attempt ${i + 1}/${retries})`);
          
          // Notify user if the wait is significant
          if (waitSeconds > 2) {
             toast.loading(`API 繁忙，${waitSeconds}秒后重试...`, { 
               id: 'retry-toast',
               duration: delay 
             });
          }

          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        
        // Check if it's a quota error
        if (error.type === ApiErrorType.QUOTA_EXCEEDED) {
          throw error;
        }
        
        // Check if it's retryable
        if (error.retryable && i < retries) {
          const delay = initialDelay * Math.pow(2, i);
          console.log(`Retryable error occurred. Retrying in ${delay}ms... (Attempt ${i + 1}/${retries})`);
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        
        // Otherwise, throw the error
        throw error;
      }
      
      // Handle non-ApiError cases
      const errorMessage = error?.message || error?.toString() || '';
      const isRateLimit =
        error?.status === 429 || 
        errorMessage.includes('429') || 
        errorMessage.includes('RESOURCE_EXHAUSTED') ||
        errorMessage.includes('rate limit');

      // Check for Daily Quota specifically
      const isDailyQuota = errorMessage.includes('GenerateRequestsPerDay') || errorMessage.includes('Daily limit exceeded') || errorMessage.includes('daily free quota');
      if (isDailyQuota) {
        throw new ApiError("You have reached the daily free quota for this model. Please try again tomorrow or use a different API key.", ApiErrorType.QUOTA_EXCEEDED, error, false);
      }
        
      if (isRateLimit && !isDailyQuota && i < retries) {
        // Parse retry delay from error message if possible, otherwise use exponential backoff
        let delay = initialDelay * Math.pow(2, i);
        
        const retryMatch = errorMessage.match(/retry in ([0-9.]+)s/);
        if (retryMatch && retryMatch[1]) {
           // Add a small buffer (1s) to the suggested wait time
           delay = (parseFloat(retryMatch[1]) * 1000) + 1000;
        }

        const waitSeconds = Math.round(delay / 1000);
        console.log(`Rate limit hit. Retrying in ${waitSeconds}s... (Attempt ${i + 1}/${retries})`);
        
        // Notify user if the wait is significant
        if (waitSeconds > 2) {
           toast.loading(`API 繁忙，${waitSeconds}秒后重试...`, { 
             id: 'retry-toast',
             duration: delay 
           });
        }

        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      // Check if it's a network error or timeout
      const isNetworkError = errorMessage.includes('network') || errorMessage.includes('Network') || errorMessage.includes('fetch');
      const isTimeoutError = errorMessage.includes('timeout') || errorMessage.includes('Timeout');
      
      if ((isNetworkError || isTimeoutError) && i < retries) {
        const delay = initialDelay * Math.pow(2, i);
        console.log(`Network error occurred. Retrying in ${delay}ms... (Attempt ${i + 1}/${retries})`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      // Wrap other errors as ApiError
      const apiError = new ApiError(
        errorMessage || "Unknown error occurred",
        ApiErrorType.UNKNOWN_ERROR,
        error,
        false
      );
      
      throw apiError;
    }
  }
  
  // If we've exhausted all retries, throw the last error
  if (lastError instanceof ApiError) {
    throw lastError;
  }
  
  // Wrap the last error as ApiError if it's not already
  throw new ApiError(
    lastError?.message || "Operation failed after multiple attempts",
    ApiErrorType.UNKNOWN_ERROR,
    lastError,
    false
  );
}

export async function testApiKey(apiKey: string): Promise<{ valid: boolean; error?: string; isQuota?: boolean }> {
  try {
    const { GoogleGenAI } = await loadGoogleGenAI();
    const ai = new GoogleGenAI({ apiKey });
    await withExponentialBackoff(() => ai.models.generateContent({
      model: AI_MODELS.TEST_MODEL,
      contents: [{ role: "user", parts: [{ text: "Hello" }] }],
    }), { maxRetries: 1 });
    return { valid: true };
  } catch (error: any) {
    const errorMessage = error?.message || '';
    const isQuota = errorMessage.includes("quota") || errorMessage.includes("429") || errorMessage.includes("RESOURCE_EXHAUSTED");
    
    let friendlyError = error.message || "Invalid API Key";
    if (isQuota) {
        friendlyError = "API Key Valid, but Quota Exceeded";
    }
    
    return { valid: false, error: friendlyError, isQuota };
  }
}

export async function describeImage(imageBase64: string, mimeType: string, apiKey?: string): Promise<AnalysisResult> {
  const key = apiKey || getStoredApiKey();
  if (!key) {
    toast.error("请先配置 Gemini API Key", {
      description: "点击右上角设置图标配置您的 API Key",
      duration: 5000,
    });
    throw new Error("API Key is missing. Please configure your Gemini API Key in settings.");
  }

  const { GoogleGenAI, Type } = await loadGoogleGenAI();
  const ai = new GoogleGenAI({ apiKey: key });
  try {
    const response = await withExponentialBackoff(() => ai.models.generateContent({
      model: AI_MODELS.ANALYSIS_MODEL,
      contents: {
        role: 'user',
        parts: [
          { inlineData: { data: imageBase64, mimeType } },
          { text: "请深度分析这张图片。将其反推为结构化的 JSON 格式，包含：一段专业的英文提示词、一段对应的中文描述，以及特征分类关键词矩阵。所有分类中的关键词必须同时提供英文(en)和中文(zh)。分类必须包含：scene (环境场景), character (主体特征), clothing (细节配饰), technique (拍摄参数/光影), style (画风意境)。" }
        ]
      },
      config: {
        systemInstruction: "你是一位顶级提示词工程师。你的分析必须极其专业，关注光影（如丁达尔、伦勃朗光）、构图、镜头参数以及艺术风格。特征矩阵中的每个项必须是一个包含 'en' 和 'zh' 的对象。仅输出有效的 JSON。",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            english: { type: Type.STRING },
            chinese: { type: Type.STRING },
            features: {
              type: Type.OBJECT,
              properties: {
                scene: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { en: { type: Type.STRING }, zh: { type: Type.STRING } } } },
                character: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { en: { type: Type.STRING }, zh: { type: Type.STRING } } } },
                clothing: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { en: { type: Type.STRING }, zh: { type: Type.STRING } } } },
                technique: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { en: { type: Type.STRING }, zh: { type: Type.STRING } } } },
                style: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { en: { type: Type.STRING }, zh: { type: Type.STRING } } } }
              }
            }
          },
          required: ["english", "chinese", "features"]
        }
      }
    }));
    
    return JSON.parse(response.text() || "{}") as AnalysisResult;
  } catch (error: any) {
    const errorMessage = error?.message || '';
    const isQuotaError = errorMessage.includes("daily free quota") || errorMessage.includes("quota") || errorMessage.includes("429");

    if (!isQuotaError) {
      console.error("Image analysis error:", error);
    }
    
    if (isQuotaError) {
        throw error;
    }
    throw new Error("解析失败，请检查网络或重试。");
  }
}

/**
 * Optimizes a list of keywords or a raw prompt into a polished English generation prompt.
 */
export async function optimizePrompt(keywords: string, apiKey?: string): Promise<string> {
  const key = apiKey || getStoredApiKey();
  if (!key) {
    toast.error("请先配置 Gemini API Key", {
      description: "点击右上角设置图标配置您的 API Key",
      duration: 5000,
    });
    throw new Error("API Key is missing. Please configure your Gemini API Key in settings.");
  }

  const { GoogleGenAI } = await loadGoogleGenAI();
  const ai = new GoogleGenAI({ apiKey: key });
  try {
    const response = await withExponentialBackoff(() => ai.models.generateContent({
      model: AI_MODELS.OPTIMIZATION_MODEL,
      contents: [
        {
          role: 'user',
          parts: [
            { text: `将以下键词或粗略描述优化为一段极高质量的 Midjourney/Stable Diffusion 风格英文提示词：\n"${keywords}"\n要求：包含具体的构图、光影、镜头参数和艺术风格。只输出优化后的英文提示词文本。` }
          ]
        }
      ],
      config: {
        systemInstruction: "你是一位专业的 AI 图像提示词优化师。你的任务是将杂乱的关键词串联成逻辑严密、细节丰富的专业英文提示词。不要包含任何多余的解释。",
      }
    }));
    return response.text() || keywords;
  } catch (error: any) {
    const errorMessage = error?.message || '';
    if (!errorMessage.includes("daily free quota") && !errorMessage.includes("quota") && !errorMessage.includes("429")) {
      console.error("Prompt optimization error:", error);
    }
    return keywords;
  }
}

// Helper function to generate image using Ark API
export async function generateImageWithArk(
    prompt: string, 
    options: GenerateOptions = { imageWeight: 80, aspectRatio: '1:1', model: AI_MODELS.DEFAULT_ARK_MODEL },
    apiKey?: string,
    images?: ImagePart[]
): Promise<string> {
  const key = apiKey || getStoredApiKey('ark');
  if (!key) {
    toast.error("请先配置 Ark API Key", {
      description: "点击右上角设置图标配置您的 Ark API Key",
      duration: 5000,
    });
    throw new Error("Ark API Key is missing. Please configure your Ark API Key in settings.");
  }

  try {
    // Prepare request body
    const requestBody: any = {
      model: options.model || AI_MODELS.DEFAULT_ARK_MODEL,
      prompt: prompt,
      sequential_image_generation: options.sequential_image_generation || 'disabled',
      response_format: 'url',
      size: options.imageSize || '2K',
      seed: options.seed,
      guidance_scale: options.guidance_scale,
      optimize_prompt_options: options.optimize_prompt_options,
      stream: false,
      watermark: true
    };

    // Add image(s) if provided
    if (images && images.length > 0) {
      // For Ark API, we can provide base64 encoded images
      // Convert ImagePart format to Ark API format
      const arkImages = images.map(img => {
        // For base64 images, format as data URL
        return `data:${img.mimeType};base64,${img.base64}`;
      });
      
      requestBody.image = arkImages;
      console.log(`Ark API: Added ${arkImages.length} images to request`);
    }

    const response = await withExponentialBackoff(async () => {
      const fetchResponse = await fetch(API_URLS.ARK_IMAGE_GENERATIONS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!fetchResponse.ok) {
        const errorData = await fetchResponse.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `Ark API error: ${fetchResponse.status}`);
      }

      return await fetchResponse.json();
    });

    console.log("Ark API response:", response);

    if (response.data?.[0]?.url) {
      // For Ark API, directly return the image URL instead of converting to base64
      // This avoids CORS issues and is more efficient
      console.log("Returning image URL directly from Ark API:", response.data[0].url);
      return response.data[0].url;
    }
    
    throw new Error("Ark API 未返回有效的图片数据。");

  } catch (error: any) {
    // Only log error if it is NOT a quota error, to prevent alarmist console logs
    const errorMessage = error?.message || '';
    const isQuotaError = errorMessage.includes("quota") || errorMessage.includes("429");

    if (!isQuotaError) {
        console.error("Ark Image Generation Error:", error);
    }
    
    // Provide more user-friendly error messages
    if (errorMessage.includes('429') || errorMessage.toLowerCase().includes('quota')) {
      throw new Error("API busy or quota exceeded. Please try again later.");
    }
    
    throw error;
  }
}

export async function generateImage(
    images: ImagePart[], 
    prompt: string, 
    options: GenerateOptions = { imageWeight: 80, aspectRatio: '1:1', model: AI_MODELS.DEFAULT_MODEL },
    apiKey?: string
): Promise<string> {
  const selectedModel = options.model || AI_MODELS.DEFAULT_MODEL;
  
  if (isLocalModel(selectedModel)) {
    return generateImageWithLocal(prompt, options, images);
  }
  
  if (selectedModel.startsWith('doubao')) {
    return generateImageWithArk(prompt, options, apiKey, images);
  }

  const key = apiKey || getStoredApiKey();
  if (!key) {
    toast.error("请先配置 Gemini API Key", {
      description: "点击右上角设置图标配置您的 API Key",
      duration: 5000,
    });
    throw new ApiError("API Key is missing. Please configure your Gemini API Key in settings.", ApiErrorType.API_KEY_INVALID);
  }

  try {
    const { GoogleGenAI } = await loadGoogleGenAI();
    const ai = new GoogleGenAI({ apiKey: key });

    const isImagen = selectedModel.startsWith('imagen');

    if (isImagen) {
        if (images.length > 0) {
            throw new ApiError("Imagen 模型暂不支持参考图，请使用 Flash/Pro 模型。", ApiErrorType.CLIENT_ERROR);
        }
        
        const response: any = await withTimeout(
            withExponentialBackoff(() => (ai.models as any).generateImages({
                model: selectedModel,
                prompt: prompt,
                config: {
                    numberOfImages: 1,
                    aspectRatio: options.aspectRatio as any || '1:1',
                    outputMimeType: 'image/jpeg' 
                }
            })),
            API_TIMEOUT,
            "Imagen 模型生成图片超时"
        );
        
        if (response.generatedImages?.[0]?.image?.imageBytes) {
            return response.generatedImages[0].image.imageBytes;
        }
         throw new ApiError("Imagen 生成失败。", ApiErrorType.SERVER_ERROR);
    }

    let finalPrompt = prompt;
    const instructions = [];
    
    if (images.length > 0) {
        if (options.imageWeight >= 80) {
            instructions.push("Strictly maintain the composition and details of the reference.");
        } else if (options.imageWeight >= 50) {
            instructions.push("Follow the overall structure of the reference.");
        } else {
            instructions.push("Use the reference image as loose inspiration.");
        }
    }

    if (instructions.length > 0) {
        finalPrompt = `${prompt} (${instructions.join(' ')})`;
    }

    const textPart = { text: finalPrompt };
    const imageParts = images.map(image => ({
      inlineData: {
        data: image.base64,
        mimeType: image.mimeType,
      },
    }));

    const parts = images.length > 0 ? [...imageParts, textPart] : [textPart];

    const imageConfig: any = {
      aspectRatio: options.aspectRatio || "1:1"
    };

    if (selectedModel === 'gemini-3-pro-image-preview' && options.imageSize) {
      imageConfig.imageSize = options.imageSize;
    }

    const response = await withTimeout(
        withExponentialBackoff(() => ai.models.generateContent({
          model: selectedModel,
          contents: [
              {
                  role: 'user',
                  parts: parts as any
              }
          ],
          config: {
            systemInstruction: "You are an advanced image generation engine. Generate high-quality visual content based on the prompt.",
            // @ts-ignore
            imageConfig
          }
        })),
        API_TIMEOUT,
        "Google AI 生成图片超时"
    );

    const candidate = response.candidates?.[0];

    if (candidate?.content?.parts) {
      for (const part of candidate.content.parts) {
        if (part.inlineData && part.inlineData.data) {
          console.log("Returning image data from Google AI");
          console.log("Data type:", typeof part.inlineData.data);
          console.log("Data length:", part.inlineData.data.length);
          return part.inlineData.data;
        }
      }
    }
    
    console.error("No valid image data returned from Google AI");
    console.error("Response candidates:", response.candidates);
    throw new ApiError("未返回有效的图片数据。", ApiErrorType.SERVER_ERROR);

  } catch (error: any) {
    // Handle ApiError instances
    if (error instanceof ApiError) {
      // If it's a quota error, preserve it
      if (error.type === ApiErrorType.QUOTA_EXCEEDED) {
        throw error;
      }
      
      // If it's a rate limit error, wrap it appropriately
      if (error.type === ApiErrorType.RATE_LIMITED) {
        throw new ApiError("API 繁忙，请稍后重试。", ApiErrorType.RATE_LIMITED, error, true);
      }
      
      // Re-throw other ApiErrors
      throw error;
    }
    
    // Handle non-ApiError cases
    const errorMessage = error?.message || '';
    const isQuotaError = errorMessage.includes("daily free quota") || errorMessage.includes("Quota exceeded") || errorMessage.includes("429");
    const isRateLimitError = error?.status === 429 || errorMessage.includes('429') || errorMessage.includes('RESOURCE_EXHAUSTED');
    const isNetworkError = errorMessage.includes('network') || errorMessage.includes('Network') || errorMessage.includes('fetch');

    if (!isQuotaError && !isRateLimitError) {
        console.error("Gemini Image Generation Error:", error);
    }
    
    // Provide more user-friendly error messages
    if (isQuotaError) {
      if (errorMessage.includes("daily free quota")) {
        throw new ApiError("每日免费配额已用尽，请明天再试或使用不同的 API Key。", ApiErrorType.QUOTA_EXCEEDED, error, false);
      }
      if (errorMessage.includes("Resource has been exhausted")) {
        throw new ApiError("配额已用尽，请检查您的 API 使用情况或尝试使用不同的 Key。", ApiErrorType.QUOTA_EXCEEDED, error, false);
      }
      throw new ApiError("API 配额已用尽，请稍后重试。", ApiErrorType.QUOTA_EXCEEDED, error, false);
    }
    
    if (isRateLimitError) {
      throw new ApiError("API 繁忙，请稍后重试。", ApiErrorType.RATE_LIMITED, error, true);
    }
    
    if (isNetworkError) {
      throw new ApiError("网络错误，请检查您的网络连接。", ApiErrorType.NETWORK_ERROR, error, true);
    }
    
    // Default error handling
    throw new ApiError(
      errorMessage || "生成图片失败，请重试。",
      ApiErrorType.UNKNOWN_ERROR,
      error,
      false
    );
  }
}

const getLocalServerUrl = (): string => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(STORAGE_KEYS.LOCAL_SERVER_URL) || AI_MODELS.LOCAL_MODEL_ENDPOINT;
  }
  return AI_MODELS.LOCAL_MODEL_ENDPOINT;
};

export interface LocalServerStatus {
  online: boolean;
  models: string[];
  error?: string;
}

export async function checkLocalServerStatus(): Promise<LocalServerStatus> {
  const serverUrl = getLocalServerUrl();
  try {
    const response = await withTimeout(
      fetch(`${serverUrl}/system_stats`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }),
      5000,
      "Local server status check timed out"
    );

    if (response.ok) {
      return {
        online: true,
        models: ['z-image-turbo', 'z-image', 'z-image-edit'],
      };
    }
    
    return {
      online: false,
      models: [],
      error: `Server returned ${response.status}`,
    };
  } catch (error: any) {
    return {
      online: false,
      models: [],
      error: error.message || "Cannot connect to local server",
    };
  }
}

import { buildZImageWorkflowFromConfig } from './workflowBuilder';
import { createComfyUIClient } from './comfyuiClient';

export async function generateImageWithLocal(
  prompt: string,
  options: GenerateOptions = { imageWeight: 80, aspectRatio: '1:1', model: 'z-image-turbo' },
  images?: ImagePart[]
): Promise<string> {
  const serverUrl = getLocalServerUrl();
  const selectedModel = options.model || 'z-image-turbo';
  
  const [width, height] = parseAspectRatio(options.aspectRatio || '1:1');
  const isTurbo = selectedModel === 'z-image-turbo';
  const steps = isTurbo ? 8 : 50;
  const cfg = isTurbo ? 0 : (options.guidance_scale || 3.5);
  const seed = options.seed || Math.floor(Math.random() * 1000000);
  
  try {
    // Build ComfyUI workflow
    const workflowConfig = {
      checkpointName: selectedModel,
      vaeName: 'flux_vae.safetensors',
      clipName: 'qwen_3_4b.safetensors',
      width: width,
      height: height,
      steps: steps,
      cfg: cfg,
      seed: seed,
      prompt: prompt,
      negativePrompt: "",
      images: []
    };

    const workflow = buildZImageWorkflowFromConfig(workflowConfig);
    
    // Create ComfyUI client
    const client = createComfyUIClient({
      baseUrl: serverUrl,
      wsUrl: serverUrl.replace('http', 'ws') + '/ws',
      timeout: API_TIMEOUT * 2
    });

    // Connect to server
    await client.connect();
    
    // Queue prompt
    const promptId = await client.queuePrompt(workflow);
    
    // Wait for completion
    return new Promise<string>((resolve, reject) => {
      let timeoutId: NodeJS.Timeout;
      
      // Set timeout
      timeoutId = setTimeout(() => {
        client.disconnect();
        reject(new ApiError("本地服务器响应超时，请检查 GPU 状态。", ApiErrorType.TIMEOUT_ERROR));
      }, API_TIMEOUT * 2);
      
      // Listen for execution events
      const handleMessage = (message: any) => {
        if (message.type === 'execution_error' && message.prompt_id === promptId) {
          clearTimeout(timeoutId);
          client.disconnect();
          reject(new ApiError(`执行错误: ${message.error}`, ApiErrorType.SERVER_ERROR));
        } else if (message.type === 'executed' && message.prompt_id === promptId) {
          // Check history for results
          client.getHistory(promptId).then(history => {
            clearTimeout(timeoutId);
            client.disconnect();
            
            const promptHistory = history[promptId];
            if (promptHistory && promptHistory.outputs) {
              // Find the SaveImage node output
              for (const nodeId in promptHistory.outputs) {
                const output = promptHistory.outputs[nodeId];
                if (output.images && output.images.length > 0) {
                  const imagePath = output.images[0];
                  // Return the image path or URL
                  resolve(imagePath);
                  return;
                }
              }
            }
            
            reject(new ApiError("Local server did not return valid image data.", ApiErrorType.SERVER_ERROR));
          }).catch(error => {
            clearTimeout(timeoutId);
            client.disconnect();
            reject(new ApiError(`获取历史记录失败: ${error.message}`, ApiErrorType.SERVER_ERROR));
          });
        }
      };
      
      client.on('execution_error', handleMessage);
      client.on('executed', handleMessage);
    });

  } catch (error: any) {
    if (error instanceof ApiError) {
      throw error;
    }
    
    const errorMessage = error?.message || '';
    
    if (errorMessage.includes('Failed to fetch') || errorMessage.includes('NetworkError') || errorMessage.includes('Connection')) {
      throw new ApiError("无法连接到本地服务器，请确保服务已启动。", ApiErrorType.NETWORK_ERROR, error, true);
    }
    
    if (errorMessage.includes('timed out')) {
      throw new ApiError("本地服务器响应超时，请检查 GPU 状态。", ApiErrorType.TIMEOUT_ERROR, error, true);
    }
    
    throw new ApiError(
      errorMessage || "本地模型生成失败。",
      ApiErrorType.UNKNOWN_ERROR,
      error,
      false
    );
  }
}

function parseAspectRatio(ratio: string): [number, number] {
  const ratioMap: Record<string, [number, number]> = {
    '1:1': [1024, 1024],
    '16:9': [1344, 768],
    '9:16': [768, 1344],
    '4:3': [1152, 896],
    '3:4': [896, 1152],
    '3:2': [1216, 832],
    '2:3': [832, 1216],
  };
  
  return ratioMap[ratio] || [1024, 1024];
}

export function isLocalModel(modelId: string): boolean {
  const model = AI_MODELS.SUPPORTED_MODELS.find(m => m.id === modelId);
  return model?.type === 'local';
}