import React from "react";
import { AppStateContext } from "./states/state.context";
import { AppDispatchContext } from "./states/dispatch.context";
import { useAppReducer } from "./states/reducer";

// const [state, dispatch] = useAppReducer();

const AppProviders: React.ComponentType = ({ children }) => {
  const [state, dispatch] = useAppReducer();

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppProviders;
