import React, { Component } from 'react';
import './inicio.css';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import imagen from '../images/44.jpg';


class Inicio extends Component {
  render() {



    return (
      <div className="Container-fluid">
       
        <Navigationbar/>
       
        <div className="row inicio">
          <div className="col-md-6 polaroid rotate_left">
            <img src={imagen} width="80%" height="80%" />
            <p>
              Somos una startup joven que vive las necesidades
              del cliente como suyas donde creamos productos
              profesionales de alta calidad para un mercado
              excepcionalmente competitivo.
            </p>
          </div>
          <div className="col-md-6">
            <p className="cuadro polaroid rotate_left">
              Sistemas
            </p>
            <p className="polaroid rotate_right">
              Websites
            </p>
            <p className="cuadro polaroid rotate_left">
              Front-end
            </p>                                
            <p className="cuadro polaroid rotate_right">
              Back-end
            </p>                                 
            <p className="polaroid rotate_left">
              Mobile-apps
            </p>            
          </div>
          
        <div className="row jumbotron-row"> 
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="jumbotron">
        <p>
              Somos una startup joven que vive las necesidades
              del cliente como suyas donde creamos productos
              profesionales de alta calidad para un mercado
              excepcionalmente competitivo.
        </p>
        </div>
        </div>
        <div className="col-md-3"></div>
        </div>
        </div>        
        
        <Footer/>
      </div>
      

    );
  }
}

export default Inicio;
