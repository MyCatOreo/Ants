interface AppState {
  ants: Ant[];
}

type AppAction = { type: "addAnt"; ant: Ant };

interface Ant {
  x: number;
  y: number;
}
