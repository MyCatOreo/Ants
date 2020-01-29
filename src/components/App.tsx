import React, { useReducer } from "react";

import Map from "./Map";
import Lab from "./Lab";
import Report from "./Report";
import { simulate } from "../simulation";

import { stateCtx } from "./../contexts/state.context";
import { dispatchCtx } from "./../contexts/dispatch.context";

import { reducer } from "./../contexts/reducer.context";
import { initialState } from "./../contexts/state.context";

export const Provider: React.ComponentType = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const runSimulate = () => {
    simulate(dispatch, state);
  };

  return (
    <Provider>
      <div className="header">
        <button onClick={runSimulate}>Simulate</button>
      </div>
      <div className="left">
        <Map></Map>
      </div>
      <div className="right">
        <Lab></Lab>
        <Report></Report>
      </div>
    </Provider>
  );
};

export default App;
