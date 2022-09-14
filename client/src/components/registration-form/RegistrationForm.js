import React, {useState} from 'react';
import {Button, ButtonToolbar, Form} from "rsuite";
import {useDispatch} from "react-redux";
import {registrationUser} from "./RegistrationFormSlice";

export function RegistrationForm() {
    const dispatch = useDispatch();
    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const handleSubmit = () => {
        dispatch(registrationUser({
            firstname: value.firstname,
            lastname: value.lastname,
            email: value.email,
            password: value.password}));
    }

    return (
        <Form onChange={setValue} onSubmit={handleSubmit}>
            <Form.Group controlId="firstname">
                <Form.ControlLabel>Firstname</Form.ControlLabel>
                <Form.Control name="firstname" />
                <Form.HelpText>firstname is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="lastname">
                <Form.ControlLabel>Lastname</Form.ControlLabel>
                <Form.Control name="lastname" />
                <Form.HelpText>lastname is required</Form.HelpText>
            </Form.Group>
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
                    <Button appearance="default">Cancel</Button>
                </ButtonToolbar>
            </Form.Group>
        </Form>
    );
}
