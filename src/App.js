import { useState } from "react";
import "./App.css";
import "./agregar/Agregar.js";
import Agregar from "./agregar/Agregar";
import "./chequear/Chequear.js";
import SeccionAgregados from "./seccionAgregados/SeccionAgregados.js";

function App() {
  const [list, setList] = useState([]);
  const [txt, setText] = useState("");
  function obtenerValor(value) {
    setText(value);
    createElement(value);
  }

  function createElement(value) {
    const data = value;
    if (data != "") {
      setList([...list, data]);
    }
  }
  return (
    <div className="App">
      <div className="contenedor-global">
        <Agregar mandarValor={obtenerValor} />
        <section class="agregados">
          {list.map((x) => (
            <SeccionAgregados value={x} />
          ))}
        </section>
      </div>
    </div>
  );
}
export default App;