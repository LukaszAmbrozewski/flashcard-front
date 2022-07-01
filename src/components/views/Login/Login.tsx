import React, {useState} from 'react';
import {Btn} from '../../common/Btn';
import axios, {AxiosResponse} from "axios";


export const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: '',
    });


    const login = () => {
        axios.post("http://localhost:3001/api/login", {
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
        <>
            <form className="log-form" onSubmit={login}>
                <h1>Zaloguj się by móc dodawać własne fiszki lub rozpocznij naukę z ogólnodostępnych fiszek bez
                    konieczności
                    logowania.</h1>
                <p>
                    <label>
                        Name: <br/>
                        <input
                            type="text"
                            name="username"
                            required
                            maxLength={120}
                            value={form.username}
                            onChange={e => updateForm('username', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Hasło: <br/>
                        <input
                            type="password"
                            name="password"
                            required
                            maxLength={30}
                            value={form.password}
                            onChange={e => updateForm('password', e.target.value)}
                        />
                    </label>
                </p>
                <Btn text='Zaloguj'></Btn>
            </form>
            <hr/>
            <h2>Nie posiadasz jeszcze konta</h2>
            <Btn text='Utwórz nowe konto' to='/registration'/>
        </>
    )
}

