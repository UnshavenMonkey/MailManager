import React, {useState} from 'react';
import {Button, ButtonToolbar, Form} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {login, selectStatus} from "./LoginSlice";
import {Navigate} from "react-router-dom";
import {PATHS} from "../const/route-path";

export function Login() {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async () => {
        dispatch(login({email: value.email, password: value.password}))
    };

    if (status === 'redirect') {
            return <Navigate to={PATHS.INDEX} push />;
    }

    return (
        <Form onSubmit={handleSubmit} onChange={setValue}>
            <Form.Group controlId="email">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" type="email" />
                <Form.HelpText tooltip>Email is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>
            <Form.Group>
                <ButtonToolbar>
                    <Button appearance="primary" type="submit">Submit</Button>
                </ButtonToolbar>
            </Form.Group>
        </Form>
    );
}

