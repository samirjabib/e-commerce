import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import { setIsLoading } from './isLoading.slice';
import  getConfig  from '../../utils/getConfig';
export const purshasesSlice = createSlice({
    name: 'purshases',
    initialState: [],
    reducers: {
        setPurshases :(state, action) => action.payload
        }

    }
)

export const { setPurshases } = purshasesSlice.actions;


export const getPurshases = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases",getConfig())
        .then((res) => dispatch(setPurshases(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export default purshasesSlice.reducer;
