import { createContext, useContext } from "react";
import { AppAction } from "./action";

export const dispatchCtx = createContext((() => {}) as React.Dispatch<
  AppAction
>);

//search me: why this is a context?!?!?
export const useDispatch = () => {
  return useContext(dispatchCtx);
};
