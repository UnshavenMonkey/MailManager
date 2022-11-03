import React from "react";
import { createRoot } from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import {Root} from "./components/root/Root";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Root />
    </Provider>
);