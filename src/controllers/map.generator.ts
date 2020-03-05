export class MapGenerator {
  //mock up for now
  width: number = 25;
  height: number = 25;

  generateTestMap = () => {
    const nodes = this._generateTestMapNode();
    const edges = this._generateTestMapEdge(nodes);
    return {
      nodes,
      edges
    };
  };

  _generateTestMapEdge = (nodes: MapNode[]) => {
    let edgeOutput: MapEdge[] = [];
    let idCounter: number = 0;

    nodes.forEach(n => {
      const right = this._findNodeRight(n, nodes);
      if (right) {
        edgeOutput.push({
          id: idCounter,
          nodeA: n,
          nodeB: right,
          distance: 1,
          pheromone: 1
        });
        idCounter++;
      }
      const down = this._findNodeDown(n, nodes);
      if (down) {
        edgeOutput.push({
          id: idCounter,
          nodeA: n,
          nodeB: down,
          distance: 1,
          pheromone: 1
        });
        idCounter++;
      }
      const upRight = this._findNodeUpRight(n, nodes);
      if (upRight) {
        edgeOutput.push({
          id: idCounter,
          nodeA: n,
          nodeB: upRight,
          distance: 1.4142,
          pheromone: 1
        });
        idCounter++;
      }
      const downRight = this._findNodeDownRight(n, nodes);
      if (downRight) {
        edgeOutput.push({
          id: idCounter,
          nodeA: n,
          nodeB: downRight,
          distance: 1.4142,
          pheromone: 1
        });
        idCounter++;
      }
    });
    return edgeOutput;
  };

  _generateTestMapNode = () => {
    let nodeOutput: MapNode[] = [];
    let idCounter: number = 0;

    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        nodeOutput.push({ id: idCounter, x: i, y: j });
        idCounter++;
      }
    }
    return nodeOutput;
  };

  _findNodeRight = (nodeA: MapNode, nodes: MapNode[]) => {
    return nodes.find(n => {
      return n.x === nodeA.x + 1 && n.y === nodeA.y;
    });
  };

  _findNodeDown = (nodeA: MapNode, nodes: MapNode[]) => {
    return nodes.find(n => {
      return n.x === nodeA.x && n.y === nodeA.y + 1;
    });
  };

  _findNodeUpRight = (nodeA: MapNode, nodes: MapNode[]) => {
    return nodes.find(n => {
      return n.x === nodeA.x + 1 && n.y === nodeA.y - 1;
    });
  };

  _findNodeDownRight = (nodeA: MapNode, nodes: MapNode[]) => {
    return nodes.find(n => {
      return n.x === nodeA.x + 1 && n.y === nodeA.y + 1;
    });
  };
}
