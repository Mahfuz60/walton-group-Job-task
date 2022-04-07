import React, { useEffect, useState } from 'react';
import './LaptopMobility.css';

const LaptopMobility = ({ scollYHeight }) => {
  const [img, setImg] = useState(1);
  const array = [];
  for (let index = 1; index <= 22; index++) {
    array.push(index);
  }
  useEffect(() => {
    
    if (scollYHeight >= 1600 && scollYHeight <= 1800) {
      array.map((item, index) => {
        return setTimeout(() => {
          setImg(item);
        }, 50 * index);
      });
    }
  }, [scollYHeight]);

  return (
    <div className='laptopMobility-bg'>
      <div className='row'>
        <div className='col-md-12 col-sm-12'>
          <div className='folding-laptop'>
            <img src={require(`../../../asset/images/FloatingLaptop/img${img}.png`)} alt='' />
          </div>
          <div className='text-center mobilityText sticky-top-fixed'>
            <h1>Elegant Metallic Finish</h1>
            <p className='pt-2'>
              Tamarind EX38 Pro has a sleek metallic design that will give you premium feel. It is crafted to <br /> provide all the computing
              essential with metallic finish.The light weight design of Tamarind <br /> ensures you to carry it anywhere with great control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopMobility;
