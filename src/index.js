import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {HashRouter} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import reducer from "./redux/reducer/reducer"
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById("root")
)