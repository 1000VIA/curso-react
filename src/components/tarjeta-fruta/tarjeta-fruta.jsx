import React from "react";
const TarjetaFruta = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <hr />
      <p>$ {props.price}</p>
    </div>
  );
};

export default TarjetaFruta;
