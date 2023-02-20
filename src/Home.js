import React, { useState, useEffect } from 'react';
import './Home.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
//  Outlet,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'

import About from './pages/About';
import Portfolio from './pages/Portfolio'; // projects component within portfolio
// import Contact from './components/pages/Contact';

import Header from './components/Header'; // navigation component within header component
import Footer from './components/Footer';

// function only for establishing routes/paths(urls)
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

// homepage function
function Home() {
  return (
    <div id='home'>
      <Header />
      <LandingImage />

      <About />
      <Portfolio />
      {/* <Contact /> */}

      <Footer />
      </div>
  );
}


// ===========================================================

function LandingImage() {
  const [text, setText] = useState('');

  useEffect(() => {
    const textArray = ['is it me you\'re looking for?'];
    let currentIndex = 0;
    let currentText = '';

    const intervalId = setInterval(() => {
      if (currentIndex >= textArray.length) {
        clearInterval(intervalId);
      }

      currentText = textArray[currentIndex];
      setText(currentText.slice(0, text.length + 1));

      if (text.length === currentText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className="landing-image">
      <h1 className="landing-text">{text}</h1>
    </div>
  );
}


export default App;
