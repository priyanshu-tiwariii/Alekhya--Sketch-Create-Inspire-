'use client';

import { useRef, useEffect, useState } from 'react';
import { CanvaToolbar } from '../../../components/CanvaToolbar';
import { drawRectangle } from '../../../components/CanvasTools/drawRectangle';
import { drawCircle } from '../../../components/CanvasTools/drawCircle';
import { drawLine } from '../../../components/CanvasTools/drawLine';

type Shape = {
  id:string;
  type: 'rectangle' | 'circle' | 'line' | 'arrow' | 'text' | 'eraser';
  x: number;
  y: number;
  w: number;
  h: number;
  radius?: number;
};

export default function CanvasPage() {
  const canvaRef = useRef<HTMLCanvasElement | null>(null);
  const shapes = useRef<Shape[]>([]);

  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [selectedTool, setSelectedTool] = useState<Shape["type"]>('rectangle');

  const strokeColor = 'white';
  const fillColor = undefined;

  useEffect(() => {
    setCanvasSize({ width: window.innerWidth, height: window.innerHeight });

    const canvas = canvaRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isDrawing = false;
    let startX = 0;
    let startY = 0;

    const drawAllShapes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.current.forEach((shape) => {
        if (shape.type === 'rectangle') {
          drawRectangle({
            x: shape.x,
            y: shape.y,
            w: shape.w,
            h: shape.h,
            color: strokeColor,
            ctx,
            fillColor,
          });
        } else if (shape.type === 'circle') {
          drawCircle({
            x: shape.x + shape.w / 2, 
            y: shape.y + shape.h / 2,
            radius: shape.radius || Math.abs(shape.w) / 2,
            color: strokeColor,
            ctx,
            fillColor,
          });
        }
        else if (shape.type === 'line') {
          drawLine({
            x: shape.x,
            y: shape.y,
            w: shape.w,
            h: shape.h,
            color: strokeColor,
            ctx,
          });
        }
      });
    };

    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      startX = e.clientX - rect.left;
      startY = e.clientY - rect.top;
      isDrawing = true;
    };


    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing) return;
      

      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;
      const width = currentX - startX;
      const height = currentY - startY;

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
          return false;
        });
    
        
        if (shapeToDelete) {
          shapes.current = shapes.current.filter((shape) => shape.id !== shapeToDelete.id);
          drawAllShapes();
        }
      }
      drawAllShapes();

      if (selectedTool === 'rectangle') {
        drawRectangle({
          x: startX,
          y: startY,
          w: width,
          h: height,
          color: strokeColor,
          ctx,
          fillColor,
        });
      } else if (selectedTool === 'circle') {
        drawCircle({
          x: startX + width / 2,
          y: startY + height / 2,
          radius: Math.abs(width) / 2,
          color: strokeColor,
          ctx,
          fillColor,
        });
      }

      else if (selectedTool === 'line') {
        drawLine({
          x: startX,
          y: startY,
          w: currentX,
          h: currentY,
          color: strokeColor,
          ctx,
        });
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (!isDrawing) return;

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
        w: width,
        h: height,
        ...(selectedTool === 'circle' && { radius: Math.abs(width) / 2 }),
        ...(selectedTool === 'line' && { w: currentX, h: currentY }),
      };

      shapes.current.push(newShape);
      drawAllShapes();
      isDrawing = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
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
      />
    </div>
  );
}
