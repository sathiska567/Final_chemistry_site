// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { database } from "../config/FirebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {useNavigate } from 'react-router-dom';
import style from "./Pages.module.css"
import Button from '../components/Button/Button';
import Sub from '../components/SubSection/Sub';
import Input from '../components/InputField/Input';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)


  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(database, email, password).then(data => {
      console.log(data, "Authdata");
      alert("successfull Register")
      history("/login")
    }).catch(error => {
      alert(error)
    })

  }


  const ShowPassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <>
      <div style={{overflowY:"hidden"}}>

        <div className={`container-fluid ${style.login_main_div}`}>
          <div className={`row`}>

            <Sub />

            <div className={`col-sm-6 ${style.form_section}`}>
              <h3>Dashboard Registration</h3>
              <p className={`text-muted`}>Join as a student</p>
              <br />

              <form onSubmit={(e) => handleSubmit(e)}>
                <Input
                  type={"text"}
                  name={"name"}
                  placeholder={"Enter User Name"}

                />

                <Input
                  type={"email"}
                  name={"email"}
                  placeholder={"Enter email"}

                />

                <div className={`form-group`}>
                  <div className={`col-sm-10`}>
                    <input type={passwordVisible ? "text" : "password"} className={`form-control`} name='password' placeholder="Enter password" required /><br />
                    <input type="checkbox" onClick={ShowPassword} /> Show Password
                  </div>
                </div><br />

                <div className={`form-group`}>
                  <div className={`col-sm-offset-2 col-sm-10 ${style.btn}`}>
                    <Button
                      text={"Register"}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Login;
