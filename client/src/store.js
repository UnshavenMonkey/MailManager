import { configureStore } from '@reduxjs/toolkit'
import {registrationFormReducer} from "./components/registration-form/RegistrationFormSlice";
import {loginReducer} from "./components/login/LoginSlice";
import {appContentReducer} from "./components/app-content/AppContentSlice";

export const store = configureStore({
    reducer: {
        registrationForm: registrationFormReducer,
        login: loginReducer,
        appContent: appContentReducer
    },
})