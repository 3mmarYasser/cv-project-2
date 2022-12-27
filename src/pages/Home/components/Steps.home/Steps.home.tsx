import React from 'react';
import {GrDocumentUser} from "react-icons/all";

const Steps:React.FC = () => {
    return (
        <>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative flex justify-between">
                                <div className="absolute z-10 inset-0 flex items-center justify-center">
                                        <div className="bg-gray-300 w-full h-px" />
                                </div>
                                <div className="z-10 flex flex-col items-center">
                                        <div className="flex items-center justify-between mb-2 bg-base-100 w-64 h-64 border-2 rounded-full ">
                                        </div>
                                        <h6>Pick a template</h6>
                                </div>
                                <div className="z-10 flex flex-col items-center">
                                        <div className="flex items-center justify-between mb-2 bg-base-100 w-64 h-64 border-2 rounded-full ">
                                        </div>
                                        <h6>Enter all information about you </h6>
                                </div>
                                <div className="z-10 flex flex-col items-center">
                                        <div className="flex items-center justify-between mb-2 bg-base-100 w-64 h-64 border-2 rounded-full ">
                                        </div>
                                        <h6>download your resume without Sign Up</h6>
                                </div>


                        </div>
                </div>
        </>
    );
};

export default Steps;
