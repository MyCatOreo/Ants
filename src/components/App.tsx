import React from "react";

import Map from "./Map";
import { simulate } from "../simulation";

const App: React.FC = () => {
  return (
    <main className="App">
      <button onClick={simulate}>Simulate</button>
      <Map></Map>
    </main>
  );
};

export default App;
