import React from "react"
import PropTypes from 'prop-types'

const Curso = ({title,profesor,price,image,alt}) =>(
   <article className="card">
      <div className="card__layout">
         <div className="img-container">
            <img src={image} alt={alt} />
         </div>
         <div>
            <h3>{`Curso: ${title}`}</h3>
            <div><span>{`Profesor: ${profesor}`}</span></div>
            <div><a href="#">{`$ ${price} USD`}</a></div>
         </div>
      </div>
   </article>
)

Curso.propTypes = {
   title: PropTypes.string,
   image: PropTypes.string,
   alt: PropTypes.string,
   profesor: PropTypes.string,
   price: PropTypes.number
}
Curso.defaultProps = {
   title: 'No hay titulo!!!',
   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxpPuXOcu0Q_6Zl_YOtMenAkcawLb7HtRzg&usqp=CAU',
   alt: 'No hay Alt!!!',
   profesor: 'No hay profesor disponible',
   price: '--'
}
export default Curso