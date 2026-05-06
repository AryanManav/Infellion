import React from "react";
import { Handle, Position } from "reactflow";
import { Minus, Plus } from "lucide-react";

const levelColors = {
  0: "#2563eb",
  1: "#06b6d4",
  2: "#7c3aed",
  3: "#16a34a",
  4: "#f97316",
};

const CustomNode = ({ data }) => {
  return (
    <div
      className="custom-node"
      style={{
        borderTop: `5px solid ${levelColors[data.level]}`,
      }}
    >
      {/* TOP HANDLE */}

      <Handle
        type="target"
        position={Position.Top}
        style={{
          background: "#94a3b8",
          width: 10,
          height: 10,
        }}
      />

      {/* NODE CONTENT */}

      <div className="node-content">
        <div className="node-text">
          <h6>{data.label}</h6>

          <span>
            {data.level === 0 && "Root Level"}
            {data.level === 1 && "Division"}
            {data.level === 2 && "Department"}
            {data.level === 3 && "Team"}
            {data.level === 4 && "Individual"}
          </span>
        </div>

        {data.hasChildren && (
          <button
            className="toggle-btn"
            onClick={data.onToggle}
          >
            {data.collapsed ? (
              <Plus size={16} />
            ) : (
              <Minus size={16} />
            )}
          </button>
        )}
      </div>

      {/* BOTTOM HANDLE */}

      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          background: "#94a3b8",
          width: 10,
          height: 10,
        }}
      />
    </div>
  );
};

export default CustomNode;