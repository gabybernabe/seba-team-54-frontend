import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import WebFontLoader from 'webfontloader';
import 'react-md/dist/react-md.indigo-pink.min.css'

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
});

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById("root"));





