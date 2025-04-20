'use client';

import { useRef, useEffect } from 'react';

export default function CanvasPage() {
  const canvaRef = useRef<HTMLCanvasElement | null>(null);


  useEffect(() => {
    const canvas = canvaRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isDrawing = false;
    let startX = 0;
    let startY = 0;

    const rectangles :Array <{ x: number; y: number; w: number; h: number }> = [];
    const drawAllRectangles = ()=>{
      ctx.clearRect(0, 0, canvas.width, canvas.height); 
      ctx.strokeStyle = 'skyblue'; 
      ctx.fillStyle = 'rgba(135, 206, 235, 0.5)'; 
      ctx.lineWidth = 2;

      rectangles.forEach(rect => {
        ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
        ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
      });
    }

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
      
      
      drawAllRectangles();

      ctx.strokeRect(startX, startY, width, height);
      ctx.fillRect(startX, startY, width, height);
    };

    const handleMouseUp = (e: MouseEvent) => {  // Fixed: Added e parameter
      if (isDrawing) {
        const rect = canvas.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;
        const width = currentX - startX;
        const height = currentY - startY;
        
        rectangles.push({
          x: startX,
          y: startY,
          w: width,
          h: height
        });
        
        drawAllRectangles();
      }
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
  }, []);

  return (
    <div>
      <canvas
        ref={canvaRef}
        style={{
        
          cursor: 'crosshair',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <h1>Canvas Drawing Page</h1>
      <p>Click and drag to draw rectangles</p>
    </div>
  );
}