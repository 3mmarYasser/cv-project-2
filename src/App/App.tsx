import React, {Fragment, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/Home/Home.page";
import NavbarComponent from "../components/Navbar/Navbar.component";
import FixedImage from "../components/FixedImage/FixedImage.component";
import Footer from "../components/Footer/Footer.component";
import NotFoundPage from "../pages/NotFound/NotFound.page";

const App:React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>loading</div>}>
                <FixedImage/>
                <div className="overflow-hidden">
                    <NavbarComponent/>
                    <main className="mt-36">
                        <Routes>
                            <Route index element={<HomePage/>}/>
                            <Route path={"*"} element={<NotFoundPage/>}/>
                        </Routes>
                    </main>
                    <Footer/>
                </div>
            </Suspense>
        </BrowserRouter>
    );
};
export default App;
