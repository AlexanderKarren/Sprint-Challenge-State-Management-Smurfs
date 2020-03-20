import React from "react";
import ReactDOM from "react-dom";

import { smurfReducer } from "./reducers/smurfReducer"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./components/App";

const store = createStore(smurfReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
