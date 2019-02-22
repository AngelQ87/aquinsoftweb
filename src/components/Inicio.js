import React, { Component } from 'react';
import './App.css';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';


class App extends Component {
  render() {
    
    

    return (
      <div className="App"> 
        <Navigationbar/>                
        <header className="App-header">                          
          <p>
            AQuinsoft Solutions Inicio
          </p>
          <img src="./images/DSC_0428.JPG"/>                   
        </header>
        <Footer/>       
      </div>
    );
  }
}

export default App;
