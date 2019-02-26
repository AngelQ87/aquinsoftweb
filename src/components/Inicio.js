import React, { Component } from 'react';
import './inicio.css';

import imagen from '../images/85.jpg';


class Inicio extends Component {
  render() {



    return (
       <div className="container-fluid">
        <div className="row inicio">
          <div className="col-md-1"></div>
          <div className="col-md-5 polaroid rotate_right">
            <img src={imagen} width="284" height="213"/>          
            <p>
              Somos una startup joven que vive las necesidades
              del cliente como suyas donde creamos productos
              profesionales de alta calidad para un mercado
              excepcionalmente competitivo.
            </p>
            </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      

    );
  }
}

export default Inicio;
