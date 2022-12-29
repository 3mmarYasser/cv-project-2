import React from 'react';

interface Props {
    title:string
}
const TitleBadgeComponent:React.FC<Props> = ({title}) => {
    return (
        <h2 className="text-2xl mt-9 md:text-3xl lg:text-4xl pl-3 md:pl-11 lg:pl-24 capitalize font-bold">{title}</h2>
    );
};

export default TitleBadgeComponent;
