import React from 'react';

import './styleGaleriaItem.css';

export const GaleriaItem = (props) => {

  return (
    <div className={`contenedor-item ${props.texto}`} >
        <img src={props.imagen} alt="Imagen de un camion de la Ciudad de México" />
        <span className="texto">{props.texto}</span>
      <h3>{props.texto}</h3>
    </div>
  )
}

export default GaleriaItem