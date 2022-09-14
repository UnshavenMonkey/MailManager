import React from "react";
import {Container} from "rsuite";
import {AppContent} from "../app-content/AppContent";
import {AppHeader} from "../app-header/AppHeader";
import {AppFooter} from "../app-footer/AppFooter";
import '../../styles.css';
import style from './App.module.scss';

export function App() {
    return (
        <Container className={style.appContainer}>
            <AppHeader />
            <AppContent />
            <AppFooter />
        </Container>
    );
};

