import React, {useContext, useState} from 'react';
import {Btn} from "../../common/Btn";
import {myContext} from "../../../contexts/auth-context";
import axios, {AxiosResponse} from "axios";

import '../common-style.css'

export const AddNewCard = () => {
    const ctx = useContext(myContext);
    const [form, setForm] = useState({
        front: '',
        back: '',
        category: '',
    });

    const add = () => {
        const userId = ctx.id;

        axios.post("http://localhost:3001/api/flashcard/add", {
            ...form,
            userId: userId,
        }, {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            console.log(res.data)
            if (res.data === "success") {
                window.location.href = "/added"
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
            {
                ctx ? (
                    <div className='box'>
                        <form className="add-form" onSubmit={add}>
                            <h1 className='text'>Dodawanie własnej fiszki</h1>
                            <p className='input-box'>
                                <label>
                                    Przód karty: <br/>
                                    <input
                                        type="text"
                                        name="front"
                                        required
                                        minLength={2}
                                        maxLength={50}
                                        value={form.front}
                                        onChange={e => updateForm('front', e.target.value)}
                                        className='input'
                                        placeholder='Wpisz przód karty'
                                    />
                                </label>
                            </p>
                            <p className='input-box'>
                                <label>
                                    Tył karty: <br/>
                                    <input
                                        type="text"
                                        name="back"
                                        required
                                        minLength={2}
                                        maxLength={50}
                                        value={form.back}
                                        onChange={e => updateForm('back', e.target.value)}
                                        className='input'
                                        placeholder='Wpisz tył karty'
                                    />
                                </label>
                            </p>
                            <p className='input-box'>
                                <label>
                                    Kategoria: <br/>
                                    <input
                                        type="text"
                                        name="category"
                                        required
                                        minLength={3}
                                        maxLength={50}
                                        value={form.category}
                                        onChange={e => updateForm('category', e.target.value)}
                                        className='input'
                                        placeholder='Wpisz kategorię'
                                    />
                                </label>
                            </p>
                            <Btn text='Dodaj nową kartę'></Btn>
                        </form>
                    </div>
                ) : (
                    <div className='box'>
                        <h1 className='text'>Zaloguj się, aby móc dodawać własne fiszki.</h1>
                        <p>
                            <Btn text='Zaloguj się' to='/login'/>
                        </p>
                        <p>
                            <Btn text='Zarejestruj się' to='/registration'/>
                        </p>
                    </div>
                )
            }
        </>
    )
}