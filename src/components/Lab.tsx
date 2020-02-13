import React, { useState } from "react";
import styles from "./Lab.module.scss";
import { useAppState } from "../states/state.context";
import { useAppReducer } from "../states/reducer";
import { simulate } from "../simulation";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RandomAnt from "./RandomAnt";

const Lab: React.FC = () => {
  const { lab, simulator } = useAppState();
  const [appState, appDispatch] = useAppReducer();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //search me: handleInputChane
  const handleNumAntChange = (event: any) => {
    appDispatch({ type: "setNumAnt", payload: event.target.value });
  };
  const handleNumIterationChange = (event: any) => {
    appDispatch({ type: "setNumIteration", payload: event.target.value });
  };

  const handleAlphaChange = (event: any) => {
    appDispatch({ type: "setAlpha", payload: event.target.value });
  };
  const handleBetaChange = (event: any) => {
    appDispatch({ type: "setBeta", payload: event.target.value });
  };

  const handleQChange = (event: any) => {
    appDispatch({ type: "setQ", payload: event.target.value });
  };
  const handleRhoChange = (event: any) => {
    appDispatch({ type: "setRho", payload: event.target.value });
  };

  return (
    <>
      <Card>
        <CardActions disableSpacing>
          <IconButton
            aria-label="start simulator"
            onClick={() => simulate(appState, appDispatch)}
          >
            <PlayCircleFilledWhiteIcon />
          </IconButton>
          <RandomAnt />
          <IconButton
            className={styles.leftButton}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div className={styles.lab}>
              Number of ants{" "}
              <input
                type="number"
                value={simulator.numAnt}
                onChange={handleNumAntChange}
              ></input>
              Number of interation{" "}
              <input
                type="number"
                value={simulator.numIteration}
                onChange={handleNumIterationChange}
              ></input>
              <hr />
              <li>
                Alpha (>=0){lab.alpha}
                <input
                  type="number"
                  value={lab.alpha}
                  onChange={handleAlphaChange}
                ></input>
                (the influence of pheromone)
              </li>
              <li>
                Beta (>=1){" "}
                <input
                  type="number"
                  value={lab.beta}
                  onChange={handleBetaChange}
                ></input>
                (the influence of the trail level)
              </li>
              <li>
                Q{" "}
                <input
                  type="number"
                  value={lab.q}
                  onChange={handleQChange}
                ></input>
                (pheromone amount)
              </li>
              <li>
                Rho{" "}
                <input
                  type="number"
                  value={lab.rho}
                  onChange={handleRhoChange}
                ></input>
                (pheromone evaporation coefficient)
              </li>
              <hr />
              <a
                href="https://en.wikipedia.org/wiki/Ant_colony_optimization_algorithms"
                target="blank"
              >
                Wikipedia - Ant colony optimization algorithms
              </a>
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default Lab;
