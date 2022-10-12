import React, {useEffect, useState} from 'react';
import {Button, ButtonToolbar, Form, InputGroup} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {cleanupLogin, login, selectEmail, selectPassword, selectStatus, setEmail, setPassword} from "./LoginSlice";
import {Navigate} from "react-router-dom";
import {PATHS} from "../const/route-path";
import style from './Login.module.scss'
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';

export function Login() {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        return function cleanup() {
            dispatch(cleanupLogin());
        };
    }, [dispatch]);

    const handleSubmit = async () => {
        dispatch(login({email, password}))
    };

    const handleChangeVisible = () => {
        setVisible(!visible);
    };

    if (status === 'redirect') {
            return <Navigate to={PATHS.INDEX} push />;
    }

    return (
        <Form onSubmit={handleSubmit} className={style.loginForm} >
            <Form.Group controlId="email">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" type="email" onChange={(e) => dispatch(setEmail(e))} />
            </Form.Group>
            <Form.Group controlId="password">
                <Form.ControlLabel>Password</Form.ControlLabel>
                <InputGroup inside>
                    <Form.Control name="password" type={visible ? 'text' : 'password'} autoComplete="off" onChange={(e) => dispatch(setPassword(e))} />
                    <InputGroup.Button onClick={handleChangeVisible}>
                        {visible ? <EyeIcon /> : <EyeSlashIcon />}
                    </InputGroup.Button>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <ButtonToolbar>
                    <Button appearance="primary" type="submit">Войти</Button>
                </ButtonToolbar>
            </Form.Group>
        </Form>
    );
}

