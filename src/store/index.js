import { configureStore } from '@reduxjs/toolkit';
import isLoading from './slices/isLoading.slice';
import products from './slices/products.slice'
import purshases from './slices/purshases.slice'
import cart from './slices/cart.slice'


export default configureStore({
    reducer: {
        isLoading,
        products,
        purshases,
        cart
	}
})