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
  Loader2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import ShareButton from "./ShareButton";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


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
  save: () => void;
  isSaving : boolean
  isContentThere : boolean
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
  save,
  isSaving,
  isContentThere
}: Props) => {
  const [colorDropdownOpen, setColorDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedColor, updateSelectedColor] = useState(colors[0]?.value || "#ffffff");
  const [fontSize, updateFontSize] = useState("16px");
  const [fontFamily, updateFontFamily] = useState("sans-serif");
  const router = useRouter();
  const collaborativeRole = useSelector((state: RootState) => state.collaborative?.collaborativeRole || null);
  

// Mobile Menu Toggle -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Handle Clicks -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Handle Color Selection -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const handleColorSelect = (color: string) => {
    updateSelectedColor(color);
    setSelectedColor(color);
    setColorDropdownOpen(false);
  };
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Handle Font Size and Family Selection -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const size = e.target.value;
        updateFontSize(size);
        setFontSize(size);
  };
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    
// Handle Font Family Selection -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const handleFontFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const family = e.target.value;
        updateFontFamily(family);
        setFontFamily(family);
    };
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
// Handle Home Button Click -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
     const handleHome = () => {
        router.push('/dashboard')
    }
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Handle that user is allowed to make changes -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    const isAllowed = () => {
      if (collaborativeRole === "ADMIN" || collaborativeRole === "EDITOR") {
        return true;
      }
      return false;
    }
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className="fixed inset-0 h-fit z-[9999]">

  {/* {/* Mobile Menu Toggle ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
    <div className={`fixed top-4 left-4 z-10 ${!isMobile ? 'hidden' : ''}`}>
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`p-2 bg-white/20 backdrop-blur-lg rounded-xl border border-white/30 shadow-xl transition-all
          ${isAllowed() ? 'text-white hover:bg-white/30' : 'text-gray-400 cursor-not-allowed opacity-50'}`}
        disabled={!isAllowed()}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

  {/* Home Button ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
    {!mobileMenuOpen && (
      <div className={`fixed top-4 ${isMobile ? 'left-16' : 'left-4'} z-[10000]`}>
        <button 
          onClick={handleHome}
          className={`px-3 sm:py-2 lg:py-3 bg-white/20 backdrop-blur-lg rounded-xl border border-white/30 shadow-xl transition-all
          `}
        >
          <Home size={24} />
        </button>
      </div>
    )}
  {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
  
  {/* Main Toolbar ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
    <div className={`fixed ${
      isMobile 
        ? `${mobileMenuOpen ? 'left-0' : '-left-full'} top-16 h-[calc(100vh-5rem)] w-64 transition-all`
        : 'left-1/2 -translate-x-1/2 top-4'
    } z-[9999] bg-white/20 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/30 shadow-xl flex ${
      isMobile ? 'flex-col' : 'flex-row'
    } gap-4 pointer-events-auto ${!isAllowed() ? 'opacity-50' : ''}`}>

      {/* Tools ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-3 ${!isMobile ? 'pr-4 border-r border-white/20' : ''}`}>
          {tools.map((tool) => {
            const Icon = tool.icon;
            const isSelected = selectedTool === tool.name;
            const isHandTool = tool.name === 'hand';

            return (
              <button
                key={tool.name}
                onClick={() => handleClick(tool.name)}
                className={`p-2.5 rounded-xl transition-all flex items-center gap-2 ${
                  isSelected ? "bg-orange-500 text-white shadow-inner" : 
                  isHandTool ? "text-white hover:bg-white/10" : 
                  "text-gray-100 hover:bg-white/10"
                }`}
                disabled={!isAllowed() && !isHandTool}
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

      {/* Color Picker----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="relative">
          <button
            onClick={() => setColorDropdownOpen(!colorDropdownOpen)}
            className={`flex items-center gap-2 p-2.5 rounded-xl text-white transition-all w-full
              ${isAllowed() ? 'hover:bg-white/10' : 'cursor-not-allowed opacity-50'}`}
            disabled={!isAllowed()}
          >
            <div 
              className="w-6 h-6 rounded-full border-2 border-white/30 shadow-sm" 
              style={{ backgroundColor: selectedColor }} 
            />
            {isMobile ? (
              <span className="text-sm">Select Color</span>
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
          {colorDropdownOpen && (
  <div className="absolute left-0 top-12 z-50 bg-black/70 backdrop-blur-sm p-3 rounded-xl border border-white/30 shadow-lg grid grid-cols-3 gap-2 min-w-[160px]">
    {colors.map((color) => (
      <button
        key={color.value}
        onClick={() => handleColorSelect(color.value)}
        className={`w-8 h-8 rounded-full border-2 ${
          selectedColor === color.value
            ? "border-orange-500 shadow-inner"
            : "border-white/30 hover:border-white/60"
        } transition-all`}
        style={{ backgroundColor: color.value }}
        title={color.name}
      />
    ))}
  </div>
)}
        </div>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Font Styling ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {selectedTool === "text" && (
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-3 ${!isMobile ? 'pl-4 border-l border-white/20' : ''}`}>
            <select
              value={fontSize}
              onChange={handleFontSizeChange}
              className={`bg-white/20 text-orange-500 rounded-lg p-2 ${
                !isAllowed() ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isAllowed()}
            >
              {fontSizes.map((size) => (
                <option key={size} value={size} className="bg-white/80">
                  {size}
                </option>
              ))}
            </select>

            <select
              value={fontFamily}
              onChange={handleFontFamilyChange}
              className={`bg-white/20 text-orange-500 rounded-lg p-2 ${
                !isAllowed() ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={!isAllowed()}
            >
              {fontFamilies.map((font) => (
                <option key={font.name} value={font.value} className="bg-white/80">
                  {font.name}
                </option>
              ))}
            </select>
          </div>
        )}
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Undo/Redo -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-3 ${!isMobile ? 'pl-4 border-l border-white/20' : ''}`}>
          {actions.map((tool) => (
            <button
              key={tool.name}
              onClick={() => handleClick(tool.name)}
              className={`p-2.5 rounded-xl transition-all flex items-center gap-2 ${
                isAllowed() ? 'text-white hover:bg-white/10' : 'text-gray-400 cursor-not-allowed opacity-50'
              }`}
              disabled={!isAllowed()}
            >
              <tool.icon size={isMobile ? 22 : 18} strokeWidth={1.8} />
              {isMobile && <span className="text-sm capitalize">{tool.name}</span>}
            </button>
          ))}
        </div>
      {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
    
    </div>
  {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
  
  {/* Save/Share Buttons ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
    <div className="fixed top-4 right-4 z-[10000] flex gap-3">
      <ShareButton />
      <button 
        onClick={save}  
        disabled={isSaving || !isContentThere || !isAllowed()}
        className={`px-4 sm:py-2 lg:py-3 rounded-xl border border-white/30 shadow-xl transition-all flex items-center gap-2 ${
          isContentThere && isAllowed() 
            ? 'bg-orange-500 text-white hover:bg-orange-600' 
            : 'bg-orange-300 text-gray-100 cursor-not-allowed'
        }`}
      >
        {isSaving ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : ( 
          <>
            <Save size={20} />
            {!isMobile && <span className="lg:text-xl">Save</span>}
          </>
        )}
      </button>
    </div>
  {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
</div>
  );
};