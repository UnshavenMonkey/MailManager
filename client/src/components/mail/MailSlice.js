import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {HOST} from "../const/axios-host";

const initialState = {
    dateToComplete: '',
    dateComplete: '',
    author: '',
    adress: '',
    file: '',
    responsiblePerson: '',
    isPerson: '',
};

export const addMail = createAsyncThunk('mail/addMail', async (data) => {
    const response = await HOST.post('/api/mail/addmail/', data);
    return response.data;
});

export const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        setAuthor: (state, action) => {
            state.author = action.payload;
        },
        setAdress: (state, action) => {
            state.adress = action.payload;
        },
        setDateToComplete: (state, action) => {
            state.dateToComplete = action.payload;
        },
        setDateComplete: (state, action) => {
            state.dateComplete = action.payload;
        },
        setFile: (state, action) => {
            state.file = action.payload;
        },
        setResponsiblePerson: (state, action) => {
            state.responsiblePerson = action.payload;
        },
        setIsPerson: (state, action) => {
            state.isPerson = action.payload;
        },
        cleanupMail: (state) => initialState,
    },
    extraReducers: {
        [addMail.fulfilled]: (state, action) => {
            state.status = 'idle';
        },
    },
});

export const mailReducer = mailSlice.reducer;

export const { cleanupMail, setAuthor, setAdress, setDateToComplete, setDateComplete, setFile, setIsPerson, setResponsiblePerson } = mailSlice.actions;

export const selectAuthor = (state) => state.mail.author;
export const selectAdress = (state) => state.mail.adress;
export const selectDateToComplete = (state) => state.mail.dateToComplete;
export const selectDateComplete = (state) => state.mail.dateComplete;
export const selectResponsiblePerson = (state) => state.mail.responsiblePerson;
export const selectFile = (state) => state.mail.file;
export const selectIsPerson = (state) => state.mail.isPerson;
