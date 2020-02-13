import React from "react";

import { WIDTH, HEIGHT } from "./Map";
import { useAppDispatch } from "../states/dispatch.context";

import BugReport from "@material-ui/icons/BugReport";
import IconButton from "@material-ui/core/IconButton";

const RandomAnt: React.FC = () => {
  const dispatch = useAppDispatch();

  function handleClick() {
    const ant = {
      x: Math.floor(Math.random() * WIDTH),
      y: Math.floor(Math.random() * HEIGHT)
    };
    dispatch({ type: "addAnt", ant });
  }

  return (
    <IconButton aria-label="random ant" onClick={handleClick}>
      <BugReport />
    </IconButton>
  );
};

export default RandomAnt;
