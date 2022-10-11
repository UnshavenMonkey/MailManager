import React from 'react';
import {Header, Nav, Navbar} from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import {useDispatch} from "react-redux";
import {logout} from "./AppHeaderSlice";
import {getCurrentUser} from "../app/AppSlice";


export function AppHeader() {
    const dispatch = useDispatch();

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
                    <Nav.Item onClick={handleLogout} icon={<CogIcon />}>Выйти</Nav.Item>
                </Nav>
            </Navbar>
        </Header>
    );
}

