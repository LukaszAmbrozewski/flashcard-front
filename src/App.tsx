import React from 'react';
import './App.css';

import {Route, Routes} from 'react-router-dom';
import {Registration} from "./components/views/Registration/Registration";
import {Login} from "./components/views/Login/Login";
import {ListAll} from "./components/views/ListAll/ListAll";
import {Learning} from "./components/views/Learning/Learning";
import {Statistics} from "./components/views/Statistics/Statistics";
import {Menu} from "./components/layout/menu/Menu";
import {Header} from "./components/layout/header/Header";


function App() {
    return (
        <>
            <div className="container">
                <Menu/>
                <div>
                    <Header/>
                    <Routes>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/list" element={<ListAll/>}/>
                        <Route path="/learning" element={<Learning/>}/>
                        <Route path="/statistics" element={<Statistics/>}/>
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
