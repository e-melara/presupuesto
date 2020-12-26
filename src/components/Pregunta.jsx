import React, { useState } from "react";

import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setShow }) => {
 const [error, setError] = useState(false);
 const [cantidad, setCantidad] = useState(0);

 const handlerChange = (e) => {
  setCantidad(parseInt(e.target.value, 10));
 };

 const handlerSubmit = (e) => {
  e.preventDefault();

  if (cantidad < 1 || isNaN(cantidad)) {
   setError(true);
   return;
  }

  setShow(false);
  setError(false);
  setRestante(cantidad);
  setPresupuesto(cantidad);
 };

 return (
  <>
   <h2>Coloca tu presupuesto</h2>
   {error && <Error message="El Presupuesto no es valido" />}
   <form onSubmit={handlerSubmit}>
    <input
     type="number"
     onChange={handlerChange}
     placeholder="Coloca tu presupuesto"
     className="u-full-width"
    />
    <input
     type="submit"
     value="Coloca tu presupuesto"
     className="button-primary u-full-width"
    />
   </form>
  </>
 );
};

Pregunta.propTypes = {};

export default Pregunta;
