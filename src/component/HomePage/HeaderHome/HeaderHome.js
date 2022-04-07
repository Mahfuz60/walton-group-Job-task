import React, { useEffect, useState } from 'react';
import './HeaderHome.css';

const HeaderHome = ({ scollYHeight }) => {
  const [img, setImag] = useState(1);

  const array = [];

  for (let index = 1; index <= 197; index++) {
    array.push(index);
  }

  useEffect(() => {
    if (scollYHeight >= 270 && scollYHeight <= 460) {
      array.map((item, index) => {
        return setTimeout(() => {
          setImag(item);
        }, 10 * index);
      });
    }
  }, [scollYHeight]);

  return (
    <div className='backgroundStyle'>
      <div className='row'>
        <div className='col-md-12 col-sm-12'>
          <div className='text-center home-header'>
            <h1 className='pt-5'>Explore The World</h1>
            <p className='pt-2 '>
              Through the use of USB-C™ users get superfast data transfer over SuperSpeed USB 5Gbps <br />
              (USB 3.2 Gen 1). It also includes a total of four USBs: one USB 2.0 port and <br /> an HDMI port and two Super Speed USB 5Gbps Type A
              ports one of which can be used for offline charging.
            </p>
          </div>
          <img src={require(`../../../asset/images/homepage/pic${img}.png`)} alt='' className='headerHomeImg ' />
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
