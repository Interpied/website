import React from "react";

import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./Gallery.css";

function DesignSwiper(props) {

    

  return (
    <>
        <div className='swiperHeader'>Sketches 1 : SV</div>
        <div className="swiperContainer">
            <Swiper
                // slidesPerView={'2'}
                slidesPerView={'auto'}
                autoWidth={true}
                centeredSlides={true}
                spaceBetween={30}
                mousewheel={true}
                loop={true}
                lazy={true}
                watchSlidesVisibility={true}
                pagination={{
                    clickable: true,
                }}
                
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='swiperSlide'><img src='images/art/sketch_001.png' alt='img'/></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='images/art/sketch_002.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='images/art/sketch_003.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='images/art/sketch_004.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='images/art/sketch_005.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='images/art/sketch_006.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='images/art/sketch_007.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='images/art/sketch_008.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='images/art/sketch_009.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='images/art/sketch_010.png' alt='img'></img></SwiperSlide>
            </Swiper>
        </div>

        <div className='swiperHeader'>Sketches 2 : IR</div>
        <div className="swiperContainer">
            <Swiper
                // slidesPerView={'2'}
                slidesPerView={'auto'}
                autoWidth={true}
                centeredSlides={true}
                spaceBetween={30}
                mousewheel={true}
                loop={true}
                lazy={true}
                watchSlidesVisibility={true}
                pagination={{
                    clickable: true,
                }}
                
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf7H7P.png' alt='img'/></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf7lUm.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf7SZi.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf7emo.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf7oy5.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf7NOT.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf7bA3.png' alt='img'></img></SwiperSlide>
            </Swiper>
        </div>
    </>
  );
}

export default DesignSwiper;
