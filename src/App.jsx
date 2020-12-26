import React, { useState } from "react";

import { Listado } from "./components/Listado";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
 const [show, setShow] = useState(true);
 const [gastos, setGastos] = useState([]);
 const [restante, setRestante] = useState(0);
 const [presupuesto, setPresupuesto] = useState(0);

 const addGastos = (gasto) => {
  setGastos([...gastos, gasto]);

  let $restante = restante - parseInt(gasto.cantidad);
  setRestante($restante);
 };

 return (
  <div className="container">
   <header>
    <h1>Gastos semanal</h1>
    <div className="contenido-principal contenido">
     {show ? (
      <Pregunta
       setShow={setShow}
       setPresupuesto={setPresupuesto}
       setRestante={setRestante}
      />
     ) : (
      <div className="row">
       <div className="one-half column">
        <Formulario add={addGastos} />
       </div>
       <div className="one-half column">
        <Listado gastos={gastos} />
        <ControlPresupuesto restante={restante} presupuesto={presupuesto} />
       </div>
      </div>
     )}
    </div>
   </header>
  </div>
 );
}

export default App;
