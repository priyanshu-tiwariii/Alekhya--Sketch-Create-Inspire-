

type Props ={
    x:number;
    y:number;
    radius:number;
    color?:string;
    fillColor?:string;
    lineWidth?:number;
    ctx:CanvasRenderingContext2D;
    
}


export const drawCircle = ({
    x,
    y,
    radius,
    color,
    fillColor,
    lineWidth = 2,
    ctx,
}: Props) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color || 'white';
    
    if (fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fill();
    }
    
    ctx.stroke();
};