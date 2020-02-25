interface MapEdge {
  id: number;
  nodeA: MapNode;
  nodeB: MapNode;
  //pheromon: 1; //TODO doesn't belong here
  length: number;
}
