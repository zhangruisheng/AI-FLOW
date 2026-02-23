import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { testApiKey } from '../lib/googleAI';
import { toast } from 'sonner';

interface ApiKeyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type ModelType = 'google' | 'ark';

export default function ApiKeyDialog({ open, onOpenChange }: ApiKeyDialogProps) {
  const [apiKey, setApiKey] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [modelType, setModelType] = useState<ModelType>('google');

  const handleSave = async () => {
    if (!apiKey.trim()) return;

    setIsValidating(true);
    
    // Test the API key only for Google models
    let result = { valid: true, isQuota: false };
    if (modelType === 'google') {
      result = await testApiKey(apiKey.trim());
    }
    
    setIsValidating(false);
    
    if (result.valid || modelType === 'ark') {
      // Save API key based on model type
      const storageKey = modelType === 'google' ? 'gemini_api_key' : 'ark_api_key';
      localStorage.setItem(storageKey, apiKey.trim());
      
      onOpenChange(false);
      setApiKey('');
      
      if (modelType === 'google' && result.valid) {
        toast.success('API Key validated successfully!');
      } else if (modelType === 'google' && result.isQuota) {
        toast.warning('API Key saved, but quota is currently exceeded.', {
          description: 'You may need to wait for the quota to reset or use a different key.',
          duration: 5000,
        });
      } else if (modelType === 'ark') {
        toast.success('Ark API Key saved successfully!');
      }
    } else {
      toast.error('Invalid API key', { duration: 3000 });
    }
  };

  const handleUseDefault = () => {
    toast.info('Using default API key', { duration: 2000 });
    localStorage.removeItem('gemini_api_key');
    localStorage.removeItem('ark_api_key');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Configure API Key</DialogTitle>
          <DialogDescription>
            Enter your API key for the selected model to enable image generation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Model Selection */}
          <div className="grid gap-2">
            <Label htmlFor="model-select">Model</Label>
            <Select value={modelType} onValueChange={(value) => setModelType(value as ModelType)}>
              <SelectTrigger id="model-select">
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google">Google AI Models (Gemini)</SelectItem>
                <SelectItem value="ark">Ark Models (Doubao Seedream)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* API Key Input */}
          <div className="grid gap-2">
            <Label htmlFor="api-key">API Key</Label>
            <Input
              id="api-key"
              type="password"
              placeholder={modelType === 'google' ? 'AIza...' : 'f424b14b-d977-4266-a21c-769ca254e17a'}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !isValidating) {
                  handleSave();
                }
              }}
              className="font-sans text-[length:var(--text-p)]"
              autoComplete="off"
            />
          </div>
          
          {/* Model-specific Instructions */}
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground">
              Your API key is stored locally in your browser and never sent to our servers.
            </p>
            {modelType === 'google' && (
              <a 
                href="https://makersuite.google.com/app/apikey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Get API key from Google AI Studio →
              </a>
            )}
            {modelType === 'ark' && (
              <p className="text-sm text-muted-foreground">
                For Ark models, obtain your API key from the Volcano Engine console.
              </p>
            )}
          </div>
        </div>
        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={handleUseDefault}>
            Use Default
          </Button>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!apiKey.trim() || isValidating}>
            {isValidating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save {modelType === 'google' && '& Test'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
