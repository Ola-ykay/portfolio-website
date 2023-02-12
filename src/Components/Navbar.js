import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../Images/logo.png';
import portf from '../Images/portf.png'


const Navbar = () => {

  const [navClick, setNavClick] = useState(true);
  
  const handleToggle = () => setNavClick(!navClick);

  const closeNav = () => {   
    setNavClick(true)
  }
  
  return (
   
    <header className='navbar'>
      <div className='logo'>
       <a href='#' alt=''>
         <img src={portf} alt='logo' height='40px' width='' />
    </a>
      </div>
     
      

       
          <ul className={`nav-menu ${navClick ? "" : "click"}`}>
       <li className='nav-item'>
         <a href='#about'
                className="nav-links"
                onClick={closeNav} >
           About
         </a>
       </li>

           <li className='nav-item'>
         <a href='#skills'
          
                className="nav-links"
                onClick={closeNav}>
           Skills
         </a>
           </li>

           <li className='nav-item'>
         <a href='#projects'
           
                className="nav-links"
                onClick={closeNav}>
          Projects
         </a>
           </li>

           <li className='nav-item'>
         <a href='#contact'
          
                className="nav-links"
                onClick={closeNav}>
        Contact
         </a>
           </li>

       </ul>

        <div className="nav-mobile" onClick={handleToggle}>
           {navClick ? <FaBars size='1.8rem'/> : <FaTimes size='1.8rem' />}
          </div>
        
      </header>
   
   
  )
    
  }

export default Navbar;