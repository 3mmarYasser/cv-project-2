import React from 'react';
import {Link} from "react-router-dom";
import AnimationLine from "./AnimationLine.home";

const AnimateSlide:React.FC = () => {
    return (
        <section tabIndex={0} className="w-screen">
            <div className="container relative  mx-auto h-[55vh]   px-5 sm:px-2 grid">
                <div tabIndex={1} className="max-w-[45rem] mx-auto flex flex-col justify-center self-center z-10 md:mx-auto md:w-full  lg:mr-[40rem]">
                   <span className="uppercase text-xl md:text-2xl font-bold">
                       FREE ONLINE RESUME CREATOR
                   </span>
                    <p className="text-2xl sm:text-3xl md:text-5xl leading-[1em] max-w-2xl my-8 font-bold capitalize">
                        it is Very simple<br/>
                        for anyone to quickly<br/>
                        create a professional resume
                    </p>
                    <div className="flex space-x-6 flex-col-reverse justify-center items-center sm:flex-row">
                        <Link to="/resume/build" className="btn btn-primary btn-wide shadow-2xl customize-btn text-primary-content m-5 sm:m-auto">Build my resum now</Link>
                    </div>
                </div>
                <div tabIndex={0} className="absolute flex overflow-y-clip top-0 w-[40rem] right-0">
                    <div className="relative flex justify-center relative h-[55vh]  w-[40rem]  rotate-[-21deg]">
                        <AnimationLine/>
                        <AnimationLine/>
                        <AnimationLine/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnimateSlide;
