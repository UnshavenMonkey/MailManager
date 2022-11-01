import React, {useLayoutEffect} from "react";
import {AppContent} from "../app-content/AppContent";
import {AppHeader} from "../app-header/AppHeader";
import {AppFooter} from "../app-footer/AppFooter";
import '../../styles.css';
import style from './App.module.scss';
import {useRedirectIfUnauthorized} from "../../hooks/RedirectIfUnauthorized";
import {useDispatch, useSelector} from "react-redux";
import {PATHS} from "../const/route-path";
import {cleanupApp, getCurrentUser, getMailList, selectMailList} from "./AppSlice";
import {Navigate} from "react-router-dom";
import classNames from "classnames";

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

    console.log(mailList);

    return (
        <div className={classNames('container-lg d-flex flex-column', style.appContainer)}>
            <AppHeader />
            <AppContent />
            <AppFooter />
        </div>
    );
};

