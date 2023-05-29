import React from 'react';
import './GameList.css';
import GameListItem from './GameListItem';

function GameList() {
  return (
    <div className='gameList'>
      {/* <h1 id="projectList">Categories</h1> */}
      <div className='gameList_container'>
        <GameListItem
          text='Western Duel Mayhem'
          img1='https://i2.lensdump.com/i/kfzeX5.png'
          img2='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          img3='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          path='/western-duel-mayhem'
          id='western-duel-mayhem'
          bgcolor='#efd5de'
        />
        <GameListItem
          text='Squaresque'
          img1='https://i1.lensdump.com/i/kfzzkv.png'
          img2='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          img3='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          desc='Use two shapes as reference to estimate the volume of the third shape on screen. Play 5 rounds to get a final score for your performance.'
          path='/squaresque'
          id='squaresque'
          bgcolor='#d4eae6'
        />
        <GameListItem
          text='Keyboard Tangent'
          img1='https://i1.lensdump.com/i/kfzOL9.png'
          img2='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          img3='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          desc='Try to beat the time! Never seen before! Something Something! Wow so cool how is that possible! Nice one! Great Job!'
          path='/keyboard-tangent'
          id='keyboard-tangent'
          bgcolor='#efead5'
        />
        <GameListItem
          text='Minesweeper'
          img1='https://i2.lensdump.com/i/kfzHa2.png'
          img2='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          img3='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          desc='Try to beat the time! Never seen before! Something Something! Wow so cool how is that possible! Nice one! Great Job!'
          path='/minesweeper'
          id='minesweeper'
          bgcolor='#e7a7a7'
        />
        <GameListItem
          text='Designperspektiv'
          img1='https://i1.lensdump.com/i/kfz4Nm.jpeg'
          img2='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          img3='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          desc='Try to beat the time! Never seen before! Something Something! Wow so cool how is that possible! Nice one! Great Job!'
          path='/designperspektiv'
          id='designperspektiv'
          bgcolor='#d5efe3'
        />
        <GameListItem
          text='Find the Anomaly'
          img1='https://i2.lensdump.com/i/kfzpii.png'
          img2='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          img3='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          desc='Try to beat the time! Never seen before! Something Something! Wow so cool how is that possible! Nice one! Great Job!'
          path='/find-the-anomaly'
          id='find-the-anomaly'
          bgcolor='#efe1d5'
        />
        <GameListItem
          text='Casino Craze'
          img1='https://i2.lensdump.com/i/kfz33P.jpeg'
          img2='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          img3='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          desc='Try to beat the time! Never seen before! Something Something! Wow so cool how is that possible! Nice one! Great Job!'
          path='/casino-craze'
          id='casino-craze'
          bgcolor='#d5efdb'
        />
        <GameListItem
          text='Alien Operation'
          img1='https://i3.lensdump.com/i/kfzBXK.jpeg'
          img2='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          img3='https://i1.lensdump.com/i/kfnJ97.md.png' // wip.png
          desc='Try to beat the time! Never seen before! Something Something! Wow so cool how is that possible! Nice one! Great Job!'
          path='/alien-operation'
          id='alien-operation'
          bgcolor='#e7efd5'
        />
        
      </div>
    </div>
  );
}

export default GameList;
