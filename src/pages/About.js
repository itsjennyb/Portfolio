import React from 'react';
import Header from '../components/Header';
// import Footer from '../components/Footer';

import {
    // BrowserRouter,
    // Routes,
    // Route,
    Link,
  //  Outlet,
  } from "react-router-dom";

function About() {
    return (
      <div>
        <Header />

      <section>
        <h1>About Me</h1>
        <p>
            Hi, it's me.
        </p>
        <Link to="/">Return Home</Link>
      </section>

      {/* <Footer /> */}
    </div>
    );
  }

  export default About;