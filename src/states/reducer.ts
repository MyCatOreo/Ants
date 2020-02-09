import { useAppState } from "./state.context";
import { useAppDispatch } from "./dispatch.context";

export const appReducer = (state: AppState, action: AppAction) => {
  console.log("action", action);
  switch (action.type) {
    case "addAnt":
      return { ...state, ants: [...state.ants, action.ant] };
    case "setAlpha":
      const ss = { ...state, lab: { ...state.lab, alpha: action.payload } };
      console.log("ss", ss);
      return { ...state, lab: { ...state.lab, alpha: action.payload } };
    case "setBeta":
      return { ...state, lab: { ...state.lab, beta: action.payload } };
    case "setQ":
      return { ...state, lab: { ...state.lab, q: action.payload } };
    case "setRho":
      return { ...state, lab: { ...state.lab, rho: action.payload } };
    case "setNumIteration":
      return {
        ...state,
        simulator: { ...state.simulator, numIteration: action.payload }
      };
    case "setNumAnt":
      return {
        ...state,
        simulator: { ...state.simulator, numAnt: action.payload }
      };
    case "consoleLog":
      if (action.payload) {
        const newMessages = state.report.messages.concat(action.payload);
        return {
          ...state,
          report: { ...state.report, messages: newMessages }
        };
      } else {
        return state;
      }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

//search me
export function useAppReducer(): [AppState, AppDispatch] {
  return [useAppState(), useAppDispatch()];
}
