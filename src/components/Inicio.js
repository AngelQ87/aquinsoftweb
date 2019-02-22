import React, { Component } from 'react';
import './inicio.css';

import imagen from '../images/85.jpg';


class App extends Component {
  render() {



    return (

      <div className="container-fluid" id="prueba">
        <div className="row" id="inicio">
          <div className="col-md-6">
            <img src={imagen} />
          </div>
          <div className="col-md-6">
            <p>
              Somos una startup joven que vive las necesidades

              del cliente como suyas donde creamos productos

              profesionales de alta calidad para un mercado

              excepcionalmente competitivo.
            </p>
          </div>


        </div>
      </div>

    );
  }
}

export default App;
