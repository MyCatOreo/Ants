import React, { useContext } from "react";

export const AppDispatchContext = React.createContext<AppDispatch | undefined>(
  undefined
);

export function useAppDispatch(): AppDispatch {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppDispatchProvider");
  }
  return context;
}
