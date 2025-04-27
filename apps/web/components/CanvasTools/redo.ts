import { Shape } from "../../Types/shape.types";
type Props ={
    shapes : React.RefObject<Shape[]>
    tempShapes : React.RefObject<Shape[]>
    drawAllShapes : () => void
}


export const redo = ({tempShapes,shapes,drawAllShapes}:Props) =>{
    if(tempShapes.current.length >0){
      const lastShape = tempShapes.current.pop();
      if(lastShape){
        shapes.current.push(lastShape);
        drawAllShapes();
        console.log('Redo:', lastShape);
      }
    }
  }