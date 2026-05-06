import React, { useMemo } from "react";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

import CustomNode from "./CustomNode";
import { getLayoutedElements } from "../utils/layout";

const nodeTypes = {
  custom: CustomNode,
};

const TreeCanvas = ({
  nodes,
  edges,
  toggleNode,
  collapsedNodes,
}) => {
  // UPDATE NODE DATA
  const updatedNodes = useMemo(() => {
    return nodes.map((node) => ({
      ...node,

      data: {
        ...node.data,

        collapsed: collapsedNodes.includes(
          node.id
        ),

        onToggle: () => toggleNode(node.id),
      },
    }));
  }, [nodes, collapsedNodes]);

  // DAGRE LAYOUT
  const {
    nodes: layoutedNodes,
    edges: layoutedEdges,
  } = useMemo(() => {
    return getLayoutedElements(
      updatedNodes,
      edges
    );
  }, [updatedNodes, edges]);

  return (
    <div className="tree-wrapper">
      <ReactFlow
        nodes={layoutedNodes}
        edges={layoutedEdges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: 0.2,
        }}
        minZoom={0.2}
        maxZoom={1.5}
        defaultEdgeOptions={{
          type: "smoothstep",
        }}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default TreeCanvas;