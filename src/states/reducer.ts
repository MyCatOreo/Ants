import { useAppState } from "./state.context";
import { useAppDispatch } from "./dispatch.context";

export const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "addAnt":
      return { ...state, ants: [...state.ants, action.ant] };
    case "setAlpha":
      return { ...state, lab: { ...state.lab, alpha: action.payload } };
    case "setBeta":
      return { ...state, lab: { ...state.lab, beta: action.payload } };
    case "setQ":
      return { ...state, lab: { ...state.lab, q: action.payload } };
    case "setRho":
      return { ...state, lab: { ...state.lab, rho: action.payload } };
    case "setNumIteration":
      return { ...state, lab: { ...state.lab, numIteration: action.payload } };
    case "setNumAnt":
      return { ...state, lab: { ...state.lab, numAnt: action.payload } };
    case "consoleLog": {
      if (action.payload) {
        //  const newMessages = state.report.messages.concat(action.payload);
        console.log("new", state.report.messages);
        const test = ["hey", "yo"];
        return {
          ...state,
          report: { ...state.report, messages: test }
        };
      }
    }
    default:
      return state;
  }
};

//search me
export function useAppReducer(): [AppState, AppDispatch] {
  return [useAppState(), useAppDispatch()];
}
