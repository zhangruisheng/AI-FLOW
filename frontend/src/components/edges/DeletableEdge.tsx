import { BaseEdge, EdgeLabelRenderer, getBezierPath, EdgeProps } from '@xyflow/react';
import { X } from 'lucide-react';
import { useWorkflow } from '../WorkflowContext';
import { useState, useEffect } from 'react';

export default function DeletableEdge({
  id,
  source,
  target,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  selected,
}: EdgeProps) {
  const { setEdges, edges, images, nodes } = useWorkflow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  // Get theme colors from CSS variables
  const [strokeColor, setStrokeColor] = useState('var(--foreground)');

  useEffect(() => {
    const updateColors = () => {
      if (selected) {
        setStrokeColor('var(--primary)');
      } else {
        setStrokeColor('var(--foreground)');
      }
    };

    updateColors();
    
    // Listen for theme changes
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, [selected]);

  const onEdgeClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
    setEdges(edges.filter((edge) => edge.id !== id));
  };

  // Get source node image
  const sourceNode = nodes.find(node => node.id === source);
  const sourceImage = images[source] || sourceNode?.data?.image;

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          ...style,
          stroke: strokeColor,
          strokeWidth: 2,
        }}
      />
      {selected && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              fontSize: 12,
              pointerEvents: 'all',
            }}
            className="nodrag nopan"
          >
            <button
              className="size-6 bg-destructive border-2 border-card rounded-full flex items-center justify-center cursor-pointer hover:scale-125 transition-transform"
              onClick={onEdgeClick}
            >
              <X className="size-3 text-destructive-foreground" />
            </button>
          </div>
        </EdgeLabelRenderer>
      )}
      {/* Show image thumbnail if source node has an image */}
      {sourceImage && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: 'none',
            }}
            className="nodrag nopan"
          >
            <div className="bg-card border border-border rounded-full overflow-hidden size-[32px] shadow-md">
              <img 
                src={sourceImage} 
                alt="Thumbnail" 
                className="size-full object-cover"
              />
            </div>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}