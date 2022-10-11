import { useLayoutEffect, useState } from 'react';
import {HOST} from "../components/const/axios-host";

export function useRedirectIfUnauthorized() {
    const [redirect, setRedirect] = useState(null);

    useLayoutEffect(() => {
        // https://axios-http.com/docs/interceptors
        const responseInterceptor = HOST.interceptors.response.use(
            (response) => {
                setRedirect(false);
                return response;
            },
            (error) => {
                setRedirect(error.response && error.response.status === 401);
                return Promise.reject(error);
            }
        );

        return function cleanup() {
            HOST.interceptors.response.eject(responseInterceptor);
        };
    });
    return redirect;
}
