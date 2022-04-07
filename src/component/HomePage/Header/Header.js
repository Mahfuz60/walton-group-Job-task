import React from 'react';
import logo2 from '../../../asset/logo2.png';
import '../Header/Header.css';

const Header = () => {
  return (
    <div className='header-bg'>
      <nav className='container navbar navbar-expand-lg '>
        <div class='container-fluid'>
          <img src={logo2} className='nav-logo2' alt=''  />

          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav2'>
              <li>Overview</li>
              <li>Tech Spaces</li>
              <li>Picture Gallery</li>
              <button className='header-btn'>Buy Now</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
