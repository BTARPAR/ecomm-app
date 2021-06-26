import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from "react-redux";
import {library} from "@fortawesome/fontawesome-svg-core";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store";
import {
    faPlus,
    faShoppingBag,
    faCircle,
    faBars,
    faArrowLeft,
    faUser,
    faEnvelope,
    faAddressCard,
    faCity,
    faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";

library.add({
    faPlus,
    faShoppingBag,
    faCircle,
    faBars,
    faArrowLeft,
    faArrowAltCircleRight,

    faUser,
    faEnvelope,
    faAddressCard,
    faCity,
})

ReactDOM.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <App/>
        </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
