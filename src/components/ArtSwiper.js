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
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf7V7Q.md.png' alt='img'/></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i3.lensdump.com/i/kf79Fa.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf7qIe.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i3.lensdump.com/i/kf7Bmk.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i2.lensdump.com/i/kf7mox.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i3.lensdump.com/i/kf738H.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf74Q1.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i3.lensdump.com/i/kf7Kec.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf7pyK.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i3.lensdump.com/i/kf7OTZ.md.png' alt='img'></img></SwiperSlide>
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
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf7H7P.md.png' alt='img'/></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i3.lensdump.com/i/kf7lUm.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i2.lensdump.com/i/kf7SZi.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i3.lensdump.com/i/kf7emo.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i2.lensdump.com/i/kf7oy5.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kf7NOT.md.png' alt='img'></img></SwiperSlide>
                <SwiperSlide className='swiperSlide'><img src='https://i3.lensdump.com/i/kf7bA3.md.png' alt='img'></img></SwiperSlide>
            </Swiper>
        </div>
    </>
  );
}

export default DesignSwiper;
