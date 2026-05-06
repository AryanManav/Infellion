const NODE_WIDTH = 220;
const NODE_HEIGHT = 100;

const HORIZONTAL_GAP = 50;
const VERTICAL_GAP = 170;

const getSubtreeWidth = (
  node,
  childrenMap
) => {
  const children =
    childrenMap[node.id] || [];

  if (!children.length) {
    return NODE_WIDTH;
  }

  const totalChildrenWidth =
    children.reduce((sum, child) => {
      return (
        sum +
        getSubtreeWidth(
          child,
          childrenMap
        )
      );
    }, 0) +
    (children.length - 1) *
      HORIZONTAL_GAP;

  return Math.max(
    NODE_WIDTH,
    totalChildrenWidth
  );
};

const positionTree = (
  node,
  childrenMap,
  centerX,
  y,
  positionedNodes,
  positionedEdges
) => {
  const children =
    childrenMap[node.id] || [];

  const nodeX =
    centerX - NODE_WIDTH / 2;

  positionedNodes.push({
    ...node,

    position: {
      x: nodeX,
      y,
    },
  });

  if (!children.length) return;

  const subtreeWidths = children.map(
    (child) =>
      getSubtreeWidth(
        child,
        childrenMap
      )
  );

  const totalWidth =
    subtreeWidths.reduce(
      (a, b) => a + b,
      0
    ) +
    (children.length - 1) *
      HORIZONTAL_GAP;

  let currentX =
    centerX - totalWidth / 2;

  children.forEach((child, index) => {
    const subtreeWidth =
      subtreeWidths[index];

    const childCenterX =
      currentX + subtreeWidth / 2;

    positionedEdges.push({
      id: `${node.id}-${child.id}`,
      source: node.id,
      target: child.id,
      type: "smoothstep",
    });

    positionTree(
      child,
      childrenMap,
      childCenterX,
      y + VERTICAL_GAP,
      positionedNodes,
      positionedEdges
    );

    currentX +=
      subtreeWidth +
      HORIZONTAL_GAP;
  });
};

export const getLayoutedElements = (
  nodes,
  edges
) => {
  const nodeMap = {};
  const childrenMap = {};

  nodes.forEach((node) => {
    nodeMap[node.id] = node;
    childrenMap[node.id] = [];
  });

  edges.forEach((edge) => {
    if (
      nodeMap[edge.source] &&
      nodeMap[edge.target]
    ) {
      childrenMap[edge.source].push(
        nodeMap[edge.target]
      );
    }
  });

  const root = nodes.find(
    (node) =>
      !edges.some(
        (edge) =>
          edge.target === node.id
      )
  );

  const positionedNodes = [];
  const positionedEdges = [];

  positionTree(
    root,
    childrenMap,
    window.innerWidth / 2,
    50,
    positionedNodes,
    positionedEdges
  );

  return {
    nodes: positionedNodes,
    edges: positionedEdges,
  };
};