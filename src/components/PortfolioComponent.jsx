import React from 'react';
import Academia from '../images/academia-geek.jpg';
import '../styles/PortfolioStyle.css';

class Portfolio extends React.Component {

    render() {
        return (
            <div className='bg-light pb-3'>
                <div className="container">
                    <h2 className="text-primary container ml-1 py-5" id='portafolio'>PORTAFOLIO (PROYECTOS DESTACADOS)</h2>
                    <div className="row shadow-lg p-3 mx-3 bg-white rounded container my-3">
                        <div className='col-md-6 col-lg-6 py-3 '>
                            <h3>Academia Geek</h3>
                            <small>Agile Innova</small> <br />
                            <small><strong>Fecha:</strong> 01/01/2019</small> <br />
                            <small><strong>Puedes verlo en: </strong></small>
                            <a href="https://makaia.org/es/academiageek/" target="_blank">www.makaia.org/es/academiageek/</a>
                            <p className='my-3'>Academia Geek es el resultado de una alianza estratégica entre, Agile Innova, Makia, y E-volution con el fin de ayudarte en adquirir competencias y habilidades en desarrollo junior en aplicaciones webpreparándote así para comenzar tu camino en el emprendimiento tecnológico o trabajar con alguno de nuestros aliados.</p>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <figure className="Project__imageContainer">
                                <img className="Project__image" src={Academia} width="500" height="400" alt="" />
                            </figure>
                        </div>


                    </div>
                    <div className="row shadow-lg p-3 mx-3 bg-white rounded container my-3">
                        <div className='col-md-6 col-lg-6 py-3'>
                            <h3>Academia Geek</h3>
                            <small>Agile Innova</small> <br />
                            <small><strong>Fecha:</strong> 01/01/2019</small> <br />
                            <small><strong>Puedes verlo en: </strong></small>
                            <a href="https://makaia.org/es/academiageek/" target="_blank">www.makaia.org/es/academiageek/</a>
                            <p className='my-3'>Academia Geek es el resultado de una alianza estratégica entre, Agile Innova, Makia, y E-volution con el fin de ayudarte en adquirir competencias y habilidades en desarrollo junior en aplicaciones webpreparándote así para comenzar tu camino en el emprendimiento tecnológico o trabajar con alguno de nuestros aliados.</p>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <figure className="Project__imageContainer">
                                <img className="Project__image" src={Academia} width="500" height="400" alt="" />
                            </figure>
                        </div>


                    </div>

                </div>
            </div>

        );
    }
}

export default Portfolio;