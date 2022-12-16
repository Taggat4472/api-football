import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const topassistSlice = createSlice ({
    name: 'Assist',
    initialState: {
        listAssist: []
    },
    reducers: {
        getAssistData: (state, action) => {
            state.listAssist = action.payload
        },
    },
})

export const { getAssistData } = assistSlice.action

export const fetchDataAssist = () => (dispatch) => {
    const res = axios.get("http://localhost:3030/topassist")
    dispatch({type:'Assist/getAssistData',payload: res.data})
};

export default assistSlice.reducer 