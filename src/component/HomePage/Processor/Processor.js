import React, { useEffect, useState } from 'react';
import './Processor.css';

const Processor = ({ scollYHeight }) => {
  const [processorImg, setProcessorImg] = useState(1);
  const array = [];
  for (let index = 1; index <= 33; index++) {
    array.push(index);
  }

  useEffect(() => {
   
    if (scollYHeight >= 2680 && scollYHeight <= 2800) {
      array.map((item, index) => {
        return setTimeout(() => {
          setProcessorImg(item);
        }, 50 * index);
      });
    }
  }, [scollYHeight]);
  return (
    <div className='processor-bg'>
      <div className='row'>
        <div className='col-md-12 col-sm-12'>
          <div className='text-center processorText sticky-top-fixed'>
            <h1>Processor</h1>
            <p className='pt-2'>
              Tamarind EX10 Pro Series is powered by 10TH generation intel® Processor that can respond & perform at an <br /> amazing speed. Whether
              you are doing graphical works or using multiple applications, it tackles them all at an <br /> ease.This device can rise above the
              challenges by giving all the multitasking performance that the user needs for <br /> work or play.
            </p>
          </div>
          <div className='processor-img'>
            <img src={require(`../../../asset/images/ProcessorImg/img${processorImg}.png`)} alt='' />
          </div>
        </div>

        {/* processor bottom */}
        <div className='processor-bottom'>
          <div className='col-md-4 processor-details'>
            <img
              src='https://www.intel.com/content/dam/www/global/ark/badges/195717_128.gif/jcr:content/renditions/_64.gif'
              alt=''
              className='processor-bottom-img'
            />
            <h6>Intel® Core™ i3-10105 Processor</h6>
            <h6>6M Cache, up to 4.40 GHz</h6>
          </div>
          <div className='col-md-4 processor-details'>
            <img
              src='https://www.intel.com/content/dam/www/global/ark/badges/195718_128.gif/jcr:content/renditions/_64.gif'
              alt=''
              className='processor-bottom-img'
            />
            <h6>Intel® Core™ i5-10505 Processor</h6>
            <h6>12M Cache, up to 4.60 GHz</h6>
          </div>
          <div className='col-md-4 processor-details'>
            <img
              src='https://www.intel.com/content/dam/www/global/ark/badges/195720_128.gif/jcr:content/renditions/_64.gif'
              alt=''
              className='processor-bottom-img'
            />
            <h6>Intel® Core™ i7-10870H Processor</h6>
            <h6>16M Cache, up to 5.00 GHz</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processor;
