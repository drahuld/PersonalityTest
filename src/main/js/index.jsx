import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';

/**
 * This method attach the React Component to DOM 'root' div
 */
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root"));