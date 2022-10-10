import React, {useState} from 'react';
import {Button, ButtonToolbar, Content, Form} from 'rsuite';
import style from './AppContent.module.scss';
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

    console.log(isAuth);


    return (
        <Content className={style.appContent}>
           hello
            <ButtonToolbar>
                <Button appearance="primary" type="submit" onClick={handleIsAuth}>Submit</Button>
            </ButtonToolbar>
        </Content>
    );
}

