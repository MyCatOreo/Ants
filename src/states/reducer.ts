import { useAppState } from "./state.context";
import { useAppDispatch } from "./dispatch.context";

export const appReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "canvasAddAnt":
      return { ...state, ants: [...state.ants, action.ant] };
    case "updateAllAnts":
      return { ...state, ants: action.payload };
    case "updateAnt":
      const targetAnt = state.ants.find(t => {
        return t.id === action.payload.id;
      });
      if (targetAnt) {
        const index = state.ants.indexOf(targetAnt);
        const updated = [
          ...state.ants.slice(0, index),
          ...state.ants.slice(index + 1),
          action.payload
        ];
        return { ...state, ants: updated };
      } else {
        return state;
      }
    case "setAlpha":
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
    case "consoleClear": {
      return {
        ...state,
        report: {
          ...state.report,
          messages: []
        }
      };
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
