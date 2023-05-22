import React from 'react';
import ProgrammingListItem from './ProgrammingListItem';
import './ProgrammingList.css';

function ProgrammingList() {
  return (
    <>
      <div className='projectWrapper'>
        <ProgrammingListItem
          text='Minesweeper'
          img1='https://i2.lensdump.com/i/kfzHa2.md.png'
          path='/programming/minesweeper'
        />
        <ProgrammingListItem
          text='Codepen'
          img1='https://i2.lensdump.com/i/kFxk2k.md.png'
          path='/programming/codepen'
        />
        <ProgrammingListItem
        />
      </div>
      <div className='projectWrapper'>
        <ProgrammingListItem
        />
        <ProgrammingListItem
        />
        <ProgrammingListItem
        />
      </div>
      <div className='projectWrapper'>
        <ProgrammingListItem
        />
        <ProgrammingListItem
        />
        <ProgrammingListItem
        />
      </div>
    </>
    
  );
}

export default ProgrammingList;
