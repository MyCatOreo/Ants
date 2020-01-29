import { createContext, useContext } from "react";

export const initialState = {
  lab: {
    numAnt: 100,
    numIteration: 80,
    alpha: 1,
    beta: 1,
    q: 1,
    rho: 0.2
  },
  report: {
    messages: ["Start"]
  }
};

export const stateCtx = createContext(initialState);

export const useAppState = <K extends keyof AppState>(property: K) => {
  const state = useContext(stateCtx);
  return state[property];
};
