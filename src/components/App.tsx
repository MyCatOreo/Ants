import React from "react";

import Map from "./Map";
import Lab from "./Lab";
import Report from "./Report";
import AppProviders from "../appProviders";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

//REVIEW (LY): grid the sections. need fix height for map, px height for report
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiBox-root": {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: "200px"
    },
    "& #paper-map": {
      margin: "auto",
      background:
        "radial-gradient(circle, rgba(199,199,199,1) 0%, rgba(240,251,255,1) 100%)"
    },
    "& #paper-report": {
      backgroundColor: "#2f2e42"
    }
  }
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <AppProviders>
      <Container maxWidth="md" className={classes.root}>
        <Paper square id="paper-map" elevation={3}>
          <Map />
        </Paper>
        <Box>
          <Lab />
        </Box>
        <Paper square id="paper-report">
          <Report />
        </Paper>
      </Container>
    </AppProviders>
  );
};

export default App;
