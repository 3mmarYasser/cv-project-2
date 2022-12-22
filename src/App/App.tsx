import React, {Suspense} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/Home/Home.page";
import NavbarComponent from "../components/Navbar/Navbar.component";

const App:React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>loading</div>}>
                <NavbarComponent/>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path={"*"} element={<h1>404 page</h1>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
