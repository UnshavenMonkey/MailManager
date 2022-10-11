import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HOST } from '../const/axios-host';

const initialState = {
    error: null,
    status: 'idle',
    email: '',
    password: '',
};

export const login = createAsyncThunk('login/login', async (data, {rejectWithValue}) => {
    try {
        const response = await HOST.post('api/user/login/', data);
        return response.data;
    } catch (error) {
        if (!error.response) {
            throw error;
        }
        return rejectWithValue(error.response);
    }
});

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
            state.error = null;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
            state.error = null;
        },
        cleanupLogin: (state) => initialState,
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.status = 'redirect';
        },
        [login.pending]: (state, action) => {
            state.status = 'loading';
        },
        [login.rejected]: (state, action) => {
            state.status = 'idle';
            console.log(action)
            if (action.payload.status === 403) {
                state.error = 'Введены некорректные данные';
            } else {
                state.error = 'Произошла неизвестная ошибка';
            }
        },
    },
});

export const loginReducer = loginSlice.reducer;

export const { cleanupLogin, setEmail, setPassword } = loginSlice.actions;

export const selectError = (state) => state.login.error;
export const selectStatus = (state) => state.login.status;
export const selectEmail = (state) => state.login.email;
export const selectPassword = (state) => state.login.password;
