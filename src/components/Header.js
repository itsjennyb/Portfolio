import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Home';
import About from '../pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';

// import Navigation from './Navigation';

const styles = {
    headerStyle: {
        background: 'white',
    },
    headingStyle: {
        fontSize: '100px',
    }
};

function Header() {
    return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>JB.</h1>
            {/* <Navigation /> */}
                <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    {/* <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} /> */}
                </Routes>
        </header>
    );
}
  
export default Header;