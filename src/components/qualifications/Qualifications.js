import React, { useState } from 'react';
import './qualifications.css';

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className = 'qualification section'>
            <h2 className='section_title'>Qualifications</h2>
            <span className='section_subtitle'>Degrees, certifications, and googling.
                Still figuring it out as I go
            </span>

            <div className='qualification_container container'>
                {/* <div className='qualification_tabs'>
                    <div className={toggleState === 1 ? 'qualification_button qualification_active button-flex' : 'qualification_button button-flex'}
                    onClick = {() => toggleTab(1)}>
                        <i className='uil uil-graduation-cap qualification_icon'></i>Education
                    </div>

                    <div className={toggleState === 2 ? 'qualification_button qualification_active button-flex' : 'qualification_button button-flex'}
                    onClick = {() => toggleTab(2)}>
                        <i className='uil uil-briefcase-alt qualification_icon'></i>Experience
                    </div>

                </div> */}

                <div className='qualification_sections'>
                    <div className={toggleState === 1 ? 'qualification_content qualification_content-active' : 'qualification_content'}>
                        <div className='qualification_data'>
                            <div>
                                <h3 className='qualification_title'>Certification in Web Development</h3>
                                <span className='qualification_subtitle'>University of Texas, Austin</span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2023
                                </div>
                            </div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                        <div className='qualification_data'>
                            <div></div>

                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>

                            <div>
                                <h3 className='qualification_title'>Bachelors in Hospitality Management & Tourism</h3>
                                <span className='qualification_subtitle'>Purdue University</span>
                                <div className='qualification_calendar'>
                                    <i className='uil uil-calendar-alt'></i>
                                    2011
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualifications;