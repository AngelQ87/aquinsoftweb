import React, { Component } from 'react';
import './inicio.css';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import imagen from '../images/44.jpg';


class Inicio extends Component {
  render() {



    return (
      <div className="container-fluid">
        <div className="row">
          <Navigationbar />
        </div>
        <div className="row inicio">
          <div className="col-md-6 polaroid rotate_left rounded">
            <img src={imagen} className="img-fluid" />
            <p>
              Somos una startup joven que vive las necesidades
              del cliente como suyas donde creamos productos
              profesionales de alta calidad para un mercado
              excepcionalmente competitivo.
            </p>
          </div>
          <div className="col-md-6">
            <p className="polaroid rotate_left rounded-pill text-primary">
              Sistemas
            </p>
            <p className="polaroid rotate_right rounded-pill">
              Websites
            </p>
            <p className="polaroid rotate_left rounded-pill text-danger">
              Front-end
            </p>
            <p className="polaroid rotate_right rounded-pill text-success">
              Back-end
            </p>
            <p className="polaroid rotate_left rounded-pill text-warning">
              Mobile-apps
            </p>
          </div>

          <div className="row jumbotron-row rounded">
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
        <div className="row">
          <Footer />
        </div>


      </div>


    );
  }
}

export default Inicio;
