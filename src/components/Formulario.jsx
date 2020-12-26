import React, { useState } from "react";
import Error from "./Error";

const initialForm = {
 nombre: "",
 cantidad: 0,
};

const Formulario = ({ add }) => {
 const [form, setForm] = useState(initialForm);
 const [error, setError] = useState(false);
 const { nombre, cantidad } = form;

 const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
   ...form,
   [name]: name === "cantidad" ? parseInt(value) : value.trim(),
  });
 };

 const handlerSubmit = (e) => {
  e.preventDefault();

  if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
   setError(true);
   return;
  }
  setError(false);
  const gasto = {
   nombre,
   cantidad,
   id: Math.floor(Math.random() * 1000000000000),
  };
  add(gasto);
  setForm(initialForm);
 };

 return (
  <form onSubmit={handlerSubmit}>
   {error && (
    <Error message="Ambos campos son obligatorio o presupuesto incorrecto" />
   )}

   <h2>Agrega tus gastos aqui</h2>
   <div className="campo">
    <label htmlFor="name">Nombre Gasto</label>
    <input
     type="text"
     value={nombre}
     name="nombre"
     onChange={handleChange}
     className="u-full-width"
     placeholder="Ej. Transporte"
    />
   </div>
   <div className="campo">
    <label htmlFor="name">Cantidad Gasto</label>
    <input
     type="number"
     name="cantidad"
     value={cantidad}
     onChange={handleChange}
     className="u-full-width"
     placeholder="Ej. 300"
    />
   </div>
   <input
    type="submit"
    className="button-primary u-full-width"
    value="Agregar gasto"
   />
  </form>
 );
};

export default Formulario;
