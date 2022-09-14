import React from 'react';
import {Header, Nav, Navbar} from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';


export function AppHeader() {
    return (
        <Header>
            <Navbar appearance="inverse">
                <Nav>
                    <Nav.Item icon={<HomeIcon />}>Главная</Nav.Item>
                    <Nav.Item>Пользователи</Nav.Item>
                    <Nav.Item>Корреспонденция</Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
                </Nav>
            </Navbar>
        </Header>
    );
}

