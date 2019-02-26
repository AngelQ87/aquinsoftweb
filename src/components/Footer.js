import React, { Component } from 'react';
import './footer.css';


class Footer extends Component {
    render() {
        return (
            <div className="footer bg-dark text-white">            
              <p>Powered by Ing. Angel Quintero <a href="https://www.linkedin.com/in/angel-quintero" class="badge badge-info">Linkedin</a></p>
            </div>
        );
    }
}

export default Footer;
