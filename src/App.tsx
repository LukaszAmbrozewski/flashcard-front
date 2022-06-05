import React from 'react';
import './App.css';

import {Menu} from "./components/layout/menu/Menu";
import {Header} from "./components/layout/header/Header";


function App() {
    return (
        <>
            <div className="container">
                <Menu/>
                <Header/>
            </div>
        </>
    );
}

export default App;
