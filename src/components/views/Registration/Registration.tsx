import React, {useState} from 'react';
import {Btn} from '../../common/Btn';
import axios, {AxiosResponse} from "axios";


export const Registration = () => {
    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    // const addUser = async (e: SyntheticEvent) => {
    //     e.preventDefault();
    //
    //     // wysyłamy na be
    //     const res = await fetch(`http://localhost:3001/register`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             ...form,
    //         }),
    //     });
    //
    //     const data = await res.json();
    //     console.log(data)
    //
    // }

    const register = () => {
        axios.post("http://localhost:3001/api/register", {
            ...form
        }, {
            withCredentials: true //z poświadczeniami
        }).then((res: AxiosResponse) => {
            //Jeżeli odpowiedź z backendu to success czyli udało się zalogować to przekierowujemy na stronę główną
            if (res.data === "Success") {
                window.location.href = "/login"
            }
        });

        console.log(form)
    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    return (
        <form className="reg-form" onSubmit={register}>
            <h1>Rejestracja użytkownika</h1>
            <p>
                <label>
                    Imię: <br/>
                    <input
                        type="text"
                        name="username"
                        required
                        maxLength={50}
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
            <Btn text='Zarejestruj'></Btn>
        </form>
    )
}

