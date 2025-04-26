type Props = {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    t?: number;
    color?: string;
    fillColor?: string;
    lineWidth?: number;
    ctx: CanvasRenderingContext2D;
    arrowHeadLength?: number;
};


export const drawArrowLine = ({
    startX,
    startY,
    endX,
    endY,
    color,
    fillColor,
    lineWidth = 2,
    ctx,
    arrowHeadLength = 10,
  }: Props) => {

    // Unit Vector -> to make the arrow of consistent length
    const dx = endX - startX;
    const dy = endY - startY;
    const len = Math.sqrt(dx * dx + dy * dy);
    const unitX = dx / len;
    const unitY = dy / len;
  
    // Perpendicular vector -> to calculate the arrow head
    // The perpendicular vector ->  rotated 90 degrees from the original vector
    const perpX = -unitY;
    const perpY = unitX;
  
    ctx.beginPath();
    ctx.strokeStyle = color || 'white';
    ctx.lineWidth = lineWidth;
  
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
  
    
    ctx.moveTo(endX, endY);
    ctx.lineTo(
      endX - unitX * arrowHeadLength + perpX * (arrowHeadLength / 2),
      endY - unitY * arrowHeadLength + perpY * (arrowHeadLength / 2)
    );
  
    ctx.moveTo(endX, endY);
    ctx.lineTo(
      endX - unitX * arrowHeadLength - perpX * (arrowHeadLength / 2),
      endY - unitY * arrowHeadLength - perpY * (arrowHeadLength / 2)
    );
  
    ctx.stroke();
  
    if (fillColor) {
      ctx.beginPath();
      ctx.fillStyle = fillColor;
      ctx.moveTo(endX, endY);
      ctx.lineTo(
        endX - unitX * arrowHeadLength + perpX * (arrowHeadLength / 2),
        endY - unitY * arrowHeadLength + perpY * (arrowHeadLength / 2)
      );
      ctx.lineTo(
        endX - unitX * arrowHeadLength - perpX * (arrowHeadLength / 2),
        endY - unitY * arrowHeadLength - perpY * (arrowHeadLength / 2)
      );
      ctx.closePath();
      ctx.fill();
    }
  };
  