// Our little agent :D
// Simulate ant behavior

interface Edge {
  nodeA: string;
  nodeB: string;
  t: number;
  d: number;
}

export class Ant implements IAnt {
  // TODO extends sensor, movable, influencer
  id: number;
  x: number = 0;
  y: number = 0;
  path: string[] = []; //TODO memeory
  food: boolean = false; //TODO hasFood
  node: MapNode = {};
  goal: "Collect Food" | "Return Home" | undefined = undefined;
  memory: string[] = [];

  constructor(id: number) {
    this.id = id;
  }

  //TODO sensor
  observeEnvironment = () => {};

  selectEdge = () => {};

  updatePheromone = () => {};

  pickFood = () => {};

  dropFood = () => {};

  updateMemory = () => {};

  reportLocation = () => {};

  updateGoal = () => {};

  //TODO movable
  move = () => {};

  updatePath = () => {};
}

export function simulate(state: AppState, dispatch: AppDispatch) {
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

      const numerator =
        Math.pow(t, state.lab.alpha) * Math.pow(1 / d, state.lab.beta);
      const denominator = allowedEdges
        .map(
          edge =>
            Math.pow(edge.t, state.lab.alpha) *
            Math.pow(1 / edge.d, state.lab.beta)
        )
        .reduce((sum, current) => sum + current, 0);

      return numerator / denominator;
    } else {
      return 0;
    }
  }

  //update pheromon on an edge
  function updateT(edge: Edge) {
    edge.t = edge.t * (1 - state.lab.rho);

    ants.forEach(ant => {
      //all ants that has passed this edge
      const lastEdge = getEdge(ant.path.slice(-1)[0], ant.path.slice(-2)[0]);
      if (lastEdge === edge) {
        // edge.t = edge.t + (Q * (ant.food ? 2 : 1)) / edge.d;
        edge.t = edge.t + state.lab.q / edge.d;
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
}

interface MapNode {}
