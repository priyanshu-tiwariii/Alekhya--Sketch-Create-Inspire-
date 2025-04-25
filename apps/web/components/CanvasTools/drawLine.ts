type Props = {
    x: number;
    y: number;
    w: number;
    h: number;
    color?: string;
    fillColor?: string;
    lineWidth?: number;
    ctx: CanvasRenderingContext2D;
}


export const drawLine  = (
    {
    x,
    y,
    w,
    h,
    color,
    fillColor,
    lineWidth,
    ctx 
    } : Props
) =>{
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(w, h);
    ctx.lineWidth = lineWidth || 2;
    ctx.strokeStyle = color || 'white';
    
    if (fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fill();
    }
    
    ctx.stroke();
    ctx.closePath();
}