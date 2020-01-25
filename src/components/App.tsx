import React, { useState, useReducer, createContext, useContext } from "react";

import Map from "./Map";
import Lab from "./Lab";
import { simulate } from "../simulation";

export type State = typeof initialState;

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "setAlpha":
      console.log("set alpha" + action.payload);
      return { ...state, lab: { ...state.lab, alpha: action.payload } };
    case "setBeta":
      console.log("set beta" + action.payload);
      return { ...state, lab: { ...state.lab, beta: action.payload } };
    default:
      return state;
  }
};

type Action =
  | { type: "setNumAnt"; payload: number }
  | { type: "setNumIteration"; payload: number }
  | { type: "setAlpha"; payload: number }
  | { type: "setBeta"; payload: number }
  | { type: "setQ"; payload: number }
  | { type: "setRho"; payload: number };

const initialState = {
  lab: {
    numAnt: 100,
    numInteration: 80,
    alpha: 1,
    beta: 1,
    q: 1,
    rho: 0.2
  }
};

//Context is designed to share data that can be considered “global” for a tree of React components,
// such as the current authenticated user, theme, or preferred language.
//global state
const stateCtx = createContext(initialState);

//global dispatch
//what's the purpose for this
const dispatchCtx = createContext((() => {}) as React.Dispatch<Action>);

//search me: what's children
export const Provider: React.ComponentType = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};

//search me
export const useDispatch = () => {
  return useContext(dispatchCtx);
};

//search me
export const useAppState = <K extends keyof State>(property: K) => {
  const state = useContext(stateCtx);
  return state[property]; // only one depth selector for comparison
};

const App: React.FC = () => {
  return (
    <Provider>
      <div className="header">
        <button onClick={simulate}>Simulate</button>
      </div>
      <div className="left">
        <Map></Map>
      </div>
      <div className="right">
        <Lab></Lab>
      </div>
    </Provider>
  );
};

export default App;
