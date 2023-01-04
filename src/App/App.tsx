import React, {Suspense} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/Home/Home.page";
import NavbarComponent from "../components/Navbar/Navbar.component";
import NotFoundPage from "../pages/NotFound/NotFound.page";
import EditorPage from "../pages/Editor/Editor.page";
import FixedImageComponent from "../components/FixedImage/FixedImage.component";
import FooterComponent from "../components/Footer/Footer.component";
const App:React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>loading</div>}>
                <FixedImageComponent/>
                <div className="overflow-hidden">
                    <NavbarComponent hiddenRouts={[{path:"/dashboard/*",index:true}]}/>
                    <main>
                        <Routes>
                            <Route index element={<HomePage/>}/>
                            <Route path="dashboard">
                                <Route index element={<div>Dash</div>}/>
                                <Route path={"resume"}>
                                    <Route path={"build"}>
                                        <Route index element={<Navigate to={"new"}/>}/>
                                        <Route path={":id"} element={<EditorPage type={"resume"}/>}/>
                                    </Route>
                                </Route>
                            </Route>
                            <Route path={"*"} element={<NotFoundPage/>}/>
                        </Routes>
                    </main>
                    <FooterComponent hiddenRouts={[{path:"/dashboard/*",index:true}]}/>
                </div>
            </Suspense>
        </BrowserRouter>
    );
};
export default App;
