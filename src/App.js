import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by{" "}
          <a href="https://hardcore-swartz-221fac.netlify.app/">
            Elena Alina Balanescu
          </a>{" "}
          and is {""}
          <a href="https://github.com/elenaB1864">open-sourced</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
