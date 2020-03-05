type AppAction =
  | { type: "canvasAddAnt"; ant: Ant }
  | { type: "updateAllAnts"; payload: Ant[] }
  | { type: "updateAnt"; payload: Ant }
  | { type: "setNumAnt"; payload: number }
  | { type: "setNumIteration"; payload: number }
  | { type: "setAlpha"; payload: number }
  | { type: "setBeta"; payload: number }
  | { type: "setQ"; payload: number }
  | { type: "setRho"; payload: number }
  | { type: "consoleLog"; payload: Message }
  | { type: "consoleClear" };
