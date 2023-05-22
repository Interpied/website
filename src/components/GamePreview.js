import React from 'react';
import './GamePreview.css';
import GamePreviewItem from './GamePreviewItem';

function GamePreview() {
  return (
    <div className='gamePreview'>
      {/* <h1 id="projectList">Categories</h1> */}
      <div className='gamePreview__container'>

        <div className='gamePreview__wrapper'>
        <h1 id='title' >Quick Navigation</h1>
          <ul className='gamePreview__items'>
            <GamePreviewItem
              src='https://i2.lensdump.com/i/kfzeX5.md.png'
              path='/games#western-duel-mayhem'
            />
            <GamePreviewItem
              src='https://i1.lensdump.com/i/kfzzkv.md.png'
              path='/games#squaresque'
            />
            <GamePreviewItem
              src='https://i1.lensdump.com/i/kfzOL9.md.png'
              path='/games#keyboard-tangent'
            />
            <GamePreviewItem
              src='https://i2.lensdump.com/i/kfzHa2.md.png'
              path='/games#minesweeper'
            />
            <GamePreviewItem
              src='https://i1.lensdump.com/i/kfz4Nm.md.jpeg'
              path='/games#designperspektiv'
            />
          </ul>

          <ul className='gamePreview__items'>
            <GamePreviewItem
              src='https://i2.lensdump.com/i/kfzpii.md.png'
              path='/games#find-the-anomaly'
            />
            <GamePreviewItem
              src='https://i2.lensdump.com/i/kfz33P.md.jpeg'
              path='/games#casino-craze'
            />
            <GamePreviewItem
              src='https://i3.lensdump.com/i/kfzBXK.md.jpeg'
              path='/games#alien-operation'
            />
            <GamePreviewItem

            />
            <GamePreviewItem

            />
          </ul>

          <ul className='gamePreview__items'>
            <GamePreviewItem

            />
            <GamePreviewItem

            />
            <GamePreviewItem

            />
            <GamePreviewItem

            />
            <GamePreviewItem

            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GamePreview;
