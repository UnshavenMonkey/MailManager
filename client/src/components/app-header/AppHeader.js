import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./AppHeaderSlice";
import {getCurrentUser, selectUser} from "../app/AppSlice";
import ExitIcon from '@rsuite/icons/Exit';
import {Container, Nav, Navbar} from "react-bootstrap";
import {PATHS} from '../const/route-path';
import { Link } from 'react-router-dom';


export function AppHeader() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = async () => {
        // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-results
        await dispatch(logout()).unwrap();
        dispatch(getCurrentUser());
    };

    return (
        <Navbar bg="primary" className="navbar navbar-expand-md navbar-dark fixed-top">
            <Container>
                <Navbar.Brand className="text-decoration-none" href="#home">MailManager</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={PATHS.INDEX}>Главная</Nav.Link>
                    <Nav.Link href="#features">Пользователи</Nav.Link>
                    <Nav.Link as={Link} to={PATHS.MAIL}>Корреспонденция</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#home">{user.email}</Nav.Link>
                    <Nav.Link className="text-decoration-none" onClick={handleLogout} icon={<ExitIcon />}>Выйти</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

