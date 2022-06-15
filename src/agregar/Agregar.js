import React, { useState } from "react";
import "./agregar.css";
import "../seccionAgregados/Tarea/NuevaTarea";

function Agregar({ mandarValor }) {
  const [inputValue, setinputValue] = useState("");
  function updateValue(e) {
    setinputValue(e.target.value);
  }
  function onClickHandler() {
    const dato = inputValue;
    if (dato == "") {
      alert("Debe de introducir una tarea");
    } else {
      mandarValor(dato);
      setinputValue("");
    }
  }

  return (
    <section className="contenedor-tarea">
      <h1>Ingrese una tarea</h1>
      <div className="texto">
        <input
          type="text"
          className="tarea"
          id="texto"
          value={inputValue}
          onChange={updateValue}
        ></input>
        <button className="agregar" id="agregar" onClick={onClickHandler}></button>
      </div>
    </section>
  );
}
export default Agregar;