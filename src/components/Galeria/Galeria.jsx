import React from 'react'
import './styleGaleria.css'

export const Galeria = (props) => {
  return (
    <div className='contenedor-flex '>
        {props.children}
    </div>
  )
}

export default Galeria
