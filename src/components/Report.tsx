import React from "react";

import { useAppState } from "../contexts/state.context";

const Report: React.FC = () => {
  const report = useAppState("report");

  const messagesList = report.messages.map(m => {
    return <p key="i">{m}</p>;
  });

  return <>{messagesList}</>;
};

export default Report;
