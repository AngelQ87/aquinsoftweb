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
            AQuinsoft Solutions
          </p>         
        </header>
        <Footer/>       
      </div>
    );
  }
}

export default App;
