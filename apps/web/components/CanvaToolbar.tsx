"use client";

import React, { useState } from "react";
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
  ChevronDown,
  Hand,
  Save,
  Share2,
} from "lucide-react";

const primaryGradient = "from-[#ff9966] to-[#ff5e62]";

type canvaShape = "rectangle" | "circle" | "line" | "arrow" | "text" | "eraser" | "hand";

type Props = {
  selectedTool: string;
  undo: () => void;
  redo: () => void;
  clear: () => void;
  setSelectedTool: (tool: canvaShape) => void;
  setSelectedColor: (color: string) => void;
setFontSize: (size: string) => void;
setFontFamily: (family: string) => void;
};

const tools = [
  { name: "hand", icon: Hand },
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

const colors = [
  { name: "White", value: "#ffffff" },
  { name: "Red", value: "#ff4d4f" },
  { name: "Blue", value: "#4a90e2" },
  { name: "Green", value: "#00c853" },
  { name: "Yellow", value: "#ffeb3b" },
  { name: "Purple", value: "#a855f7" },
  { name: "Orange", value: "#fb923c" },
];

const fontSizes = ["8px","10px","12px", "16px", "20px", "24px", "32px"];
const fontFamilies = [
  { name: "Sans-serif", value: "sans-serif" },
  { name: "Serif", value: "serif" },
  { name: "Monospace", value: "monospace" },
  { name: "Rough", value: "'Shadows Into Light', cursive" },
];

export const CanvaToolbar = ({
  selectedTool,
  undo,
  redo,
  clear,
  setSelectedTool,
  setSelectedColor,
  setFontSize,
setFontFamily,
  
}: Props) => {
  const [colorDropdownOpen, setColorDropdownOpen] = useState(false);
  const [selectedColor, updateSelectedColor] = useState(colors[0]?.value || "#ffffff");

  const [fontSize, updateFontSize] = useState("16px");
  const [fontWeight, updateFontWeight] = useState("normal");
  const [fontStyle, updateFontStyle] = useState("normal");
  const [fontFamily, updateFontFamily] = useState("sans-serif");

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

  const handleColorSelect = (color: string) => {
    updateSelectedColor(color);
    setSelectedColor(color);
    setColorDropdownOpen(false);
  };

    const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const size = e.target.value;
        updateFontSize(size);
        setFontSize(size);
    };

    

    const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const family = e.target.value;
        updateFontFamily(family);
        setFontFamily(family);
    };
    

  return (
    <>
      
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/20 backdrop-blur-md px-6 py-1 rounded-xl border border-white/30 shadow-2xl flex items-center gap-6 min-w-fit">
        
    {/* Left - Tools */}
        <div className="flex items-center gap-3 pr-4 border-r border-white/20">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const isSelected = selectedTool === tool.name;

            return (
              <button
                key={tool.name}
                onClick={() => handleClick(tool.name)}
                className={`p-2 rounded-lg transition-all duration-150 relative group ${
                  isSelected
                    ? "bg-orange-500 text-white font-extrabold p-"
                    : "text-gray-100 hover:bg-white/10"
                }`}
                style={{
                  cursor: tool.name === "hand" ? "grab" : "pointer",
                }}
              >
                <Icon size={16} strokeWidth={1} />
                <span className="absolute bottom-[-1.8rem] left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {tool.name}
                </span>
              </button>
            );
          })}
        </div>
    {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

    {/* Color Picker ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="relative">
          <button
            onClick={() => setColorDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-150"
          >
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: selectedColor }}
            />
            <ChevronDown size={16} />
          </button>

          {colorDropdownOpen && (
            <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-2 flex flex-col gap-2 z-10">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleColorSelect(color.value)}
                  className="flex items-center gap-2 p-1 hover:bg-white/10 rounded-md"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color.value }}
                  />
                  <span className="text-xs text-white">{color.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

    {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
    
    {/* Font Options ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {selectedTool === "text" && (
          <div className="flex items-center gap-4 border-l border-white/20 pl-4">
            <select
              value={fontSize}
              onChange={handleFontSizeChange}
              className="bg-transparent text-white text-sm"
            >
              {fontSizes.map((size) => (
                <option key={size} value={size} className="bg-black text-white">
                  {size}
                </option>
              ))}
            </select>


            <select
              value={fontFamily}
              onChange={handleFontFamilyChange}
              className="bg-transparent text-white text-sm"
            >
              {fontFamilies.map((font) => (
                <option key={font.name} value={font.value} className="bg-black text-white">
                  {font.name}
                </option>
              ))}
            </select>
          </div>
        )}

    {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  */}
    
    {/* Action Buttons-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="flex items-center gap-3 px- border-l border-white/20 pl-4">
          {actions.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.name}
                onClick={() => handleClick(tool.name)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-150 relative group"
              >
                <Icon size={16} strokeWidth={1} />
                <span className="absolute bottom-[-1.8rem] left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {tool.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
          
    {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
    

    {/* Save and Share --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
            <button className="p-2 rounded-xl border border-white/30 shadow-2xl text-white hover:bg-white/30 transition-all duration-150 flex items-center gap-1 bg-white/20 backdrop-blur-md">
                <Share2 size={16} />
                <span className="text-sm hidden md:inline">Share</span>
                </button>
                <button className="p-2   text-white rounded-xl border border-white/30 shadow-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-150 flex items-center gap-1  backdrop-blur-md">
                <Save size={16}  />
                <span className="text-sm hidden md:inline">Save</span>
            </button>

        </div>
    {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
   
    </>
  );
};
