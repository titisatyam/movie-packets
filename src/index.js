import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { application, initialState } from './reducers';


const composeEnhancers = (process.env.ENVIRONMENT && process.env.ENVIRONMENT === 'local' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
let store = createStore(application, initialState, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
  </BrowserRouter>,

document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
