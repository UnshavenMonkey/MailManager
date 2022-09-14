import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import {PATHS} from "../const/route-path";
import {Login} from "../login/Login";
import {App} from "../app/App";
import {RegistrationForm} from "../registration-form/RegistrationForm";

export function Root() {
    return (
        <BrowserRouter basename={PATHS.INDEX}>
            <QueryParamProvider ReactRouterRoute={Route}>
                <Routes>
                    <Route path={PATHS.LOGIN} element={<Login />} />
                    <Route path={PATHS.INDEX} element={<App />} />
                    <Route path={PATHS.REGISTRATION} element={<RegistrationForm />} />
                </Routes>
            </QueryParamProvider>
        </BrowserRouter>
    );
}