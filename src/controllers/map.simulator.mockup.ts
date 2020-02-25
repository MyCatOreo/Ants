//mockup for 100*100 map. Edges are horizontally and vertically aligned.

export const edgesMockup: MapEdge[] = [
  {
    id: 0,
    nodeA: { id: 0, x: 0, y: 0 },
    nodeB: { id: 0, x: 1, y: 0 },
    pheromon: 1,
    length: 1
  },
  {
    id: 1,
    nodeA: { id: 0, x: 0, y: 0 },
    nodeB: { id: 0, x: 2, y: 0 },
    pheromon: 1,
    length: 1
  }
];

export const oldWorld = [
  { nodeA: "A", nodeB: "B", t: 1, d: 2.3 },
  { nodeA: "A", nodeB: "C", t: 1, d: 1.1 },
  { nodeA: "A", nodeB: "E", t: 1, d: 4.1 },
  { nodeA: "B", nodeB: "D", t: 1, d: 0.4 },
  { nodeA: "B", nodeB: "E", t: 1, d: 3.0 },
  { nodeA: "B", nodeB: "G", t: 1, d: 9.1 },
  { nodeA: "C", nodeB: "F", t: 1, d: 3.2 },
  { nodeA: "C", nodeB: "P", t: 1, d: 4.8 },
  { nodeA: "D", nodeB: "G", t: 1, d: 2.8 },
  { nodeA: "D", nodeB: "N", t: 1, d: 0.3 },
  { nodeA: "E", nodeB: "M", t: 1, d: 4.2 },
  { nodeA: "E", nodeB: "O", t: 1, d: 3.2 },
  { nodeA: "E", nodeB: "P", t: 1, d: 1.8 },
  { nodeA: "F", nodeB: "J", t: 1, d: 4.2 },
  { nodeA: "F", nodeB: "P", t: 1, d: 1.7 },
  { nodeA: "G", nodeB: "H", t: 1, d: 1.8 },
  { nodeA: "H", nodeB: "I", t: 1, d: 1.9 },
  { nodeA: "H", nodeB: "N", t: 1, d: 0.1 },
  { nodeA: "I", nodeB: "N", t: 1, d: 1.4 },
  { nodeA: "I", nodeB: "Z", t: 1, d: 4.0 },
  { nodeA: "J", nodeB: "K", t: 1, d: 3.9 },
  { nodeA: "J", nodeB: "P", t: 1, d: 0.5 },
  { nodeA: "K", nodeB: "L", t: 1, d: 7.1 },
  { nodeA: "K", nodeB: "M", t: 1, d: 0.6 },
  { nodeA: "L", nodeB: "M", t: 1, d: 2.1 },
  { nodeA: "L", nodeB: "Z", t: 1, d: 1.8 },
  { nodeA: "M", nodeB: "O", t: 1, d: 4.0 },
  { nodeA: "M", nodeB: "Z", t: 1, d: 8.6 },
  { nodeA: "N", nodeB: "O", t: 1, d: 1.0 },
  { nodeA: "N", nodeB: "Z", t: 1, d: 10.2 }
];
