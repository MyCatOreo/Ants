interface AppState {
  ants: Ant[];
  colony: {
    food: number;
  };
  lab: {
    alpha: number;
    beta: number;
    q: number;
    rho: number;
  };
  simulator: {
    numAnt: number;
    numIteration: number;
  };
  map: {};
  canvas: {};
  report: {
    messages: string[];
    //  messages: Message[];
  };
}

type AppDispatch = React.Dispatch<AppAction>;
