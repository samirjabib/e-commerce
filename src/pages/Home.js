import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { filterTitle, getProducts, filterCategories} from '../store/slices/products.slice';
import { useNavigate } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {


    

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [search,setSearch] = useState("")
    const [categories,setCategories] = useState([])

    const products = useSelector(state => state.products?.data?.products)

    

    useEffect(() => {
        dispatch(getProducts())
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
            .then(res => setCategories(res.data.data.categories))
    },[dispatch])



    const filterProducts = () =>{
        dispatch(filterTitle(search))
    }


    const selectCategories = (id) =>{
        dispatch(filterCategories(id))
    }


    return (
        <div>
            <h1>HOME </h1>
            
            <div>
                <input 
                type="text"
                placeholder='search product'
                value={search}
                onChange={e => setSearch(e.target.value)}/>
                <button onClick={filterProducts}>search</button>
            </div>

            <ul>
                {
                    categories.map(categorie => (
                            <li key={categorie.id} onClick={(id) => selectCategories(categorie.id)}>
                                {categorie.name}
                            </li>
                    ))
                }
            </ul>
        
            
            {
                products?.map( product => (
                    <div key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                        <div>
                            <h3>{product.title}</h3>
                            <img src={product.productImgs?.[0]} alt="Products"/>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    );
};

export default Home;