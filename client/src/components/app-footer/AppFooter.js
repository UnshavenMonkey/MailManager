import React from 'react';
import {Footer} from "rsuite";
import style from './AppFooter.module.scss';

export function AppFooter() {
    return (
        <Footer className={style.footer}>
            <span className={style.rightText}>&copy; {new Date().getFullYear()} made by Aleksandr Dudkov</span>
        </Footer>
    );
}

