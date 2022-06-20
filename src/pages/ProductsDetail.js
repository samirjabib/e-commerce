import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { filterCategory } from '../store/slices/products.slice';
import { useNavigate } from 'react-router-dom'


const ProductsDetail = () => {


    const [product,setProduct] = useState({})

    const dispatch = useDispatch()

    const { id } = useParams();

    const productsList = useSelector(state => state.products?.data?.products)


    const navigate = useNavigate()


    useEffect(() => {
        // axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
        //     .then(res =>{
        //         setProduct(res.data.data.product)
        //     })
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/")
            .then(res =>{
                const productSearched = res.data.data.products.find( productsItem => productsItem.id === Number(id))
                setProduct(productSearched)
                dispatch(filterCategory(productSearched.category.id))
            })
            
    },[dispatch,id])



    return (
        <div>
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

            <div>
                <h2>Similar Products</h2>
                {
                    productsList?.map( product => (
                        <div key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                            <h3>{product.title}</h3>
                            <img src={product.productImgs?.[0]} alt="product-similar"/>
                        </div>
                    ))
                }
            </div>
            

        </div>
    );
};

export default ProductsDetail;