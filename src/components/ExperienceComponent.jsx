import React from 'react';
import '../styles/ExperienceStyle.css';
import AgileInnova from '../images/agile-innova.png';

class Experience extends React.Component {

    render() {
        return (
            <div className="Event container" id='experiencia'>
                <article className="Event__container ">
                    <figure className="Event-imageContainer">
                        <img className="Event-image" src={AgileInnova} width="500" height="300" alt="" />
                    </figure>
                    <div className="Event-detail">
                        <h4 className="Event-title">Mentor en Agile Innova</h4>
                        <p className="Event-description">Asesoramos colaborativamente a startups o empresas
                            para que puedan definir nuevos modelos de negocio o nuevos procesos que
                            sean innovadores, escalables, sostenibles y repetibles.
                        </p>
                        <a className="Event__url" href="https://agileinnova.org/" target="_blank">Ver Más</a>
                    </div>
                </article>
                <article className="Event__container">
                    <figure className="Event-imageContainer">
                        <img className="Event-image" src={AgileInnova} width="500" height="300" alt="" />
                    </figure>
                    <div className="Event-detail">
                        <h4 className="Event-title">Mentor en Agile Innova</h4>
                        <p className="Event-description">Asesoramos colaborativamente a startups o empresas
                            para que puedan definir nuevos modelos de negocio o nuevos procesos que
                            sean innovadores, escalables, sostenibles y repetibles.
                            </p>
                        <a className="Event__url" href="https://agileinnova.org/" target="_blank">Ver Más</a>
                    </div>
                </article>
                <article className="Event__container">
                    <figure className="Event-imageContainer">
                        <img className="Event-image" src={AgileInnova} width="500" height="300" alt="" />
                    </figure>
                    <div className="Event-detail">
                        <h4 className="Event-title">Mentor en Agile Innova</h4>
                        <p className="Event-description">Asesoramos colaborativamente a startups o empresas
                            para que puedan definir nuevos modelos de negocio o nuevos procesos que
                            sean innovadores, escalables, sostenibles y repetibles.
                            </p>
                        <a className="Event__url" href="https://agileinnova.org/" target="_blank">Ver Más</a>
                    </div>
                </article>
                <article className="Event__container">
                    <figure className="Event-imageContainer">
                        <img className="Event-image" src={AgileInnova} width="500" height="300" alt="" />
                    </figure>
                    <div className="Event-detail">
                        <h4 className="Event-title">Mentor en Agile Innova</h4>
                        <p className="Event-description">Asesoramos colaborativamente a startups o empresas
                            para que puedan definir nuevos modelos de negocio o nuevos procesos que
                            sean innovadores, escalables, sostenibles y repetibles.
                            </p>
                        <a className="Event__url" href="https://agileinnova.org/" target="_blank">Ver Más</a>
                    </div>
                </article>
            </div>
        );
    }
}

export default Experience;