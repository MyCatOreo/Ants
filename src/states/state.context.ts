import { createContext, useContext } from "react";

//Context is designed to share data that can be considered “global” for a tree of React components,
// such as the current authenticated user, theme, or preferred language.
//global state

export const initialAppState: AppState = {
  ants: [{ x: 10, y: 10 }],
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
  map: {},
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
