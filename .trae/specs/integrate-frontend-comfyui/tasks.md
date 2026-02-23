# Tasks

## 阶段一：API 客户端开发

- [x] Task 1: 创建 ComfyUI API 客户端核心模块
  - [x] SubTask 1.1: 创建 `src/lib/comfyuiClient.ts` 文件，定义 ComfyUIClient 接口
  - [x] SubTask 1.2: 实现 HTTP 请求方法 (GET, POST)
  - [x] SubTask 1.3: 实现 WebSocket 连接和消息处理
  - [x] SubTask 1.4: 实现连接管理 (connect, disconnect, isConnected)

- [x] Task 2: 实现工作流执行 API
  - [x] SubTask 2.1: 实现 queuePrompt 方法 (提交工作流)
  - [x] SubTask 2.2: 实现 interrupt 方法 (中断执行)
  - [x] SubTask 2.3: 实现 getQueue 方法 (获取队列状态)
  - [x] SubTask 2.4: 实现 getHistory 方法 (获取执行历史)

- [x] Task 3: 实现模型和节点信息 API
  - [x] SubTask 3.1: 实现 getModels 方法 (获取模型列表)
  - [x] SubTask 3.2: 实现 getObjectInfo 方法 (获取节点类型信息)

- [x] Task 4: 实现图像操作 API
  - [x] SubTask 4.1: 实现 uploadImage 方法 (上传图像)
  - [x] SubTask 4.2: 实现 getImage 方法 (获取图像)
  - [x] SubTask 4.3: 实现 viewImage 方法 (预览图像)

## 阶段二：工作流转换层

- [x] Task 5: 创建工作流转换器
  - [x] SubTask 5.1: 创建 `src/lib/workflowBuilder.ts` 文件
  - [x] SubTask 5.2: 定义 ComfyUIWorkflow 接口和节点类型
  - [x] SubTask 5.3: 实现节点映射表 (前端节点 -> ComfyUI 节点)

- [x] Task 6: 实现工作流构建逻辑
  - [x] SubTask 6.1: 实现 buildWorkflow 方法 (转换节点图为工作流 JSON)
  - [x] SubTask 6.2: 实现节点连接关系处理
  - [x] SubTask 6.3: 实现输入/输出链接生成

## 阶段三：状态管理

- [x] Task 7: 创建 ComfyUI Context
  - [x] SubTask 7.1: 创建 `src/components/ComfyUIContext.tsx` 文件
  - [x] SubTask 7.2: 定义 ComfyUI 状态接口 (连接状态、模型列表、队列等)
  - [x] SubTask 7.3: 实现 ComfyUIProvider 组件
  - [x] SubTask 7.4: 实现 useComfyUI hook

- [x] Task 8: 更新 WorkflowContext
  - [x] SubTask 8.1: 添加 ComfyUI 客户端集成
  - [x] SubTask 8.2: 添加执行状态管理
  - [x] SubTask 8.3: 添加进度跟踪功能

## 阶段四：UI 组件

- [x] Task 9: 创建模型选择器组件
  - [x] SubTask 9.1: 创建 `src/components/ModelSelector.tsx` 文件
  - [x] SubTask 9.2: 实现模型列表加载和显示
  - [x] SubTask 9.3: 实现模型分类和搜索功能
  - [x] SubTask 9.4: 实现模型选择回调

- [x] Task 10: 创建进度指示器组件
  - [x] SubTask 10.1: 创建 `src/components/ProgressIndicator.tsx` 文件
  - [x] SubTask 10.2: 实现进度条显示
  - [x] SubTask 10.3: 实现预览图显示
  - [x] SubTask 10.4: 实现执行日志显示

- [x] Task 11: 创建节点组件适配
  - [x] SubTask 11.1: 创建 `src/components/nodes/ComfyNode.tsx` 通用节点包装器
  - [x] SubTask 11.2: 适配现有节点组件以支持 ComfyUI 参数

## 阶段五：配置和环境

- [x] Task 12: 更新环境配置
  - [x] SubTask 12.1: 更新 `.env.example` 添加 ComfyUI 配置项
  - [x] SubTask 12.2: 更新 `src/config.ts` 添加 ComfyUI 配置

## 阶段六：扩展功能

- [x] Task 13: 实现工作流模板库
  - [x] SubTask 13.1: 创建模板数据结构和存储
  - [x] SubTask 13.2: 创建内置模板 (文生图、图生图等)
  - [x] SubTask 13.3: 实现模板浏览和应用 UI

- [x] Task 14: 实现资产库管理
  - [x] SubTask 14.1: 创建模型资产浏览组件
  - [x] SubTask 14.2: 创建图像历史管理组件
  - [x] SubTask 14.3: 实现资产搜索和筛选

- [x] Task 15: 实现 API 管理与监控
  - [x] SubTask 15.1: 创建服务器状态监控组件
  - [x] SubTask 15.2: 实现多后端配置支持
  - [x] SubTask 15.3: 实现执行统计功能

- [x] Task 16: 实现暗色主题
  - [x] SubTask 16.1: 创建 CSS 变量系统
  - [x] SubTask 16.2: 实现主题切换功能
  - [x] SubTask 16.3: 适配节点和连接线颜色

## 阶段七：测试和验证

- [x] Task 17: 编写单元测试
  - [x] SubTask 17.1: ComfyUI 客户端方法测试
  - [x] SubTask 17.2: 工作流转换测试
  - [x] SubTask 17.3: 节点映射测试

- [x] Task 18: 集成测试
  - [x] SubTask 18.1: 端到端工作流执行测试
  - [x] SubTask 18.2: 图像生成测试
  - [x] SubTask 18.3: 错误处理测试

# Task Dependencies

- [Task 2] depends on [Task 1]
- [Task 3] depends on [Task 1]
- [Task 4] depends on [Task 1]
- [Task 6] depends on [Task 5]
- [Task 7] depends on [Task 1]
- [Task 8] depends on [Task 7]
- [Task 9] depends on [Task 3]
- [Task 10] depends on [Task 2]
- [Task 11] depends on [Task 6]
- [Task 13] depends on [Task 6]
- [Task 14] depends on [Task 3]
- [Task 15] depends on [Task 1]
- [Task 17] depends on [Task 1, Task 5, Task 6]
- [Task 18] depends on [Task 17]

# Parallelizable Work

以下任务可以并行执行：
- Task 1, Task 5, Task 12 (无依赖)
- Task 2, Task 3, Task 4 (都依赖 Task 1，可并行)
- Task 9, Task 10, Task 11 (各自独立依赖)
- Task 13, Task 14, Task 15, Task 16 (扩展功能，可并行)