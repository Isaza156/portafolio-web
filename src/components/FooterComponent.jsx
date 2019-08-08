import React from 'react';
import '../styles/FooterStyle.css'

class Footer extends React.Component {

    render() {
        return (
            <footer className="Footer">
                <div className="container">
                    <div className="Footer__container container">
                        <div className='py-3 mt-2'>
                            <p>Fundamentos en desarrollo web 2019 </p>
                        </div>
                        <div className='py-3 mt-2'>
                        <p>With love by <a className="link" href="https://makaia.org/es/inicio/" target="_blank">Makaia.org</a> </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;