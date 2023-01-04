import React from 'react';
import {HiArrowNarrowLeft, HiDownload, MdModeEditOutline} from "react-icons/all";
import {Link} from "react-router-dom";
import langSvg from "../../../../assets/lang.svg";

const Navbar = () => {
    return (
        <nav className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <Link to={"/dashboard/resumes"} className="btn gap-2 capitalize btn-outline btn-outline-neutral customize-btn-sm">
                    <HiArrowNarrowLeft className="text-xl"/>
                    <span className="hidden md:block">Resumes</span>
                </Link>
            </div>

            <div className="navbar-center">
                <div className="flex justify-center items-center text-lg">
                    <p contentEditable={true} onInput={e=>{console.log(e)}} suppressContentEditableWarning={true}>Untitled resume</p>
                    <span className="ml-1.5"><MdModeEditOutline/></span>
                </div>
            </div>

            <div className="navbar-end gap-2">
                <div className="hidden md:block btn-group btn-group-horizontal">
                    <button className="btn btn-outline btn-outline-neutral customize-btn-sm">
                        <svg className="w-5 h-5 fill-neutral-content" viewBox="0 0 48 48" >
                            <path d="M16.586,29.414C16.977,29.805,17.488,30,18,30s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828L12.828,20H29 c4.963,0,9,4.037,9,9s-4.037,9-9,9h-8c-1.104,0-2,0.896-2,2s0.896,2,2,2h8c7.168,0,13-5.832,13-13s-5.832-13-13-13H12.828 l6.586-6.586c0.781-0.781,0.781-2.047,0-2.828s-2.047-0.781-2.828,0l-10,10c-0.781,0.781-0.781,2.047,0,2.828L16.586,29.414z"/>
                        </svg>
                    </button>
                    <button className="btn btn-outline btn-outline-neutral customize-btn-sm">
                        <svg className="w-5 h-5 fill-neutral-content" viewBox="0 0 48 48">
                            <path d="M19,42h7.5c1.104,0,2-0.896,2-2s-0.896-2-2-2H19c-4.963,0-9-4.037-9-9s4.037-9,9-9h16.172l-6.586,6.586 c-0.781,0.781-0.781,2.047,0,2.828C28.977,29.805,29.488,30,30,30s1.023-0.195,1.414-0.586l10-10c0.781-0.781,0.781-2.047,0-2.828 l-10-10c-0.781-0.781-2.047-0.781-2.828,0s-0.781,2.047,0,2.828L35.172,16H19c-7.168,0-13,5.832-13,13S11.832,42,19,42z"/>
                        </svg>
                    </button>
                </div>
                <select className="hidden md:block text-neutral-content border-neutral-content custom-select pl-7 pr-4 py-1.5 btn-outline-neutral uppercase bg-neutral" defaultValue={"ar"} style={{backgroundImage:`url(${langSvg})`}} aria-label="Default select example">
                    <option value="ar">ar</option>
                    <option value="en">en</option>
                </select>
                <button className="btn gap-2 capitalize btn-primary  customize-btn-sm">
                    <HiDownload className="text-xl"/>
                    <span className="hidden md:block">Download</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
