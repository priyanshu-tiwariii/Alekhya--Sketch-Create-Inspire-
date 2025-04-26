export function drawText({
    x,
    y,
    text,
    color,
    fontSize = 20,
    fontFamily = 'Arial',
    ctx,
  }: {
    x: number;
    y: number;
    text: string;
    color: string;
    fontSize?: number;
    fontFamily?: string;
    ctx: CanvasRenderingContext2D;
  }) {
    ctx.fillStyle = color;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textBaseline = 'top';  
    ctx.fillText(text, x, y);
  }
  