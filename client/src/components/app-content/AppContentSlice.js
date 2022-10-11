import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HOST } from '../const/axios-host';

const initialState = {
    error: null,
    status: 'idle',
    isAuth: null,
};

export const getAuthStatus = createAsyncThunk('login/getAuthStatus', async (data) => {
    const response = await HOST.get('api/user/auth/');
    return response.data;
});


export const appContentSlice = createSlice({
    name: 'appContent',
    initialState,
    reducers: {
        cleanupAppContent: (state) => initialState,
    },
    extraReducers: {
        [getAuthStatus.fulfilled]: (state, action) => {
            state.isAuth = action.payload;
        },
    },
});

export const appContentReducer = appContentSlice.reducer;

export const { cleanupAppContent } = appContentSlice.actions;

export const selectError = (state) => state.appContent.error;
export const selectStatus = (state) => state.appContent.status;
export const selectIsAuth = (state) => state.appContent.isAuth;
