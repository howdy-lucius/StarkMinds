import React, { useRef, useEffect } from 'react';
import Paper from 'paper';
import Draw from './Draw';

const Canvas = props => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas);
    Draw();
  }, []);
  
  return <canvas ref={canvasRef} {...props} id="canvas" resize="true" />
}

export default Canvas;