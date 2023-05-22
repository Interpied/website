import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* <h1 id="projectList">Categories</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i2.lensdump.com/i/kfpnCq.md.png'
              text='Games'
              label=''
              path='/games'
            />
            <CardItem
              src='https://i1.lensdump.com/i/kfpShD.md.png'
              text='Design'
              label=''
              path='/design'
            />
            <CardItem
              src='https://i1.lensdump.com/i/kfpY1Q.md.png'
              text='Programming'
              label=''
              path='/programming'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='https://i3.lensdump.com/i/kfplq3.md.png'
              text='Art'
              label=''
              path='/art'
            />
            <CardItem
              src='https://i3.lensdump.com/i/kf7E80.md.jpeg'
              text='Photography'
              label=''
              path='/photography'
            />
            <CardItem
              src='https://i2.lensdump.com/i/kfpLwM.md.png'
              text='Processing'
              label=''
              path='/processing'
            />
            <CardItem
              src='https://i2.lensdump.com/i/kfpN0k.md.jpeg'
              text='Misc'
              label=''
              path='/misc'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
