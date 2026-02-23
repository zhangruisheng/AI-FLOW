import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { ASSETS, STORAGE_KEYS } from '../config';

interface GenerationParams {
  model?: string;
  modelLabel?: string;
  aspectRatio?: string;
  resolution?: { width: number; height: number };
  quality?: string;
  steps?: number;
  cfg?: number;
  seed?: number;
  guidanceScale?: number;
  sequential?: string;
}

interface Asset {
  id: string;
  type: 'image' | 'text' | 'video' | 'workflow';
  title: string;
  date: string;
  tags: string[];
  prompt: string;
  images: string[];
  isFavorite: boolean;
  timestamp: number;
  workflowData?: string;
  generationParams?: GenerationParams;
}

interface AssetsContextType {
  assets: Asset[];
  addAsset: (asset: Omit<Asset, 'id' | 'date' | 'timestamp'>) => void;
  toggleFavorite: (id: string) => void;
  deleteAsset: (id: string) => void;
  getRecentAssets: () => Asset[];
}

const AssetsContext = createContext<AssetsContextType | undefined>(undefined);

export function AssetsProvider({ children }: { children: ReactNode }) {
  const [assets, setAssets] = useState<Asset[]>(() => {
    try {
      const savedAssets = localStorage.getItem(STORAGE_KEYS.ASSETS);
      return savedAssets ? JSON.parse(savedAssets) : [];
    } catch (error) {
      console.error('Failed to load assets from localStorage:', error);
      return [];
    }
  });

  // Check localStorage size
  const checkLocalStorageSize = (): number => {
    let totalSize = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        totalSize += localStorage[key].length + key.length;
      }
    }
    return totalSize;
  };

  // Clean up old assets if localStorage is getting full
  const cleanupOldAssets = (assets: Asset[]): Asset[] => {
    const currentSize = checkLocalStorageSize();
    if (currentSize > ASSETS.MAX_LOCALSTORAGE_SIZE * ASSETS.CLEANUP_THRESHOLD || assets.length > ASSETS.MAX_COUNT) {
      const sortedAssets = [...assets].sort((a, b) => b.timestamp - a.timestamp);
      return sortedAssets.slice(0, ASSETS.MAX_COUNT);
    }
    
    return assets;
  };

  useEffect(() => {
    const saveTimeout = setTimeout(() => {
      try {
        const cleanedAssets = cleanupOldAssets(assets);
        
        if (cleanedAssets.length !== assets.length) {
          setAssets(cleanedAssets);
          console.log(`Cleaned up old assets, keeping ${cleanedAssets.length} most recent`);
          return;
        }
        
        localStorage.setItem(STORAGE_KEYS.ASSETS, JSON.stringify(assets));
        console.log('Assets saved to localStorage successfully');
        console.log(`Current assets count: ${assets.length}`);
        console.log(`LocalStorage used: ${Math.round(checkLocalStorageSize() / 1024)} KB`);
      } catch (error: any) {
        console.error('Failed to save assets to localStorage:', error.message);
        try {
          const cleanedAssets = cleanupOldAssets(assets);
          localStorage.setItem(STORAGE_KEYS.ASSETS, JSON.stringify(cleanedAssets));
          setAssets(cleanedAssets);
          console.log('Assets saved after cleanup');
        } catch (cleanupError) {
          console.error('Failed to save assets even after cleanup:', cleanupError);
        }
      }
    }, 1500);

    return () => clearTimeout(saveTimeout);
  }, [assets]);

  const addAsset = useCallback((assetData: Omit<Asset, 'id' | 'date' | 'timestamp'>) => {
    try {
      const newAsset: Asset = {
        ...assetData,
        id: `asset-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        date: new Date().toISOString().split('T')[0],
        timestamp: Date.now(),
      };

      console.log('Adding new asset:', newAsset.title);
      console.log('Asset image URL length:', newAsset.images[0]?.length || 0);
      
      setAssets(prev => [newAsset, ...prev]);
      return newAsset;
    } catch (error: any) {
      console.error('Failed to add asset:', error.message);
      throw error;
    }
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setAssets(prev => prev.map(asset => 
      asset.id === id ? { ...asset, isFavorite: !asset.isFavorite } : asset
    ));
  }, []);

  const deleteAsset = useCallback((id: string) => {
    setAssets(prev => prev.filter(asset => asset.id !== id));
  }, []);

  const getRecentAssets = useCallback(() => {
    return assets.sort((a, b) => b.timestamp - a.timestamp);
  }, [assets]);

  return (
    <AssetsContext.Provider
      value={{
        assets,
        addAsset,
        toggleFavorite,
        deleteAsset,
        getRecentAssets,
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
}

export function useAssets() {
  const context = useContext(AssetsContext);
  if (!context) {
    throw new Error('useAssets must be used within AssetsProvider');
  }
  return context;
}
