import { createContext, useContext } from "react";

export const initialAppState: AppState = {
  ants: [],
  colony: {
    food: 0
  },
  lab: {
    alpha: 1,
    beta: 1,
    q: 1,
    rho: 0.2
  },
  simulator: {
    numAnt: 80,
    numIteration: 80
  },
  map: {
    nodes: [],
    edges: []
  },
  canvas: {},
  report: {
    messages: []
  }
};

export const AppStateContext = createContext<AppState | undefined>(
  initialAppState
);

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }
  return context;
};
