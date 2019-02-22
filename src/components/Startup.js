import React, { Component } from 'react';
import './startup.css';
import Navigationbar from './Navigationbar';
import Footer from './Footer';


class App extends Component {
  render() {
    
    

    return (
      <div className="App"> 
        <Navigationbar/>               
        <header className="App-header">                          
          <p>
            AQuinsoft Solutions Startup
          </p>
          <img src="./images/DSC_0428.JPG"/>                   
        </header>
        <Footer/>       
      </div>
    );
  }
}

export default App;
