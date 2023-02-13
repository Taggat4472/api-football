import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const assistSlice = createSlice ({
    name: 'assist',
    initialState: {
        listAssist: []
    },
    reducers: {
        getAssistData: (state, action) => {
            state.listAssist = action.payload
        },
    },
})

export const { getAssistData } = assistSlice.actions

export const fetchDataAssist = () => async (dispatch) => {
    const res = await axios.get("http://localhost:3030/topassists")
    dispatch({type:'assist/getAssistData',payload: res.data})
};

export default assistSlice.reducer 