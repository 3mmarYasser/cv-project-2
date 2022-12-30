import React from 'react';
import StepHome from "./ٍStep.home";
import {DownloadSvg, EditSvg, PickSvg} from "./StepsSvgs.home";

const Steps:React.FC = () => {
    return (
        <>
                <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative flex justify-between">
                            <div className="absolute pt-2 md:pt-5 top-0 w-full h-20 md:h-36  lg:h-52 z-10 inset-0 flex items-center justify-center">
                                        <div className="bg-base-content/20 w-full h-px" />
                                </div>
                            <StepHome title={"Pick a template"} rank={1} children={<PickSvg/>}/>
                            <StepHome title={"Enter all information about you"} rank={2} children={<EditSvg/>}/>
                            <StepHome title={"download your resume without Sign Up"} rank={3} children={<DownloadSvg/>}/>
                        </div>
                </section>
        </>
    );
};

export default Steps;

