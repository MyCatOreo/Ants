import React, { useReducer } from "react";

import Map from "./Map";
import Lab from "./Lab";
import Report from "./Report";
import { simulate } from "../simulation";
import { initialAppState, useAppState } from "../states/state.context";
import { useAppDispatch } from "../states/dispatch.context";
import RandomAnt from "./RandomAnt";
import { appReducer } from "../states/reducer";
import AppProviders from "../appProviders";

export function useAppReducer(): [AppState, AppDispatch] {
  return [useAppState(), useAppDispatch()];
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppProviders>
      <div className="header">
        <RandomAnt />
        <button onClick={() => simulate(state, dispatch)}>Simulate</button>
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
