import React from "react";

import Map from "./Map";
import { simulate } from "../simulation";

const App: React.FC = () => {
  return (
    <>
      <button onClick={simulate}>Simulate</button>
      <Map></Map>
    </>
  );
};

export default App;
