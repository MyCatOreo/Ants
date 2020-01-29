import { AppAction } from "./action";

export const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
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
        const newMessages = state.report.messages.concat(action.payload);
        return {
          ...state,
          console: { ...state.report, messages: newMessages }
        };
      }
    }
    default:
      return state;
  }
};

//export const useReducer = createContext(useReducer(reducer, {} as AppState));
