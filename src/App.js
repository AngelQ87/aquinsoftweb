import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Startup from './components/Startup';
import Contacto from './components/Startup';
import img from './images/indice.jpg';


class App extends Component {
  render() {



    return (
      <div className="App">
        <Navigationbar />
        <Inicio/>
        <Footer/>        
      </div>
    );
  }
}

export default App;
