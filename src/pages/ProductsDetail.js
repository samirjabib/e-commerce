import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
const ProductsDetail = () => {


    const [product,setProduct] = useState({})



    const { id } = useParams();



    useEffect(() => {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
            .then(res => setProduct(res.data.data.product))
    },[id])

    console.log(product)

    return (
        <div>
            <h1>{product.title}</h1>
            <h2> $ {product.price}</h2>
            <h3>{product.status}</h3>
            <div>
                <img src={product.productImgs?.[0]} alt="product"/>
                <img src={product.productImgs?.[1]} alt="product"/>
                <img src={product.productImgs?.[2]} alt="product"/>
            </div>
            
            <p>{product.description}</p>
        </div>
    );
};

export default ProductsDetail;