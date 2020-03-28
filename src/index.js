import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const user = {
  name: "Milvia Alvarez Zabala",
  age: 31,
  coutry: "Colombia"
};

const getInfo = () => `Hola ni nombre es ${user.name} y soy de Medellín`;

ReactDOM.render(
  <React.StrictMode>
    <h1>{getInfo(user)}</h1>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
