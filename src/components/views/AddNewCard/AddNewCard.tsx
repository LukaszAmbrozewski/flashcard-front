import React, {useContext, useState} from 'react';
import {Btn} from "../../common/Btn";
import {myContext} from "../../../contexts/auth-context";
import axios, {AxiosResponse} from "axios";

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
                    <>
                        <form className="add-form" onSubmit={add}>
                            <h1>Dodawanie nowej prywatnej fiszki</h1>
                            <p>
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
                                    />
                                </label>
                            </p>
                            <p>
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
                                    />
                                </label>
                            </p>
                            <p>
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
                                    />
                                </label>
                            </p>
                            <button type={"submit"}></button>
                            <Btn text='Dodaj nową kartę'></Btn>
                        </form>
                    </>
                ) : (
                    <>
                        <h1>Zaloguj się by móc dodawać prywatne karty.</h1>
                        <hr/>
                        <p>
                            <Btn text='Zaloguj się' to='/login'/>
                        </p>
                        <p>
                            <Btn text='Zarejestruj się' to='/registration'/>
                        </p>
                    </>
                )
            }
        </>
    )
}