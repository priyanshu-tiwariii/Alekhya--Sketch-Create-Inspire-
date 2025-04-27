
export type ShapeType = 'rectangle' | 'circle' | 'line' | 'arrow' | 'text' | 'eraser' | 'hand';

export interface Shape {
  id: string;
  type: ShapeType;
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