import React, {useEffect, useState} from 'react';
import {Button, ButtonToolbar, Form, InputGroup} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {
    cleanupRegistrationForm,
    registrationUser,
    selectEmail,
    selectFirstname,
    selectLastname,
    selectPassword, setFirstname, setLastname, setEmail, setPassword, selectStatus
} from "./RegistrationFormSlice";
import style from './RegistrationForm.module.scss'
import {Navigate} from "react-router-dom";
import {PATHS} from "../const/route-path";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";



export function RegistrationForm() {
    const dispatch = useDispatch();
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);
    const firstname = useSelector(selectFirstname);
    const lastname = useSelector(selectLastname);
    const status = useSelector(selectStatus);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        return function cleanup() {
            dispatch(cleanupRegistrationForm());
        };
    }, [dispatch]);


    const handleSubmit = () => {
        dispatch(registrationUser({
            firstname, lastname, email, password}));
    };

    const handleChangeVisible = () => {
        setVisible(!visible);
    };

    if (status === 'redirect') {
        return <Navigate to={PATHS.INDEX} push />;
    };

    return (
        <Form className={style.registrationForm} onSubmit={handleSubmit}>
            <Form.Group controlId="firstname">
                <Form.ControlLabel>Firstname</Form.ControlLabel>
                <Form.Control name="firstname" onChange={(e) => dispatch(setFirstname(e))} />
            </Form.Group>
            <Form.Group controlId="lastname">
                <Form.ControlLabel>Lastname</Form.ControlLabel>
                <Form.Control name="lastname" onChange={(e) => dispatch(setLastname(e))} />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" type="email" onChange={(e) => dispatch(setEmail(e))} />
                <Form.HelpText>Email is required</Form.HelpText>
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
                    <Button appearance="primary" type="submit">Зарегистрироаться</Button>
                    <Button appearance="default">Отмена</Button>
                </ButtonToolbar>
            </Form.Group>
        </Form>
    );
}
