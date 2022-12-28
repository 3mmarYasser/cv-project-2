import React from 'react';
import {Link} from "react-router-dom";

interface Props {
    image:string;
    title:string;
    url:string
}
const TemplateCard:React.FC<Props> = ({title,url,image}) => {
    return (
        <div className="flex flex-col items-center w-44 p-0 m-0">
            <div className="relative shadow-lg h-60 w-44 overflow-hidden ">
                <img className="w-full h-full" src={image} alt={title}/>
                <div className="absolute  bottom-2 left-0 w-full px-3">
                    <Link className="btn  btn-wide capitalize max-w-full template-btn" to={url}>Start with this Template</Link>
                </div>
            </div>
            <h6 className="text-lg capitalize font-bold mt-3">{title}</h6>
        </div>
    );
};

export default TemplateCard;
