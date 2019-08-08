import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/ContactStyle.css';

class Contact extends React.Component {
    state = {  }
    render() { 
        return (  
            <section id="creamos" className="Contact">
            <div className="container">
                <div className="Contact__container container">
                <form action="/suscripcion/" className="Contact__form-email mt-3">
                    <h5>Creamos algo juntos?</h5>
                    <input type="email" placeholder="Dejame tu email" id="email" /><br/>
                    <button>Enviar</button>
                </form>
                <div className="Contact__social">
                    <a href="#" className="Contact__social-link twitter mx-2"><FontAwesomeIcon icon={['fab', 'twitter']} size="4x" color="black" /></a>
                    <a href="#" className="Contact__social-link facebook mx-2"><FontAwesomeIcon icon={['fab', 'facebook']} size="4x" color="black" /></a>
                    <a href="#" className="Contact__social-link instagram mx-2"><FontAwesomeIcon icon={['fab', 'instagram']} size="4x" color="black" /></a>
                    <a href="#" className="Contact__social-link github mx-2"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a>
                </div>
                </div>
            </div>
        </section>
        );
    }
}
 
export default Contact;