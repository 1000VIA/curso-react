import React from "react";
import styles from "../tarjeta-fruta/tarjeta-fruta.module.scss";
import { FiPlusSquare } from "react-icons/fi";
const TarjetaFruta = props => {
  return (
    <div className={styles.card}>
      <div className={styles.name}>
        <h3>{props.name}</h3>
      </div>
      <div className={styles.price}>
        <p>$ {props.price}</p>
      </div>
      <div className={styles.button}>
        <button>
          Agregar <FiPlusSquare />
        </button>
      </div>
    </div>
  );
};

export default TarjetaFruta;
