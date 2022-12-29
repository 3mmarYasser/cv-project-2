import React from 'react';
import {Link} from "react-router-dom";
import {open} from "../../../../store/fixedImage.reducer";
import {AppDispatch} from "../../../../store";
import {useDispatch} from "react-redux";
import {AiOutlineZoomIn} from "react-icons/all";


interface Props {
    image:string;
    title:string;
    url:string
}
const TemplateCard:React.FC<Props> = ({title,url,image}) => {
    const dispatch:AppDispatch = useDispatch()

    return (
        <div className="flex flex-col items-center w-44 p-0 m-0">
            <div className="relative shadow-lg h-60 w-44 overflow-hidden ">
                <img className="w-full h-full" src={image} alt={title}/>
                <div className="absolute  bottom-2 left-0 w-full px-3">
                    <Link className="btn  btn-wide capitalize max-w-full template-btn" to={url}>Start with this Template</Link>
                </div>
                <button className="absolute top-1/2 left-1/2 bg-primary/20 w-8 h-8 p-1 rounded" style={{transform:"translate(-50% , -50%)"}} onClick={()=>dispatch(open(image))}> <AiOutlineZoomIn className="text-primary w-full h-full"/></button>
            </div>
            <h6 className="text-lg capitalize font-bold mt-3">{title}</h6>
        </div>
    );
};

export default TemplateCard;
