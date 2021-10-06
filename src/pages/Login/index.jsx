import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { useHistory } from "react-router-dom";
//validations
import { validateEmail } from "../../utils/validationEmail";
//images
import bg from "../../assets/jpg/bg.jpg";
import logo from "../../assets/png/logo.png";

import { authLoginUser } from "../../redux";
//sass
import "./login.scss";
export default function Login() {
  //states
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);
  const [password, setPassword] = useState("");
  //const
  const dispatch = useDispatch();

  //let history = useHistory();
  //fuctions
  const onChangeInputEmail = (e) => {
    setEmail(e.currentTarget.value);
    // console.log(validateEmail(e.currentTarget.value));
    setErrorEmail(validateEmail(e.currentTarget.value));
  };
  const onChangeInputPassword = (e) => {
    setPassword(e.currentTarget.value);
    setErrorPassword(e.currentTarget.value !== "");
  };
  const onClickForm = (e) => {
    e.preventDefault();

    //history.push("/das");

    if (
      errorEmail &&
      errorPassword &&
      password !== "" &&
      validateEmail(email) &&
      email === "correo@correo.com"
    ) {
      // console.log("sumit");
      dispatch(authLoginUser({ username: "superadmin", password: password }));
      //console.log(user);
    }
  };

  return (
    <>
      <div className="o-bg-container">
        <div className="o-modal">
          <form className="o-form" onSubmit={onClickForm}>
            <img src={logo} alt="logo" />

            <div className="o-form__field">
              <input
                type="email"
                id="email"
                required
                className={!errorEmail ? "o-input-error" : ""}
                onChange={onChangeInputEmail}
              />
              <label
                htmlFor="email"
                className={
                  email !== ""
                    ? !errorEmail
                      ? "o-label-error "
                      : "o-label-change "
                    : !errorEmail
                    ? "o-label-color-error"
                    : "o-label-color-normal"
                }
              >
                Correo
              </label>
            </div>

            <div className="o-form__field">
              <input
                type="password"
                id="password"
                required
                className={!errorPassword ? "o-input-error" : ""}
                onChange={onChangeInputPassword}
              />
              <label
                htmlFor="password"
                className={
                  password !== ""
                    ? "o-label-change"
                    : !errorPassword
                    ? "o-label-color-error"
                    : "o-label-color-normal"
                }
              >
                Contraseña
              </label>
            </div>
            <div className="o-form__button">
              <button type="submit">
                <span>Iniciar sesión</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <style>{`
        .o-bg-container {
          background-image: url(${bg});
        }
      `}</style>
    </>
  );
}
