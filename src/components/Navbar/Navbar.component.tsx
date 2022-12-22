import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {FcMenu, GrClose, IoMdClose, MdMenuOpen, MdOutlineKeyboardArrowDown} from "react-icons/all";

const Navbar:React.FC = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav className="navbar bg-base-100 p-4 md:p-8">

            <div className="navbar-start">
                <Link to={"/"} className="">
                    <svg className={"w-full h-full max-w-[13rem]"}  viewBox="0 0 331 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3325 28.135C23.3325 18.1 8.84254 18.865 8.84254 13.78C8.84254 12.205 10.1025 10.945 12.3525 10.945C15.6825 10.945 17.4825 12.925 18.2475 13.87L22.5225 8.785C21.4875 7.435 18.2025 5.005 12.9375 5.005C6.41254 5.005 1.82254 9.1 1.82254 14.32C1.82254 24.265 16.3575 23.59 16.3575 28.585C16.3575 30.25 15.0525 31.645 12.3075 31.645C8.48254 31.645 5.73754 29.215 4.38754 27.865L0.472536 33.535C1.55254 34.75 5.33254 37.45 11.4075 37.45C19.4175 37.45 23.3325 32.86 23.3325 28.135ZM43.2784 35.65L41.5234 30.565C40.5334 31.33 39.1384 31.69 38.0584 31.69C36.3934 31.69 35.4034 30.79 35.4034 29.035V16.75H41.7484V11.575H35.4034V5.185H31.0834L28.7434 11.17L25.4584 12.52V16.75H28.6984V28.855C28.6984 35.02 31.8484 37.225 36.2134 37.225C40.4434 37.225 42.4234 36.28 43.2784 35.65ZM59.0439 38.26L67.5939 11.575H60.5739L58.1889 20.215C57.2439 23.635 56.6589 26.785 56.2989 29.08H56.1189C55.8039 26.92 54.8139 23.095 53.8689 20.215L51.0339 11.575H43.4289L52.9689 36.91C52.7439 39.475 51.3039 40.87 48.8739 40.87C47.7489 40.87 46.8039 40.6 46.1289 40.24L45.0039 45.82C45.6339 46.135 47.3439 46.585 49.1439 46.585C55.0839 46.585 57.6039 42.715 59.0439 38.26ZM80.6404 36.775V31.42C80.4154 31.465 80.1904 31.51 79.6954 31.51C78.4354 31.51 77.5804 30.88 77.5804 28.99V2.89H70.7854V30.745C70.7854 34.975 73.2604 37.405 77.4004 37.405C78.8854 37.405 79.8304 37.09 80.6404 36.775ZM91.9108 37V11.575H85.1158V37H91.9108ZM92.4058 4.96C92.4058 2.62 90.6958 0.909998 88.4008 0.909998C86.2408 0.909998 84.5308 2.62 84.5308 4.96C84.5308 7.075 86.2408 8.785 88.4008 8.785C90.6958 8.785 92.4058 7.075 92.4058 4.96ZM105.002 37V19.72C105.767 17.875 107.387 16.705 109.367 16.705C111.662 16.705 112.877 18.235 112.877 20.845V37H119.672V19.405C119.672 13.69 116.837 10.945 111.887 10.945C109.232 10.945 106.577 12.115 105.047 13.96H104.867L103.517 11.575H98.2073V37H105.002ZM146.192 35.875V12.79C143.942 11.8 141.197 11.26 136.742 11.26C128.417 11.26 124.367 17.065 124.367 24.22C124.367 33.355 129.092 35.965 134.357 35.965C136.652 35.965 138.407 35.38 139.352 34.525H139.532V35.83C139.532 39.43 138.047 40.735 134.537 40.735C131.882 40.735 129.407 39.52 128.147 37.765L124.322 42.76C125.762 44.47 128.282 46.225 134.537 46.225C141.332 46.225 146.192 42.805 146.192 35.875ZM131.117 23.95C131.117 19.09 133.142 16.615 136.697 16.615C137.777 16.615 138.542 16.75 139.487 17.065V29.17C138.632 30.025 137.417 30.475 135.932 30.475C132.917 30.475 131.117 29.17 131.117 23.95ZM172.296 37V25.255H172.746C174.186 25.255 175.041 25.615 175.626 26.74L180.846 37H189.036L184.221 28.315C182.736 25.66 181.701 24.49 180.036 23.68V23.5C183.726 22.78 186.696 20.215 186.696 14.725C186.696 8.11 182.736 5.455 175.761 5.455H165.501V37H172.296ZM172.296 11.125H174.996C178.011 11.125 179.721 12.43 179.721 15.31C179.721 18.235 178.551 19.81 174.906 19.81H172.296V11.125ZM212.584 34.66L209.614 29.845C208.669 30.835 206.779 32.14 204.034 32.14C199.714 32.14 197.914 29.935 197.824 25.93H212.989C213.259 23.95 213.304 22.69 213.304 21.385C213.304 15.175 209.569 11.08 203.089 11.08C195.754 11.08 191.164 15.985 191.164 24.22C191.164 32.995 195.259 37.495 203.269 37.495C208.129 37.495 210.604 36.28 212.584 34.66ZM202.909 16.21C205.654 16.21 206.914 17.785 206.914 20.755V21.43H197.959C198.049 18.46 199.849 16.21 202.909 16.21ZM235.952 29.53C235.952 21.025 223.982 22.375 223.982 18.55C223.982 17.38 224.972 16.57 226.502 16.57C228.842 16.57 230.597 17.92 231.497 18.955L235.862 14.68C234.197 12.745 231.272 11.125 226.682 11.125C220.787 11.125 217.232 14.86 217.232 19C217.232 27.46 229.202 26.245 229.202 29.935C229.202 31.105 228.392 32.095 226.277 32.095C223.217 32.095 220.742 30.25 219.617 28.945L215.567 33.625C216.962 35.11 220.337 37.45 225.917 37.45C233.297 37.45 235.952 32.905 235.952 29.53ZM255.216 34.66H255.396L256.341 37H262.101V11.575H255.306V29.17C254.946 29.98 253.866 32.23 250.896 32.23C248.601 32.23 247.251 30.79 247.251 28V11.575H240.456V28.63C240.456 34.66 243.066 37.495 248.511 37.495C251.706 37.495 253.731 36.46 255.216 34.66ZM275.027 37V19.72C275.657 18.055 277.277 16.705 278.942 16.705C281.282 16.705 282.542 18.19 282.542 21.16V37H289.337V19.63C290.102 17.83 291.857 16.705 293.567 16.705C295.322 16.705 296.852 17.695 296.852 20.665V37H303.647V19.45C303.647 13.645 300.812 10.99 295.817 10.99C292.217 10.99 289.652 12.655 288.347 14.41H288.167C287.267 12.61 285.692 10.99 281.822 10.99C279.302 10.99 276.692 11.935 275.117 13.96H274.937L273.812 11.575H268.232V37H275.027ZM329.742 34.66L326.772 29.845C325.827 30.835 323.937 32.14 321.192 32.14C316.872 32.14 315.072 29.935 314.982 25.93H330.147C330.417 23.95 330.462 22.69 330.462 21.385C330.462 15.175 326.727 11.08 320.247 11.08C312.912 11.08 308.322 15.985 308.322 24.22C308.322 32.995 312.417 37.495 320.427 37.495C325.287 37.495 327.762 36.28 329.742 34.66ZM320.067 16.21C322.812 16.21 324.072 17.785 324.072 20.755V21.43H315.117C315.207 18.46 317.007 16.21 320.067 16.21Z" fill="url(#paint0_linear_1124_2968)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1124_2968" x1="165.811" y1="-12" x2="165.122" y2="188.355" gradientUnits="userSpaceOnUse">
                                <stop stopColor="hsl(var(--p) / var(--tw-bg-opacity))"/>
                                <stop offset="1"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal nav-menu px-1">
                    <li><NavLink className="font-bold " to={"/"}>Home</NavLink></li>
                    <li tabIndex={0}>
                        <span className="font-bold">
                            Resume
                            <MdOutlineKeyboardArrowDown/>
                        </span>
                        <ul className="p-2 bg-base-200">
                            <li><NavLink to={"/Resume"}>Submenu 1</NavLink></li>
                            <li><NavLink to={"/Resume2"}>Submenu 2</NavLink></li>
                        </ul>
                    </li>
                    <li tabIndex={1}>
                        <span className="font-bold">
                            CV
                            <MdOutlineKeyboardArrowDown/>
                        </span>
                        <ul className="p-2 bg-base-200">
                            <li><NavLink to={"/CV"}>Submenu 1</NavLink></li>
                            <li><NavLink to={"/CV2"}>Submenu 2</NavLink></li>
                        </ul>
                    </li>
                    <li tabIndex={1}>
                        <span className="font-bold" >
                            Cover letter
                            <MdOutlineKeyboardArrowDown/>
                        </span>
                        <ul className="p-2 bg-base-200">
                            <li><NavLink to={"/Cover"}>Submenu 1</NavLink></li>
                            <li><NavLink to={"/Cover2"}>Submenu 2</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink className="font-bold" to={"/FAQ"}>FAQ</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end ">

                <div className={"hidden lg:flex"}>
                    <Link to={"/login"} className="btn btn-outline customize-btn font-bold">login</Link>
                    <Link to={"/register"} className="btn btn-primary customize-btn ">Get started</Link>
                </div>

                <label className="btn btn-ghost lg:hidden z-50 swap swap-rotate" >
                    <input type="checkbox" onClick={()=>setMenu(!menu)}/>
                    <div className="swap-on"><IoMdClose className="h-6 w-6"/></div>
                    <div className="swap-off"><FcMenu className="h-6 w-6"/></div>
                </label>
            </div>

                <div className={`bg-base-200 fixed left-0 right-0 z-40 h-full top-0 w-screen transition-all duration-[400ms]`} style={{left: `${(menu) ? "0" : "-150%"}`}}>
                    <ul className="menu nav-menu px-1 w-full justify-center items-center">
                        <li><NavLink className="font-bold " to={"/"}>Home</NavLink></li>
                        <li><NavLink className="font-bold " to={"/Resume"}>Resume</NavLink></li>
                        <li><NavLink className="font-bold " to={"/CV"}>CV</NavLink></li>
                        <li><NavLink className="font-bold " to={"/Cover"}>Cover Letter</NavLink></li>
                        <li><NavLink className="font-bold" to={"/FAQ"}>FAQ</NavLink></li>
                        <li><Link to={"/login"} className="btn btn-outline btn-wide  font-bold mt-2">login</Link></li>
                        <li><Link to={"/register"} className="btn btn-primary btn-wide mt-5">Get started</Link></li>
                    </ul>
                </div>



        </nav>

    );
};

export default Navbar;
