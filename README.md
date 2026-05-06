# Tree View Visualizer

A modern hierarchical tree visualizer built using React Flow and custom recursive layout logic.

The project focuses on clean structure rendering, dynamic subtree positioning, and smooth expand/collapse interactions while maintaining a polished and professional interface.

Designed as part of a Software Developer Intern assignment.

---

## Overview

This application renders organizational or hierarchical data in an interactive tree structure where:

- Parent nodes remain centered above their children
- Sibling spacing adjusts dynamically
- Subtrees can be expanded or collapsed
- Layout recalculates automatically after interaction
- Nodes are displayed using a custom glassmorphism-inspired UI

The implementation is fully client-side and uses a custom positioning algorithm instead of relying entirely on external graph layout engines.

---

## Features

### Tree Rendering

- Multi-level hierarchical visualization
- Dynamic subtree spacing
- Parent-child edge connections
- Centered alignment logic

### Expand / Collapse

- Collapse any node with children
- Entire subtree hides recursively
- Layout updates automatically after interaction

### Interactive Canvas

- Zoom controls
- Minimap navigation
- Fit-to-view support
- Smooth edge rendering using React Flow

### Visual Design

- Dark glassmorphism interface
- Fixed-size premium node cards
- Level-based accent colors
- Responsive and balanced spacing

---

## Tech Stack

- React
- Vite
- React Flow
- JavaScript (JSX)
- Custom CSS
- Lucide React Icons

---

## Layout Logic

The tree positioning uses a custom recursive layout system.

Instead of using a default graph engine, the algorithm:

- Calculates subtree widths dynamically
- Centers children relative to their parent
- Preserves clean spacing across hierarchy levels
- Repositions nodes after collapsing or expanding subtrees

This approach provides better control over alignment and visual consistency for hierarchical structures.

---

## Project Structure

```txt
src/
│
├── components/
│   ├── CustomNode.jsx
│   └── TreeCanvas.jsx
│
├── data/
│   └── initialData.js
│
├── hooks/
│   └── useTreeState.js
│
├── utils/
│   └── layout.js
│
├── App.jsx
└── index.css
