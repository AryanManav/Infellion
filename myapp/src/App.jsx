import React from "react";

import initialData from "./data/initialData";
import useTreeState from "./hooks/useTreeState";
import TreeCanvas from "./components/TreeCanvas";

import {
  GitBranch,
  Maximize2,
  Minimize2,
  Layers3,
} from "lucide-react";

const App = () => {
  const {
    nodes,
    edges,
    toggleNode,
    collapsedNodes,
    setCollapsedNodes,
  } = useTreeState(initialData);

  const expandAll = () => {
    setCollapsedNodes([]);
  };

  const collapseAll = () => {
    const parentNodes = nodes
      .filter((n) => n.data.hasChildren)
      .map((n) => n.id);

    setCollapsedNodes(parentNodes);
  };

  return (
    <div className="app-container">
      {/* NAVBAR */}

      <div className="top-navbar">
        {/* LEFT */}

        <div className="nav-left">
          <div className="brand-icon">
            <GitBranch size={22} />
          </div>

          <div>
            <h2>Tree View Visualizer</h2>

            <p>
              Interactive Organizational Hierarchy
            </p>
          </div>
        </div>

        {/* RIGHT */}

        <div className="nav-right">
          <div className="stat-card">
            <Layers3 size={18} />

            <span>{nodes.length} Nodes</span>
          </div>

          <button
            className="nav-btn"
            onClick={expandAll}
          >
            <Maximize2 size={18} />

            Expand All
          </button>

          <button
            className="nav-btn collapse"
            onClick={collapseAll}
          >
            <Minimize2 size={18} />

            Collapse All
          </button>
        </div>
      </div>

      {/* TREE */}

      <TreeCanvas
        nodes={nodes}
        edges={edges}
        toggleNode={toggleNode}
        collapsedNodes={collapsedNodes}
      />
    </div>
  );
};

export default App;