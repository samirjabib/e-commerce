import { configureStore } from '@reduxjs/toolkit';
import isLoading from './slices/isLoading.slice';
import products from './slices/products.slice'


export default configureStore({
    reducer: {
        isLoading,
        products
	}
})