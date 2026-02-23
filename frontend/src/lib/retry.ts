interface RetryConfig {
  maxRetries: number;
  initialDelay: number; // 毫秒
  maxDelay: number;
}

const DEFAULT_CONFIG: RetryConfig = {
  maxRetries: 3,
  initialDelay: 1000,
  maxDelay: 10000,
};

/**
 * 指数退避异步包装器
 * @param fn 要执行的异步函数
 * @param config 重试配置
 */
export async function withExponentialBackoff<T>(
  fn: () => Promise<T>,
  config: Partial<RetryConfig> = {}
): Promise<T> {
  const { maxRetries, initialDelay, maxDelay } = { ...DEFAULT_CONFIG, ...config };
  
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;
      
      // 只有特定错误才触发重试（如 429 速率限制或 5xx 服务器错误）
      const isRetryable = error.status === 429 || error.status >= 500 || error.message?.includes('quota');
      
      if (!isRetryable || attempt === maxRetries) {
        throw error;
      }

      // 计算延迟时间：initialDelay * 2^attempt
      // 添加 Jitter 防止多个客户端在同一时刻重试造成瞬时高压
      const delay = Math.min(
        maxDelay,
        initialDelay * Math.pow(2, attempt) + Math.random() * 1000
      );

      console.warn(`Attempt ${attempt + 1} failed. Retrying in ${Math.round(delay)}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw lastError;
}
