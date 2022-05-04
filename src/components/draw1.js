import Paper from "paper";

const draw1 = () => {
  let myPath = new Paper.Path();

  Paper.view.onMouseDown = (event) => {
    console.log('on mouse down');
    myPath.strokeColor = "#737373";
    myPath.strokeWidth = 5;
  };

  Paper.view.onMouseDrag = (event) => {
    console.log('on mouse down');
    myPath.add(event.point);
  };

  Paper.view.draw();
};

export default draw1;