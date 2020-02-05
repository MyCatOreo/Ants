import React from "react";
import styles from "./Lab.module.scss";
import { useAppDispatch } from "../states/dispatch.context";
import { useAppState } from "../states/state.context";

const Lab: React.FC = () => {
  const { lab, simulator } = useAppState();
  const dispatch = useAppDispatch();

  //search me: handleInputChane
  const handleNumAntChange = (event: any) => {
    dispatch({ type: "setNumAnt", payload: event.target.value });
  };
  const handleNumIterationChange = (event: any) => {
    dispatch({ type: "setNumIteration", payload: event.target.value });
  };

  const handleAlphaChange = (event: any) => {
    dispatch({ type: "setAlpha", payload: event.target.value });
  };
  const handleBetaChange = (event: any) => {
    dispatch({ type: "setBeta", payload: event.target.value });
  };

  const handleQChange = (event: any) => {
    dispatch({ type: "setQ", payload: event.target.value });
  };
  const handleRhoChange = (event: any) => {
    dispatch({ type: "setRho", payload: event.target.value });
  };

  return (
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
        Alpha (>=0)
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
        <input type="number" value={lab.rho} onChange={handleRhoChange}></input>
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
  );
};

export default Lab;
