import { MapGenerator } from "./map.generator";

export function simulate(state: AppState, dispatch: AppDispatch) {
  const mapGenerator = new MapGenerator();
  const { edges, nodes } = mapGenerator.generateTestMap(); //TODO: seperate pheromone from this output
  const startNode = nodes[Math.floor(Math.random() * nodes.length)]; //TODO: move into map generator
  const targetNode = nodes[Math.floor(Math.random() * nodes.length)];

  dispatch({ type: "consoleClear" });
  dispatch({
    type: "consoleLog",
    payload: {
      type: "game",
      message: "start point: (" + startNode.x + "," + startNode.y + ")"
    }
  });
  dispatch({
    type: "consoleLog",
    payload: {
      type: "game",
      message: "target point: (" + targetNode.x + "," + targetNode.y + ")"
    }
  });

  const alpha = 1;
  const beta = 1;
  const Q = 1;
  const rho = 0.2;
  const numAnt = 5;
  const numInteration = 10;

  let totalFood = 0;

  const ants: Ant[] = Array.from(Array(numAnt).keys()).map(id => ({
    id,
    x: 50,
    y: 50,
    path: [startNode],
    food: false
  }));

  function getEdge(nodeOne: MapNode, nodeTwo: MapNode): MapEdge | undefined {
    return edges.find(
      edge =>
        (edge.nodeA === nodeOne && edge.nodeB === nodeTwo) ||
        (edge.nodeA === nodeTwo && edge.nodeB === nodeOne)
    );
  }

  function getConnectedEdges(node: MapNode): MapEdge[] {
    return edges.filter(edge => edge.nodeA === node || edge.nodeB === node);
  }

  function getOtherNode(node: MapNode, edge: MapEdge): MapNode | undefined {
    if (edge.nodeA === node) {
      return edge.nodeB;
    }
    if (edge.nodeB === node) {
      return edge.nodeA;
    }
  }

  function calculateP(
    lastNode: MapNode,
    currentNode: MapNode,
    candidateNode: MapNode
  ): number {
    const edge = getEdge(currentNode, candidateNode);

    if (edge) {
      const { pheromone, distance } = edge;
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

      const numerator =
        Math.pow(pheromone, alpha) * Math.pow(1 / distance, beta);
      const denominator = allowedEdges
        .map(
          edge =>
            Math.pow(edge.pheromone, alpha) * Math.pow(1 / edge.distance, beta)
        )
        .reduce((sum, current) => sum + current, 0);

      return numerator / denominator;
    } else {
      return 0;
    }
  }

  //update pheromon on an edge
  function updateT(edge: MapEdge) {
    edge.pheromone = edge.pheromone * (1 - rho);

    ants.forEach(ant => {
      //all ants that has passed this edge
      const lastEdge = getEdge(ant.path!.slice(-1)[0], ant.path!.slice(-2)[0]); //TODO: remove after refactor ant
      if (lastEdge === edge) {
        // edge.pheromone = edge.pheromone + (Q * (ant.food ? 2 : 1)) / edge.d;
        edge.pheromone = edge.pheromone + Q / edge.distance;
      }
    });
  }

  //move ant to the next node and update path
  function moveAnt(ant: Ant) {
    const lastNode = ant.path!.slice(-2)[0]; //TODO: remove ! after refactor ant
    const currentNode = ant.path!.slice(-1)[0]; //TODO: remove ! after refactor ant
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
          ant.path!.push(nextNode); //TODO: remove ! after refactor ant

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
    let message = "K" + ant.id + ": ";
    ant.path!.forEach(node => {
      //TODO: remove ! after refactor ant
      message = message + node.id;
      if (node === startNode) {
        message = message + "[Home]";
      }
      if (node === targetNode) {
        message = message + "[Food]";
      }
      message = message + " ";
    });

    dispatch({
      type: "consoleLog",
      payload: { type: "console", message: message }
    });
  });

  //TODO lol... only loop the edges touched by ants
  // edges.forEach(edge => {
  //   let message = "T" + edge.nodeA.id + edge.nodeB.id + ": " + edge.pheromone;
  //   dispatch({
  //     type: "consoleLog",
  //     payload: { type: "console", message: message }
  //   });
  // });

  let message = "Total Food: " + totalFood;
  dispatch({ type: "consoleLog", payload: { type: "game", message: message } });
}
