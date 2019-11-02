import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import counterReducer from "../src/store/reducers/counter";
import resultReducer from "../src/store/reducers/result";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  CR: counterReducer,
  RES: resultReducer
});

//const store = createStore(rootReducer); 
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
