import React from "react";
import { useAppState } from "../states/state.context";
import { useAppDispatch } from "../states/dispatch.context";

const Report: React.FC = () => {
  const { report } = useAppState();

  let messagesList = report.messages.map((m, i) => {
    return <p key={i}>{m}</p>;
  });

  return (
    <>
      <h2>Report</h2>
      {messagesList}
    </>
  );
};

export default Report;
