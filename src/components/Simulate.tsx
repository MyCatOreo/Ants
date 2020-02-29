import React from "react";

import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { simulate } from "../controllers/map.simulator";
import { useAppReducer } from "../states/reducer";

const Simulate: React.FC = () => {
  const [appState, appDispatch] = useAppReducer();

  return (
    <IconButton
      aria-label="start simulator"
      onClick={() => simulate(appState, appDispatch)}
    >
      <PlayCircleFilledWhiteIcon />
    </IconButton>
  );
};

export default Simulate;
