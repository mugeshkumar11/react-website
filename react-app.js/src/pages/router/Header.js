import React from "react";
import Login from "../login page/Login";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./Home";

function RouterComponent(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path= "/" element={<Login/>}></Route>
        <Route path= "Home" element={<Home/>}></Route>
       

    </Routes>
    </BrowserRouter>
        
    )
}

export default RouterComponent
