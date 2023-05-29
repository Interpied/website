// import React, { useRef, useState } from "react";
import React from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import Pagination from 'swiper/css/pagination';
// import Mousewheel from 'swiper/css/mousewheel';

// // Import Swiper styles

// import "swiper/css/pagination";
import { Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./Gallery.css";

// const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//         return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
// };

function DesignSwiper(props) {

    

  return (
    <>
        {/* <Swiper
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
        {/* <Slider main container> */}
        {/* <div className='swiperHeader'>Infographics</div>
        <div className="swiperContainer">
            <Swiper
                spaceBetween={30}
                hashNavigation={{
                watchState: true,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, HashNavigation]}
                className="mySwiper"
            >
                <SwiperSlide data-hash="slide1"><img src='images/img-1.jpg' alt='img'></img></SwiperSlide>
                <SwiperSlide data-hash="slide2"><img src='images/img-2.jpg' alt='img'></img></SwiperSlide>
                <SwiperSlide data-hash="slide3"><img src='images/img-3.jpg' alt='img'></img></SwiperSlide>
                <SwiperSlide data-hash="slide4"><img src='images/img-4.jpg' alt='img'></img></SwiperSlide>
                <SwiperSlide data-hash="slide5"><img src='images/img-5.jpg' alt='img'></img></SwiperSlide>
                <SwiperSlide data-hash="slide6"><img src='images/img-6.jpg' alt='img'></img></SwiperSlide>
                <SwiperSlide data-hash="slide7"><img src='images/img-7.jpg' alt='img'></img></SwiperSlide>
                <SwiperSlide data-hash="slide8"><img src='images/img-8.jpg' alt='img'></img></SwiperSlide>
                <SwiperSlide data-hash="slide9"><img src='images/img-9.jpg' alt='img'></img></SwiperSlide>
            </Swiper>
        </div> */}
        <div className='fullWrapper'>
            <div className='swiperHeader'>Infographics</div>
            <div className="swiperContainer">
                <Swiper
                    // slidesPerView={'2'}
                    slidesPerView={'auto'}
                    autoWidth={true}
                    centeredSlides={true}
                    spaceBetween={30}
                    mousewheel={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='swiperSlide'><img src='https://i3.lensdump.com/i/kfpszz.md.png' alt='img'></img></SwiperSlide>
                    <SwiperSlide className='swiperSlide'><img src='https://i2.lensdump.com/i/kfp3wT.md.png' alt='img'></img></SwiperSlide>
                    <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kfpKtb.png' alt='img'></img></SwiperSlide>
                </Swiper>
            </div>

            <div className='swiperHeader'>Posters</div>
            <div className="swiperContainer">
                <Swiper
                    // slidesPerView={'2'}
                    slidesPerView={'auto'}
                    autoWidth={true}
                    centeredSlides={true}
                    spaceBetween={30}
                    mousewheel={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='swiperSlide'><img src='https://i3.lensdump.com/i/kfppK7.md.png' alt='img'></img></SwiperSlide>
                    <SwiperSlide className='swiperSlide'><img src='https://i1.lensdump.com/i/kfp7fr.md.png' alt='img'></img></SwiperSlide>
                    <SwiperSlide className='swiperSlide'><img src='https://i2.lensdump.com/i/kfpHjF.md.png' alt='img'></img></SwiperSlide>
                </Swiper>
            </div>

            <div className='swiperHeader'>Misc</div>
            <div className="swiperContainer">
                <Swiper
                    // slidesPerView={'2'}
                    slidesPerView={'auto'}
                    autoWidth={true}
                    centeredSlides={true}
                    spaceBetween={30}
                    mousewheel={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide data-hash="slide1" className='swiperSlide'><img src='https://i1.lensdump.com/i/kfnJ97.md.png' alt='img'></img></SwiperSlide>
                </Swiper>
            </div>
        </div>
    </>
  );
}

export default DesignSwiper;
