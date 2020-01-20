import React, { useState, useEffect } from "react";

import styles from "./Lab.module.scss";

const Lab: React.FC = () => {

    const [numAnt, setNumAnt] = useState(100);
    const [numInteration, setNumInteration] = useState(80);
    const [alpha, setAlpha] = useState(1);
    const [beta, setBeta] = useState(1);
    const [Q, setQ] = useState(1);
    const [rho, setRho] = useState(0.2);


  return (
    <div className={styles.lab}>
      Number of ants <input type="number" value={numAnt}></input>
      Number of interation <input type="number"></input>
      <hr />
      <li>Alpha (>=0) <input type="number"></input>(the influence of pheromone)</li>
      <li>Beta (>=1) <input type="number"></input>(the influence of the trail level)</li>
      <li>Q <input type="number"></input>(pheromone amount)</li>
      <li>Rho <input type="number"></input>(pheromone evaporation coefficient)</li>

        <hr/>
      <a href='https://en.wikipedia.org/wiki/Ant_colony_optimization_algorithms' target='blank'>Wikipedia - Ant colony optimization algorithms</a>
    </div>
  );
};

export default Lab;
