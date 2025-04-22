"use client";

import React from "react";
import {
  RectangleHorizontal,
  Circle,
  Minus,
  MoveRight,
  Eraser,
  Undo,
  Redo,
  Type,
  Trash,
} from "lucide-react";


const primaryGradient = "from-[#ff9966] to-[#ff5e62]";
type canvaShape = "rectangle" | "circle" | "line" | "arrow" | "text" | "eraser";

type Props = {
  selectedTool: string;
  undo: () => void;
  redo: () => void;
  clear: () => void;
  setSelectedTool: ( tool: canvaShape ) => void;
};

const tools = [
  { name: "rectangle", icon: RectangleHorizontal },
  { name: "circle", icon: Circle },
  { name: "line", icon: Minus },
  { name: "arrow", icon: MoveRight },
  { name: "text", icon: Type },
  { name: "eraser", icon: Eraser },
];

const actions = [
  { name: "undo", icon: Undo },
  { name: "redo", icon: Redo },
  { name: "trash", icon: Trash },
];

export const CanvaToolbar = ({
  selectedTool,
  undo,
  redo,
  clear,
  setSelectedTool,
}: Props) => {
  const handleClick = (toolName: string) => {
    switch (toolName) {
      case "undo":
        undo();
        break;
      case "redo":
        redo();
        break;
      case "trash":
        clear();
        break;
      default:
        setSelectedTool(toolName as canvaShape);
        break;
    }
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-4">
      {/* Drawing Tools */}
      <div className="flex items-center gap-2 pr-3 border-r border-white/10">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const isSelected = selectedTool === tool.name;

          return (
            <button
              key={tool.name}
              onClick={() => handleClick(tool.name)}
              className={`p-2 rounded-lg transition-all duration-150 relative group ${
                isSelected
                  ? `bg-orange-500 text-gray-50 ring-2 ring-offset-2 ring-offset-black ring-[--tw-ring-color]`
                  : "text-gray-50 hover:bg-white/10"
              }`}
              
              
            >
              <Icon size={24} strokeWidth={1.8} />
              <span className="absolute bottom-[-1.6rem] left-1/2 -translate-x-1/2 text-[10px] text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                {tool.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Action Tools */}
      <div className="flex items-center gap-2 pl-3">
        {actions.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.name}
              onClick={() => handleClick(tool.name)}
              className="p-2 rounded-lg text-gray-50 hover:bg-white/10 transition-all duration-150 relative group"
            >
              <Icon size={24} strokeWidth={1.8} />
              <span className="absolute bottom-[-1.6rem] left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {tool.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
