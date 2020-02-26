// import { MapSimulator } from "./map.simulator";

// //game controller
// export class Game {
//   mapSimulator: any;
//   totalFood: number = 0;
// }

// function simulate(state: AppState, dispatch: AppDispatch) {
//   dispatch({ type: "consoleClear" });

//   // init map
//   const map = new MapSimulator();
//   map.initialize(state, dispatch);

//   // init ants
//   map.initializeAnts(state, dispatch);

//   // start simulation
//   for (let i = 0; i < state.simulator.numIteration; i++) {
//     //ants action
//     map.ants.forEach(ant => {
//       //TODO: I don't like map.ants
//       moveAnt(ant);
//     });

//     //map update
//     map.edges.forEach(edge => {
//       updateT(edge);
//     });

//     //generate messages
//     map.ants.forEach(ant => {
//       let message = "K" + ant.k + ": ";
//       ant.path.forEach(node => {
//         message = message + node;
//         if (node === map.startNode) {
//           message = message + "[Home]";
//         }
//         if (node === map.targetNode) {
//           message = message + "[Food]";
//         }
//         message = message + " ";
//       });

//       dispatch({
//         type: "consoleLog",
//         payload: { type: "console", message: message }
//       });
//     });

//     map.edges.forEach(edge => {
//       let message = "T" + edge.nodeA + edge.nodeB + ": " + edge.t;
//       dispatch({
//         type: "consoleLog",
//         payload: { type: "console", message: message }
//       });
//     });

//     let message = "Total Food: " + map.totalFood;
//     dispatch({
//       type: "consoleLog",
//       payload: { type: "game", message: message }
//     });
//   }
// }

// function calculateP(
//   lastNode: string,
//   currentNode: string,
//   candidateNode: string
// ): number {
//   const edge = getEdge(currentNode, candidateNode);

//   if (edge) {
//     const { t, d } = edge;
//     const connectedEdges = getConnectedEdges(currentNode);
//     let allowedEdges = [];

//     if (
//       connectedEdges.length > 1 &&
//       currentNode !== startNode &&
//       currentNode !== targetNode
//     ) {
//       allowedEdges = connectedEdges.filter(
//         edge => edge.nodeA !== lastNode && edge.nodeB !== lastNode
//       );
//     } else {
//       allowedEdges = connectedEdges;
//     }

//     const numerator =
//       Math.pow(t, state.lab.alpha) * Math.pow(1 / d, state.lab.beta);
//     const denominator = allowedEdges
//       .map(
//         edge =>
//           Math.pow(edge.t, state.lab.alpha) *
//           Math.pow(1 / edge.d, state.lab.beta)
//       )
//       .reduce((sum, current) => sum + current, 0);

//     return numerator / denominator;
//   } else {
//     return 0;
//   }
// }

// //update pheromon on an edge
// function updateT(edge: Edge) {
//   edge.t = edge.t * (1 - state.lab.rho);

//   ants.forEach(ant => {
//     //all ants that has passed this edge
//     const lastEdge = getEdge(ant.path.slice(-1)[0], ant.path.slice(-2)[0]);
//     if (lastEdge === edge) {
//       // edge.t = edge.t + (Q * (ant.food ? 2 : 1)) / edge.d;
//       edge.t = edge.t + state.lab.q / edge.d;
//     }
//   });
// }

// //move ant to the next node and update path
// function moveAnt(ant: Ant) {
//   const lastNode = ant.path.slice(-2)[0];
//   const currentNode = ant.path.slice(-1)[0];
//   let choice = Math.random();
//   const connectedEdges = getConnectedEdges(currentNode);
//   let allowedEdges = [];

//   if (
//     connectedEdges.length > 1 &&
//     currentNode !== startNode &&
//     currentNode !== targetNode
//   ) {
//     allowedEdges = connectedEdges.filter(
//       edge => edge.nodeA !== lastNode && edge.nodeB !== lastNode
//     );
//   } else {
//     allowedEdges = connectedEdges;
//   }

//   for (let i = 0; i < allowedEdges.length; i++) {
//     const nextNode = getOtherNode(currentNode, allowedEdges[i]);
//     if (nextNode) {
//       choice = choice - calculateP(lastNode, currentNode, nextNode);
//       if (choice <= 0) {
//         ant.path.push(nextNode);

//         if (nextNode === targetNode) {
//           ant.food = true;
//         }
//         if (nextNode === startNode && ant.food === true) {
//           totalFood++;
//           ant.food = false;
//         }
//         break;
//       }
//     }
//   }
// }

// // start n end simulator
export const b = 1;
