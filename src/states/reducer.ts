import { useAppState } from "./state.context";
import { useAppDispatch } from "./dispatch.context";

export const appReducer = (state: AppState, action: AppAction) => {
    switch (action.type) {
      case "addAnt":
          return { ...state, ants: [...state.ants, action.ant] };
      case "setAlpha":
        console.log("set alpha" + action.payload);
        return { ...state, lab: { ...state.lab, alpha: action.payload } };
      case "setBeta":
        console.log("set beta" + action.payload);
        return { ...state, lab: { ...state.lab, beta: action.payload } };
      default:
        return state;
    }
  };

//search me
// export function useAppReducer(): [AppState, AppDispatch] {
//     return [useAppState(), useAppDispatch()];
//   }