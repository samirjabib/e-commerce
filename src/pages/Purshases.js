import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPurshases } from '../store/slices/purshases.slice';



const Purshases = () => {


    const purshases = useSelector(state => state.purshases.data?.purchases);
    const navigate = useNavigate()


    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getPurshases())
    },[dispatch])



    return (
        <div>
            <h1>Purshases</h1>
            {
                purshases?.map( purshase => (
                    <div key={purshase.id}>
                        <h2>{purshase.createdAt}</h2>
                        <div>
                            {
                                purshase.cart.products.map( products => (
                                    <div key={products.id} onClick= {()=>navigate(`/product/${products.id}`)}>
                                        {console.log(products)}
                                        <h2>{products.title}</h2>
                                        <p><p>precio :</p>{products.price}</p>
                                        <p><b>cantidad :</b>{products.productsInCart.quantity}</p>
                                    </div>
                                ))
                            }
                        </div>
                        
                    </div>
                ))
            } 
        </div>
    );
};

export default Purshases;