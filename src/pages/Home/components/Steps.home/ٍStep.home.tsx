import React from 'react';

interface Props {
    title:string
    rank:number
    children:JSX.Element
}
const StepHome:React.FC<Props> = ({title ,rank,children}) => {
    return (
        <div className="z-10 flex flex-col items-center w-24  md:w-36  lg:w-64 bg-base-100">
            <div className="relative flex items-center justify-center mb-2 bg-base-100 w-24 h-24 md:w-36 md:h-36 lg:w-64 lg:h-64  border-2 rounded-full ">
                {children}

                <div className="absolute -top-4 w-full flex items-center justify-center">
                    <span className="bg-base-100 px-3 text-lg md:text-xl lg:text-2xl text-primary font-bold">{rank}</span>
                </div>
            </div>
            <h6 className="capitalize text-xs md:text-lg lg:text-xl text-center font-bold">{title}</h6>
        </div>
);};

export default StepHome;
