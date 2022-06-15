import React, { useState } from "react";
import Chequear from "../../chequear/Chequear";

function NuevaTarea({ value }) {
  const [done, setDone] = useState(false);

  return (
    <div className="div-creado">
      <div className="titulo">
        <h3 className={done == true ? "completado" : ""}>{value}</h3>
      </div>
      <div className="boton">
        <div className="check">
          <Chequear setDone={setDone} />
        </div>
      </div>
    </div>
  );
}
export default NuevaTarea;