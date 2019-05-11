import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import moment from 'moment';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/pt-br';

import 'materialize-css/dist/css/materialize.css';
import 'material-design-icons/iconfont/material-icons.css';

import './assets/scss/index.scss';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import StoreProvider from './store/StoreContext';

Moment.globalMoment = moment;
Moment.globalLocale = 'pt-br';
Moment.globalLocal = true;

ReactDOM.render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
