import React from 'react';
import AnimateSlideHome from "./components/AnimateSlide/AnimateSlide.home";
import StepsHome from "./components/Steps.home/Steps.home";
import TitleBadgeComponent from "../../components/TitleBadge/TitleBadge.component";
import TemplatesSliderHome from "./components/TemplatesSlider/TemplatesSlider.home";

const Home:React.FC = () => {
    return (
        <main>
            <AnimateSlideHome/>
            <TitleBadgeComponent title={"three simple steps to a job-winning"}/>
            <StepsHome/>
            <TitleBadgeComponent title={"Resume Templates"}/>
            <TemplatesSliderHome/>
            <TitleBadgeComponent title={"CV Templates"}/>
            <TemplatesSliderHome/>
            <TitleBadgeComponent title={"Cover Letter Templates"}/>
            <TemplatesSliderHome/>

        </main>
    );
};

export default Home;
