import React from 'react';
import AnimateSlideHome from "./components/AnimateSlide/AnimateSlide.home";
import StepsHome from "./components/Steps.home/Steps.home";

const Home:React.FC = () => {
    return (
        <main>
            <AnimateSlideHome/>
            <StepsHome/>
        </main>
    );
};

export default Home;
