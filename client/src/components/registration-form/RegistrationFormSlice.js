import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HOST } from '../const/axios-host';

const initialState = {
    error: null,
    status: 'idle',
};

export const registrationUser = createAsyncThunk('registrationForm/registrationUser', async (data) => {
    const response = await HOST.post('api/user/registration/', data);
    return response.data;
});


export const registrationFormSlice = createSlice({
    name: 'registrationForm',
    initialState,
    reducers: {
        cleanupRegistrationForm: (state) => initialState,
    },
    extraReducers: {
        [registrationUser.fulfilled]: (state, action) => {
        },
    },
});

export const registrationFormReducer = registrationFormSlice.reducer;

export const { cleanupRegistrationForm } = registrationFormSlice.actions;

export const selectError = (state) => state.registrationForm.error;
export const selectStatus = (state) => state.registrationForm.status;




