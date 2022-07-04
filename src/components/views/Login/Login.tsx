import React, {useState} from 'react';
import {Btn} from '../../common/Btn';
import axios, {AxiosResponse} from "axios";

import '../common-style.css'
import {apiUrl} from "../../../config/api";


export const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: '',
    });


    const login = () => {
        axios.post(`${apiUrl}/login`, {
            ...form,
        }, {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            console.log(res.data)
            if (res.data === "success") {
                window.location.href = "/learning"
            } else {
                window.location.href = "/logerror"
            }
        }, () => {
            console.log("Failure")
        });
    }


    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    return (
        <div className='box'>
            <div>
                <form onSubmit={login}>
                    <h1 className='text'>Zaloguj się, aby móc dodawać własne fiszki lub rozpocznij naukę z
                        ogólnodostępnych fiszek bez
                        konieczności
                        logowania.</h1>
                    <div>
                        <p className='input-box'>
                            <label>
                                Login: <br/>
                                <input
                                    type="text"
                                    name="username"
                                    required
                                    maxLength={120}
                                    value={form.username}
                                    onChange={e => updateForm('username', e.target.value)}
                                    className='input'
                                    placeholder='Wpisz swój login'
                                />
                            </label>
                        </p>
                        <p className='input-box'>
                            <label>
                                Hasło: <br/>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    maxLength={30}
                                    value={form.password}
                                    onChange={e => updateForm('password', e.target.value)}
                                    className='input'
                                    placeholder='Wpisz swoje hasło'
                                />
                            </label>
                        </p>
                    </div>
                    <Btn text='Zaloguj'></Btn>
                </form>
            </div>
            <div className='box'>
                <hr/>
                <h2 className='text'>Nie posiadasz jeszcze konta?</h2>
                <Btn text='Utwórz nowe konto' to='/registration'/>
            </div>
        </div>
    )
}

