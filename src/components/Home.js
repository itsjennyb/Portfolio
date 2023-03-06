import React, { useState } from 'react';
import Navigation from '../components/Navigation';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';


function Home() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        } else if (currentPage === 'Portfolio') {
            return <Portfolio />
        } else if (currentPage === 'Resume') {
            return <Resume />
        } else {
            return <Contact />
        }
    }

    const changeContentHandler = (page) => setCurrentPage(page)

    const styles = {
        main: {
            minHeight: '90vh',
        }
    }

    return (
        <div className="relative">
            <Navigation currentPage={currentPage} onChange={changeContentHandler} />
            <div style={styles.main} className="h-full w-full inset-0 bg-pattern-light grid place-items-center">
                {renderPage()}
            </div>
            <Footer />
        </div>
    )
}

export default Home;