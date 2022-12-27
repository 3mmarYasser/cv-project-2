import React, {Suspense, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/Home/Home.page";
import NavbarComponent from "../components/Navbar/Navbar.component";

const App:React.FC = () => {

    return (
        <BrowserRouter>
            <Suspense fallback={<div>loading</div>}>
                <div className="overflow-hidden">
                    <NavbarComponent/>
                    <Routes>
                        <Route index element={<HomePage/>}/>
                        <Route path={"*"} element={<h1>404 page</h1>}/>
                    </Routes>
                </div>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
