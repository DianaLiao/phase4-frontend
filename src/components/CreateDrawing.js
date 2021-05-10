import React, { useEffect, useRef } from "react"
import { useCanvas } from "./CanvasContext"
import { createCanvas } from "canvas"

function CreateDrawing(){

  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw
  } = useCanvas();

  useEffect(() => {
    prepareCanvas();
  }, []);


  // let ref = useRef()

  // useEffect(() => {
  //   let canvas = ref.current
  //   let context = canvas.getContext('2d')

  //   context.fillStyle = 'rgb(200, 0, 0)';
  //   context.fillRect(10, 10, 50, 50);

  //   context.fillStyle = 'rgba(0, 0, 200, 0.5)';
  //   context.fillRect(30, 30, 50, 50);
  //   });

  return (
    <>
    <canvas 
    width="400px"
    height="400px"
    // ref={ref}
    onMouseDown={startDrawing}
    onMouseUp={finishDrawing}
    onMouseMove={draw}
    ref={canvasRef}
    >
      box for drawing
    </canvas>
    <button>
      Save?
    </button>
    </>
  )
}

export default CreateDrawing
