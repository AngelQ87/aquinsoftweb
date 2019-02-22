import React, { Component } from 'react';
import './contacto.css';
import Navigationbar from './Navigationbar';
import Footer from './Footer';


class App extends Component {
  render() {
    
    

    return (
      <div className="App"> 
        <Navigationbar/>                
        <header className="App-header">                          
          <p>
            AQuinsoft Solutions Contacto
          </p>
          <img src="./images/DSC_0428.JPG"/>                   
        </header>
        <Footer/>       
      </div>
    );
  }
}

export default App;
