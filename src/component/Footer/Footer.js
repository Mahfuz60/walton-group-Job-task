import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer-bg'>
      <div className='container  '>
        <div className='row pt-5'>
          <div className='col-md-3 col-sm-10 col-12 footer-header'>
            <h6>About Walton</h6>

            <div className='footer-text'>
              <p>Contact</p>
              <p>Investor Relations</p>
              <p>Press</p>

              <p>
                Corporate Social <br /> Responsibility
              </p>
              <p>Careers</p>
              <p>Awards</p>
            </div>
          </div>
          <div className='col-md-3 col-sm-10 col-12 footer-header'>
            <h6>Services</h6>

            <div className='footer-text'>
              <p>ID</p>
              <p>Walton Community</p>
              <p>Drivers and Manuals</p>
              <p>Community</p>
              <p>Contact Support</p>
            </div>
          </div>
          <div className='col-md-3 col-sm-10 col-12 footer-header'>
            <h6>Resources</h6>

            <div className='footer-text'>
              <p>Register Product</p>
              <p>Innovations</p>
              <p>Predator</p>
              <p>Next@Acer</p>
              <p>Where to Buy</p>
              <p>Community</p>
              <p>Software</p>
              <p>Byoc</p>
            </div>
          </div>
          <div className='col-md-3 col-sm-10 col-12 footer-header'>
            <h6>Legal</h6>
            <div className='footer-text'>
              <p>Privacy</p>
              <p>Cookie Policy</p>
              <p>Legal Notice</p>
              <p>Additional Legal Information</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className='row'>
        <p className='text-center p-3 text-light'>Copyright ©{currentYear} and all rights reserved by - All Sister Concerns of WALTON Group</p>
      </div>
    </div>
  );
};

export default Footer;
