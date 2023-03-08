import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

function Home() {
  const [selectedComponent, setSelectedComponent] = useState('about');

  let componentToRender;

  if (selectedComponent === 'about') {
    componentToRender = <About />;
  } else if (selectedComponent === 'portfolio') {
    componentToRender = <Portfolio />;
  } else if (selectedComponent === 'contact') {
    componentToRender = <Contact />;
  } else if (selectedComponent === 'resume') {
    componentToRender = <Resume />;
  }


  return (
    <div id='home'>
      <Header onNavigationClick={setSelectedComponent} />
      {componentToRender}
      <Footer />
    </div>
  );
}

export default Home;