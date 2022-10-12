import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HOST } from '../const/axios-host';

const initialState = {
    error: null,
    status: 'idle',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
};

export const registrationUser = createAsyncThunk('registrationForm/registrationUser', async (data) => {
    const response = await HOST.post('api/user/registration/', data);
    return response.data;
});


export const registrationFormSlice = createSlice({
    name: 'registrationForm',
    initialState,
    reducers: {
        setFirstname: (state, action) => {
            state.firstname = action.payload;
            state.error = null;
        },
        setLastname: (state, action) => {
            state.lastname = action.payload;
            state.error = null;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
            state.error = null;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
            state.error = null;
        },
        cleanupRegistrationForm: (state) => initialState,
    },
    extraReducers: {
        [registrationUser.fulfilled]: (state, action) => {
            state.status = 'redirect';
        },
    },
});

export const registrationFormReducer = registrationFormSlice.reducer;

export const { cleanupRegistrationForm, setPassword, setEmail, setFirstname, setLastname } = registrationFormSlice.actions;

export const selectError = (state) => state.registrationForm.error;
export const selectStatus = (state) => state.registrationForm.status;
export const selectEmail = (state) => state.registrationForm.email;
export const selectPassword = (state) => state.registrationForm.password;
export const selectFirstname = (state) => state.registrationForm.firstname;
export const selectLastname = (state) => state.registrationForm.lastname;




