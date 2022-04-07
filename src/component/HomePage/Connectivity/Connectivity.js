import React, { useEffect, useState } from 'react';
import './Connectivity.css';

const Connectivity = ({ scollYHeight }) => {
  const [img, setImg] = useState(1);

  const array = [];
  for (let index = 1; index <= 27; index++) {
    array.push(index);
  }
  useEffect(() => {
    if (scollYHeight >= 4050 && scollYHeight <= 4220) {
      array.map((item, index) => {
        return setTimeout(() => {
          setImg(item);
        }, 100 * index);
      });
    }
  }, [scollYHeight]);
  return (
    <div className='connectivity-bg'>
      <div className='row'>
        <div className='col-md-12 col-sm-12'>
          <div className='connectivity-header text-center pt-5'>
            <h1>The Latest Connectivity</h1>
            <p className='text-left pt-2'>
              The reversible USB-C™ (Type-C™) port makes it easier to connect devices. USB 3.1 Gen 1 provides super-fast data <br /> transfer
              speeds-making it possible to transfer a 2GB movie to a USB drive in under 2 seconds! For maximum <br /> convenience and
              compatibility,the EX38 Pro also features two standard USB 3.1 ports and HDMI port.
            </p>
          </div>

          <div className='connectivity-img'>
            <img src={require(`../../../asset/images/ConnectivityImg/pic${img}.png`)} alt='' />
          </div>

          <div className='laptop-details'>
            <div className='laptopDetails-left'>
              <p className='ms-3'>RJ45 </p>
              <p>TF Card Slot </p>
              <p className='ms-5'>USB 3.1</p>
              <p className='ms-5'>Audio Combo</p>
            </div>

            <div className='laptopDetails-right  mx-auto'>
              <p>USB Type C</p>
              <p className='ms-2'>USB 3.1</p>
              <p className='ms-4'>HDMI </p>
              <p className='ms-5'>DC In</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connectivity;
