import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, A11y, Autoplay} from "swiper";

import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/pagination";
import "swiper/scss/autoplay"
import TemplateCard from "./TemplateCard.home";
import {Template} from "../../home.interface";

interface Props {
    data:Template[],
    preLink:string,
    delay:number
}
const TemplatesSlider:React.FC<Props> = ({data,preLink,delay}) => {
    return (
        <Swiper
            slidesPerView={7}
            spaceBetween={30}
            direction={'horizontal'}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, A11y, Autoplay]}
            className="mySwiper  by-10 mt-8 mb-40"
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay,
                disableOnInteraction: false,
                waitForTransition: false,
            }}
            speed={2000}

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
            {data.map((template , index)=>(
                <SwiperSlide key={index+template.id}><TemplateCard image={template.image} title={template.title} url={`/${preLink}/${template.title}`}/></SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TemplatesSlider;
