
import { drawCircle } from "./drawCircle";
import { drawRectangle } from "./drawRectangle";
import { drawLine } from "./drawLine";
import { drawText } from "./writeText";
import { drawArrowLine } from "./drawArrowLine";
import { Shape } from "../../types/shape.types";
import { useRef } from "react";

type Props = {
    canvaRef: React.RefObject<HTMLCanvasElement>;
    viewPortTransform: {
        scale: number;
        translateX: number;
        translateY: number;
    };
    shapes: React.RefObject<Shape[]>;
    fillColor?: string;
}


export const drawAllShapes = ({canvaRef,viewPortTransform,shapes,fillColor}:Props) => {
      const canvas = canvaRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.setTransform(
        viewPortTransform.scale, 
        0, 
        0, 
        viewPortTransform.scale, 
        viewPortTransform.translateX, 
        viewPortTransform.translateY
      )
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
        }
        else if (shape.type === 'arrow') {
          drawArrowLine({
            startX : shape.x,
            startY : shape.y,
            endX : shape.w,
            endY : shape.h,
            color: shape.color,
            ctx,
            fillColor,
          }) 
        }
        else if (shape.type === 'text') {
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