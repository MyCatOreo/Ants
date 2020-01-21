interface AppState {
  ants: Ant[];
}

type AppAction = { type: "addAnt"; ant: Ant };

type AppDispatch = React.Dispatch<AppAction>;

interface Ant {
  x: number;
  y: number;
}
