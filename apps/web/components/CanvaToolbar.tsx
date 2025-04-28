"use client";
import React, { useEffect, useState } from "react";
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
  Home,
  Menu,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedColor, updateSelectedColor] = useState(colors[0]?.value || "#ffffff");
  const [fontSize, updateFontSize] = useState("16px");
  const [fontFamily, updateFontFamily] = useState("sans-serif");
  const router = useRouter();

  

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    if (isMobile) setMobileMenuOpen(false);
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
    
    const handleHome = () =>{
        router.push('/dashboard')
    
    }

  return (
    <div className="fixed inset-0 h-fit z-[9999] ">

    {/* Mobile Menu Toggle -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <div className={`fixed top-4 left-4 z- ${!isMobile ? 'hidden' : ''}`}>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 bg-white/20 backdrop-blur-lg rounded-xl border border-white/30 shadow-xl text-white hover:bg-white/30 transition-all"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

    {/* Home Button -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      {(!mobileMenuOpen || !isMobile) && (
        <div className={`fixed top-4 ${isMobile ? 'left-16' : 'left-4'} z-[10000]`}>
          <button 
            onClick={handleHome}
            className="p-2 bg-white/20 backdrop-blur-lg rounded-xl border border-white/30 shadow-xl text-white hover:bg-white/30 transition-all"
          >
            <Home size={24} />
          </button>
        </div>
      )}
    {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

    {/* Main Toolbar -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <div className={`fixed ${
        isMobile 
          ? `${mobileMenuOpen ? 'left-0' : '-left-full'} top-16 h-[calc(100vh-5rem)] w-64 transition-all`
          : 'left-1/2 -translate-x-1/2 top-4'
      } z-[9999] bg-white/20 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/30 shadow-xl flex ${
        isMobile ? 'flex-col' : 'flex-row'
      } gap-4 pointer-events-auto`}>

        {/* Different Tools  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-3 ${!isMobile ? 'pr-4 border-r border-white/20' : ''}`}>
            {tools.map((tool) => {
                const Icon = tool.icon;
                const isSelected = selectedTool === tool.name;

                return (
                <button
                    key={tool.name}
                    onClick={() => handleClick(tool.name)}
                    className={`p-2.5 rounded-xl transition-all flex items-center gap-2 ${
                    isSelected
                        ? "bg-orange-500 text-white shadow-inner"
                        : "text-gray-100 hover:bg-white/10"
                    }`}
                >
                    <Icon size={isMobile ? 22 : 18} strokeWidth={1.8} />
                    {isMobile && (
                    <span className="text-sm capitalize font-medium">
                        {tool.name}
                    </span>
                    )}
                </button>
                );
            })}
            </div>
        {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        
        {/* Color Picker ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="relative">
            <button
                onClick={() => setColorDropdownOpen(!colorDropdownOpen)}
                className="flex items-center gap-2 p-2.5 rounded-xl text-white hover:bg-white/10 transition-all w-full"
            >
                <div className="w-6 h-6 rounded-full border-2 border-white/30 shadow-sm" 
                    style={{ backgroundColor: selectedColor }} />
                {isMobile ? (
                <span className="text-sm">Select Color</span>
                ) : (
                <ChevronDown size={16} />
                )}
            </button>

            {colorDropdownOpen && (
                <div className={`absolute ${
                isMobile ? 'left-0 right-0' : 'left-1/2 -translate-x-1/2'
                } top-12 bg-black/80  rounded-xl shadow-lg p-3 grid grid-cols-2 gap-2 z-10`}>
                {colors.map((color) => (
                    <button
                    key={color.name}
                    onClick={() => handleColorSelect(color.value)}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/20 transition-colors"
                    >
                    <div className="w-5 h-5 rounded-full border border-white/20 shadow-sm" 
                        style={{ backgroundColor: color.value }} />
                    <span className="text-xs text-white">{color.name}</span>
                    </button>
                ))}
                </div>
            )}
            </div>
        {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

       

        {/* Fonts Styling ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            {selectedTool === "text" && (
            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-3 ${!isMobile ? 'pl-4 border-l border-white/20' : ''}`}>
                <select
                value={fontSize}
                onChange={handleFontSizeChange}
                className="bg-white/20 text-white rounded-lg p-2 border border-white/30 focus:ring-2 focus:ring-orange-500"
                >
                {fontSizes.map((size) => (
                    <option key={size} value={size} className="bg-black/80">
                    {size}
                    </option>
                ))}
                </select>

                <select
                value={fontFamily}
                onChange={handleFontFamilyChange}
                className="bg-white/20 text-white rounded-lg p-2 border border-white/30 focus:ring-2 focus:ring-orange-500"
                >
                {fontFamilies.map((font) => (
                    <option key={font.name} value={font.value} className="bg-black/80">
                    {font.name}
                    </option>
                ))}
                </select>
            </div>
            )}
        {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        {/* Undo And Redo  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-3 ${!isMobile ? 'pl-4 border-l border-white/20' : ''}`}>
            {actions.map((tool) => (
                <button
                key={tool.name}
                onClick={() => handleClick(tool.name)}
                className="p-2.5 rounded-xl text-white hover:bg-white/10 transition-all flex items-center gap-2"
                >
                <tool.icon size={isMobile ? 22 : 18} strokeWidth={1.8} />
                {isMobile && <span className="text-sm capitalize">{tool.name}</span>}
                </button>
            ))}
            </div>
        {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      
      </div>
    {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

    {/* Save/Share Buttons -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------  */}
      <div className="fixed top-4 right-4 z-[10000] flex gap-3">
        <button className="p-2.5 bg-white/20 backdrop-blur-lg rounded-xl border border-white/30 shadow-xl text-white hover:bg-white/30 transition-all flex items-center gap-2">
          <Share2 size={20} />
          {!isMobile && <span className="text-sm">Share</span>}
        </button>
        <button className="p-2.5 bg-orange-500 hover:bg-orange-600 rounded-xl border border-white/30 shadow-xl text-white transition-all flex items-center gap-2">
          <Save size={20} />
          {!isMobile && <span className="text-sm">Save</span>}
        </button>
      </div>
    {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
    
    </div>
  );
};