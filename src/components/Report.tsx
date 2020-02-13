import React, { useState } from "react";
import { useAppState } from "../states/state.context";
import styles from "./Report.module.scss";

const Report: React.FC = () => {
  const { report } = useAppState();
  const [isConsoleDisplay, setIsConsoleDisplay] = useState(true);
  const [isGameDisplayed, setIsGameDisplayed] = useState(true);

  const messagesList = report.messages
    .filter(m => {
      return (
        (m.type === "console" && isConsoleDisplay) ||
        (m.type === "game" && isGameDisplayed)
      );
    })
    .map((m, i) => {
      return (
        <p key={i}>
          [{m.type}] {m.message}
        </p>
      );
    });

  function toggleConsole() {
    setIsConsoleDisplay(!isConsoleDisplay);
  }

  const toggleGame = () => {
    setIsGameDisplayed(!isGameDisplayed);
  };

  return (
    <div className={styles.report}>
      <h2>Report</h2>
      <button onClick={toggleConsole}>
        {isConsoleDisplay ? "Console (x)" : "Console (+)"}
      </button>{" "}
      |{" "}
      <button onClick={toggleGame}>
        {isGameDisplayed ? "Game (x)" : "Game (+)"}
      </button>
      {messagesList}
    </div>
  );
};

export default Report;
