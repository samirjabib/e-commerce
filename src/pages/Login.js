import React from 'react';
import { useSelector } from 'react-redux';


const Login = () => {
    const products = useSelector(state => state.products?.data?.products)
    console.log(products)

    return (
        <div>
              <div className='back-form'>
            
            <form onSubmit={handleSubmit(sumit)} className="form" action=''>

                <h2><span>Please sign in to continue</span></h2>
                <div className='name-input'>
                    <label htmlFor='first_name_input'><i className="fas fa-users"></i>Name</label>
                    <input type="text" id='first_name_input' {...register("first_name")}/>
                    <input type="text" id='last_name_input'{...register("last_name")}/>
                </div>
                <div>
                    <label htmlFor='email_input'><i className="fa-solid fa-envelope"></i>Email</label>
                    <input type="email" id='email_input'{...register("email")}/>
                </div>
                <div className='input'>
                    <label htmlFor='password_input'><i className="fa fa-key"></i>Password </label>
                    <input type="password" id='password_input'{...register("password")}/>
                </div>
                <div className='input'>
                    <label htmlFor='birthday_input'>Birthday </label>
                    <input type="date" id='birthday_input'{...register("birthday")}/>
                </div>
                <button className='btn-form upload'>Upload</button>
                {
                    userSelected && 
                    <button onClick={deselectUser} className="btn-form cancel">Cancel</button>
                }
            </form>
        </div>
        </div>
    );
};

export default Login;