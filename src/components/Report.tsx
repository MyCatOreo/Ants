import React from "react";
import { useAppState } from "../states/state.context";

const Report: React.FC = () => {
  const { report } = useAppState();

  let messagesList = report.messages.map(m => {
    return <p key="i">{m}</p>;
  });

  let messagesList1 = (
    <>
      <p key="1">haha</p>
      <p key="2">haha2</p>
    </>
  );

  return (
    <>
      <h2>Report</h2>
      {JSON.stringify(report)}
      {messagesList1}
    </>
  );
};

export default Report;
