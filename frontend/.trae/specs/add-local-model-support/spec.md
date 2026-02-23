# Add Local Model Support (Z-Image) Spec

## Why
当前应用仅支持云端 API (Google Gemini、火山引擎 Ark)，用户需要依赖网络和第三方服务。添加本地模型支持可以让用户在本地运行开源图像生成模型 Z-Image，实现更低的延迟、更好的隐私保护，以及无需 API 配额限制的图像生成体验。

## What Changes
- 添加 Z-Image 本地模型配置选项
- 实现本地模型 API 调用逻辑
- 更新模型选择 UI 支持本地模型
- 添加本地服务器状态检测功能
- 支持多种 Z-Image 变体 (Turbo、Base、Edit)

## Impact
- Affected code:
  - [src/config.ts](file:///c:/Users/monkr/Documents/github/Creativeworkflowapp/src/config.ts) - 添加本地模型配置
  - [src/lib/googleAI.ts](file:///c:/Users/monkr/Documents/github/Creativeworkflowapp/src/lib/googleAI.ts) - 添加本地模型调用逻辑
  - [src/components/CreationPage.tsx](file:///c:/Users/monkr/Documents/github/Creativeworkflowapp/src/components/CreationPage.tsx) - 更新模型选择 UI
- Affected specs: 图像生成能力扩展

---

## ADDED Requirements

### Requirement: Local Model Configuration
系统应支持配置本地模型服务端点。

#### Scenario: Configure Local Server Endpoint
- **WHEN** 用户在设置中配置本地服务器地址
- **THEN** 系统应保存该配置到 localStorage
- **AND** 支持默认地址 `http://localhost:8000`

#### Scenario: Local Server Health Check
- **WHEN** 用户选择本地模型时
- **THEN** 系统应检测本地服务器是否可用
- **AND** 显示服务器状态（在线/离线）

---

### Requirement: Z-Image Model Support
系统应支持 Z-Image 系列模型的图像生成。

#### Scenario: Generate Image with Z-Image-Turbo
- **WHEN** 用户选择 Z-Image-Turbo 模型并提交生成请求
- **THEN** 系统应调用本地 API 端点 `/generate`
- **AND** 使用 8 NFEs 进行快速生成
- **AND** 返回生成的图像

#### Scenario: Generate Image with Z-Image (Base)
- **WHEN** 用户选择 Z-Image 基础模型
- **THEN** 系统应支持 CFG (Classifier-Free Guidance)
- **AND** 使用 50 steps 进行高质量生成
- **AND** 支持负面提示词

#### Scenario: Generate Image with Z-Image-Edit
- **WHEN** 用户选择 Z-Image-Edit 模型并上传参考图
- **THEN** 系统应支持图像编辑功能
- **AND** 根据自然语言指令进行图像修改

---

### Requirement: Model Selection UI
模型选择界面应显示本地模型选项。

#### Scenario: Display Local Model Options
- **WHEN** 本地服务器在线时
- **THEN** 模型下拉菜单应显示 Z-Image 系列模型
- **AND** 显示本地服务器状态指示器

#### Scenario: Local Model Unavailable Warning
- **WHEN** 本地服务器离线时
- **THEN** 本地模型选项应显示为禁用状态
- **AND** 显示"服务器离线"提示

---

### Requirement: API Integration
系统应实现与 Z-Image 本地 API 的集成。

#### Scenario: Text-to-Image Generation
- **WHEN** 调用本地模型生成图像
- **THEN** 请求格式应符合 Z-Image API 规范
```json
{
  "prompt": "string",
  "negative_prompt": "string (optional)",
  "num_inference_steps": 8,
  "guidance_scale": 3.5,
  "width": 1024,
  "height": 1024,
  "seed": -1
}
```

#### Scenario: Image-to-Image Generation
- **WHEN** 使用 Z-Image-Edit 进行图像编辑
- **THEN** 请求应包含参考图像
```json
{
  "prompt": "string",
  "image": "base64 encoded image",
  "strength": 0.8
}
```

---

## MODIFIED Requirements

### Requirement: AI Models Configuration
扩展 AI_MODELS 配置以支持本地模型。

```typescript
export const AI_MODELS = {
  SUPPORTED_MODELS: [
    // ... existing models ...
    { id: 'z-image-turbo', label: 'Z-Image Turbo (本地)', type: 'local' },
    { id: 'z-image', label: 'Z-Image (本地)', type: 'local' },
    { id: 'z-image-edit', label: 'Z-Image Edit (本地)', type: 'local' },
  ],
  LOCAL_MODEL_ENDPOINT: 'http://localhost:8000',
  // ...
};
```

---

## Technical Implementation Notes

### Z-Image API Endpoints
基于 Z-Image 官方文档，本地服务器应提供以下端点：

| 端点 | 方法 | 用途 |
|------|------|------|
| `/generate` | POST | 文生图 |
| `/edit` | POST | 图生图/编辑 |
| `/health` | GET | 健康检查 |

### Diffusers Integration
Z-Image 已集成到 diffusers 库，用户可通过以下方式启动本地服务：
```python
from diffusers import DiffusionPipeline
import torch
from flask import Flask, request, jsonify

pipe = DiffusionPipeline.from_pretrained(
    "Zhihu-ai/Z-Image-Turbo",
    custom_pipeline="zhihu-ai/z-image"
)
pipe.to("cuda")

app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    image = pipe(data['prompt']).images[0]
    # ... return image
```

### Error Handling
- 连接超时：显示"无法连接到本地服务器"
- GPU 内存不足：显示"显存不足，请尝试减小图像尺寸"
- 模型未加载：显示"模型加载中，请稍候"

---

## Dependencies
- 用户需自行部署 Z-Image 本地服务
- 需要支持 CUDA 的 GPU（推荐 16GB+ 显存）
- 本地服务需实现兼容的 API 接口
