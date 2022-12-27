import React from 'react';
import AnimateSlideHome from "./components/AnimateSlide/AnimateSlide.home";
import StepsHome from "./components/Steps.home/Steps.home";
import TitleBadge from "../../components/TitleBadge/TitleBadge";

const Home:React.FC = () => {
    return (
        <main>
            <AnimateSlideHome/>
            <TitleBadge title={"three simple steps to a job-winning"}/>
            <StepsHome/>
            <TitleBadge title={"Resume Templates"}/>
        </main>
    );
};

export default Home;
