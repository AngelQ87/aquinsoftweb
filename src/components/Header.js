import React, { Component } from 'react';
import './header.css';
import {imagen1} from '../images/indice.jpg';



class Header extends Component {
    render() {



        return (
            <div className="container m-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Bloque 1</h1>
                    </div>
                    <div className="col-md-6">
                        <h1>Bloque 2</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
