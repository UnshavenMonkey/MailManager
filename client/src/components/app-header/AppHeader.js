import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./AppHeaderSlice";
import {getCurrentUser, selectUser} from "../app/AppSlice";
import ExitIcon from '@rsuite/icons/Exit';
import {Container, Nav, Navbar} from "react-bootstrap";


export function AppHeader() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = async () => {
        // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-results
        await dispatch(logout()).unwrap();
        dispatch(getCurrentUser());
    };

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Главная</Nav.Link>
                    <Nav.Link href="#features">Пользователи</Nav.Link>
                    <Nav.Link href="#pricing">Корреспонденция</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#home">{user.email}</Nav.Link>
                    <Nav.Link onClick={handleLogout} icon={<ExitIcon />}>Выйти</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

