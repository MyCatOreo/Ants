import React, { useRef, useEffect } from "react";
import { useAppState, useDispatch } from "./App";

import styles from "./Map.module.scss";
import { useAnts } from "../ant";

const WIDTH = 100;
const HEIGHT = 100;
const SCALE = 5;

function useAntCanvas(): [
  Ant[],
  React.Dispatch<React.SetStateAction<Ant[]>>,
  React.RefObject<HTMLCanvasElement>
] {
  const [ants, setAnts] = useAnts();
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  return [ants, setAnts, canvasRef];
}

function drawAnt(ctx: CanvasRenderingContext2D, ant: Ant) {
  ctx.fillRect(ant.x * SCALE, ant.y * SCALE, SCALE, SCALE);
}

const Map: React.FC = () => {
  const [ants, setAnts, canvasRef] = useAntCanvas();
  const lab = useAppState("lab");

  function spawnAnt(ant: Ant) {
    setAnts([...ants, ant]);
  }

  function handleRandomAnt() {
    const newAnt = {
      x: Math.floor(Math.random() * WIDTH),
      y: Math.floor(Math.random() * HEIGHT)
    };
    spawnAnt(newAnt);
  }

  function handleCanvasClick(e: React.MouseEvent) {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const newAnt = {
        x: Math.floor((e.clientX - rect.left) / SCALE),
        y: Math.floor((e.clientY - rect.top) / SCALE)
      };
      spawnAnt(newAnt);
    }
  }

  return (
    <>
      <button onClick={handleRandomAnt}>Random Ant</button>
      test {lab.alpha} {lab.beta}
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width={WIDTH * SCALE}
        height={WIDTH * SCALE}
        onClick={handleCanvasClick}
      ></canvas>
    </>
  );
};

export default Map;
