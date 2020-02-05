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

type AppAction =
  | { type: "addAnt"; ant: Ant }
  | { type: "setNumAnt"; payload: number }
  | { type: "setNumIteration"; payload: number }
  | { type: "setAlpha"; payload: number }
  | { type: "setBeta"; payload: number }
  | { type: "setQ"; payload: number }
  | { type: "setRho"; payload: number }
  | { type: "consoleLog"; payload: string };

type AppDispatch = React.Dispatch<AppAction>;

interface Ant {
  x: number;
  y: number;
}

interface Message {
  type: "info" | "game";
  content: string;
}
