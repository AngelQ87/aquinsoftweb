import React, { Component } from 'react';
import './navigationbar.css';
import {Link} from 'react-router-dom';
import Contacto from './Contacto';



class Navigationbar extends Component {
    render() {
        return (
            <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">AQuinsoft Solutions</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">                        
                            <li className="nav-item active">                                
                                <a className="nav-link" href="#home">Inicio</a>
                            </li>                            
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
            </div>
        );
    }
}

export default Navigationbar;
