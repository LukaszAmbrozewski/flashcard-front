import React, {SyntheticEvent, useState} from 'react';
import {Btn} from '../../../common/Btn';


export const RegForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: 0,
    });

    const addUser = async (e: SyntheticEvent) => {
        e.preventDefault();

        //wysyłamy na be
        const res = await fetch(`http://localhost:3001/api/user/registration`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...form,
            }),
        });

        const data = await res.json();
        console.log(data)

    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    return (
        <form action="src/components/views/Registration/RegForm/RegForm" className="reg-form" onSubmit={addUser}>
            <h1>Rejestracja użytkownika</h1>
            <p>
                <label>
                    Imię: <br/>
                    <input
                        type="text"
                        name="name"
                        required
                        maxLength={50}
                        value={form.name}
                        onChange={e => updateForm('name', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Email: <br/>
                    <input
                        type="email"
                        name="email"
                        required
                        maxLength={120}
                        value={form.email}
                        onChange={e => updateForm('email', e.target.value)}
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

