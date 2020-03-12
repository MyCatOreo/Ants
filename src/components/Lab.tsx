import React, { useState } from "react";
import clsx from "clsx";
import { useAppState } from "../states/state.context";
import { useAppReducer } from "../states/reducer";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RandomAnt from "./RandomAnt";
import Simulate from "./Simulate";

const Lab: React.FC = () => {
  const [appState, appDispatch] = useAppReducer();
  const { lab, simulator } = appState;
  const [expanded, setExpanded] = useState(false);

  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 345,
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200
      }
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    }
  }));

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //TODO : handleInputChane
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
      <Card className={classes.root}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <form noValidate autoComplete="off">
              <TextField
                id="number-of-ants"
                label="Number of ants"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                size="small"
                value={simulator.numAnt}
                onChange={handleNumAntChange}
              />
              <TextField
                id="number-of-iteration"
                label="Number of iteration"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                size="small"
                value={simulator.numIteration}
                onChange={handleNumIterationChange}
              />
              <TextField
                id="alpha"
                label="Alpha (>=0)"
                helperText="the influence of pheromone"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                size="small"
                value={lab.alpha}
                onChange={handleAlphaChange}
              />
              <TextField
                id="beta"
                label="Beta (>=1)"
                helperText="the influence of the trail level"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                size="small"
                value={lab.beta}
                onChange={handleBetaChange}
              />
              <TextField
                id="q"
                label="Q"
                helperText="the pheromone amount"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                size="small"
                value={lab.q}
                onChange={handleQChange}
              />
              <TextField
                id="rho"
                label="Rho (>=0)"
                helperText="pheromone evaporation coefficient"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                size="small"
                value={lab.rho}
                onChange={handleRhoChange}
              />
              <Divider variant="middle" />
              <a
                href="https://en.wikipedia.org/wiki/Ant_colony_optimization_algorithms"
                target="blank"
              >
                Wikipedia - Ant colony optimization algorithms
              </a>
            </form>
          </CardContent>
        </Collapse>
        <CardActions disableSpacing>
          <Simulate />
          <RandomAnt />
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Lab;
