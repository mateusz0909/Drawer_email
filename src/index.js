import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Navigation from "./navigation";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Button variant="contained" color="primary">
        Just click it
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
