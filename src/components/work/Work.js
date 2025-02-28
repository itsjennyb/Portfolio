import React from 'react';
import './work.css';
import Projects from './Projects';

const Work = () => {
    return (
        <section className='work section' id='portfolio'>
            <h2 className='section_title'>Portfolio</h2>
            <span className='section_subtitle'>Proof I can make things happen</span>

            <Projects />
        </section>
    )
}

export default Work;