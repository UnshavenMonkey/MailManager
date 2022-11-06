import React, {useState} from 'react';
import classNames from "classnames";
import style from './AppContent.module.scss';
import {Route, Routes, Navigate, Redirect} from "react-router-dom";
import {PATHS} from "../const/route-path";
import {Mail} from "../Mail";


export function AppContent() {
    console.log('render content')
    return (
        <div className={classNames("flex-shrink-0", style.appContent)}>
            <div className={classNames("container")}>
                container
            </div>
        </div>
    );
}

