import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {HOST} from "../const/axios-host";

const initialState = {
};

export const logout = createAsyncThunk('appHeader/logout', async () => {
    const response = await HOST.post('/api/user/logout/');
    return response.data;
});

export const appHeaderSlice = createSlice({
    name: 'appHeader',
    initialState,
    reducers: {

    },
    extraReducers: {

    },
});

export const appHeaderReducer = appHeaderSlice.reducer;
export const { } =
    appHeaderSlice.actions;


