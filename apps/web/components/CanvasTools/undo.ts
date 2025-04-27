
import { Shape } from "../../types/shape.types";
type Props = {
    shapes: React.RefObject<Shape[]>;
    tempShapes: React.RefObject<Shape[]>;
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
  