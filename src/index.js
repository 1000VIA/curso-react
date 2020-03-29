import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import TarjetaFruta from "../src/components/tarjeta-fruta/tarjeta-fruta";

const user = {
  name: "Milvia Alvarez Zabala",
  age: 31,
  coutry: "Colombia"
};

const getInfo = () => `Hola ni nombre es ${user.name} y soy de Medellín`;

ReactDOM.render(
  <React.StrictMode>
    <h1>{getInfo(user)}</h1>
    <div
      style={{
        display: "flex",
        padding: "1rem 0",
        overflow: "hidden",
        flexWrap: "wrap"
      }}
    >
      <TarjetaFruta name="Sandía" price={2000} />
      <TarjetaFruta name="Naranja" price={1500} />
      <TarjetaFruta name="kiwi" price={3400} />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
