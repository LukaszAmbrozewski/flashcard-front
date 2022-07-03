import React, {useContext, useState} from 'react';
import './App.css';

import {Route, Routes} from 'react-router-dom';
import {Registration} from "./components/views/Registration/Registration";
import {Login} from "./components/views/Login/Login";
import {ListAll} from "./components/views/ListAll/ListAll";
import {Learning} from "./components/views/Learning/Learning";
import {Statistics} from "./components/views/Statistics/Statistics";
import {Menu} from "./components/layout/menu/Menu";
import {Header} from "./components/layout/header/Header";
import {AddNewCard} from "./components/views/AddNewCard/AddNewCard";
import {StyleContext} from "./contexts/style-context";
import {AddedNewCard} from "./components/views/AddedNewCard/AddedNewCard";
import {LogError} from "./components/views/Error/LogError";
import {myContext} from "./contexts/auth-context";


function App() {
    const [hideMenu, setHideMenu] = useState(false);
    const ctx = useContext(myContext);

    return (
        <StyleContext.Provider value={{hideMenu, setHideMenu}}>
            <>
                {
                    hideMenu ? (
                        <div className="container">
                            <Menu/>
                            <div className='mini'>
                                <Header className={'header-mini'}/>
                                <Routes>
                                    <Route path="/registration" element={<Registration/>}/>
                                    <Route path="/login" element={<Login/>}/>
                                    <Route path="/list" element={<ListAll/>}/>
                                    <Route path="/learning" element={<Learning/>}/>
                                    <Route path="/statistics" element={<Statistics/>}/>
                                    <Route path="/add" element={<AddNewCard/>}/>
                                    <Route path="/added" element={<AddedNewCard/>}/>
                                    <Route path="/logerror" element={<LogError/>}/>
                                    <Route path="/" element={
                                        ctx ? (
                                            <Learning/>
                                        ) : (
                                            <Login/>
                                        )
                                    }/>
                                </Routes>
                            </div>
                        </div>
                    ) : (
                        <div className="container">
                            <Menu/>
                            <div className='standard'>
                                <Header className={'header'}/>
                                <Routes>
                                    <Route path="/registration" element={<Registration/>}/>
                                    <Route path="/login" element={<Login/>}/>
                                    <Route path="/list" element={<ListAll/>}/>
                                    <Route path="/learning" element={<Learning/>}/>
                                    <Route path="/statistics" element={<Statistics/>}/>
                                    <Route path="/add" element={<AddNewCard/>}/>
                                    <Route path="/added" element={<AddedNewCard/>}/>
                                    <Route path="/logerror" element={<LogError/>}/>
                                    <Route path="/" element={
                                        ctx ? (
                                            <Learning/>
                                        ) : (
                                            <Login/>
                                        )
                                    }/>
                                </Routes>
                            </div>
                        </div>
                    )
                }
            </>
        </StyleContext.Provider>
    );
}

export default App;
