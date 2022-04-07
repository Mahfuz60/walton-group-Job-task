import React, { useEffect, useState } from 'react';
import './CrystalDisplay.css';

const CrystalDisplay = ({ scollYHeight }) => {
  const [img, setImage] = useState(1);

  const array = [];

  for (let index = 1; index <= 17; index++) {
    array.push(index);
  }

  useEffect(() => {
   

    if (scollYHeight >= 3250 && scollYHeight <= 3860) {
      array.map((item, index) => {
        return setTimeout(() => {
          setImage(item);
        }, 100 * index);
      });
    }
  }, [scollYHeight]);

  return (
    <div className='crystal-bg'>
      <div className='row'>
        <div className='col-md-12 col-sm-12'>
          <div className='crystal-header text-left '>
            <h2>Experience Crystal Clear Display</h2>
            <p className='text-left'>
              Tamarind EX10 Pro series is equipped with IPS Matte LCD display which gives glossy and plane view with vibrant <br /> color form all
              viewing angles. Enjoy your favorite movies & videos in the 14" display with immense pleasure. IPS <br /> matte LCD display makes
              Tamarind ultimate substitute for work and watching movies.
            </p>
          </div>

          <div>
            <img src={require(`../../../asset/images/CrystalDisplay/pic${img}.png`)} alt='' className='crystal-img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrystalDisplay;
