import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://res.cloudinary.com/dp7qd9bi1/video/upload/v1684740643/penguin_01_k9bect.mp4' autoPlay loop muted />
      {/* <img className='logo' src='images/logo.png' alt='logo' /> */}
      <h1>ELIAS RAMSBERG</h1>
      <p>director's cut</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick=''
        >
          dysfunctional button
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          OTHER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
