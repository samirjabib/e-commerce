import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { setIsLoading } from './isLoading.slice';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productsSlice = createSlice({
		name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state,action) => {
            return action.payload
        }
    }
})


export const {setProducts} = productsSlice.actions



//usamos los thunks para comprolar las funcionalidades de la API 
export const getProducts = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
        .then((res) => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const filterTitle = (query) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${query}`)
        .then((res) => dispatch(setProducts((res.data))))
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterCategories = (query) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${query}`)
        .then((res) => dispatch(setProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}


export default productsSlice.reducer;