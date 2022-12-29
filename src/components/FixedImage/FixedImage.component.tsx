import React from 'react';
import ReactDOM from "react-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {close} from "../../store/fixedImage.reducer";

const FixedImage:React.FC = () => {
    const {show, image} = useSelector((state:RootState)=>state.fixedImage);
    const dispatch:AppDispatch = useDispatch()

    return ReactDOM.createPortal((
        <>
            <input type="checkbox" checked={show} readOnly={true} className="modal-toggle"/>
            <div className="modal modal-bottom sm:modal-middle" onClick={()=>dispatch(close())}>
                <div className="modal-box">
                        <img src={image} alt={"FixedImage"}/>
                </div>
            </div>
        </>
    ), document.getElementById("pops") as HTMLElement)
};

export default FixedImage