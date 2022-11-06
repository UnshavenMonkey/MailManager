import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import {PATHS} from "../const/route-path";
import {Login} from "../login/Login";
import {App} from "../app/App";
import {RegistrationForm} from "../registration-form/RegistrationForm";
import {Mail} from "../Mail";
import {Dashboard} from "../Dashboard";

export function Root() {
    return (
        <BrowserRouter>
            <QueryParamProvider ReactRouterRoute={Route}>
                <Routes>
                    <Route path={PATHS.LOGIN} element={<Login />} />
                    <Route path={PATHS.REGISTRATION} element={<RegistrationForm />} />
                    <Route path={PATHS.INDEX} element={<App />} >
                        <Route index element={<Dashboard />} />
                        <Route path={PATHS.MAIL} element={<Mail />} />
                    </Route>
                </Routes>
            </QueryParamProvider>
        </BrowserRouter>
    );
}
