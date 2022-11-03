import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAuthStatus, selectError, selectIsAuth, selectStatus} from "./AppContentSlice";
import classNames from "classnames";
import style from './AppContent.module.scss';


export function AppContent() {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);
    const isAuth = useSelector(selectIsAuth);

    const handleIsAuth = async () => {
        dispatch(getAuthStatus())
    };


    return (
        <div className={classNames("flex-shrink-0", style.appContent)}>
            <div className={classNames("container")}>
                hello
            </div>
        </div>
    );
}

