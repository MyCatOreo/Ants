import React from "react";

import Map from "./Map";
import Lab from "./Lab";
import Report from "./Report";
import AppProviders from "../appProviders";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const App: React.FC = () => {
  return (
    <AppProviders>
      <Container maxWidth="md">
        <Paper>
          <Map />
        </Paper>
        <Lab />
        <Paper>
          <Report />
        </Paper>
      </Container>
    </AppProviders>
  );
};

export default App;
