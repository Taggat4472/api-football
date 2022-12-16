import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const topscorerSlice = createSlice ({
    name: 'Scorer',
    initialState: {
        listScorer: []
    },
    reducers: {
        getScorerData: (state, action) => {
            state.listScorer = action.payload
        },
    },
})

export const { getScorerData } = scorerSlice.action

export const fetchDataScorer = () => (dispatch) => {
    const res = axios.get("http://localhost:3030/topscorer")
    dispatch({type:'Scorer/getScorerData',payload: res.data})
};

export default scorerSlice.reducer 