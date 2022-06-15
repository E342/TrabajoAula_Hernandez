import "./SeccionAgregados.css";
import Tarea from "./Tarea/NuevaTarea";

function crearTarea({ value }) {
  return (
    <Tarea value={value} />
  );
}
export default crearTarea;