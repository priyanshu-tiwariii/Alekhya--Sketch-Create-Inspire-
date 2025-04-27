import { Shape } from "../../types/shape.types";
  
  export const eraser = ({ shapes, startX, startY }: { shapes: Shape[], startX: number, startY: number }) => {
    return shapes.find((shape: Shape) => {
      if (shape.type === 'rectangle') {
        return (
          startX >= shape.x &&
          startX <= shape.x + (shape.w ?? 0) &&
          startY >= shape.y &&
          startY <= shape.y + (shape.h ?? 0)
        );
      } else if (shape.type === 'circle') {
        const radius = shape.radius ?? Math.abs((shape.w ?? 0) / 2);
        const centerX = shape.x + (shape.w ?? 0) / 2;
        const centerY = shape.y + (shape.h ?? 0) / 2;
        const distance = Math.sqrt(
          Math.pow(startX - centerX, 2) + Math.pow(startY - centerY, 2)
        );
        return distance <= radius;
      } else if (shape.type === 'line') {
        const minX = Math.min(shape.x, shape.w ?? 0);
        const maxX = Math.max(shape.x, shape.w ?? 0);
        const minY = Math.min(shape.y, shape.h ?? 0);
        const maxY = Math.max(shape.y, shape.h ?? 0);
        return (
          startX >= minX &&
          startX <= maxX &&
          startY >= minY &&
          startY <= maxY
        );
      } else if (shape.type === 'text') {
        return (
          startX >= shape.x &&
          startX <= shape.x + (shape.w ?? 0) &&
          startY >= shape.y - (shape.h ?? 20) &&
          startY <= shape.y
        );
      }
      else if (shape.type === 'arrow'){
        console.log('arrow', shape);
        const minX = Math.min(shape.x, shape.w);
      const maxX = Math.max(shape.x, shape.w);
      const minY = Math.min(shape.y, shape.h);
      const maxY = Math.max(shape.y, shape.h);
      return (
        startX >= minX - 5 &&
        startX <= maxX + 5 &&
        startY >= minY - 5 &&
        startY <= maxY + 5
      );
      }
      return false;
    });
  };
  