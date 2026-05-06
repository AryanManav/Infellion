import { useMemo, useState } from "react";

const flattenTree = (
  node,
  collapsedNodes,
  nodes = [],
  edges = [],
  parent = null
) => {
  // ADD CURRENT NODE
  nodes.push({
    id: node.id,
    type: "custom",

    data: {
      label: node.label,
      level: node.level,
      hasChildren: node.children?.length > 0,
    },
  });

  // ADD EDGE
  if (parent) {
    edges.push({
      id: `${parent}-${node.id}`,
      source: parent,
      target: node.id,
      type: "smoothstep",
    });
  }

  // STOP RECURSION IF COLLAPSED
  if (collapsedNodes.includes(node.id)) {
    return { nodes, edges };
  }

  // STABLE CHILD ORDERING
  [...(node.children || [])]
    .sort((a, b) => a.label.localeCompare(b.label))
    .forEach((child) => {
      flattenTree(
        child,
        collapsedNodes,
        nodes,
        edges,
        node.id
      );
    });

  return { nodes, edges };
};

const useTreeState = (treeData) => {
  const [collapsedNodes, setCollapsedNodes] =
    useState([]);

  const toggleNode = (id) => {
    setCollapsedNodes((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const { nodes, edges } = useMemo(() => {
    return flattenTree(treeData, collapsedNodes);
  }, [treeData, collapsedNodes]);

  return {
    nodes,
    edges,
    toggleNode,
    collapsedNodes,
    setCollapsedNodes,
  };
};

export default useTreeState;