import  {createContext, useContext } from "react";

//Context is designed to share data that can be considered “global” for a tree of React components,
// such as the current authenticated user, theme, or preferred language.
//global state

export const initialAppState: AppState = {
    ants: [{x:10, y:10}],
    colony: {
      food: 0
    },
    lab: {
      alpha: 1,
      beta: 1,
      q: 1,
      rho: 0.2
    },
    simulator: {
      numAnt: 80,
      numInteration: 80
    },
    map: {
  
    },
    canvas: {
  
    },
    report: {
      messages: []
    }
};

  
export const AppStateContext = createContext(initialAppState);

export const useAppState = () =>{
    return useContext(AppStateContext);
}

// search me:
// use this instead:
// const { lab } = useAppState();
//
// export const useFeatureState = <K extends keyof AppState>(property: K) => {
//   const state = useContext(AppStateContext);
//   return state[property];
// };
  
  