import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const sumit = (data) =>{
        axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login/",data)
            .then( (res) =>{ 
                console.log(res.data.data?.token)
                localStorage.setItem("token", res.data.data?.token)
                navigate("/")
                alert("sesion inciada correctamente")
            })
                
            .catch(error =>{
                console.log(error.response.status)
                if(error.response.status === 404){
                    alert("credenciales incorrectas")
                }
            })
            
            console.log(data)
            
    };

    return (
        <div>
            <div className='back-form'>
            
            <form onSubmit={handleSubmit(sumit)} className="form" action=''>

                <h2><span>Please sign in to continue</span></h2>
                <div>
                    <label htmlFor='email_input'><i className="fa-solid fa-envelope"></i>Email</label>
                    <input type="email" id='email_input'{...register("email")} placeholder="insert email"/>
                </div>
                <div>
                    <label htmlFor='password_input'><i className="fa fa-key"></i>Password </label>
                    <input type="password" id='password_input'{...register("password")} placeholder="insert password"/>
                </div>
                <button className='btn-form upload'>Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;