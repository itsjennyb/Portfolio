import React from 'react';
import './App.css';
import Header from './components/header/Header';


// import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Home from './components/Home';
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <>
    <Header />
    </>
  )
}


// function only for establishing routes/paths(urls)
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/portfolio' element={<Portfolio />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/resume' element={<Resume />} />
//       </Routes>
//     </Router>
//   );
// }

// ===========================================================
// * for later, personal pref *
// function LandingImage() {
//   const [text, setText] = useState('');

//   useEffect(() => {
//     const textArray = ['is it me you\'re looking for?'];
//     let currentIndex = 0;
//     let currentText = '';

//     const intervalId = setInterval(() => {
//       if (currentIndex >= textArray.length) {
//         clearInterval(intervalId);
//       }

//       currentText = textArray[currentIndex];
//       setText(currentText.slice(0, text.length + 1));

//       if (text.length === currentText.length) {
//         clearInterval(intervalId);
//       }
//     }, 100);

//     return () => clearInterval(intervalId);
//   }, [text]);

//   return (
//     <div className="landing-image">
//       <h1 className="landing-text">{text}</h1>
//     </div>
//   );
// }


export default App;