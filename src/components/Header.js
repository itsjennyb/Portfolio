import React from 'react';
// import { Route, Routes, Link } from 'react-router-dom';

// import Home from '../Home';
// import About from '../pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';

import Navigation from './Navigation';

const styles = {
    headerAndNavContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '60px',
      backgroundColor: 'black',
      padding: '0 20px',
    },
    headerContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      fontSize: 18
    },
    navContainer: {
      display: 'flex',
      alignItems: 'center',
    },
  };
  
  
  
function Header() {
    return (
        <div className="headerAndNavContainer">
            <div style={styles.headerAndNavContent} className="headerAndNavContent">
                <div style={styles.headerContainer} className="headerContainer">
                    <div style={styles.headerContent} className="headerContent">
                        <h3 style={{color: 'white'}} className="siteName">jennifer blacutt</h3>
                    </div>
                </div>
                <div style={styles.navContainer} className="navContainer">
                    <Navigation />
                </div>
            </div>
        </div>
    );
}
  
export default Header;