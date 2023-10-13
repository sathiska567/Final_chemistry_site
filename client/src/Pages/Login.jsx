// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { database } from "../config/FirebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from 'react-router-dom';
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

    signInWithEmailAndPassword(database, email, password).then(data => {
      console.log(data, "Authdata");
      alert("successfull Login")
      history("/")
    }).catch(error => {
      alert(error)
    })

  }


  const ShowPassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <>
      <div>

        <div className={`container-fluid ${style.login_main_div}`}>
          <div className={`row`}>

           <Sub />

            <div className={`col-sm-6 ${style.form_section}`}>
              <h3>නව සිසුවෙක් ද?</h3><br />
              <div className={`col-sm-10`}>
                <Link to="/register" ><Button text={"මෙතැනින් ලියාපදිංචි වන්න"} /></Link>

              </div>
              <br /><br />

              <form onSubmit={(e) => handleSubmit(e)}>


                <h5>දැනටමත් ලියාපදිංචි සිසුවෙක් නම් , </h5><br />
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
                </div>

                <div className={`form-group`}>
                  <div className={`col-sm-offset-2 col-sm-10 ${style.btn}`}>
                    <Button
                      text={"Sign In"}
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
