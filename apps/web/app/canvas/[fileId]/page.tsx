'use client';

import { useRef, useEffect, useState } from 'react';
import { Minus } from 'lucide-react';
import { Plus } from 'lucide-react';

// Imported Tools -----------------------------------------------------------------------------------------------------------------------------------------------------
  import { CanvaToolbar } from '../../../components/CanvaToolbar';
  import { drawRectangle } from '../../../components/CanvasTools/drawRectangle';
  import { drawCircle } from '../../../components/CanvasTools/drawCircle';
  import { drawLine } from '../../../components/CanvasTools/drawLine';
  import { drawText } from '../../../components/CanvasTools/writeText';
  import { drawArrowLine } from '../../../components/CanvasTools/drawArrowLine';
  import { eraser } from '../../../components/CanvasTools/eraser';
  import { undo } from '../../../components/CanvasTools/undo';
  import { redo } from '../../../components/CanvasTools/redo';
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Imported Types -----------------------------------------------------------------------------------------------------------------------------------------------------
 import { Shape } from '../../../types/shape.types';
 import { drawAllShapes } from '../../../components/CanvasTools/drawAllShapes';
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export default function CanvasPage() {
  const canvaRef = useRef<HTMLCanvasElement | null>(null);
  const shapes = useRef<Shape[]>([]);
  const tempShapes = useRef<Shape[]>([]);


  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [selectedTool, setSelectedTool] = useState<Shape["type"]>('rectangle');
  const [strokeColor, setstrokeColor] = useState("#ffffff");

  //Panning and Zooming Sate --------------------------------------------------------------------------------------------------------------------------------------------
    const [isPanning, setIsPanning] = useState(false);
    const [lastPanPosition, setLastPanPosition] = useState<{ x: number; y: number } | null>(null);
    const [viewPortTransform, setViewPortTransform] = useState({
      scale: 1,
      translateX: 0,
      translateY: 0,
    });
    const screenToCanvas = (x: number, y: number) => {
      return {
        x: (x - viewPortTransform.translateX) / viewPortTransform.scale,
        y: (y - viewPortTransform.translateY) / viewPortTransform.scale
      };
    };
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------

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
      
    // Draw all shapes on canvas -------------------------------------------------------------------------------------------------------------------------------------------------
    const handleDrawAllShapes = () => {
      if (canvaRef.current) {
        drawAllShapes({
          canvaRef: { current: canvaRef.current },
          viewPortTransform,
          shapes,
          fillColor
        });
      }
    }
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------


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
      handleDrawAllShapes();
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

 
  // Handle undo and redo -------------------------------------------------------------------------------------------------------------------------------------------------
    const handleUndo =()=>{undo({shapes, tempShapes, drawAllShapes : handleDrawAllShapes});}
    const handleRedo = () =>{redo({shapes, tempShapes, drawAllShapes:handleDrawAllShapes});}
  //--------------------------------------------------------------------------------------------------------------------------------------------------

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
  
  //Spanning and Zooming  -------------------------------------------------------------------------------------------------------------------------------------------------
    const handlePanStart = (e: MouseEvent) => {
      if (e.button !== 0 || selectedTool !== 'hand') return;
      setIsPanning(true);
      setLastPanPosition({ x: e.clientX, y: e.clientY });
      console.log("Panning started at", { x: e.clientX, y: e.clientY });
      e.preventDefault();
    }

    const handlePanMove = (e:MouseEvent) =>{
      if(!isPanning || !lastPanPosition || selectedTool !== 'hand') return;

      const dx = e.clientX - lastPanPosition.x;
      const dy = e.clientY - lastPanPosition.y;
      console.log("Changes",{dx,dy});
      setViewPortTransform((prev) => ({
        ...prev,
        translateX: prev.translateX + dx,
        translateY: prev.translateY + dy,
      }));

      console.log("ViewPortTransform", viewPortTransform);
      setLastPanPosition({ x: e.clientX, y: e.clientY });
      handleDrawAllShapes();
      e.preventDefault();
    }

    const handlePanEnd = () => {
      if(selectedTool !== 'hand') return;
      setIsPanning(false);
      console.log("Panning ended");
    }

    const handleWheel = (e: WheelEvent) =>{
      e.preventDefault(); 
      const rec = canvaRef.current?.getBoundingClientRect();
      if (!rec) return;
      const mouseX = e.clientX - rec.left;
      const mouseY = e.clientY - rec.top;

      console.log("Mouse Position", { mouseX, mouseY });
      const { x: canvasX, y: canvasY } = screenToCanvas(mouseX, mouseY);
      console.log("Mouse Position in Canvas", { canvasX, canvasY });

      const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
      const newScale = Math.max(0.1, Math.min(viewPortTransform.scale * zoomFactor, 10)); 

      const newTranslateX = mouseX - (canvasX * newScale);
      const newTranslateY = mouseY - (canvasY * newScale);

      console.log("New Translate", { newTranslateX, newTranslateY });

      setViewPortTransform({
        scale: newScale,
        translateX: newTranslateX,
        translateY: newTranslateY,
      });

      handleDrawAllShapes();
    }

  //----------------------------------------------------------------------------------------------------------------------------------------------------
  
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
      if (selectedTool === 'hand') return;
      const rect = canvas.getBoundingClientRect();
      const {x,y} = screenToCanvas(e.clientX-rect.left, e.clientY-rect.top);
      startX = x
      startY = y
      isDrawing = true; 
     
      if (selectedTool === 'eraser') {
        const shapeToDelete = eraser({shapes: shapes.current,startX,startY,})

        if (shapeToDelete) {
          shapes.current = shapes.current.filter((shape) => shape.id !== shapeToDelete.id);
          handleDrawAllShapes();
        }
        isDrawing = false;
      }
    };
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------
  
  // Handle move event for mouse  -------------------------------------------------------------------------------------------------------------------------------------------------
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
    const{x: currentX, y: currentY} = screenToCanvas(e.clientX-rect.left, e.clientY-rect.top);
      const width = currentX - startX;
      const height = currentY - startY;
      
      console.log('currentX:', currentX, 'currentY:', currentY, 'width:', width, 'height:', height);
      handleDrawAllShapes();

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

          tempShapes.current = [];
      
          handleDrawAllShapes();
      
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

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

    
      ctx.setTransform(
        viewPortTransform.scale, 
        0, 
        0, 
        viewPortTransform.scale, 
        viewPortTransform.translateX, 
        viewPortTransform.translateY
      );

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
      }else if (selectedTool === 'arrow') {
        drawArrowLine({
          startX: startX,
          startY: startY,
          endX: currentX,
          endY: currentY,
          color: strokeColorRef.current,
          ctx,
          fillColor,
        });
      }
    };
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------
    
  // Handle up event for mouse ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------
    const handleMouseUp = (e: MouseEvent) => {
      if (!isDrawing) return;
      if (selectedTool === 'text' || selectedTool === 'eraser') return;

      const rect = canvas.getBoundingClientRect();
      const {x: currentX, y: currentY} = screenToCanvas(e.clientX-rect.left, e.clientY-rect.top);
      const width = currentX - startX;
      const height = currentY - startY;

      console.log('Mouse Up:', { currentX, currentY, width, height });

      const newShape: Shape = {
        id: Date.now().toString(),
        type: selectedTool,
        x: startX,
        y: startY,
        w: selectedTool === 'line' || selectedTool === 'arrow' ? currentX : width,
        h: selectedTool === 'line'|| selectedTool === 'arrow' ? currentY : height,
        ...(selectedTool === 'circle' && { radius: Math.abs(width) / 2 }),
        color: strokeColorRef.current,
      };

      if(newShape) {
        tempShapes.current = [];
      }
      shapes.current.push(newShape);
      handleDrawAllShapes();
      isDrawing = false;
    };
  // ------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------

    canvas.addEventListener('mousedown', handlePanStart);
    canvas.addEventListener('mousemove', handlePanMove);
    canvas.addEventListener('mouseup', handlePanEnd);
    canvas.addEventListener('mouseleave', handlePanEnd);

    canvas.addEventListener('wheel', handleWheel, { passive: false });

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);


    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousedown', handlePanStart);
      canvas.removeEventListener('mousemove', handlePanMove);
      canvas.removeEventListener('mouseup', handlePanEnd);
      canvas.removeEventListener('mouseleave', handlePanEnd);
      canvas.removeEventListener('wheel', handleWheel);

      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [selectedTool,isPanning,lastPanPosition,viewPortTransform]);

  return (
    <div>
      <canvas
        ref={canvaRef}
        className="absolute top-0 left-0 cursor-crosshair z-10 bg-black"
        style={{
          cursor : selectedTool === 'text' ? 'text' : selectedTool=== 'eraser' ?  'pointer' : selectedTool === 'hand' ? 'grab' : 'crosshair',
        }}
        width={canvasSize.width}
        height={canvasSize.height}
        onDoubleClick={(e)=>{
          setSelectedTool('text');
        }}
      />
      {/* Zoom Controls Container */}
      <div className="fixed bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-xl p-2 flex items-center gap-2 z-20 shadow-lg">
      <button onClick={()=>{
        setViewPortTransform(prev =>({
          ...prev,
          scale:Math.max(prev.scale*0.9,0.1)
        }));
        handleDrawAllShapes();
      }}
      className="p-2 rounded hover:bg-white/30"
      title="Zoom Out"
      >
        <Minus />
      </button>
      <span className="text-sm font-medium w-12 text-center">
      {Math.round(viewPortTransform.scale * 100)}%
    </span>
      <button onClick={()=>{
        setViewPortTransform(prev =>({
          ...prev,
          scale:Math.min(prev.scale*1.1,10)
        }));
        handleDrawAllShapes();
      }}
      className="p-2 rounded hover:bg-white/30"
      title="Zoom Out"
      >
        <Plus />
      </button>
      <button 
      onClick={() => {
        setViewPortTransform({
          scale: 1,
          translateX: 0,
          translateY: 0
        });
        handleDrawAllShapes();
      }}
      className="p-2 rounded hover:bg-orange-500 text-sm"
      title="Reset Zoom"
    >
      Reset
    </button>
      </div>
  
      {editingText && (
        <input
        ref={textInputRef}
        type="text"
        value={editingText.text}
        className={`absolute bg-transparent outline-none  z-20   p-1`}
        style={{
           left: `${editingText.x * viewPortTransform.scale + viewPortTransform.translateX}px`,
            top: `${editingText.y * viewPortTransform.scale + viewPortTransform.translateY}px`,
            fontSize: '20px',
            fontFamily: 'Arial',
            minWidth: '150px',
            color: strokeColorRef.current,
            caretColor: strokeColorRef.current,
            transform: `scale(${1/viewPortTransform.scale})`,
            transformOrigin: '0 0',
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
        undo={handleUndo}
        redo={handleRedo}
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