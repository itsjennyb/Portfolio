import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
//  Outlet,
} from "react-router-dom";

import About from './pages/About';
// import Portfolio from './components/pages/Portfolio'; // projects component within portfolio
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
    <div>
      <Header />

      <div className="Home">
          <p>
            UNDER CONSTRUCTION!
          </p>
          <Link to="/about">About me</Link>
      </div>
    </div>
  );
}


export default App;
