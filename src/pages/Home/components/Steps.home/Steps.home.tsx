import React from 'react';
import {GrDocumentUser} from "react-icons/all";

const Steps:React.FC = () => {
    return (
        <>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
                                <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                                        <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
                                </div>
                                <div className="p-5 duration-300 transform bg-white border rounded-full shadow-sm ">
                                        <div className="flex items-center justify-between mb-2">
                                                <p className="text-lg font-bold leading-5">Pick a template</p>
                                                <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                                                        1
                                                </p>
                                        </div>
                                </div>
                                <div className="p-5 duration-300 transform bg-white border rounded-full shadow-sm ">
                                        <div className="flex items-center justify-between mb-2">
                                                <p className="text-lg font-bold leading-5">Enter all information about you </p>
                                                <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                                                        2
                                                </p>
                                        </div>

                                </div>
                                <div className="p-5 duration-300 transform bg-white border rounded-full shadow-sm">
                                        <div className="flex items-center justify-between mb-2">
                                                <p className="text-lg font-bold leading-5">download your resume without Sign Up</p>
                                                <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                                                        3
                                                </p>
                                        </div>
                                </div>
                        </div>
                </div>
        </>
    );
};

export default Steps;
