import React, { useReducer } from "react";
import { AppStateContext, initialAppState } from "./states/state.context";
import { AppDispatchContext } from "./states/dispatch.context";
import { appReducer } from "./states/reducer";

// const [state, dispatch] = useAppReducer();

const AppProviders: React.ComponentType = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
  <AppStateContext.Provider value={state}>
  <AppDispatchContext.Provider value={dispatch}>
{children}
  </AppDispatchContext.Provider>
</AppStateContext.Provider>
  );


//   return (
//     <AppDispatchContext.Provider value={dispatch}>
//       <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>
//     </AppDispatchContext.Provider>
//   );
};
  

export default AppProviders;
