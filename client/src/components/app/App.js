import React, {useLayoutEffect} from "react";
import {AppHeader} from "../app-header/AppHeader";
import {AppFooter} from "../app-footer/AppFooter";
import '../../styles.css';
import {useRedirectIfUnauthorized} from "../../hooks/RedirectIfUnauthorized";
import {useDispatch, useSelector} from "react-redux";
import {PATHS} from "../const/route-path";
import {cleanupApp, getCurrentUser, getMailList, selectMailList} from "./AppSlice";
import {Navigate, Outlet} from "react-router-dom";
import classNames from "classnames";
import style from "./App.module.scss";

export function App() {
    const dispatch = useDispatch();
    const redirect = useRedirectIfUnauthorized();
    const mailList = useSelector(selectMailList);

    useLayoutEffect(() => {
        dispatch(getCurrentUser());
        dispatch(getMailList());
        return function cleanup() {
            dispatch(cleanupApp());
        };
    }, [dispatch]);


    if (redirect) {
        return <Navigate to={PATHS.LOGIN} push />;
    } else if (redirect === null) {
        return null;
    }

    console.log('render app')



    return (
        <div className={classNames('d-flex flex-column min-vh-100')}>
            <AppHeader />
            <div className={classNames("flex-shrink-0 container", style.appContent)}>
                <Outlet />
            </div>
            <AppFooter />
        </div>
    );
};

