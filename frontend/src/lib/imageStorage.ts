interface StoredImage {
  id: string;
  url: string;
  timestamp: number;
  prompt: string;
  metadata?: Record<string, any>;
}

class ImageStorageService {
  private dbName = 'creative_workflow_images';
  private dbVersion = 1;
  private db: IDBDatabase | null = null;

  private async openDB(): Promise<IDBDatabase> {
    if (this.db) return this.db;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        if (!db.objectStoreNames.contains('images')) {
          const imageStore = db.createObjectStore('images', { keyPath: 'id' });
          imageStore.createIndex('timestamp', 'timestamp');
          imageStore.createIndex('prompt', 'prompt');
        }
      };
    });
  }

  async saveImage(image: Omit<StoredImage, 'id' | 'timestamp'>): Promise<StoredImage> {
    const db = await this.openDB();
    const newImage: StoredImage = {
      ...image,
      id: `image-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
    };

    return new Promise((resolve, reject) => {
      const transaction = db.transaction('images', 'readwrite');
      const store = transaction.objectStore('images');
      const request = store.add(newImage);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(newImage);
    });
  }

  async getImage(id: string): Promise<StoredImage | null> {
    const db = await this.openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction('images', 'readonly');
      const store = transaction.objectStore('images');
      const request = store.get(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  async getRecentImages(limit: number = 20): Promise<StoredImage[]> {
    const db = await this.openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction('images', 'readonly');
      const store = transaction.objectStore('images');
      const index = store.index('timestamp');
      const request = index.openCursor(null, 'prev');

      const images: StoredImage[] = [];

      request.onerror = () => reject(request.error);
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor && images.length < limit) {
          images.push(cursor.value);
          cursor.continue();
        } else {
          resolve(images);
        }
      };
    });
  }

  async deleteImage(id: string): Promise<void> {
    const db = await this.openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction('images', 'readwrite');
      const store = transaction.objectStore('images');
      const request = store.delete(id);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async clearOldImages(days: number = 30): Promise<void> {
    const cutoffTime = Date.now() - (days * 24 * 60 * 60 * 1000);
    const db = await this.openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction('images', 'readwrite');
      const store = transaction.objectStore('images');
      const index = store.index('timestamp');
      const request = index.openCursor(IDBKeyRange.upperBound(cutoffTime));

      request.onerror = () => reject(request.error);
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          cursor.delete();
          cursor.continue();
        } else {
          resolve();
        }
      };
    });
  }

  async getImageCount(): Promise<number> {
    const db = await this.openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction('images', 'readonly');
      const store = transaction.objectStore('images');
      const request = store.count();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async searchImages(query: string): Promise<StoredImage[]> {
    const db = await this.openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction('images', 'readonly');
      const store = transaction.objectStore('images');
      const index = store.index('prompt');
      const request = index.openCursor();

      const results: StoredImage[] = [];

      request.onerror = () => reject(request.error);
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          if (cursor.value.prompt.toLowerCase().includes(query.toLowerCase())) {
            results.push(cursor.value);
          }
          cursor.continue();
        } else {
          resolve(results);
        }
      };
    });
  }
}

// Export a singleton instance
export const imageStorage = new ImageStorageService();
