import React from 'react';
import {Header, Nav, Navbar} from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import '../styles.css';


export function AppHeader() {
    return (
        <Header>
            <Navbar appearance="inverse">
                <Navbar.Brand href="#">RSUITE</Navbar.Brand>
                <Nav>
                    <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
                    <Nav.Item>News</Nav.Item>
                    <Nav.Item>Products</Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
                </Nav>
            </Navbar>
        </Header>
    );
}

