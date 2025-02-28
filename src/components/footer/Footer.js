import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_container container'>
                {/* <h1 className='footer_title'>Blacutt</h1> */}

                <ul className='footer_list'>
                    <li>
                        <a href='#about' className='footer_link'>About</a>
                    </li>

                    <li>
                        <a href='#portfolio' className='footer_link'>Projects</a>
                    </li>

                    <li>
                        <a href='#contact' className='footer_link'>Contact</a>
                    </li>
                </ul>

                <div className='footer_social'>
                    <a href='https://github.com/itsjennyb' className='home_social-link' target='_blank'>
                        <i class='ul uil-github'></i>
                    </a>
        
                    <a href='https://www.linkedin.com/in/jblac/' className='home_social-link' target='_blank'>
                        <i class='ul uil-linkedin'></i>
                    </a>
                </div>

                <span className='footer_copy'>
                    &#169; Jennifer Blacutt. All rights reserved.
                </span>
            </div>

        </footer>
    )
}

export default Footer;