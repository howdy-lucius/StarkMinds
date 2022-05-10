import Paper from "paper";
import variables from "../../../scss/_exports.module.scss";

const draw1 = () => {
  console.log(variables);
  let myPath = new Paper.Path();

  Paper.view.onMouseDown = (event) => {
    myPath = new Paper.Path();
    myPath.strokeColor = variables['stark-grey'];
    myPath.strokeWidth = 5;
  };

  Paper.view.onMouseDrag = (event) => {
    myPath.add(event.point);
  };

  Paper.view.draw();
};

export default draw1;