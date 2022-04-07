import React from 'react';
import './FloatingLaptop.css';

const FloatingLaptop = () => {
  return (
    <div className='floatingLaptop-bg text-center'>
      <div className='floatingLaptop'>
        <h1 className='pt-5'>Durable 180°</h1>
        <p className='pt-3'>
          With its 180° hinge, the EX38 Pro can be laid flat on the table to share content with friends <br /> and colleagues. Its unique, durable
          hinge design has been subjected to a grueling 20,000 cycles <br /> in open-and-close tests.
        </p>
        <div className='laptop-top'>
          <h6 className='pt-5 '>Up to</h6>
          <h6 className='pt-4'>hinge rotation</h6>
        </div>

        <div className='laptop-bottom'>
          <h5>Stringent</h5>
          <p>20,000-cycle open-close test</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingLaptop;
