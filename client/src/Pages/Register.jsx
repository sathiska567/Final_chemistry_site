import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import style from "./Pages.module.css"
import Button from '../components/Button/Button';
import Sub from '../components/SubSection/Sub';
import axios from 'axios'

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message , setMessage] = useState('')

  const history = useNavigate();

  const ShowPassword = () => {
    setPasswordVisible(!passwordVisible)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      console.log(name,email,password);
      const response = await axios.post('http://localhost:8080/api/v1/auth/register',{ name :name, email:email, password:password })
      console.log(response.data);

      const _id = response.data.user._id
      console.log(_id);

      setMessage(response.data.message)
      history('/login')
      alert("Registration successful")

      return _id

    } 
    
    catch (error) {
      console.log(error);
      alert('Error occurred during registration')
    }
  }

  return (
    <>
      <div style={{ overflowY: "hidden" }}>
        <div className={`container-fluid ${style.login_main_div}`}>
          <div className={`row`}>
            <Sub />
            <div className={`col-sm-6 ${style.form_section}`}>
              <h3>Dashboard Registration</h3>
              <p className={`text-muted`}>Join as a student</p>
              <br />
  
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className={`form-group`}>
                  <div className={`col-sm-10`}>
                    <input 
                      type={'text'} 
                      className={`form-control`} 
                      name='name' 
                      placeholder='Enter your name' 
                      required 
                      onChange={(e) => setName(e.target.value)} 
                    />
                  </div>
                </div>
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
                    <input 
                      type={passwordVisible ? "text" : "password"} 
                      className={`form-control`} 
                      name='password' 
                      placeholder="Enter password" 
                      required 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                    /><br />
                    <input type="checkbox" onClick={ShowPassword} /> Show Password
                  </div>
                  <p>{message}</p>
                </div><br />
               
                <div className={`form-group`}>
                  <div className={`col-sm-offset-2 col-sm-10 ${style.btn}`}>
                    <Button text={"Register"} />
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
