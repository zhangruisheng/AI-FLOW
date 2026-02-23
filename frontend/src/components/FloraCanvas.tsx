import {
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from "react";
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  BackgroundVariant,
  NodeTypes,
  EdgeTypes,
  NodeChange,
  EdgeChange,
  applyNodeChanges,
  applyEdgeChanges,
  ReactFlowInstance,
  ReactFlowProvider,
  MiniMap,
  MarkerType,
} from "@xyflow/react";

export enum DataType {
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
  ANY = 'ANY'
}
import "@xyflow/react/dist/style.css";
import ImageInputNode from "./nodes/ImageInputNode";
import ImageEditorNode from "./nodes/ImageEditorNode";
import ImageCaptionNode from "./nodes/ImageCaptionNode";
import PreviewNode from "./nodes/PreviewNode";
import TextInputNode from "./nodes/TextInputNode";
import CharacterNode from "./nodes/CharacterNode";
import { SubjectProcessingNode, StyleProcessingNode } from "./nodes/ProcessingNode";
import DeletableEdge from "./edges/DeletableEdge";
import SimpleEdge from "./edges/SimpleEdge";
import { useWorkflow } from "./WorkflowContext";
import BottomToolbar from "./BottomToolbar";
import CanvasContextMenu from "./CanvasContextMenu";
import { toast } from "sonner";
import { useThemeColors } from "../hooks/useThemeColors";

const nodeTypes: NodeTypes = {
  // ✅ Input Nodes
  imageInput: ImageInputNode,
  textInput: TextInputNode,
  videoInput: ImageInputNode, // 占位：使用 ImageInputNode
  character: CharacterNode, // 角色节点
  
  // ✅ Processing Nodes
  imageEditor: ImageEditorNode,
  imageEditorNode: ImageEditorNode,
  imageCaption: ImageCaptionNode, // 图片反推节点
  subjectProcessing: SubjectProcessingNode,
  styleProcessing: StyleProcessingNode,
  
  // ✅ Preview/Output Nodes
  preview: PreviewNode,
  imagePreview: PreviewNode, // 别名
  textPreview: PreviewNode, // 占位：使用 PreviewNode
  videoPreview: PreviewNode, // 占位：使用 PreviewNode
};

const edgeTypes: EdgeTypes = {
  deletable: DeletableEdge,
  simple: SimpleEdge,
};

function FloraCanvasInner() {
  const [tool, setTool] = useState<"hand" | "select">("hand");
  const [hasInitialized, setHasInitialized] = useState(false);

  // 上下文菜单状态
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    visible: boolean;
  } | null>(null);

  // React Flow 实例引用，用于坐标转换
  const reactFlowInstance = useRef<ReactFlowInstance | null>(
    null,
  );
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  // Get theme colors
  const colors = useThemeColors();

  const {
    activeWorkflowId,
    setSelectedNodeId,
    setNodes,
    nodes,
    setEdges,
    edges,
    addNode,
    viewport: savedViewport,
    setViewport,
  } = useWorkflow();

  // Reset initialization state when workflow changes
  useEffect(() => {
    setHasInitialized(false);
  }, [activeWorkflowId]);

  // 处理节点更改并直接更新到上下文
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    [setNodes],
  );

  // 处理边更改并直接更新到上下文
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    [setEdges],
  );

  // 处理连接并直接更新到上下文
  const onConnect = useCallback(
    (params: Connection) => {
      const newEdge: Edge = {
        ...params,
        id: `edge-${params.source}-${params.target}-${Date.now()}`,
        animated: true,
        style: {
          stroke: colors.foreground,
          strokeWidth: 4,
          opacity: 1,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: colors.foreground,
        },
      };

      const newEdges = addEdge(newEdge, edges);
      setEdges(newEdges);

      toast.success(`连接已创建 (${newEdges.length} 条连线)`);
    },
    [edges, setEdges, colors.foreground],
  );

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      setSelectedNodeId(node.id);
    },
    [setSelectedNodeId],
  );

  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null);
    if (contextMenu) setContextMenu(null);
  }, [setSelectedNodeId, contextMenu]);

  const onPaneContextMenu = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      setContextMenu({
        x: event.clientX,
        y: event.clientY,
        visible: true,
      });
    },
    [],
  );

  const onNodeContextMenu = useCallback(
    (event: React.MouseEvent, node: Node) => {
      event.preventDefault();
      setContextMenu({
        x: event.clientX,
        y: event.clientY,
        visible: true,
      });
      setSelectedNodeId(node.id);
    },
    [setSelectedNodeId],
  );

  const handleAddNodeFromContextMenu = useCallback(
    (
      type: string,
      label: string,
      position: { x: number; y: number },
    ) => {
      if (
        !reactFlowInstance.current ||
        !reactFlowWrapper.current
      )
        return;

      const reactFlowBounds =
        reactFlowWrapper.current.getBoundingClientRect();
      const projectedPosition =
        reactFlowInstance.current.screenToFlowPosition({
          x: position.x - reactFlowBounds.left,
          y: position.y - reactFlowBounds.top,
        });

      const newNodeId = `node-${Date.now()}`;
      const newNode = {
        id: newNodeId,
        type: type,
        position: projectedPosition,
        data: {
          label: label,
        },
      };

      addNode(newNode);
      toast.success(`已添加节点: ${label}`, { duration: 2000 });
      setContextMenu(null);
    },
    [addNode],
  );

  // Memoize default edge options to prevent recreation on every render
  const defaultEdgeOptions = useMemo(
    () => ({
      animated: true,
      style: {
        stroke: colors.foreground,
        strokeWidth: 2,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: colors.foreground,
      },
    }),
    [colors.foreground],
  );

  const connectionLineStyle = useMemo(
    () => ({
      stroke: colors.primary,
      strokeWidth: 2,
    }),
    [colors.primary],
  );

  const onNodesDelete = useCallback((deleted: Node[]) => {
    toast.success(`已删除 ${deleted.length} 个节点`);
  }, []);

  const onEdgesDelete = useCallback((deleted: Edge[]) => {
    if (deleted.length > 0) {
      toast.success(`已删除 ${deleted.length} 条连线`);
    }
  }, []);

  const isValidConnection = useCallback((connection: Connection) => {
    // 1. 防止自连接
    if (connection.source === connection.target) return false;

    // 2. 获取源 Handle 和 目标 Handle 的数据类型属性
    // 注意：需要在自定义节点的 Handle 上添加 data-datatype 属性
    const sourceNode = document.querySelector(`[data-nodeid="${connection.source}"]`);
    const targetNode = document.querySelector(`[data-nodeid="${connection.target}"]`);
    
    const sourceType = sourceNode?.querySelector(`[data-handleid="${connection.sourceHandle}"]`)
      ?.getAttribute('data-datatype');
    const targetType = targetNode?.querySelector(`[data-handleid="${connection.targetHandle}"]`)
      ?.getAttribute('data-datatype');

    // 3. 校验逻辑：类型必须匹配，或者其中一方为 ANY
    if (sourceType === DataType.ANY || targetType === DataType.ANY) return true;
    return sourceType === targetType;
  }, []);

  return (
    <div
      className="w-full h-full relative"
      ref={reactFlowWrapper}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodesDelete={onNodesDelete}
        onEdgesDelete={onEdgesDelete}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onNodeContextMenu={onNodeContextMenu}
        onPaneClick={onPaneClick}
        onPaneContextMenu={onPaneContextMenu}
        onInit={(instance) => {
          reactFlowInstance.current = instance;
          if (savedViewport && (savedViewport.x !== 0 || savedViewport.y !== 0 || savedViewport.zoom !== 1)) {
            instance.setViewport(savedViewport);
          }
          setHasInitialized(true);
        }}
        onMoveEnd={(event, viewport) => {
          setViewport({ x: viewport.x, y: viewport.y, zoom: viewport.zoom });
        }}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodesDraggable={true}
        nodesConnectable={true}
        elementsSelectable={true}
        reconnectRadius={20}
        panOnDrag={tool === "hand"}
        panOnScroll={true}
        fitView={!hasInitialized && (!savedViewport || (savedViewport.x === 0 && savedViewport.y === 0 && savedViewport.zoom === 1))}
        className="bg-background"
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineStyle={connectionLineStyle}
        deleteKeyCode={["Backspace", "Delete"]}
        multiSelectionKeyCode={["Control", "Meta"]}
        selectionKeyCode={["Shift"]}
        isValidConnection={isValidConnection}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          className="opacity-50"
          style={{
            backgroundColor: colors.background,
          }}
        />

        <MiniMap
          style={{
            backgroundColor: colors.card,
            opacity: 0.8,
          }}
          className="!border !border-border/20 !rounded-[16px] !bottom-[80px] !right-[20px] !w-[150px] !h-[100px]"
          nodeColor={colors.primary}
          maskColor={colors.background}
        />

        <BottomToolbar tool={tool} setTool={setTool} />
      </ReactFlow>

      {contextMenu && (
        <CanvasContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={() => setContextMenu(null)}
          onAddNode={handleAddNodeFromContextMenu}
        />
      )}
    </div>
  );
}

export default function FloraCanvas() {
  return (
    <ReactFlowProvider>
      <FloraCanvasInner />
    </ReactFlowProvider>
  );
}