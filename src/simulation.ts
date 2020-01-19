interface Edge {
  nodeA: string;
  nodeB: string;
  t: number;
  d: number;
}

interface Ant {
  k: number;
  path: string[];
  food: boolean;
}

export function simulate() {
  const edges: Edge[] = [
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

  const startNode = "A";
  const targetNode = "Z";

  const alpha = 1;
  const beta = 1;
  const Q = 1;
  const rho = 0.2;
  const numAnt = 100;
  const numInteration = 80;

  let totalFood = 0;

  const ants: Ant[] = Array.from(Array(numAnt).keys()).map(k => ({
    k,
    path: [startNode],
    food: false
  }));

  function getEdge(nodeOne: string, nodeTwo: string): Edge | undefined {
    return edges.find(
      edge =>
        (edge.nodeA === nodeOne && edge.nodeB === nodeTwo) ||
        (edge.nodeA === nodeTwo && edge.nodeB === nodeOne)
    );
  }

  function getConnectedEdges(node: string): Edge[] {
    return edges.filter(edge => edge.nodeA === node || edge.nodeB === node);
  }

  function getOtherNode(node: string, edge: Edge): string | undefined {
    if (edge.nodeA === node) {
      return edge.nodeB;
    }
    if (edge.nodeB === node) {
      return edge.nodeA;
    }
  }

  function calculateP(
    lastNode: string,
    currentNode: string,
    candidateNode: string
  ): number {
    const edge = getEdge(currentNode, candidateNode);

    if (edge) {
      const { t, d } = edge;
      const connectedEdges = getConnectedEdges(currentNode);
      let allowedEdges = [];

      if (
        connectedEdges.length > 1 &&
        currentNode !== startNode &&
        currentNode !== targetNode
      ) {
        allowedEdges = connectedEdges.filter(
          edge => edge.nodeA !== lastNode && edge.nodeB !== lastNode
        );
      } else {
        allowedEdges = connectedEdges;
      }

      const numerator = Math.pow(t, alpha) * Math.pow(1 / d, beta);
      const denominator = allowedEdges
        .map(edge => Math.pow(edge.t, alpha) * Math.pow(1 / edge.d, beta))
        .reduce((sum, current) => sum + current, 0);

      return numerator / denominator;
    } else {
      return 0;
    }
  }

  //update pheromon on an edge
  function updateT(edge: Edge) {
    edge.t = edge.t * (1 - rho);

    ants.forEach(ant => {
      //all ants that has passed this edge
      const lastEdge = getEdge(ant.path.slice(-1)[0], ant.path.slice(-2)[0]);
      if (lastEdge === edge) {
        // edge.t = edge.t + (Q * (ant.food ? 2 : 1)) / edge.d;
        edge.t = edge.t + Q / edge.d;
      }
    });
  }

  //move ant to the next node and update path
  function moveAnt(ant: Ant) {
    const lastNode = ant.path.slice(-2)[0];
    const currentNode = ant.path.slice(-1)[0];
    let choice = Math.random();
    const connectedEdges = getConnectedEdges(currentNode);
    let allowedEdges = [];

    if (
      connectedEdges.length > 1 &&
      currentNode !== startNode &&
      currentNode !== targetNode
    ) {
      allowedEdges = connectedEdges.filter(
        edge => edge.nodeA !== lastNode && edge.nodeB !== lastNode
      );
    } else {
      allowedEdges = connectedEdges;
    }

    for (let i = 0; i < allowedEdges.length; i++) {
      const nextNode = getOtherNode(currentNode, allowedEdges[i]);
      if (nextNode) {
        choice = choice - calculateP(lastNode, currentNode, nextNode);
        if (choice <= 0) {
          ant.path.push(nextNode);

          if (nextNode === targetNode) {
            ant.food = true;
          }
          if (nextNode === startNode && ant.food === true) {
            totalFood++;
            ant.food = false;
          }
          break;
        }
      }
    }
  }

  for (let i = 0; i < numInteration; i++) {
    ants.forEach(ant => {
      moveAnt(ant);
    });
    edges.forEach(edge => {
      updateT(edge);
    });
  }

  ants.forEach(ant => {
    let message = "K" + ant.k + ": ";
    ant.path.forEach(node => {
      message = message + node;
      if (node === startNode) {
        message = message + "[Home]";
      }
      if (node === targetNode) {
        message = message + "[Food]";
      }
      message = message + " ";
    });
    console.log(message);
  });
  edges.forEach(edge => {
    console.log("T" + edge.nodeA + edge.nodeB + ": " + edge.t);
  });
  console.log("Total Food: " + totalFood);
}
