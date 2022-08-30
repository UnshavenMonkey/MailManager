import React from "react";
import {Container} from "rsuite";
import {AppContent} from "./components/AppContent";
import {AppHeader} from "./components/AppHeader";
import {AppFooter} from "./components/AppFooter";
import './styles.css';

export function App() {
    return (
        <Container>
            <AppHeader />
            <AppContent />
            <AppFooter />
        </Container>
    );
};

