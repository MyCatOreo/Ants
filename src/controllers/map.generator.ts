export class MapGenerator {
  //mock up for now
  width: number = 100;
  height: number = 100;

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
    console.log(edgeOutput);
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

  // const edges: Edge[] = [
  //   { nodeA: "A", nodeB: "B", t: 1, d: 2.3 },
  //   { nodeA: "A", nodeB: "C", t: 1, d: 1.1 },
  //   { nodeA: "A", nodeB: "E", t: 1, d: 4.1 },
  //   { nodeA: "B", nodeB: "D", t: 1, d: 0.4 },
  //   { nodeA: "B", nodeB: "E", t: 1, d: 3.0 },
  //   { nodeA: "B", nodeB: "G", t: 1, d: 9.1 },
  //   { nodeA: "C", nodeB: "F", t: 1, d: 3.2 },
  //   { nodeA: "C", nodeB: "P", t: 1, d: 4.8 },
  //   { nodeA: "D", nodeB: "G", t: 1, d: 2.8 },
  //   { nodeA: "D", nodeB: "N", t: 1, d: 0.3 },
  //   { nodeA: "E", nodeB: "M", t: 1, d: 4.2 },
  //   { nodeA: "E", nodeB: "O", t: 1, d: 3.2 },
  //   { nodeA: "E", nodeB: "P", t: 1, d: 1.8 },
  //   { nodeA: "F", nodeB: "J", t: 1, d: 4.2 },
  //   { nodeA: "F", nodeB: "P", t: 1, d: 1.7 },
  //   { nodeA: "G", nodeB: "H", t: 1, d: 1.8 },
  //   { nodeA: "H", nodeB: "I", t: 1, d: 1.9 },
  //   { nodeA: "H", nodeB: "N", t: 1, d: 0.1 },
  //   { nodeA: "I", nodeB: "N", t: 1, d: 1.4 },
  //   { nodeA: "I", nodeB: "Z", t: 1, d: 4.0 },
  //   { nodeA: "J", nodeB: "K", t: 1, d: 3.9 },
  //   { nodeA: "J", nodeB: "P", t: 1, d: 0.5 },
  //   { nodeA: "K", nodeB: "L", t: 1, d: 7.1 },
  //   { nodeA: "K", nodeB: "M", t: 1, d: 0.6 },
  //   { nodeA: "L", nodeB: "M", t: 1, d: 2.1 },
  //   { nodeA: "L", nodeB: "Z", t: 1, d: 1.8 },
  //   { nodeA: "M", nodeB: "O", t: 1, d: 4.0 },
  //   { nodeA: "M", nodeB: "Z", t: 1, d: 8.6 },
  //   { nodeA: "N", nodeB: "O", t: 1, d: 1.0 },
  //   { nodeA: "N", nodeB: "Z", t: 1, d: 10.2 }
  // ];
}
