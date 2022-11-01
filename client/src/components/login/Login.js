import React, {useEffect, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {cleanupLogin, login, selectEmail, selectPassword, selectStatus, setEmail, setPassword} from "./LoginSlice";
import {Navigate} from "react-router-dom";
import {PATHS} from "../const/route-path";


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

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(login({email, password}))
    };

    const handleChangeVisible = () => {
        setVisible(!visible);
    };

    if (status === 'redirect') {
            return <Navigate to={PATHS.INDEX} push />;
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)} className="w-50 mx-auto mt-5" >
            <div className='my-3 text-center'>Вход</div>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" onChange={(e) => dispatch(setEmail(e.target.value))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type={visible ? 'text' : 'password'} autoComplete="off" onChange={(e) => dispatch(setPassword(e.target.value))} />
                    {/*<InputGroup.Button onClick={handleChangeVisible}>*/}
                    {/*    {visible ? <EyeIcon /> : <EyeSlashIcon />}*/}
                    {/*</InputGroup.Button>*/}
            </Form.Group>
            <Button variant="primary" type="submit">Войти</Button>
        </Form>
    );
}

