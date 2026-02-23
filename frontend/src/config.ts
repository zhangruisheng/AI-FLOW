/**
 * Configuration file for centralized management of constants and magic numbers
 * 
 * This file contains all configuration constants for the application,
 * organized into logical categories for easy maintenance and access.
 */

/**
 * Environment variables - use Vite's import.meta.env
 */
export const ENV = {
  SUPABASE_PROJECT_ID: import.meta.env.VITE_SUPABASE_PROJECT_ID || '',
  SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  TRAE_API_BASE: import.meta.env.VITE_TRAE_API_BASE || 'https://trae-api-cn.mchost.guru',
  ARK_API_BASE: import.meta.env.VITE_ARK_API_BASE || 'https://ark.cn-beijing.volces.com',
};

/**
 * API URLs configuration
 */
export const API_URLS = {
  TRAE_TEXT_TO_IMAGE: `${ENV.TRAE_API_BASE}/api/ide/v1/text_to_image`,
  ARK_IMAGE_GENERATIONS: `${ENV.ARK_API_BASE}/api/v3/images/generations`,
  GOOGLE_FONTS: 'https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap',
  SUPABASE_FUNCTIONS: (projectId: string) => `https://${projectId}.supabase.co/functions/v1/make-server-43920120/workflows`,
};

/**
 * LocalStorage keys configuration
 */
export const STORAGE_KEYS = {
  WORKFLOW_DATA: 'creative-workflow-data',
  ASSETS: 'creative_workflow_assets',
  LANGUAGE: 'language',
  THEME: 'theme',
  CURRENT_VIEW: 'currentView',
  ASSETS_CATEGORY: 'assets-category',
  ASSETS_FILTER: 'assets-filter',
  ASSETS_GRID_SIZE: 'assets-grid-size',
  INSPIRATION_GRID_SIZE: 'inspiration-grid-size',
  GEMINI_API_KEY: 'gemini_api_key',
  ARK_API_KEY: 'ark_api_key',
  LOCAL_SERVER_URL: 'local_server_url',
};

/**
 * AI Models configuration
 */
export const AI_MODELS = {
  SUPPORTED_MODELS: [
    { id: 'gemini-2.5-flash-image', label: 'Gemini 2.5 Flash (最新免费)', type: 'cloud' },
    { id: 'gemini-3-pro-image-preview', label: 'Gemini 3.0 Pro (专业预览)', type: 'cloud' },
    { id: 'imagen-4.0-generate-001', label: 'Imagen 4 (旗舰画质)', type: 'cloud' },
    { id: 'doubao-seedream-4-5-251128', label: 'Doubao Seedream 4.5 (火山引擎)', type: 'cloud' },
    { id: 'z-image-turbo', label: 'Z-Image Turbo (本地)', type: 'local' },
    { id: 'z-image', label: 'Z-Image (本地)', type: 'local' },
    { id: 'z-image-edit', label: 'Z-Image Edit (本地)', type: 'local' },
  ],
  TEST_MODEL: 'gemini-2.5-flash',
  DEFAULT_MODEL: 'gemini-2.5-flash-image',
  DEFAULT_ARK_MODEL: 'doubao-seedream-4-5-251128',
  ANALYSIS_MODEL: 'gemini-3-flash-preview',
  OPTIMIZATION_MODEL: 'gemini-3-flash-preview',
  LOCAL_MODEL_ENDPOINT: 'http://localhost:8188',
};

/**
 * API configuration
 */
export const API = {
  TIMEOUT: 60000,
  MAX_RETRY_ATTEMPTS: 3,
  INITIAL_RETRY_DELAY: 2000,
  RETRY_BACKOFF_MULTIPLIER: 2,
  REQUEST_TIMEOUT: 5000,
  DEBOUNCE_DELAY: 1000,
  TOAST_DURATION: 5000,
  RATE_LIMIT_ERRORS: [
    429,
    'RESOURCE_EXHAUSTED',
    'quota',
    'limit exceeded',
  ],
};

/**
 * Workflow configuration
 */
export const WORKFLOW = {
  SAVE_DEBOUNCE: 2000,
  MAX_COUNT: 10,
  DEFAULT_NAME: '当前工作流',
  DEFAULT_ID: 'default',
  STORAGE_KEY: STORAGE_KEYS.WORKFLOW_DATA,
};

/**
 * Assets configuration
 */
export const ASSETS = {
  MAX_COUNT: 30,
  STORAGE_KEY: STORAGE_KEYS.ASSETS,
  MAX_LOCALSTORAGE_SIZE: 4 * 1024 * 1024,
  CLEANUP_THRESHOLD: 0.8,
};

/**
 * Image configuration
 */
export const IMAGE = {
  MAX_SIZE_MB: 4,
  MAX_SIZE_BYTES: 4 * 1024 * 1024,
  FORMATS: {
    JPEG: 'image/jpeg',
    PNG: 'image/png',
    GIF: 'image/gif',
    WEBP: 'image/webp',
    SVG: 'image/svg+xml',
  },
  EXTENSIONS: {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'image/webp': 'webp',
    'image/svg+xml': 'svg',
  },
  NODE: {
    DEFAULT_WIDTH: 240,
    DEFAULT_HEIGHT: 360,
    MIN_WIDTH: 240,
    MIN_HEIGHT: 360,
    MAX_WIDTH: 240,
    MAX_HEIGHT: 360,
  },
};

/**
 * UI configuration
 */
export const UI = {
  GRID_SIZES: {
    SMALL: '50%',
    MEDIUM: '75%',
    LARGE: '100%',
  },
  GRID_COLUMNS: {
    '50%': 'grid-cols-7',
    '75%': 'grid-cols-3',
    '100%': 'grid-cols-1',
  },
  ANIMATION: {
    FLIP_DURATION: 1,
    STAGGER_AMOUNT: 0.3,
    TOAST_DURATION: 2000,
  },
  ZOOM: {
    MIN: 0.1,
    MAX: 5,
    DEFAULT: 1,
  },
};

/**
 * Storage configuration
 */
export const STORAGE = {
  DB_NAME: 'creative-workflow-db',
  DB_VERSION: 1,
  STORES: {
    IMAGES: 'images',
    WORKFLOWS: 'workflows',
    ASSETS: 'assets',
  },
};

/**
 * Error messages (use i18n keys for localization)
 */
export const ERRORS = {
  API_KEY_MISSING: 'error.api_key_missing',
  NETWORK_ERROR: 'error.network_error',
  RATE_LIMIT: 'error.rate_limit',
  QUOTA_EXCEEDED: 'error.quota_exceeded',
  IMAGE_TOO_LARGE: 'error.image_too_large',
  INVALID_IMAGE: 'error.invalid_image',
  GENERATION_FAILED: 'error.generation_failed',
  UNKNOWN_ERROR: 'error.unknown_error',
};

/**
 * Success messages (use i18n keys for localization)
 */
export const SUCCESS = {
  IMAGE_GENERATED: 'success.image_generated',
  IMAGE_SAVED: 'success.image_saved',
  WORKFLOW_SAVED: 'success.workflow_saved',
  ASSET_DELETED: 'success.asset_deleted',
  API_KEY_VALIDATED: 'success.api_key_validated',
};

export default {
  ENV,
  API_URLS,
  STORAGE_KEYS,
  AI_MODELS,
  API,
  WORKFLOW,
  ASSETS,
  IMAGE,
  UI,
  STORAGE,
  ERRORS,
  SUCCESS,
};
