import React from "react";
import { useAppState } from "../states/state.context";
import { useAppDispatch } from "../states/dispatch.context";

const Report: React.FC = () => {
  const { report } = useAppState();
  const dispatch = useAppDispatch();

  let messagesList = report.messages.map(m => {
    return <p>{m}</p>;
  });

  const addMessage = () => {
    dispatch({ type: "consoleLog", payload: "hello world" });
  };

  return (
    <>
      <h2>Report</h2>
      <button onClick={addMessage}>test</button>
      {JSON.stringify(report)}
      {messagesList}
    </>
  );
};

export default Report;
