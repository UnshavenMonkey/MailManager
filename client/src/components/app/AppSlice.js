import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {HOST} from "../const/axios-host";


const initialState = {
    user: null,
    mailList: null,
};

export const getCurrentUser = createAsyncThunk('app/getCurrentUser', async () => {
    const response = await HOST.get('/api/user/current/');
    return response.data;
});
export const getMailList = createAsyncThunk('app/getMailList', async () => {
    const response = await HOST.get('/api/mail/maillist/');
    return response.data;
});


export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        cleanupApp: (state) => initialState,
    },
    extraReducers: {
        [getCurrentUser.fulfilled]: (state, action) => {
            state.user = action.payload;
        },
        [getMailList.fulfilled]: (state, action) => {
            state.mailList = action.payload;
        },
    },
});

export const appReducer = appSlice.reducer;

export const { cleanupApp } = appSlice.actions;

export const selectUser = (state) => state.app.user?.user;
export const selectMailList = (state) => state.app.mailList;

