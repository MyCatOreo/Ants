interface MapEdge {
  id: number;
  nodeA: MapNode;
  nodeB: MapNode;
  pheromone: number; //TODO doesn't belong here
  distance: number;
}
