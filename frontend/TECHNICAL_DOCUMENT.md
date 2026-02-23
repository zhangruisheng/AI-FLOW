# 技术开发文档

## 1. 项目概述

本项目是一个基于 React 和 TypeScript 的图像生成工作流应用，支持通过 Google AI 和 Ark API 生成高质量图像。应用提供了直观的节点式工作流界面，用户可以通过连接不同类型的节点来构建图像生成流程。

### 核心功能
- 多模型图像生成（Google Gemini、Imagen、Doubao Seedream）
- 节点式工作流编辑
- 图像预览和管理
- 资产库管理
- 多参数配置
- 错误处理和重试机制
- 本地状态持久化

## 2. 技术栈

| 类别 | 技术/库 | 版本 | 用途 |
|------|---------|------|------|
| 前端框架 | React | 18+ | 用户界面构建 |
| 语言 | TypeScript | 5+ | 类型安全开发 |
| 工作流 | @xyflow/react | 12+ | 节点式工作流编辑 |
| 样式 | Tailwind CSS | 4+ | 响应式样式 |
| 状态管理 | React Context API | - | 全局状态管理 |
| 持久化 | localStorage | - | 本地状态持久化 |
| API 集成 | Google AI SDK | - | Google 模型集成 |
| API 集成 | Ark API | - | Doubao 模型集成 |
| API 集成 | Supabase | 2.49.8+ | 后端服务集成 |
| 通知 | sonner | 2.0.3 | 用户通知 |
| 图标 | lucide-react | 0.487.0+ | UI 图标 |
| UI 组件库 | Radix UI | 1.1.0+ | 基础 UI 组件 |
| 动画 | GSAP | 3.14.2+ | 高级动画效果 |
| 轮播 | embla-carousel-react | 8.6.0+ | 图像轮播 |
| 表单 | react-hook-form | 7.55.0+ | 表单管理 |
| 图表 | recharts | 2.15.2+ | 数据可视化 |
| 工具库 | clsx, tailwind-merge | - | 类名管理 |
| 开发工具 | Vite | 6.3.5+ | 开发服务器和构建 |

## 3. 项目结构

```
/src
  /components
    /edges
      DeletableEdge.tsx       # 可删除的边
      SimpleEdge.tsx          # 简单边
    /figma
      ImageWithFallback.tsx   # 带回退的图像组件
    /nodes
      AddNodeButton.tsx       # 添加节点按钮
      CharacterNode.tsx       # 角色节点
      ImageEditorInput.tsx    # 图像编辑器输入
      ImageEditorNode.tsx     # 图像编辑节点
      ImageEditorService.ts   # 图像编辑服务
      ImageInputNode.tsx      # 图像输入节点
      NodeToolbar.tsx         # 节点工具栏
      NodeTypeMenu.tsx        # 节点类型菜单
      PreviewNode.tsx         # 预览节点
      ProcessingNode.tsx      # 处理节点
      TextInputNode.tsx       # 文本输入节点
    /ui
      # Radix UI 组件
      accordion.tsx
      alert-dialog.tsx
      alert.tsx
      aspect-ratio.tsx
      avatar.tsx
      badge.tsx
      breadcrumb.tsx
      button.tsx
      calendar.tsx
      card.tsx
      carousel.tsx
      chart.tsx
      checkbox.tsx
      collapsible.tsx
      command.tsx
      context-menu.tsx
      dialog.tsx
      drawer.tsx
      dropdown-menu.tsx
      form.tsx
      hover-card.tsx
      image-display.tsx
      input-otp.tsx
      input.tsx
      label.tsx
      menubar.tsx
      navigation-menu.tsx
      pagination.tsx
      popover.tsx
      progress.tsx
      radio-group.tsx
      resizable.tsx
      scroll-area.tsx
      select.tsx
      separator.tsx
      sheet.tsx
      sidebar.tsx
      skeleton.tsx
      slider.tsx
      sonner.tsx
      switch.tsx
      table.tsx
      tabs.tsx
      textarea.tsx
      toggle-group.tsx
      toggle.tsx
      tooltip.tsx
      use-mobile.ts
      utils.ts
    ApiKeyDialog.tsx          # API Key 配置对话框
    AssetsContext.tsx         # 资产库状态管理
    AssetsPage.tsx            # 资产库页面
    BottomToolbar.tsx         # 底部工具栏
    CanvasContextMenu.tsx     # 画布上下文菜单
    CharacterSelectionList.tsx # 角色选择列表
    CreationPage.tsx          # 创建页面
    DeleteConfirmDialog.tsx   # 删除确认对话框
    FloraCanvas.tsx           # 流程图画布
    Header.tsx                # 头部导航
    ImageGenerator.tsx        # 图像生成器
    InspirationPage.tsx       # 灵感页面
    NavigationToolbar.tsx     # 导航工具栏
    NewCharacterSelectionList.tsx # 新角色选择列表
    NodeDetailPanel.tsx       # 节点详情面板
    SidebarList.tsx           # 侧边栏列表
    WorkflowContext.tsx       # 工作流状态管理
    WorkflowEditPopover.tsx   # 工作流编辑弹出框
    WorkflowTabActions.tsx    # 工作流标签操作
  /lib
    googleAI.ts               # Google AI 和 Ark API 集成
    presets.ts                # 预设配置
  /imports
    svg-*.ts                  # SVG 图标导入
  /utils
    supabase/                 # Supabase 配置
  App.tsx                     # 应用主组件
  main.tsx                    # 应用入口
```

## 4. 核心功能模块

### 4.1 图像生成模块

#### 4.1.1 支持的模型
- **Gemini 2.5 Flash** - 免费模型，适合快速生成
- **Gemini 3.0 Pro** - 专业预览模型
- **Imagen 4.0** - 旗舰画质模型
- **Doubao Seedream 4.5** - 火山引擎模型

#### 4.1.2 生成流程

1. **参数收集**：从用户输入中收集以下参数
   - 模型选择
   - 提示词
   - 宽高比
   - 图像质量
   - 组图模式
   - 提示词一致性
   - 随机种子

2. **输入验证**：检查是否有提示词或连接的参考图片

3. **API 调用**：根据选择的模型调用相应的 API
   - Google 模型：调用 Google AI SDK
   - Doubao 模型：调用 Ark API

4. **结果处理**：
   - 保存生成的图像到 `processedImages` 状态
   - 将结果保存到资产库
   - 显示成功提示

5. **错误处理**：
   - 捕获并显示 API 错误
   - 处理配额限制
   - 提供重试机制

### 4.2 工作流编辑模块

#### 4.2.1 节点类型
- **Image Input** - 图像输入节点
- **Text Input** - 文本输入节点
- **Image Editor** - 图像编辑和生成节点
- **Preview** - 结果预览节点
- **Character** - 角色节点
- **Processing** - 处理节点

#### 4.2.2 节点连接
- 支持拖拽创建节点
- 支持节点间连接
- 支持删除节点和连接
- 支持节点位置调整
- 支持边的自定义样式和行为

#### 4.2.3 节点工具栏
- 每个节点都有专用工具栏
- 支持节点类型切换
- 支持节点属性编辑
- 支持节点删除

### 4.3 资产库模块

#### 4.3.1 功能
- 保存生成的图像
- 按时间排序显示
- 支持收藏功能
- 支持标签管理

#### 4.3.2 存储结构
```typescript
interface Asset {
  type: 'image';
  title: string;
  tags: string[];
  prompt: string;
  images: string[];
  isFavorite: boolean;
}
```

## 5. 详细功能使用逻辑

### 5.1 图像生成流程

#### 步骤 1：创建或选择 Image Editor 节点
1. 点击画布空白处或使用添加节点按钮创建新的 Image Editor 节点
2. 或选择已有的 Image Editor 节点

#### 步骤 2：配置生成参数
1. **模型选择**：点击模型下拉菜单，选择所需模型
2. **提示词输入**：
   - 直接在节点的文本输入框中输入提示词
   - 或连接 Text Input 节点作为提示词来源
3. **参考图片**：
   - 连接 Image Input 节点作为参考图片
   - 支持多张参考图片
4. **参数配置**：
   - 宽高比：选择图像比例
   - 质量：选择图像质量
   - 组图模式：选择是否生成组图
   - 提示词一致性：调整生成结果与提示词的一致程度
   - 随机种子：控制生成的随机性

#### 步骤 3：执行生成
1. 点击 Image Editor 节点右下角的生成按钮
2. 观察控制台日志，了解执行进度
3. 等待生成完成

#### 步骤 4：查看结果
1. 生成的结果会自动显示在连接的 Preview 节点中
2. 结果会自动保存到资产库的最近目录
3. 可以点击 Preview 节点中的保存按钮下载图像

### 5.2 工作流管理

#### 创建新工作流
1. 点击顶部导航栏中的添加工作流按钮
2. 新工作流会自动创建并设置为当前活动工作流

#### 导入工作流
1. 通过 API 或其他方式获取工作流的节点和边数据
2. 使用 `importWorkflow` 函数导入工作流
3. 导入的工作流会自动添加到工作流列表中

#### 删除工作流
1. 点击工作流旁边的删除按钮
2. 系统会确认删除操作
3. 注意：至少保留一个工作流

### 5.3 资产库使用

#### 查看资产
1. 点击顶部导航栏中的资产库按钮
2. 资产库页面会显示所有保存的资产
3. 资产按时间倒序排列

#### 收藏资产
1. 在资产库页面中，点击资产卡片上的星标按钮
2. 收藏的资产会显示在收藏标签页中

#### 使用资产
1. 在资产库页面中，点击资产卡片上的使用按钮
2. 资产会被应用到当前活动的工作流中

## 6. API 集成

### 6.1 Google AI API

#### 6.1.1 配置
- 需要在设置中配置 Google API Key
- API Key 存储在 localStorage 中

#### 6.1.2 支持的模型
- `gemini-2.5-flash-image`
- `gemini-3-pro-image-preview`
- `imagen-4.0-generate-001`

#### 6.1.3 调用流程
1. 加载 Google AI SDK
2. 创建 GoogleGenAI 实例
3. 构建生成请求
4. 执行生成操作
5. 处理返回的 base64 图像数据

### 6.2 Ark API

#### 6.2.1 配置
- 需要在设置中配置 Ark API Key
- API Key 存储在 localStorage 中

#### 6.2.2 支持的模型
- `doubao-seedream-4-5-251128`

#### 6.2.3 调用流程
1. 构建 API 请求体
2. 发送 POST 请求到 Ark API
3. 处理返回的图像 URL
4. 直接使用返回的 URL 作为图像源

### 6.3 Supabase API

#### 6.3.1 配置
- 使用 `@jsr/supabase__supabase-js` 库进行集成
- 配置信息存储在环境变量中

#### 6.3.2 功能
- 资产存储和管理
- 用户认证（未来规划）
- 工作流分享和协作（未来规划）

#### 6.3.3 调用流程
1. 创建 Supabase 客户端实例
2. 执行相应的数据库操作
3. 处理返回的数据
4. 集成到应用状态管理中

## 7. 状态管理

### 7.1 WorkflowContext

#### 7.1.1 核心状态
```typescript
interface Workflow {
  id: string;
  name: string;
  nodes: Node[];
  edges: Edge[];
  selectedNodeId: string | null;
  images: Record<string, string>;
  processedImages: Record<string, string>;
  isProcessing: boolean;
}
```

#### 7.1.2 核心方法
- `setProcessedImage(nodeId: string, imageUrl: string)` - 保存生成的图像
- `updateWorkflow(id: string, data: Partial<Workflow>)` - 更新工作流
- `addWorkflow()` - 创建新工作流
- `removeWorkflow(id: string)` - 删除工作流
- `importWorkflow(nodes: Node[], edges: Edge[])` - 导入工作流

### 7.2 AssetsContext

#### 7.2.1 核心状态
```typescript
interface Asset {
  type: 'image';
  title: string;
  tags: string[];
  prompt: string;
  images: string[];
  isFavorite: boolean;
}
```

#### 7.2.2 核心方法
- `addAsset(asset: Omit<Asset, 'id' | 'createdAt'>)` - 添加新资产
- `toggleFavorite(assetId: string)` - 切换资产收藏状态
- `deleteAsset(assetId: string)` - 删除资产

## 8. 错误处理

### 8.1 全局错误处理

应用采用了多层次的错误处理策略：

1. **API 错误处理**：
   - 捕获 API 调用错误
   - 提供用户友好的错误信息
   - 处理配额限制和速率限制

2. **重试机制**：
   - 实现了指数退避重试策略
   - 针对速率限制错误自动重试
   - 最大重试次数：3次

3. **用户通知**：
   - 使用 sonner 显示错误通知
   - 提供详细的错误信息
   - 区分不同类型的错误

### 8.2 常见错误及解决方案

| 错误类型 | 错误信息 | 解决方案 |
|---------|---------|----------|
| API Key 缺失 | 请先配置 API Key | 在设置中配置相应的 API Key |
| 配额限制 | API busy or quota exceeded | 等待配额重置或使用其他 API Key |
| 速率限制 | Please retry in Xs | 等待指定时间后重试 |
| 内容审核 | Content detected | 修改提示词，避免敏感内容 |
| 网络错误 | Network error | 检查网络连接后重试 |
| 参数错误 | Invalid parameters | 检查并修正输入参数 |

## 9. 性能优化

### 9.1 前端优化

1. **懒加载**：
   - Google AI SDK 懒加载
   - 大型组件按需加载

2. **状态管理优化**：
   - 使用 useCallback 缓存函数
   - 使用 useMemo 缓存计算结果

3. **网络优化**：
   - 直接使用 Ark API 返回的图像 URL
   - 避免不必要的网络请求

4. **渲染优化**：
   - 使用 React.memo 优化组件渲染
   - 避免不必要的重渲染

### 9.2 API 优化

1. **请求优化**：
   - 批量处理请求
   - 优化请求参数

2. **错误处理**：
   - 智能重试机制
   - 错误缓存和避免重复错误

3. **响应处理**：
   - 流式处理大型响应
   - 高效解析 JSON 响应

## 10. 开发流程

### 10.1 本地开发

1. **安装依赖**：
   ```bash
   npm install
   ```

2. **启动开发服务器**：
   ```bash
   npm run dev
   ```

3. **访问应用**：
   打开浏览器访问 `http://localhost:3000`

### 10.2 构建和部署

1. **构建生产版本**：
   ```bash
   npm run build
   ```

2. **预览生产版本**：
   ```bash
   npm run preview
   ```

3. **部署**：
   将 `dist` 目录部署到静态网站托管服务

### 10.3 代码规范

项目使用 TypeScript 进行类型检查，确保代码质量和类型安全。

## 11. 测试策略

### 11.1 单元测试

1. **组件测试**：
   - 测试各个节点组件的渲染和交互
   - 测试上下文提供者的状态管理

2. **API 测试**：
   - 测试 API 调用函数
   - 测试错误处理和重试机制

### 11.2 集成测试

1. **工作流测试**：
   - 测试完整的工作流创建和执行
   - 测试节点连接和数据传递

2. **端到端测试**：
   - 测试完整的用户流程
   - 测试不同浏览器和设备的兼容性

### 11.3 性能测试

1. **加载性能**：
   - 测试应用加载时间
   - 测试首屏渲染时间

2. **运行性能**：
   - 测试工作流编辑的响应性
   - 测试图像生成的性能

## 12. 未来规划

### 12.1 功能增强

1. **模型扩展**：
   - 支持更多 AI 模型
   - 集成本地模型

2. **功能扩展**：
   - 图像编辑和处理
   - 视频生成
   - 3D 模型生成

3. **用户体验**：
   - 实时预览
   - 模板系统
   - 协作功能

### 12.2 技术升级

1. **架构优化**：
   - 微前端架构
   - 服务端渲染

2. **性能优化**：
   - WebAssembly 优化
   - 边缘计算集成

3. **安全增强**：
   - 更强的 API Key 保护
   - 内容安全策略

## 13. 结论

本项目是一个功能完整、架构清晰的图像生成工作流应用，采用了现代前端技术栈和最佳实践。通过节点式工作流界面，用户可以直观地构建和执行图像生成流程，支持多种 AI 模型，提供了丰富的参数配置选项。

应用具有良好的错误处理和用户体验，支持本地状态持久化，适合作为图像生成和管理的一站式解决方案。通过不断的功能增强和技术升级，项目有望成为行业领先的 AI 图像生成工具。

## 14. 附录

### 14.1 环境变量

| 变量名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| VITE_GOOGLE_API_KEY | string | - | Google API Key |
| VITE_ARK_API_KEY | string | - | Ark API Key |

### 14.2 常用命令

| 命令 | 描述 |
|------|------|
| npm run dev | 启动开发服务器 |
| npm run build | 构建生产版本 |
| npm run preview | 预览生产版本 |
| npm run lint | 运行 ESLint |
| npm run typecheck | 运行 TypeScript 类型检查 |
| npm run format | 格式化代码 |

### 14.3 开发资源

- [React 文档](https://react.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [@xyflow/react 文档](https://xyflow.com/docs)
- [Google AI SDK 文档](https://ai.google.dev/docs)
- [Ark API 文档](https://www.volcengine.com/docs/ark)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Vite 文档](https://vitejs.dev/guide/)

### 14.4 版本历史

| 版本 | 日期 | 主要变更 |
|------|------|----------|
| 1.0.0 | 2026-02-03 | 初始版本 |
| 1.1.0 | 2026-02-04 | 修复错误处理和性能优化 |
| 1.2.0 | 2026-02-05 | 添加资产库功能 |
| 1.3.0 | 2026-02-11 | 技术文档更新，添加新组件和功能支持 |
