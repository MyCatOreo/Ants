import React, { useCallback } from "react";
import styles from "./Lab.module.scss";

import { useAppState, useDispatch } from "./App";

const Lab: React.FC = () => {
  const lab = useAppState("lab");
  const dispatch = useDispatch();

  //DISPATCH
  // const [numAnt, dispatchNumAnt] = useReducer(reducer, numAnt);

  const testChange = (event: any) => {
    dispatch({ type: "setBeta", payload: 3 });
  };
  //search me: how to use usecallback
  const handleAlphaChange = (event: any) => {
    dispatch({ type: "setAlpha", payload: event.target.value });
  };
  const handleBetaChange = (event: any) => {
    console.log("handle beta", event);
    dispatch({ type: "setBeta", payload: event.target.value });
  };

  //  const [numAnt, setNumAnt] = useState(initialState.numAnt);
  //  const [numInteration, setNumInteration] = useState(initialState.numInteration);
  //  const [alpha, setAlpha] = useState(initialState.alpha);
  //  const [beta, setBeta] = useState(initialState.beta);
  //  const [Q, setQ] = useState(initialState.q);
  //  const [rho, setRho] = useState(initialState.rho);

  const handleChange = (event: any) => {
    console.log(event.target.value);
  };

  return (
    <div className={styles.lab}>
      {/* Number of ants <input type="number" value={numAnt}></input>
      Number of interation <input type="number"></input> */}
      <hr />
      <li>
        <button type="button" onClick={testChange}>
          test
        </button>

        <input type="text" value={lab.beta} onChange={handleChange} />
      </li>
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
      {/* <li>
        Q <input type="number"></input>(pheromone amount)
      </li>
      <li>
        Rho <input type="number"></input>(pheromone evaporation coefficient)
      </li> */}
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
