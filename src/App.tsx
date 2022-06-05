import React from 'react';
import './App.css';


import DarkModeIcon from '@mui/icons-material/DarkMode';
import {Menu} from "./components/layout/menu/Menu";


function App() {
    return (
        <>
            <div className="container">
                <Menu/>
                <div className="header">
                    <div>
                        <h1 className="header-text">FLASHCARD</h1>
                    </div>
                    <div>
                        <button className="dark-mode-btn">
                            <DarkModeIcon/>
                            <p>Tryb ciemny</p>

                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default App;
