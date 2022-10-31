import React from 'react';
import {Header, Nav, Navbar} from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./AppHeaderSlice";
import {getCurrentUser, selectUser} from "../app/AppSlice";
import ExitIcon from '@rsuite/icons/Exit';


export function AppHeader() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = async () => {
        // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-results
        await dispatch(logout()).unwrap();
        dispatch(getCurrentUser());
    };

    return (
        <Header>
            <Navbar appearance="inverse">
                <Nav>
                    <Nav.Item icon={<HomeIcon />}>Главная</Nav.Item>
                    <Nav.Item>Пользователи</Nav.Item>
                    <Nav.Item>Корреспонденция</Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item>{user.email}</Nav.Item>
                    <Nav.Item onClick={handleLogout} icon={<ExitIcon />}>Выйти</Nav.Item>
                </Nav>
            </Navbar>
        </Header>
    );
}

