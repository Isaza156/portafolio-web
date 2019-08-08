import React from 'react';
import Header from './components/HeaderComponent';
import Portfolio from './components/PortfolioComponent';
import Experience from './components/ExperienceComponent';
import Footer from './components/FooterComponent';
import Contact from './components/ContactComponent';

function App() {
  return (
    <React.Fragment>
        <Header />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
    </React.Fragment>
  );
}

export default App;
