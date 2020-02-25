interface Ant {
  x: number;
  y: number;
  id: number;
  node: mapNode;
  path: string[];
  food: boolean;
  goal: "Collect Food" | "Return Home" | undefined;
}
