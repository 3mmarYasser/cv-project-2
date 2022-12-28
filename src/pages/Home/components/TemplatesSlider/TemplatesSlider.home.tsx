import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, A11y, Autoplay, Navigation} from "swiper";
import "swiper/scss";
import "swiper/scss/free-mode";
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
            slidesPerView={1}
            spaceBetween={0}
            direction={'horizontal'}
            grabCursor={true}
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
                waitForTransition: true,
            }}
            speed={2000}
            breakpoints={{
                "320": {
                    slidesPerView: 2,
                },
                "450": {
                    slidesPerView: 3,
                },
                "768": {
                    slidesPerView: 4,
                },
                "1024": {
                    slidesPerView: 5,
                },
                "1280": {
                    slidesPerView: 6,
                },
                "1650": {
                    slidesPerView: 8,
                }
                ,
                "1800": {
                    slidesPerView: 9.5,
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
