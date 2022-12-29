import React, {Suspense, useEffect, useLayoutEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/Home/Home.page";
import NavbarComponent from "../components/Navbar/Navbar.component";
import ReactDOM from "react-dom";
import FixedImage from "../components/FixedImage/FixedImage.component";
import Footer from "../components/Footer/Footer.component";

const App:React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>loading</div>}>
                <FixedImage/>
                <div className="overflow-hidden">
                    <NavbarComponent/>
                    <Routes>
                        <Route index element={<HomePage/>}/>
                        <Route path={"*"} element={<h1>404 page</h1>}/>
                    </Routes>
                    <Footer/>
                </div>
            </Suspense>
        </BrowserRouter>
    );
};
export default App;
