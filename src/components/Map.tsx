import React, { useRef, useEffect } from "react";

import { useAppReducer } from "./App";

import styles from "./Map.module.scss";
import { useAppState } from "../states/state.context";
import { useAppDispatch } from "../states/dispatch.context";

export const WIDTH = 100;
export const HEIGHT = 100;
const SCALE = 5;

function drawAnt(ctx: CanvasRenderingContext2D, ant: Ant) {
  ctx.fillRect(ant.x * SCALE, ant.y * SCALE, SCALE, SCALE);
}

const Map: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  //const [{ ants }, dispatch] = useAppReducer();
  const { ants } = useAppState();
  const dispatch = useAppDispatch();

  //search me
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingEnabled = false;
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        ants.forEach(ant => drawAnt(ctx, ant));
      }
    }
  }, [ants, canvasRef]);

  function handleCanvasClick(e: React.MouseEvent) {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const ant = {
        x: Math.floor((e.clientX - rect.left) / SCALE),
        y: Math.floor((e.clientY - rect.top) / SCALE)
      };
      dispatch({ type: "addAnt", ant });
    }
  }

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      width={WIDTH * SCALE}
      height={WIDTH * SCALE}
      onClick={handleCanvasClick}
    ></canvas>
  );
  
};

export default Map;
