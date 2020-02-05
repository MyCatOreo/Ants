import React from "react";

import { WIDTH, HEIGHT } from "./Map";
import { useAppDispatch } from "../states/dispatch.context";

const RandomAnt: React.FC = () => {
  const dispatch = useAppDispatch();

  function handleClick() {
    const ant = {
      x: Math.floor(Math.random() * WIDTH),
      y: Math.floor(Math.random() * HEIGHT)
    };
    dispatch({ type: "addAnt", ant });
  }

  return <button onClick={handleClick}>Random Ant</button>;
};

export default RandomAnt;
