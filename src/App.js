import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Startup from './components/Startup';
import Contacto from './components/Startup';


class App extends Component {
  render() {
    
    

    return (
      <div className="App"> 
        <Navigationbar/>           
        <header className="App-header">                          
          <p>
            AQuinsoft Solutions
          </p>
          <img src="./images/DSC_0428.JPG"/>                   
        </header>
        <Footer/>       
      </div>
    );
  }
}

export default App;
