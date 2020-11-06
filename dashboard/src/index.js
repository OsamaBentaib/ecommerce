import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/css/all.css';
import './assets/css/fonts.css';
import './assets/css/theme.css';
import './assets/css/style.css';

import App from './base/App';

import * as serviceWorker from './serviceWorker';

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./base/store/reducers/index";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();