 import React from 'react';
import NavBar from './NavBar';
import '../CSS/Home.css'; 

const Home = () => {
  return (
    <div>
     
    <div className='home'>
    <NavBar />

    <div className='home-content'>
          <p className='home-greeting'>HELLO,</p>
          <p className='home-name'>I'M Shamindi</p>
          <p className='home-role'>Full Stack Developer</p>
        </div>
        <div className='horizontal-line-home'>
      <div className='horizontal-line'></div>
      </div>
      
    </div>
    </div>
  );
};

export default Home;
