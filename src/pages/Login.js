import React from 'react';
import { useSelector } from 'react-redux';


const Login = () => {
    const products = useSelector(state => state.products?.data?.products)
    console.log(products)

    return (
        <div>
            login
        </div>
    );
};

export default Login;