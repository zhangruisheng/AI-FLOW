import { useState, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from './ui/dialog';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { toast } from 'sonner';
import { useLanguage } from './LanguageContext';
import { useComfyUI } from './ComfyUIContext';
import { STORAGE_KEYS } from '../config';
import { SystemStats } from '../lib/comfyuiClient';

interface ComfyBackendManagerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function formatPercentage(used: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((used / total) * 100);
}

function getPythonVersion(versionString: string): string {
  const match = versionString.match(/(\d+\.\d+\.\d+)/);
  return match ? match[1] : versionString.split(' ')[0];
}

export default function ComfyBackendManager({ open, onOpenChange }: ComfyBackendManagerProps) {
  const { t } = useLanguage();
  const { 
    connect, 
    disconnect, 
    isConnected, 
    serverUrl, 
    updateServerUrl, 
    models, 
    refreshModels, 
    queue, 
    refreshQueue,
    systemStats,
    refreshSystemStats,
    interrupt
  } = useComfyUI();
  
  const [activeTab, setActiveTab] = useState('server');
  const [url, setUrl] = useState(serverUrl);
  const [autoReconnect, setAutoReconnect] = useState(true);
  const [isTesting, setIsTesting] = useState(false);
  const [modelSearchTerm, setModelSearchTerm] = useState('');
  const [selectedModelType, setSelectedModelType] = useState<string>('all');

  useEffect(() => {
    if (serverUrl) {
      setUrl(serverUrl);
    }
  }, [serverUrl]);

  useEffect(() => {
    if (open && isConnected) {
      refreshQueue();
      refreshSystemStats();
    }
  }, [open, isConnected, refreshQueue, refreshSystemStats]);

  useEffect(() => {
    if (!open) return;
    
    const interval = setInterval(() => {
      if (isConnected) {
        refreshQueue();
        refreshSystemStats();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [open, isConnected, refreshQueue, refreshSystemStats]);

  const handleTestConnection = async () => {
    if (!url) {
      toast.error('请输入服务器URL');
      return;
    }

    setIsTesting(true);
    try {
      updateServerUrl(url);
      await connect();
      toast.success('连接成功！');
    } catch (error) {
      toast.error('连接失败，请检查服务器URL');
    } finally {
      setIsTesting(false);
    }
  };

  const handleSaveConfig = () => {
    if (!url) {
      toast.error('请输入服务器URL');
      return;
    }

    updateServerUrl(url);
    localStorage.setItem('auto_reconnect', autoReconnect.toString());
    toast.success('配置已保存');
  };

  const handleDisconnect = () => {
    disconnect();
    toast.success('已断开连接');
  };

  const handleInterrupt = async () => {
    try {
      await interrupt();
      toast.success('已发送中断信号');
    } catch (error) {
      toast.error('中断失败');
    }
  };

  const filteredModels = useCallback(() => {
    const result: Record<string, Array<{ title: string; model_name: string }>> = {};
    
    Object.entries(models).forEach(([type, modelList]) => {
      if (!modelList || modelList.length === 0) return;
      if (selectedModelType !== 'all' && type !== selectedModelType) return;
      
      const filtered = modelList.filter(model => 
        model.title.toLowerCase().includes(modelSearchTerm.toLowerCase()) ||
        model.model_name.toLowerCase().includes(modelSearchTerm.toLowerCase())
      );
      
      if (filtered.length > 0) {
        result[type] = filtered;
      }
    });
    
    return result;
  }, [models, modelSearchTerm, selectedModelType]);

  const modelTypes = Object.keys(models);

  const renderSystemStatus = () => {
    if (!systemStats) {
      return (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            {isConnected ? '正在获取系统信息...' : '请先连接到ComfyUI服务器'}
          </p>
        </div>
      );
    }

    const { system, devices } = systemStats;
    const ramUsedPercent = formatPercentage(system.ram_total - system.ram_free, system.ram_total);
    const device = devices[0];
    const vramUsedPercent = device ? formatPercentage(device.vram_total - device.vram_free, device.vram_total) : 0;

    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">服务器状态</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between">
                <div className="font-medium">连接状态</div>
                <Badge variant={isConnected ? "default" : "destructive"} className={isConnected ? "bg-green-500 hover:bg-green-600" : ""}>
                  {isConnected ? '已连接' : '未连接'}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {serverUrl}
              </div>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="font-medium">队列状态</div>
              <div className="space-y-2 mt-2">
                <div className="flex justify-between text-sm">
                  <span>正在运行:</span>
                  <span className="font-medium text-orange-500">{queue?.queue_running?.length || 0}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>等待中:</span>
                  <span className="font-medium text-blue-500">{queue?.queue_pending?.length || 0}</span>
                </div>
              </div>
              {(queue?.queue_running?.length > 0 || queue?.queue_pending?.length > 0) && (
                <Button 
                  variant="destructive" 
                  size="sm" 
                  className="mt-2 w-full"
                  onClick={handleInterrupt}
                >
                  中断当前任务
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">资源使用情况</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">内存 (RAM)</div>
                <span className="text-sm text-muted-foreground">
                  {formatBytes(system.ram_total - system.ram_free)} / {formatBytes(system.ram_total)}
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-500" 
                  style={{ width: `${ramUsedPercent}%` }}
                ></div>
              </div>
              <div className="text-sm text-muted-foreground mt-1 text-right">
                {ramUsedPercent}% 已使用
              </div>
            </div>

            {device && (
              <div className="p-4 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-medium">显存 (VRAM)</div>
                  <span className="text-sm text-muted-foreground">
                    {formatBytes(device.vram_total - device.vram_free)} / {formatBytes(device.vram_total)}
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500" 
                    style={{ width: `${vramUsedPercent}%` }}
                  ></div>
                </div>
                <div className="text-sm text-muted-foreground mt-1 text-right">
                  {vramUsedPercent}% 已使用
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">服务器信息</h3>
          <div className="p-4 border border-border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">ComfyUI版本:</span>
                  <span className="font-medium">{system.comfyui_version || '未知'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Python版本:</span>
                  <span className="font-medium">{getPythonVersion(system.python_version)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">PyTorch版本:</span>
                  <span className="font-medium">{system.pytorch_version || '未知'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">操作系统:</span>
                  <span className="font-medium">{system.os}</span>
                </div>
              </div>
              <div className="space-y-3">
                {device && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">GPU型号:</span>
                      <span className="font-medium text-right max-w-[200px] truncate" title={device.name}>{device.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">设备类型:</span>
                      <span className="font-medium uppercase">{device.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">显存总量:</span>
                      <span className="font-medium">{formatBytes(device.vram_total)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">可用显存:</span>
                      <span className="font-medium text-green-500">{formatBytes(device.vram_free)}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderModelCard = (type: string, modelList: Array<{ title: string; model_name: string }>) => {
    const typeLabels: Record<string, string> = {
      checkpoints: 'Checkpoints',
      vae: 'VAE',
      loras: 'LoRA',
      controlnet: 'ControlNet',
      clip: 'CLIP',
      unet: 'UNet',
      style_models: 'Style Models',
      upscale_models: 'Upscale Models',
      embeddings: 'Embeddings',
    };

    return (
      <div key={type} className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{typeLabels[type] || type}</h3>
          <Badge variant="secondary">{modelList.length}</Badge>
        </div>
        <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2">
          {modelList.map((model, index) => (
            <div key={index} className="p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="font-medium truncate" title={model.title}>{model.title}</div>
              {model.model_name !== model.title && (
                <div className="text-sm text-muted-foreground truncate" title={model.model_name}>
                  {model.model_name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] lg:max-w-[900px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            后端Comfy管理
            <Badge variant={isConnected ? "default" : "destructive"} className={isConnected ? "bg-green-500" : ""}>
              {isConnected ? '已连接' : '未连接'}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            管理ComfyUI服务器配置、模型和工作流
          </DialogDescription>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="server">服务器配置</TabsTrigger>
            <TabsTrigger value="models">模型管理</TabsTrigger>
            <TabsTrigger value="workflows">工作流管理</TabsTrigger>
            <TabsTrigger value="status">状态监控</TabsTrigger>
          </TabsList>
          
          <TabsContent value="server" className="mt-4">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="server-url">服务器URL</Label>
                  <span className={`text-sm font-medium ${isConnected ? 'text-green-500' : 'text-red-500'}`}>
                    {isConnected ? '已连接' : '未连接'}
                  </span>
                </div>
                <Input
                  id="server-url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="http://localhost:8188"
                />
                <p className="text-sm text-muted-foreground">
                  输入ComfyUI服务器的URL地址，默认端口为8188
                </p>
              </div>

              <div className="space-y-2">
                <Label>连接操作</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={handleTestConnection}
                    disabled={isTesting || isConnected}
                    variant="default"
                  >
                    {isTesting ? '测试中...' : isConnected ? '已连接' : '测试连接'}
                  </Button>
                  <Button
                    onClick={handleDisconnect}
                    disabled={!isConnected}
                    variant="outline"
                  >
                    断开连接
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-reconnect">自动重连</Label>
                  <Switch
                    id="auto-reconnect"
                    checked={autoReconnect}
                    onCheckedChange={setAutoReconnect}
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  当连接断开时，自动尝试重新连接到服务器
                </p>
              </div>

              <Button
                onClick={handleSaveConfig}
                className="w-full"
              >
                保存配置
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="models" className="mt-4">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="搜索模型..."
                  value={modelSearchTerm}
                  onChange={(e) => setModelSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <select
                  value={selectedModelType}
                  onChange={(e) => setSelectedModelType(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option value="all">所有类型</option>
                  {modelTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <Button
                  onClick={async () => {
                    try {
                      await refreshModels();
                      toast.success('模型列表已刷新');
                    } catch (error) {
                      toast.error('刷新模型列表失败');
                    }
                  }}
                  variant="outline"
                >
                  刷新
                </Button>
              </div>

              <div className="space-y-4">
                {Object.entries(filteredModels()).length > 0 ? (
                  Object.entries(filteredModels()).map(([type, modelList]) => 
                    renderModelCard(type, modelList)
                  )
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      {isConnected 
                        ? (modelSearchTerm ? '未找到匹配的模型' : '未找到模型，请确保ComfyUI服务器已正确配置') 
                        : '请先连接到ComfyUI服务器'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="workflows" className="mt-4">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>导出工作流</Label>
                  <Button
                    onClick={() => {
                      const workflowData = localStorage.getItem('current_workflow');
                      if (workflowData) {
                        const blob = new Blob([workflowData], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `workflow_${Date.now()}.json`;
                        a.click();
                        URL.revokeObjectURL(url);
                        toast.success('工作流已导出');
                      } else {
                        toast.error('没有可导出的工作流');
                      }
                    }}
                    className="w-full"
                  >
                    导出当前工作流
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label>导入工作流</Label>
                  <Button
                    onClick={() => {
                      const input = document.createElement('input');
                      input.type = 'file';
                      input.accept = '.json';
                      input.onchange = (e: any) => {
                        const file = e.target.files?.[0];
                        if (!file) return;

                        const reader = new FileReader();
                        reader.onload = (e) => {
                          try {
                            const content = e.target?.result as string;
                            const workflow = JSON.parse(content);
                            localStorage.setItem('current_workflow', JSON.stringify(workflow));
                            toast.success('工作流已导入，请刷新页面查看');
                          } catch (error) {
                            toast.error('工作流文件解析失败');
                          }
                        };
                        reader.readAsText(file);
                      };
                      input.click();
                    }}
                    className="w-full"
                  >
                    导入工作流
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">工作流模板</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="font-medium">基础文生图</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      简单的文本生成图像工作流
                    </div>
                    <Button
                      onClick={() => {
                        const basicWorkflow = {
                          "3": {
                            "inputs": {
                              "seed": Math.floor(Math.random() * 1000000),
                              "steps": 20,
                              "cfg": 7,
                              "sampler_name": "euler",
                              "scheduler": "normal",
                              "denoise": 1,
                              "model": ["4", 0],
                              "positive": ["6", 0],
                              "negative": ["7", 0],
                              "latent_image": ["5", 0]
                            },
                            "class_type": "KSampler"
                          },
                          "4": {
                            "inputs": { "ckpt_name": "model.safetensors" },
                            "class_type": "CheckpointLoaderSimple"
                          },
                          "5": {
                            "inputs": { "width": 512, "height": 512, "batch_size": 1 },
                            "class_type": "EmptyLatentImage"
                          },
                          "6": {
                            "inputs": { "text": "beautiful landscape", "clip": ["4", 1] },
                            "class_type": "CLIPTextEncode"
                          },
                          "7": {
                            "inputs": { "text": "", "clip": ["4", 1] },
                            "class_type": "CLIPTextEncode"
                          },
                          "8": {
                            "inputs": { "samples": ["3", 0], "vae": ["4", 2] },
                            "class_type": "VAEDecode"
                          },
                          "9": {
                            "inputs": { "filename_prefix": "ComfyUI", "images": ["8", 0] },
                            "class_type": "SaveImage"
                          }
                        };
                        localStorage.setItem('current_workflow', JSON.stringify(basicWorkflow));
                        toast.success('模板已加载，请刷新页面查看');
                      }}
                      className="mt-3 w-full"
                    >
                      加载模板
                    </Button>
                  </div>

                  <div className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="font-medium">图生图</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      基于现有图像生成新图像
                    </div>
                    <Button
                      onClick={() => {
                        toast.info('图生图模板需要先上传参考图片');
                      }}
                      className="mt-3 w-full"
                    >
                      加载模板
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="status" className="mt-4">
            {renderSystemStatus()}
          </TabsContent>
        </Tabs>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            关闭
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
