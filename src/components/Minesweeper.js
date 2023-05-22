import React from "react";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./Gallery.css";
import "./codepen.css";

function Minesweeper(props) {

    

  return (
    <>
        <iframe className='codepenIframe' 
            height="300"
            title="Minesweeper" 
            src="https://codepen.io/Elias-Ramsberg/embed/QWZzMLV?default-tab=result" 
            loading="lazy" 
            allowtransparency="true" 
            data-show-tab-bar='no'>
        </iframe>
    </>
  );
}

export default Minesweeper;
