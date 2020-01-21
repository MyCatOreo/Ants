import React from "react";

import { useAppDispatch } from "./App";
import { WIDTH, HEIGHT } from "./Map";

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
