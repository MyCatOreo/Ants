import React, { useState } from "react";
import { useAppState } from "../states/state.context";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

import Container from "@material-ui/core/Container";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";

const Report: React.FC = () => {
  const { report } = useAppState();
  const [isConsoleDisplay, setIsConsoleDisplay] = useState(true);
  const [isGameDisplayed, setIsGameDisplayed] = useState(true);

  const useStyles = makeStyles(theme => ({
    root: {
      height: "400px",
      padding: theme.spacing(3),
      "& .MuiFormControlLabel-root": {
        color: lightBlue[300]
      },
      "& #message-list-grid": {
        height: "360px",
        overflow: "hidden",
        marginRight: "22px"
      },
      "& .MuiContainer-root": {
        height: "100%",
        fontSize: "x-small",
        color: lightBlue[300],
        overflowY: "scroll",
        overflowX: "hidden",
        paddingRight:
          "22px" /* Increase/decrease this value for cross-browser compatibility */,
        boxSizing: "content-box"
      }
    }
  }));
  const classes = useStyles();

  const messagesList = report.messages
    .filter(m => {
      return (
        (m.type === "console" && isConsoleDisplay) ||
        (m.type === "game" && isGameDisplayed)
      );
    })
    .map((m, i) => {
      return (
        <p key={i}>
          [{m.type}] {m.message}
        </p>
      );
    });

  const ToggleSwitch = withStyles({
    switchBase: {
      color: lightBlue[300],
      "&$checked": {
        color: lightBlue[500]
      },
      "&$checked + $track": {
        backgroundColor: lightBlue[500]
      }
    },
    checked: {},
    track: {}
  })(Switch);

  function toggleConsole() {
    setIsConsoleDisplay(!isConsoleDisplay);
  }

  const toggleGame = () => {
    setIsGameDisplayed(!isGameDisplayed);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <Grid container spacing={3}>
          <Grid item sm={2}>
            <FormControlLabel
              control={
                <ToggleSwitch
                  checked={isConsoleDisplay}
                  onChange={toggleConsole}
                  value="isConsoleDisplay"
                  size="small"
                />
              }
              label="Console"
            />
          </Grid>
          <Grid item sm={2}>
            <FormControlLabel
              control={
                <ToggleSwitch
                  checked={isGameDisplayed}
                  onChange={toggleGame}
                  value="isGameDisplayed"
                  size="small"
                />
              }
              label="Game"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sm={12} id="message-list-grid">
            <Container>{messagesList}</Container>
          </Grid>
        </Grid>
      </FormGroup>
    </div>
  );
};

export default Report;
