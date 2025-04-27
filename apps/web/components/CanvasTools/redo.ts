
type Props ={
    shapes : React.RefObject<any[]>
    tempShapes : React.RefObject<any[]>
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