type Props = {
    x: number;
    y: number;
    w: number;
    h: number;
    color?: string;
    fillColor?: string;
    lineWidth?: number;
    ctx: CanvasRenderingContext2D;
    radius?: number;
  };
  
  export const drawRectangle = ({
    x,
    y,
    w,
    h,
    color,
    fillColor,
    lineWidth = 2,
    ctx,
    radius = 6,
  }: Props) => {
    const r = Math.min(radius, Math.abs(w) / 2, Math.abs(h) / 2);
  
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color || 'white';
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  
    if (fillColor) {
      ctx.fillStyle = fillColor;
      ctx.fill();
    }
  
    ctx.stroke();
  };
  