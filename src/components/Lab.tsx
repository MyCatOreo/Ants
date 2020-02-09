import React from "react";
import styles from "./Lab.module.scss";
import { useAppState } from "../states/state.context";
import { useAppReducer } from "../states/reducer";
import { simulate } from "../simulation";

const Lab: React.FC = () => {
  const { lab, simulator } = useAppState();
  const [appState, appDispatch] = useAppReducer();

  //search me: handleInputChane
  const handleNumAntChange = (event: any) => {
    appDispatch({ type: "setNumAnt", payload: event.target.value });
  };
  const handleNumIterationChange = (event: any) => {
    appDispatch({ type: "setNumIteration", payload: event.target.value });
  };

  const handleAlphaChange = (event: any) => {
    appDispatch({ type: "setAlpha", payload: event.target.value });
  };
  const handleBetaChange = (event: any) => {
    appDispatch({ type: "setBeta", payload: event.target.value });
  };

  const handleQChange = (event: any) => {
    appDispatch({ type: "setQ", payload: event.target.value });
  };
  const handleRhoChange = (event: any) => {
    appDispatch({ type: "setRho", payload: event.target.value });
  };

  return (
    <>
      <button onClick={() => simulate(appState, appDispatch)}>Simulate</button>

      <div className={styles.lab}>
        Number of ants{" "}
        <input
          type="number"
          value={simulator.numAnt}
          onChange={handleNumAntChange}
        ></input>
        Number of interation{" "}
        <input
          type="number"
          value={simulator.numIteration}
          onChange={handleNumIterationChange}
        ></input>
        <hr />
        <li>
          Alpha (>=0){lab.alpha}
          <input
            type="number"
            value={lab.alpha}
            onChange={handleAlphaChange}
          ></input>
          (the influence of pheromone)
        </li>
        <li>
          Beta (>=1){" "}
          <input
            type="number"
            value={lab.beta}
            onChange={handleBetaChange}
          ></input>
          (the influence of the trail level)
        </li>
        <li>
          Q <input type="number" value={lab.q} onChange={handleQChange}></input>
          (pheromone amount)
        </li>
        <li>
          Rho{" "}
          <input
            type="number"
            value={lab.rho}
            onChange={handleRhoChange}
          ></input>
          (pheromone evaporation coefficient)
        </li>
        <hr />
        <a
          href="https://en.wikipedia.org/wiki/Ant_colony_optimization_algorithms"
          target="blank"
        >
          Wikipedia - Ant colony optimization algorithms
        </a>
      </div>
    </>
  );
};

export default Lab;
