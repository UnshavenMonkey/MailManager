import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAuthStatus, selectError, selectIsAuth, selectStatus} from "./AppContentSlice";


export function AppContent() {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);
    const isAuth = useSelector(selectIsAuth);

    const handleIsAuth = async () => {
        dispatch(getAuthStatus())
    };


    return (
        <div>
           hello
        </div>
    );
}

