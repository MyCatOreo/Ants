import React, { useContext } from "react";

export const AppDispatchContext = React.createContext<AppDispatch>(() => {});

export function useAppDispatch(): AppDispatch {
  return useContext(AppDispatchContext);
}