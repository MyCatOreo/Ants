export type AppAction =
  | { type: "setNumAnt"; payload: number }
  | { type: "setNumIteration"; payload: number }
  | { type: "setAlpha"; payload: number }
  | { type: "setBeta"; payload: number }
  | { type: "setQ"; payload: number }
  | { type: "setRho"; payload: number }
  | { type: "consoleLog"; payload: string };