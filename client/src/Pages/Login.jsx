// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from "./Pages.module.css"
import Button from '../components/Button/Button';
import Sub from '../components/SubSection/Sub';
import axios from 'axios';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [message , setMessage] = useState('')
  const history = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault()

    console.log(email , password);

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login' , {email : email , password : password})
      console.log(response.data);
      setMessage(response.data.message)
      history('/')
    } 
    
    catch (error) {
       console.log(error);
       alert(error)
    }   

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
                <div className={`form-group`}>
                  <div className={`col-sm-10`}>
                    <input 
                      type={'email'} 
                      className={`form-control`} 
                      name='email' 
                      placeholder='Enter your email' 
                      required 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                </div>

                <div className={`form-group`}>
                  <div className={`col-sm-10`}>
                    <input type={passwordVisible ? "text" : "password"} className={`form-control`} name='password' placeholder="Enter password" required onChange={(e)=>setPassword(e.target.value)} /><br />
                    <input type="checkbox" onClick={ShowPassword} /> Show Password
                  </div>
                </div>

                <p>{message}</p>

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
