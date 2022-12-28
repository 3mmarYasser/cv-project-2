import React from 'react';

interface Props {
    title:string
    rank:number
    children:JSX.Element
}
const StepHome:React.FC<Props> = ({title ,rank,children}) => {
    return (
        <div className="z-10 flex flex-col items-center w-20  md:w-36  lg:w-52 bg-base-100">
            <div className="relative flex items-center justify-center mb-2 bg-base-100 w-20 h-20 md:w-36 md:h-36 lg:w-52 lg:h-52  border-2 rounded-full ">
                {children}

                <div className="absolute -top-3 md:-top-4 w-full flex items-center justify-center">
                    <span className="bg-base-100 px-2 md:px-3 text-sm md:text-xl lg:text-2xl text-primary font-bold">{rank}</span>
                </div>
            </div>
            <h6 className="capitalize text-xs md:text-lg lg:text-xl text-center font-bold">{title}</h6>
        </div>
);};

export default StepHome;
