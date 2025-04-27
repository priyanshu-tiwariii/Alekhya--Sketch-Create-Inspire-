

type Props = {
    shapes: React.RefObject<any[]>;
    tempShapes: React.RefObject<any[]>;
    drawAllShapes: () => void;
  };
  

export const undo = ({shapes, tempShapes, drawAllShapes}: Props) => {
    if (shapes.current.length > 0) {
      const lastShape = shapes.current.pop();
      if (lastShape) {
        tempShapes.current.push(lastShape);
        drawAllShapes();
        console.log('Undo:', lastShape);
      }
    }
  };
  