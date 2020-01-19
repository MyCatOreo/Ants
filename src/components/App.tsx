import React from "react";
import { simulate } from "../simulation";

const App: React.FC = () => {
  return (
    <main className="App">
      <button onClick={simulate}>Simulate</button>
    </main>
  );
};

export default App;
