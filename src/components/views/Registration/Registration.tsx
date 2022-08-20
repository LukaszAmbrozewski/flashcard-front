import React, {useState} from "react";
import {Btn} from "../../common/Btn";
import axios, {AxiosResponse} from "axios";
import {apiUrl} from "../../../config/api";

export const Registration = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const register = () => {
    axios
        .post(
            `${apiUrl}/register`,
            {
              ...form,
            },
            {
              withCredentials: true,
            }
        )
        .then((res: AxiosResponse) => {
          if (res.data === "success") {
            window.location.href = "/login";
          } else if (res.data === "User Already Exists") {
            window.location.href = "/reg-error";
          }
        });
    console.log();
  };

  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  return (
      <div className="box">
        <form className="reg-form" onSubmit={register}>
          <h1 className="text">Rejestracja użytkownika</h1>
          <p className="input-box">
            <label>
              Login: <br/>
              <input
                  type="text"
                  name="username"
                  required
                  minLength={5}
                  maxLength={50}
                  value={form.username}
                  onChange={(e) => updateForm("username", e.target.value)}
                  className="input"
                  placeholder="Wpisz swój login"
              />
            </label>
          </p>
          <p className="input-box">
            <label>
              Hasło: <br/>
              <input
                  type="password"
                  name="password"
                  required
                  minLength={5}
                  maxLength={30}
                  value={form.password}
                  onChange={(e) => updateForm("password", e.target.value)}
                  className="input"
                  placeholder="Wpisz swoje hasło"
              />
            </label>
          </p>
          <Btn text="Zarejestruj"></Btn>
        </form>
      </div>
  );
};
