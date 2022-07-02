import React, {useState} from 'react';
import {Btn} from '../../common/Btn';
import axios, {AxiosResponse} from "axios";

import './Registration.css'

export const Registration = () => {
    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const register = () => {
        axios.post("http://localhost:3001/api/register", {
            ...form
        }, {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            if (res.data === "Success") {
                window.location.href = "/login"
            }
        });

    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    return (
        <div className="reg-box">
            <form className="reg-form" onSubmit={register}>
                <h1 className='registration-text'>Rejestracja użytkownika</h1>
                <p className='input-box'>
                    <label>
                        Login: <br/>
                        <input
                            type="text"
                            name="username"
                            required
                            minLength={5}
                            maxLength={50}
                            value={form.username}
                            onChange={e => updateForm('username', e.target.value)}
                            className='reg-input'
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
                            minLength={5}
                            maxLength={30}
                            value={form.password}
                            onChange={e => updateForm('password', e.target.value)}
                            className='reg-input'
                            placeholder='Wpisz swoje hasło'
                        />
                    </label>
                </p>
                <Btn text='Zarejestruj'></Btn>
            </form>
        </div>
    )
}

