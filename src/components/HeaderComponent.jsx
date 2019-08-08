import React from 'react';
import '../styles/HeaderStyle.css'

class Header extends React.Component {

    render() {
        return (
            <div className='bg'>
                <header className="container">
                    <div className="row container">
                        <h1 className="col-md-6 col-lg-6 pt-3 text-white">Mi Portafolio</h1>
                        <nav className="col-md-6 col-lg-6 d-flex py-3 justify-content-end">
                            <a className="nav-link text-white" href="#portafolio">Portafolio</a>
                            <a className="nav-link text-white" href="#experiencia">Experiencia</a>
                            <a className="nav-link text-white" href="#creamos">Trabajemos Juntos</a>
                        </nav>
                    </div>
                </header>
                <div className="container">
                    <div className="text-white row container">
                        <h1 className='col-md-6 col-lg-6 mt-5 py-5 '>
                            Hola soy <strong className='text-primary'>Jonathan Isaza</strong> <br /> desarrollador
                <strong className='text-primary'>  FrontEnd</strong> con <br /> énfasis en <strong className='text-primary'>JavaScript</strong>
                        </h1>
                        <div className='col-md-6 col-lg-6 ounded-circle'>
                        <img className="hero-image" src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png" alt="Imagen principal del sitio" />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;