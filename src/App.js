import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/HomePage/Home/Home';
import NavBar from './component/HomePage/NavBar/NavBar';

function App() {
  const [scollYHeight, setScollYHeight] = useState(0);

  window.addEventListener('scroll', function () {
    setScollYHeight(window.scrollY);
  });

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home scollYHeight={scollYHeight} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
