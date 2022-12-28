import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, A11y, Autoplay} from "swiper";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";
import "swiper/scss/autoplay"
const TemplatesSlider = () => {
    return (
        <Swiper
            slidesPerView={7}
            spaceBetween={30}
            direction={'horizontal'}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, A11y, Autoplay]}
            className="mySwiper  by-10"
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: -1,
                disableOnInteraction: false,
                waitForTransition: false,
            }}
            speed={1000}

            breakpoints={{
                "320": {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                "768": {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                "1024": {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                "1280": {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
                "1600": {
                    slidesPerView: 7,
                    spaceBetween: 30,
                }
            }}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};

export default TemplatesSlider;
