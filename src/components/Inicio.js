import React, { Component } from 'react';
import './inicio.css';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import imagen from '../images/44.jpg';
import imagenidea from '../images/83.jpg';


class Inicio extends Component {
  render() {

    

    return (
      <div className="container-fluid">
        <div className="row" id="home">
          <Navigationbar />
        </div>
        <div className="row inicio mt-5">
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
          <section id="section1">
            <div className="container">
              <p className="h3">
                Somos una startup joven que vive las necesidades
                del cliente como suyas donde creamos productos
                profesionales de alta calidad para un mercado
                excepcionalmente competitivo. Somos una startup joven que vive las necesidades
                del cliente como suyas donde creamos productos
                profesionales de alta calidad para un mercado
                excepcionalmente competitivo. Somos una startup joven que vive las necesidades
                del cliente como suyas donde creamos productos
                profesionales de alta calidad para un mercado
                excepcionalmente competitivo.
          </p>
            </div>
          </section>
        </div>
        <div className="row">
          <section id="contacto">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <form className="card">
                    <div className="card-body">
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="Nombre" />                        
                      </div>
                      <div className="form-group">
                        <input className="form-control" type="email" placeholder="Email" />                        
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" type="text" rows="10" cols="50" placeholder="Mensaje"/>                        
                      </div>
                      <button onSubmit="" className="btn btn-outline-secondary">Enviar</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-6 my-auto">
                 <img src={imagenidea} className="img-fluid rounded-circle"/>
                </div>

              </div>
            </div>
          </section>
        </div>
        <div className="row">
          <Footer />
        </div>

        
      </div>
      
     
      
    );
  }
}

export default Inicio;
  