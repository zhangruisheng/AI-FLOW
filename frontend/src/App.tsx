import { useState, useEffect } from 'react';
import FloraCanvas from './components/FloraCanvas';
import Header from './components/Header';
import NavigationToolbar from './components/NavigationToolbar';
import CreationPage from './components/CreationPage';
import AssetsPage from './components/AssetsPage';
import InspirationPage from './components/InspirationPage';
import { WorkflowProvider } from './components/WorkflowContext';
import { AssetsProvider } from './components/AssetsContext';
import { LanguageProvider } from './components/LanguageContext';
import { ComfyUIProvider } from './components/ComfyUIContext';
import { Toaster } from './components/ui/sonner';
import { STORAGE_KEYS } from './config';

export default function App() {
  const [currentView, setCurrentView] = useState<'editor' | 'creation' | 'assets' | 'inspiration'>(() => {
    const savedView = localStorage.getItem(STORAGE_KEYS.CURRENT_VIEW);
    return (savedView as 'editor' | 'creation' | 'assets' | 'inspiration') || 'editor';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_VIEW, currentView);
  }, [currentView]);

  return (
    <LanguageProvider>
      <AssetsProvider>
        <WorkflowProvider>
          <ComfyUIProvider>
            <div className="w-screen h-screen relative bg-background overflow-hidden">
              <Header currentView={currentView} onViewChange={setCurrentView} />
              
              {currentView === 'editor' ? (
                <div className="absolute inset-0 z-0" style={{ backgroundColor: '#f1f4ff' }}>
                  <NavigationToolbar />
                  <FloraCanvas />
                </div>
              ) : currentView === 'creation' ? (
                <CreationPage onSwitchToEditor={() => setCurrentView('editor')} />
              ) : currentView === 'assets' ? (
                <AssetsPage onSwitchToEditor={() => setCurrentView('editor')} />
              ) : (
                <InspirationPage onSwitchToEditor={() => setCurrentView('editor')} />
              )}
              
              <Toaster />
            </div>
          </ComfyUIProvider>
        </WorkflowProvider>
      </AssetsProvider>
    </LanguageProvider>
  );
}