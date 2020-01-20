import React from "react";

import Map from "./Map";
import Lab from "./Lab";
import { simulate } from "../simulation";

const App: React.FC = () => {
  return (
    <>
      <div className='header'><button onClick={simulate}>Simulate</button></div>
      <div className='left'><Map></Map></div>
      <div className='right'><Lab></Lab></div>
    </>
  );
};

export default App;
