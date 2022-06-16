import React from 'react';
import './App.css';

import {Menu} from "./components/layout/menu/Menu";
import {Header} from "./components/layout/header/Header";
import {RegForm} from "./components/RegForm/RegForm";


function App() {
    return (
        <>
            <div className="container">
                <Menu/>
                {/*menu renderujemy zawsze a header wraz z komponentem */}
                <div>
                    <Header/>
                    <RegForm/>
                </div>
            </div>
        </>
    );
}

export default App;
