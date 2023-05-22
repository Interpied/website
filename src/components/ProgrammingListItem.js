import React from 'react';
// import { Link } from 'react-router-dom';

function ProgrammingListItem (props) {
    return (
        <>
            <div className='wrapper'>

                <div className='imgWrapper'>
                    <img
                    alt='GamePreview'
                    src={ props.img1 ? props.img1 : 'https://i1.lensdump.com/i/kfnJ97.md.png' }
                    />
                </div>

                <div className='titleWrapper'>
                    <h5 className='gameList__item__title'>{props.text ? props.text : "???"}</h5>
                </div>

                <div className='descWrapper'>
                    <p>{ props.desc ? props.desc
                    : '[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. [PLACEHOLDER]'
                    }</p>
                </div>
                <div className='buttonWrapper'>
                    <a href={props.path ? props.path : "/404"} className='gotoButton'>
                        <button >GO TO</button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProgrammingListItem;