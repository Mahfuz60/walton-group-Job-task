import React from 'react';
import './NavBar.css';
import logo from '../../../asset/logo.jpg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar-bg'>
      <nav className='container navbar navbar-expand-lg '>
        <div class='container-fluid'>
          <img src={logo} className='nav-logo' alt='' />
          <button
            className='navbar-toggler navbar-light'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon bg-light'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/' style={{ textDecoration: 'none', color: 'rgb(212, 209, 209)' }}>
                  Laptop
                </Link>
              </li>
              <li className='nav-item'>Desktop</li>
              <li className='nav-item'>All In One</li>
              <li className='nav-item'>Monitor</li>
              <li className='nav-item'>Keyboard</li>
              <li className='nav-item'>Mouse</li>
              <li className='nav-item'>Pendrive</li>
              <li className='nav-item'>Headphone</li>
              <li className='nav-item'>Accessories</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
