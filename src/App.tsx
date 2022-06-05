import React from 'react';
import './App.css';


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';


function App() {
    return (
        <>
            <div className="container">
                <div className="menu">
                    <div>
                        <p>
                            <button className="log-btn">
                                <AccountCircleIcon className="person-icon"/>
                                Logowanie
                            </button>
                        </p>
                    </div>
                    <div className="menu-list">
                        <p>
                            <button className="hide-menu-btn">
                                <MenuIcon className="hide-menu-icon"/>
                            </button>
                        </p>
                        <p>
                            <button className="menu-btn">Rozpocznij naukę</button>
                        </p>
                        <p>
                            <button className="menu-btn">Wybierz zakres nauki</button>
                        </p>
                        <p>
                            <button className="menu-btn">Dodaj nową kartę</button>
                        </p>
                        <p>
                            <button className="menu-btn">Przeglądaj karty</button>
                        </p>
                        <p>
                            <button className="menu-btn">Statystyki</button>
                        </p>
                    </div>
                </div>
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
    )
        ;
}

export default App;
