import React, { Component } from 'react';
import './inicio.css';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import imagen from '../images/44.jpg';
import imagenidea from '../images/83.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import firebase from 'firebase';


var config = {
  apiKey: "AIzaSyCs9ELVFm--zZmc6HOVP3A6puIlalwcXME",
  authDomain: "aquinsoftweb.firebaseapp.com",
  databaseURL: "https://aquinsoftweb.firebaseio.com",
  projectId: "aquinsoftweb",
  storageBucket: "aquinsoftweb.appspot.com",
  messagingSenderId: "783681891667"
};
firebase.initializeApp(config);


class Inicio extends Component {
  
  constructor(props){
    super(props);

    this.state= {
      valor: '0'
    };

    this.enviar = this.enviar.bind(this);   
  }

   


   enviar(){   
    firebase.database().ref("propuestas").set({
      nombre: "nombre prueba",
      email: "email prueba",
      mensaje: "texto prueba",
    });
     console.log("Boton");
   }

  
  
  render() {
     
    return (
      <div className="container-fluid">
        <div className="row" id="home">
          <Navigationbar />
        </div>
        <div className="row inicio mt-5">
        
          <div className="col-md-6 polaroid rotate_left rounded">
          <Zoom>
            <img src={imagen} className="img-fluid" />
            <p className="mt-2">
              Somos una startup joven que vive las necesidades
              del cliente como suyas donde creamos productos
              profesionales de alta calidad para un mercado
              excepcionalmente competitivo.
            </p>
            </Zoom>
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
              <Fade bottom>
              <div className="jumbotron" id="jumbotron">
                <h2>AQuinsoft Solutions</h2>
                <p>
                   Es una startup de desarrollo de software con sede en Quito, 
                  la cual esta integrada ahora en sus inicios por ingenieros cubanos. Nuestra tarea 
                  principal es proporcionar la máxima flexibilidad y confiabilidad a nuestros 
                  clientes ofreciendo soluciones individuales y generales. Nos centramos en el 
                  desarrollo de soluciones para pequeñas, medianas y grandes empresas.
                </p>
              </div>
              </Fade>
            </div>
            <div className="col-md-3"></div>
          </div>

        </div>
        
        <div className="row">
          <section id="contacto">
          <div className="container">
              <p className="h3 text-white p-3">
                Tu idea se convierte en un proyecto para nosotros en la que 
                procedemos a darle una respuesta rápida a sus requerimientos. 
                Comentenos...
              </p>
            </div>
            
            <div className="container">
              <div className="row">
              <Fade top>
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
                      <button onSubmit={this.enviar()} className="btn btn-outline-secondary">Enviar</button>
                    </div>
                  </form>
                </div>
                </Fade>
                <div className="col-md-6 my-auto">
                <Fade right>
                 <img src={imagenidea} className="img-fluid rounded-circle"/>
                </Fade>
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
  