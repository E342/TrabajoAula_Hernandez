import React from "react";
import classes from "./chequear.css";
//import cheque from "../src/cheque.png";

const Chequear = ({ setDone }) => {
  function checkHandler(event) {
    setDone((prevDone) => !prevDone);
  }
  return (
    <div className="elemento">
      <button onClick={checkHandler} className={classes["btn"]}></button>
    </div>
  );
};
export default Chequear;