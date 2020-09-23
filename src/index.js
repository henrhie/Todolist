import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux"
import App from "./components/App";
import reducers from "./reducers";
import { applyMiddleware, createStore } from "redux";

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <App />
    </Provider>,
    document.querySelector("#root")
)

