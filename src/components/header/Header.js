import React, { useState } from 'react';
import './header.css';

//import Navigation from '../Navigation';

const Header = () => {
  //TOGGLE MENU
  const[Toggle, showMenu] = useState(false);
  
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav_logo'>Blacutt</a>

        <div className={Toggle ? 'nav_menu show-menu' : 'nav_menu'}>
          <ul className='nav_list grid'>

            <li className='nav_item'>
              <a href='#home' className='nav_link active-link'>
                <i className='uil uil-estate nav_icon'></i> Home
              </a>
            </li>

            <li className='nav_item'>
              <a href='#about' className='nav_link'>
                <i className='uil uil-user nav_icon'></i> About
              </a>
            </li>

            <li className='nav_item'>
              <a href='#skills' className='nav_link'>
                <i className='uil uil-file-alt nav_icon'></i> Skills
              </a>
            </li>

            <li className='nav_item'>
              <a href='#services' className='nav_link'>
                <i className='uil uil-briefcase-alt nav_icon'></i> Services
              </a>
            </li>

            <li className='nav_item'>
              <a href='#portfolio' className='nav_link'>
                <i className='uil uil-scenery nav_icon'></i> Portfolio
              </a>
            </li>

            <li className='nav_item'>
              <a href='#contact' className='nav_link'>
                <i className='uil uil-message nav_icon'></i> Contact
              </a>
            </li>

          </ul>

          <i class='uil uil-times nav_close' onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className='nav_toggle' onClick={() => showMenu(!Toggle)}>
          <i class='uil uil-apps'></i>
        </div>

      </nav>
    </header>
  )
}

// const styles = {
//     headerAndNavContent: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       height: '60px',
//       backgroundColor: 'black',
//       padding: '0 2%',
//     },
//     headerContainer: {
//       display: 'flex',
//       alignItems: 'center',
//     },
//     headerContent: {
//       maxWidth: '60rem',
//       margin: '0 auto',
//       fontSize: '1.125rem'
//     },
//     navContainer: {
//       display: 'flex',
//       alignItems: 'center',
//     },
//   };
  
  
  
// function Header() {
//     return (
//         <div className="headerAndNavContainer">
//             <div style={styles.headerAndNavContent} className="headerAndNavContent">
//                 <div style={styles.headerContainer} className="headerContainer">
//                     <div style={styles.headerContent} className="headerContent">
//                         <h3 style={{color: 'white'}} className="siteName">jennifer blacutt</h3>
//                     </div>
//                 </div>
//                 <div style={styles.navContainer} className="navContainer">
//                     <Navigation />
//                 </div>
//             </div>
//         </div>
//     );
// }
  
export default Header;