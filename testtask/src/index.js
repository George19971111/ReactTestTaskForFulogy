import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import {MyProvider} from './components/context';
import Erorb from './components/erorb';
import MainServices from './services';
import store from './store';

const mainService = new MainServices();

ReactDOM.render(
    <Provider store={store}>
    <Erorb>
        <MyProvider value ={mainService}>
                <Router>
                    <App/>
                </Router>
        </MyProvider>
    </Erorb>
</Provider>,document.getElementById('root')
)