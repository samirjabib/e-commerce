import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const isLoadingSlice = createSlice({
	name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoading: (state, action) => {
            return action.payload; //el payload nos devuelve el valor  para setear el state 
        }
    }
})

export const { setIsLoading } = isLoadingSlice.actions; //exportamos nuestra funcion 


export default isLoadingSlice.reducer;