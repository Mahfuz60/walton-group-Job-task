import React from 'react';
import Footer from '../../Footer/Footer';
import Connectivity from '../Connectivity/Connectivity';
import CrystalDisplay from '../CrystalDisplay/CrystalDisplay';
import FloatingLaptop from '../FloatingLaptop/FloatingLaptop';
import Header from '../Header/Header';
import HeaderHome from '../HeaderHome/HeaderHome';
import LaptopMobility from '../LaptopMobility/LaptopMobility';
import Processor from '../Processor/Processor';

const Home = ({ scollYHeight }) => {
  return (
    <div>
      <Header />
      <HeaderHome scollYHeight={scollYHeight} />
      <FloatingLaptop />
      <LaptopMobility scollYHeight={scollYHeight} />
      <Processor scollYHeight={scollYHeight} />

      <CrystalDisplay scollYHeight={scollYHeight} />
      <Connectivity scollYHeight={scollYHeight} />

      <Footer />
    </div>
  );
};

export default Home;
