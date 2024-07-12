import { useState } from "react";
import "./App.css";
import Currency from "./rct/Currency";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Currency />
    </div>
  );
}

export default App;
