import React, { useContext, useReducer } from "react";

import Map from "./Map";
import RandomAnt from "./RandomAnt";
import { simulate } from "../simulation";

const initialAppState: AppState = {
  ants: []
};

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "addAnt":
      return { ...state, ants: [...state.ants, action.ant] };
  }
}

const AppStateContext = React.createContext(initialAppState);
const AppDispatchContext = React.createContext<AppDispatch>(() => {});

export function useAppState(): AppState {
  return useContext(AppStateContext);
}

export function useAppDispatch(): AppDispatch {
  return useContext(AppDispatchContext);
}

export function useAppReducer(): [AppState, AppDispatch] {
  return [useAppState(), useAppDispatch()];
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialAppState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <button onClick={() => simulate(state, dispatch)}>Simulate</button>
        <RandomAnt />
        <Map />
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default App;
