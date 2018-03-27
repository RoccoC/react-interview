import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const INITIAL_STATE = {
  shapes: [
    { id: "1", type: "circle", size: 100, x: 50, y: 10 },
    { id: "2", type: "square", size: 25, x: 250, y: 300 },
    { id: "3", type: "square", size: 75, x: 155, y: 122 },
    { id: "4", type: "circle", size: 66, x: 400, y: 267 }
  ]
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
