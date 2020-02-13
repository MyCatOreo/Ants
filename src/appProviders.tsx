import React, { useReducer } from "react";
import {
  AppStateContext,
  initialAppState,
  useAppState
} from "./states/state.context";
import { AppDispatchContext } from "./states/dispatch.context";
import { appReducer } from "./states/reducer";

const AppProviders: React.ComponentType = ({ children }) => {
  //  const [state, dispatch] = useAppReducer();
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppProviders;
