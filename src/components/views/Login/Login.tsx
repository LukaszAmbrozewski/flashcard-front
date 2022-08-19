import React, {useState} from 'react';
import {Btn} from '../../common/Btn';
import jwtDecode from 'jwt-decode';
import { setAccessToken, setExpirationTime, setId, setRole } from '../../../redux-toolkit/features/user/user-slice';
import '../../styles/stylesForForms.css';
import { useDispatch, useSelector } from 'react-redux';

import '../common-style.css'
import {apiUrl} from "../../../config/api";

interface FormValues {
    loginEmail: string;
    loginPassword: string;
}

interface AccessToken {
    name: string;
    exp: number;
}

export const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => {
        setOpenModal(false);
    };
    const [feedbackError, setFeedbackError] = useState('');
    const [feedbackSuccess, setFeedbackSuccess] = useState('');

    const dispatch = useDispatch();

    const submitForm = async () => {
        try {
            const res = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            });
            const result = await res.json();
            if (result.accessToken) {
                const decoded = jwtDecode<AccessToken>(result.accessToken);
                dispatch(setId(result.id));
                dispatch(setAccessToken(result.accessToken));
                dispatch(setExpirationTime(decoded.exp));
                dispatch(setRole(result.role));
            }
            setOpenModal(true);
            setFeedbackSuccess(result);
            setFeedbackError(result.message);

        } catch (err) {
            console.log(err);
        }
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
                <form onSubmit={submitForm}>
                    <h1 className='text'>Zaloguj się, aby móc dodawać własne fiszki lub rozpocznij naukę z
                        ogólnodostępnych fiszek bez
                        konieczności
                        logowania.</h1>
                    <div>
                        <p className='input-box'>
                            <label>
                                Email: <br/>
                                <input
                                    type="text"
                                    name="email"
                                    required
                                    maxLength={120}
                                    value={form.email}
                                    onChange={e => updateForm('email', e.target.value)}
                                    className='input'
                                    placeholder='Wpisz swój email'
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