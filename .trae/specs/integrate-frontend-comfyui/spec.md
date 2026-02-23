# Creativeworkflowapp 前端与 AI-FLOW 后端集成规范

## Why

将 Creativeworkflowapp 的现代 React UI 与 AI-FLOW (ComfyUI) 的强大后端能力相结合，创建一个功能完整、用户友好的 AI 图像生成工作流应用，实现本地模型调用、实时进度反馈和完整的工作流管理。

## What Changes

- 创建 ComfyUI API 客户端，支持 REST API 和 WebSocket 通信
- 实现工作流转换层，将前端节点映射为 ComfyUI 工作流 JSON
- 添加模型选择器、进度指示器等 UI 组件
- 更新环境配置和状态管理
- 实现工作流模板库、灵感库、资产库、API 管理等扩展功能

## Impact

- Affected specs: 前端 API 通信、工作流执行、模型管理、用户界面
- Affected code: 
  - `src/lib/comfyuiClient.ts` (新增)
  - `src/lib/workflowBuilder.ts` (新增)
  - `src/components/ComfyUIContext.tsx` (新增)
  - `src/config.ts` (修改)
  - `.env.example` (修改)

## ADDED Requirements

### Requirement: ComfyUI API 客户端

系统应提供 ComfyUI API 客户端，支持与 ComfyUI 后端服务通信。

#### Scenario: 连接服务器成功
- **WHEN** 用户启动应用且 ComfyUI 服务运行中
- **THEN** 客户端应成功建立 HTTP 和 WebSocket 连接

#### Scenario: 获取模型列表
- **WHEN** 客户端请求可用模型列表
- **THEN** 应返回 Checkpoint、LoRA、VAE、Embedding 等模型分类列表

#### Scenario: 执行工作流
- **WHEN** 用户提交工作流执行请求
- **THEN** 应将工作流 JSON 发送到 ComfyUI 并返回执行 ID

#### Scenario: 实时进度更新
- **WHEN** 工作流正在执行
- **THEN** 应通过 WebSocket 接收并显示实时进度和预览图

### Requirement: 工作流转换器

系统应提供工作流转换器，将前端节点图转换为 ComfyUI 工作流 JSON。

#### Scenario: 节点映射
- **WHEN** 前端包含 ImageInputNode、TextInputNode 等节点
- **THEN** 应正确映射到 ComfyUI 的 LoadImage、CLIPTextEncode 等节点

#### Scenario: 连接关系处理
- **WHEN** 前端节点之间存在连接
- **THEN** 应正确生成 ComfyUI 工作流的输入/输出链接

### Requirement: 模型选择器组件

系统应提供模型选择器组件，支持从 ComfyUI 获取和选择模型。

#### Scenario: 加载模型列表
- **WHEN** 组件挂载
- **THEN** 应从 ComfyUI API 获取可用模型并显示

#### Scenario: 选择模型
- **WHEN** 用户选择某个模型
- **THEN** 应更新工作流配置中的模型参数

### Requirement: 进度指示器组件

系统应提供进度指示器组件，显示工作流执行状态。

#### Scenario: 显示进度
- **WHEN** 工作流正在执行
- **THEN** 应显示当前节点、进度百分比和预览图

#### Scenario: 执行完成
- **WHEN** 工作流执行完成
- **THEN** 应显示最终生成的图像

### Requirement: 工作流模板库

系统应提供工作流模板库功能。

#### Scenario: 浏览模板
- **WHEN** 用户打开模板库
- **THEN** 应显示内置模板和用户自定义模板列表

#### Scenario: 应用模板
- **WHEN** 用户选择某个模板
- **THEN** 应加载该模板的工作流配置到编辑器

### Requirement: 资产库管理

系统应提供资产库管理功能。

#### Scenario: 浏览模型资产
- **WHEN** 用户打开资产库
- **THEN** 应显示已安装的模型列表及其信息

#### Scenario: 管理图像资产
- **WHEN** 用户查看生成历史
- **THEN** 应显示历史生成的图像及其参数

### Requirement: API 管理与监控

系统应提供 API 管理与监控功能。

#### Scenario: 查看服务器状态
- **WHEN** 用户打开监控面板
- **THEN** 应显示 CPU、GPU、内存使用率和队列状态

#### Scenario: 多后端配置
- **WHEN** 用户配置多个 ComfyUI 实例
- **THEN** 应支持负载均衡和实例切换

### Requirement: 暗色主题

系统应支持暗色主题。

#### Scenario: 主题切换
- **WHEN** 用户切换主题
- **THEN** 应立即应用对应的亮色或暗色主题

#### Scenario: 节点颜色适配
- **WHEN** 切换到暗色主题
- **THEN** 节点、连接线等元素颜色应正确适配

## MODIFIED Requirements

### Requirement: 环境配置

原有环境配置应扩展以支持 ComfyUI 连接。

- 添加 `VITE_COMFYUI_API_URL` 配置项
- 添加 `VITE_COMFYUI_WS_URL` 配置项

### Requirement: 状态管理

原有 WorkflowContext 应扩展以支持 ComfyUI 集成。

- 添加 ComfyUI 客户端实例管理
- 添加工作流执行状态跟踪
- 添加错误处理机制

## REMOVED Requirements

无移除的需求。原有 Google AI SDK 和 Ark API 支持保留作为可选云端模型支持。
