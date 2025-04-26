'use client';

import { useRef, useEffect, useState } from 'react';
import { CanvaToolbar } from '../../../components/CanvaToolbar';
import { drawRectangle } from '../../../components/CanvasTools/drawRectangle';
import { drawCircle } from '../../../components/CanvasTools/drawCircle';
import { drawLine } from '../../../components/CanvasTools/drawLine';
import { drawText } from '../../../components/CanvasTools/writeText';

type Shape = {
  id: string;
  type: 'rectangle' | 'circle' | 'line' | 'arrow' | 'text' | 'eraser';
  x: number;
  y: number;
  w: number;
  h: number;
  radius?: number;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
};


export default function CanvasPage() {
  const canvaRef = useRef<HTMLCanvasElement | null>(null);
  const shapes = useRef<Shape[]>([]);

  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [selectedTool, setSelectedTool] = useState<Shape["type"]>('rectangle');
  const [strokeColor, setstrokeColor] = useState("#ffffff");

  // Text Editing State -------------------------------------------------------------------------------------------------------------------------------------------------
    const [editingText, setEditingText] = useState<{
      id: string;
      text: string;
      x: number;
      y: number;
      color: string;
    } | null>(null);
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------
  const textInputRef = useRef<HTMLInputElement | null>(null);
    const strokeColorRef = useRef<string>(strokeColor);
  
  const fillColor = undefined;  

  // Handle text input completion ------------ -------------------------------------------------------------------------------------------------------------------------------------------------
  const handleTextComplete = () => {
    if (!editingText || !editingText.text.trim()) {
      setEditingText(null);
      return;
    }
  
    const canvas = canvaRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    ctx.font = '20px Arial';
    const metrics = ctx.measureText(editingText.text);
  
    shapes.current = shapes.current.filter((shape) => shape.id !== editingText.id);
    const newTextShape: Shape = {
      id: editingText.id,
      type: 'text',
      x: editingText.x,
      y: editingText.y,
      w: metrics.width,
      h: 20,
      text: editingText.text,
      fontSize: 20,
      fontFamily: 'Arial',
      color: strokeColor,
    };
  
    shapes.current.push(newTextShape);
    drawAllShapes();
    setEditingText(null);
  };
  
  
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------

  // Handle key down in text input  -------------------------------------------------------------------------------------------------------------------------------------------------
    const handleTextKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleTextComplete();
      } else if (e.key === 'Escape') {
        setEditingText(null);
      }
    };
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------

  // Draw all shapes on canvas -------------------------------------------------------------------------------------------------------------------------------------------------
    const drawAllShapes = () => {
      const canvas = canvaRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.current.forEach((shape) => {
        if (shape.type === 'rectangle') {
          drawRectangle({
            x: shape.x,
            y: shape.y,
            w: shape.w,
            h: shape.h,
            color: shape.color ,
            ctx,
            fillColor,
          });
        } else if (shape.type === 'circle') {
          drawCircle({
            x: shape.x + shape.w / 2,
            y: shape.y + shape.h / 2,
            radius: shape.radius || Math.abs(shape.w) / 2,
            color: shape.color ,
            ctx,
            fillColor,
          });
        } else if (shape.type === 'line') {
          drawLine({
            x: shape.x,
            y: shape.y,
            w: shape.w,
            h: shape.h,
            color: shape.color,
            ctx,
          });
        } else if (shape.type === 'text') {
          drawText({
            x: shape.x,
            y: shape.y,
            text: shape.text || 'Text',
            color: shape.color || strokeColor,
            fontSize: shape.fontSize || 20,
            fontFamily: shape.fontFamily || 'Arial',
            ctx,
          });
        }
      });
    };
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------

  //Color Picker  -------------------------------------------------------------------------------------------------------------------------------------------------
    useEffect(() => {
      strokeColorRef.current = strokeColor;
    }, [strokeColor]);
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
  // Resize canvas to fit window  -------------------------------------------------------------------------------------------------------------------------------------------------
    const resizeCanvas = () => {
      setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------
  
  // Initialize canvas and context -------------------------------------------------------------------------------------------------------------------------------------------------
    const canvas = canvaRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isDrawing = false;
    let startX = 0;
    let startY = 0;
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------
  
  // Handle down event for mouse ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------
    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      startX = e.clientX - rect.left;
      startY = e.clientY - rect.top;
      isDrawing = true;   
      if (selectedTool === 'eraser') {
        const shapeToDelete = shapes.current.find((shape) => {
          if (shape.type === 'rectangle') {
            return (
              startX >= shape.x &&
              startX <= shape.x + shape.w &&
              startY >= shape.y &&
              startY <= shape.y + shape.h
            );
          } else if (shape.type === 'circle') {
            const radius = shape.radius || Math.abs(shape.w) / 2;
            const centerX = shape.x + shape.w / 2;
            const centerY = shape.y + shape.h / 2;
            const distance = Math.sqrt(
              Math.pow(startX - centerX, 2) + Math.pow(startY - centerY, 2)
            );
            return distance <= radius;
          } else if (shape.type === 'line') {
            const minX = Math.min(shape.x, shape.w);
            const maxX = Math.max(shape.x, shape.w);
            const minY = Math.min(shape.y, shape.h);
            const maxY = Math.max(shape.y, shape.h);
            return (
              startX >= minX &&
              startX <= maxX &&
              startY >= minY &&
              startY <= maxY
            );
          }
          else if(shape.type === 'text'){
            return (
              startX >= shape.x &&
              startX <= shape.x + (shape.w || 0) &&
              startY >= shape.y - (shape.h || 20) &&
              startY <= shape.y
            );
          }
          return false;
        });

        if (shapeToDelete) {
          shapes.current = shapes.current.filter((shape) => shape.id !== shapeToDelete.id);
          drawAllShapes();
        }
        isDrawing = false;
      }
    };
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------
  
  // Handle move event for mouse  -------------------------------------------------------------------------------------------------------------------------------------------------
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;
      const width = currentX - startX;
      const height = currentY - startY;
      
      console.log('currentX:', currentX, 'currentY:', currentY, 'width:', width, 'height:', height);
      console.log("Selected Tool:", selectedTool);
      drawAllShapes();

      if (selectedTool === 'text') {
        const clickedText = shapes.current.find((shape) => {
          return (
            shape.type === 'text' &&
            startX >= shape.x &&
            startX <= shape.x + (shape.w || 0) &&
            startY >= shape.y - (shape.h || 20) &&
            startY <= shape.y
          );
        });
      console.log('Clicked Text:', clickedText);
        if (clickedText) {
          setEditingText({
            id: clickedText.id,
            text: clickedText.text || '',
            x: clickedText.x,
            y: clickedText.y,
            color: strokeColorRef.current,
          });
      
          drawAllShapes();
      
          setTimeout(() => {
            textInputRef.current?.focus();
          }, 10);
      
          return;
        }
      
        setEditingText({ 
          id: Date.now().toString(), 
          text: '', 
          x: startX, 
          y: startY ,
          color: strokeColorRef.current,
        });
      
        setTimeout(() => {
          textInputRef.current?.focus();
        }, 10);
      
        isDrawing = false;
        return;
      }

      if (selectedTool === 'rectangle') {
        drawRectangle({
          x: startX,
          y: startY,
          w: width,
          h: height,
          color: strokeColorRef.current,
          ctx,
          fillColor,
        });
      } else if (selectedTool === 'circle') {
        drawCircle({
          x: startX + width / 2,
          y: startY + height / 2,
          radius: Math.abs(width) / 2,
          color: strokeColorRef.current,
          ctx,
          fillColor,
        });
      } else if (selectedTool === 'line') {
        drawLine({
          x: startX,
          y: startY,
          w: currentX,
          h: currentY,
          color: strokeColorRef.current,
          ctx,
        });
      }
    };
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------
    
  // Handle up event for mouse ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------
    const handleMouseUp = (e: MouseEvent) => {
      if (!isDrawing) return;
      if (selectedTool === 'text' || selectedTool === 'eraser') return;

      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;
      const width = currentX - startX;
      const height = currentY - startY;
      const newShape: Shape = {
        id: Date.now().toString(),
        type: selectedTool,
        x: startX,
        y: startY,
        w: selectedTool === 'line' ? currentX : width,
        h: selectedTool === 'line' ? currentY : height,
        ...(selectedTool === 'circle' && { radius: Math.abs(width) / 2 }),
        color: strokeColorRef.current,
      };

      shapes.current.push(newShape);
      drawAllShapes();
      isDrawing = false;
    };
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [selectedTool]);

  return (
    <div>
      <canvas
        ref={canvaRef}
        className="absolute top-0 left-0 cursor-crosshair z-10 bg-black"
        width={canvasSize.width}
        height={canvasSize.height}
      />

      {editingText && (
        <input
        ref={textInputRef}
        type="text"
        value={editingText.text}
        className={`absolute bg-transparent outline-none  z-20   p-1`}
        style={{
          left: `${editingText.x}px`,
          top: `${editingText.y}px`,
          fontSize: '20px',
          fontFamily: 'Arial',
          minWidth: '150px',
          color: strokeColorRef.current,       
       caretColor: strokeColorRef.current,   
        }}
        onChange={(e) => {
          setEditingText({ ...editingText, text: e.target.value });
        }}
        onBlur={handleTextComplete}
        onKeyDown={handleTextKeyDown}
        autoFocus
      />
      
      )}

      <CanvaToolbar
        selectedTool={selectedTool}
        undo={() => {}}
        redo={() => {}}
        clear={() => {
          shapes.current = [];
          const canvas = canvaRef.current;
          if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx?.clearRect(0, 0, canvas.width, canvas.height);
          }
        }}
        setSelectedTool={(tool) => setSelectedTool(tool as Shape["type"])}
        setSelectedColor={setstrokeColor}
      />
    </div>
  );
}