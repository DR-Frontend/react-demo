import React from "react";

const persona = {
   "nombre":"David",
   "apellido":"Romero",
   edad: 35,
   "curso":"Diseño Web con HTML y CSS"
}

const Curso = () =>(
   <article className="card">
      <div className="card__layout">
         <div className="img-container">
            <img src="https://placeimg.com/200/100/tech" alt="" />
         </div>
         <div>
            <h3>{`Curso: ${persona.curso}`}</h3>
            <div><span>{`Profesor: ${persona.nombre} ${persona.apellido}`}</span></div>
            <div><a href="hola.com">Ir al curso</a></div>
         </div>
      </div>
   </article>
)

export default Curso