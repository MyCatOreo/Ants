//TODO: seperate display attributes and simulation attributes
interface Ant {
  id?: number;
  x: number;
  y: number;
  path?: MapNode[];
  food?: boolean;
}

// interface IAnt {
//   x: number;
//   y: number;
//   id: number;
//   node: mapNode;
//   path: string[];
//   food: boolean;
//   goal: "Collect Food" | "Return Home" | undefined;
// }
