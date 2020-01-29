interface AppState {
  lab: {
    numAnt: number;
    numIteration: number;
    alpha: number;
    beta: number;
    q: number;
    rho: number;
  };
  report: {
    messages: string[];
  };
}
