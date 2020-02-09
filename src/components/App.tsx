import React from "react";

import Map from "./Map";
import Lab from "./Lab";
import Report from "./Report";
import RandomAnt from "./RandomAnt";
import AppProviders from "../appProviders";

const App: React.FC = () => {
  return (
    <AppProviders>
      <div className="header">
        <RandomAnt />
      </div>
      <div className="left">
        <Map></Map>
      </div>
      <div className="right">
        <Lab></Lab>
        <Report></Report>
      </div>
    </AppProviders>
  );
};

export default App;
