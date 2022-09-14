import { configureStore } from '@reduxjs/toolkit'
import {registrationFormReducer} from "./components/registration-form/RegistrationFormSlice";
import {loginReducer} from "./components/login/LoginSlice";

export const store = configureStore({
    reducer: {
        registrationForm: registrationFormReducer,
        login: loginReducer
    },
})