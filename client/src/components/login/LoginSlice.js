import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HOST } from '../const/axios-host';

const initialState = {
    error: null,
    status: 'idle',
};

export const login = createAsyncThunk('login/login', async (data) => {
    const response = await HOST.post('api/user/login/', data);
    return response.data;
});


export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        cleanupLogin: (state) => initialState,
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.status = 'redirect';
        },
    },
});

export const loginReducer = loginSlice.reducer;

export const { cleanupLogin } = loginSlice.actions;

export const selectError = (state) => state.login.error;
export const selectStatus = (state) => state.login.status;
