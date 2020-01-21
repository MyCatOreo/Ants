import React, { useContext, useReducer } from "react";

import Map from "./Map";
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
const AppDispatchContext = React.createContext<React.Dispatch<AppAction>>(
  () => {}
);

export function useAppState(): AppState {
  return useContext(AppStateContext);
}

export function useAppReducer(): [AppState, React.Dispatch<AppAction>] {
  const state = useAppState();
  const dispatch = useContext(AppDispatchContext);
  return [state, dispatch];
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialAppState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        <button onClick={simulate}>Simulate</button>
        <Map></Map>
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default App;
