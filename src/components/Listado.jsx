import React from "react";

import Gasto from "./Gasto";

export const Listado = ({ gastos }) => {
 return (
  <div className="gastos-realizados">
   <h2>Listados</h2>
   {gastos.map((gasto) => {
    return <Gasto key={gasto.id} {...gasto} />;
   })}
  </div>
 );
};
