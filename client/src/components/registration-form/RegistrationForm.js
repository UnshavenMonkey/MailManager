import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    cleanupRegistrationForm,
    registrationUser,
    selectEmail,
    selectFirstname,
    selectLastname,
    selectPassword, setFirstname, setLastname, setEmail, setPassword, selectStatus
} from "./RegistrationFormSlice";
import {Navigate} from "react-router-dom";
import {PATHS} from "../const/route-path";
import {Button, Form} from 'react-bootstrap';



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


    const handleSubmit = (e) => {
        e.preventDefault()
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
            <Form className="w-50 mx-auto mt-5" onSubmit={(e) => handleSubmit(e)}>
                <div className='my-3 text-center'>Регистрация</div>
                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control type="text" placeholder="Enter firstname" name="firstname" onChange={(e) => dispatch(setFirstname(e.target.value))} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" placeholder="Enter lastname" name="lastname" onChange={(e) => dispatch(setLastname(e.target.value))}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => dispatch(setEmail(e.target.value))} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Password" name="password" type={visible ? 'text' : 'password'} autoComplete="off" onChange={(e) => dispatch(setPassword(e.target.value))} />
                    {/*<InputGroup.Button onClick={handleChangeVisible}>*/}
                    {/*    {visible ? <EyeIcon /> : <EyeSlashIcon />}*/}
                    {/*</InputGroup.Button>*/}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Зарегистрироаться
                </Button>
            </Form>
    );
}
