import React from 'react';
import AnimateSlideHome from "./components/AnimateSlide/AnimateSlide.home";
import StepsHome from "./components/Steps.home/Steps.home";
import TitleBadgeComponent from "../../components/TitleBadge/TitleBadge.component";
import TemplatesSliderHome from "./components/TemplatesSlider/TemplatesSlider.home";
import {TemplatesCoverLetter, TemplatesCV, TemplatesResume} from "./home.fakedata";
const Home:React.FC = () => {
    return (
        <main>
            <AnimateSlideHome/>
            <TitleBadgeComponent title={"three simple steps to a job-winning"}/>
            <StepsHome/>
            <TitleBadgeComponent title={"Resume Templates"}/>
            <TemplatesSliderHome data={TemplatesResume} preLink={"resume"} delay={2500}/>
            <TitleBadgeComponent title={"CV Templates"}/>
            <TemplatesSliderHome data={TemplatesCV} preLink={"cv"} delay={4000}/>
            <TitleBadgeComponent title={"Cover Letter Templates"}/>
            <TemplatesSliderHome data={TemplatesCoverLetter} preLink={"cover-letter"} delay={3700}/>
        </main>
    );
};

export default Home;
