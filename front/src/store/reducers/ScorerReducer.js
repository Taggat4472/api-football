import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const scorerSlice = createSlice ({
    name: 'scorer',
    initialState: {
        listScorer: []
    },
    reducers: {
        getScorerData: (state, action) => {
            state.listScorer = action.payload
        },
    },
})

export const { getScorerData } = scorerSlice.actions

export const fetchDataScorer = () => async (dispatch) => {
    const res = await axios.get("http://localhost:3030/topscorer")
    dispatch({type:'scorer/getScorerData',payload: res.data})
    
};

export default scorerSlice.reducer 