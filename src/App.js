import React, { Component } from 'react';
import './App.css';


import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";

import CRouter from './router/router'
import './style/index.less'


let store;
if (
  !(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)
) {
  store = createStore(reducer, applyMiddleware(thunk));
} else {
  store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <CRouter />
        </Provider>
      </div>
    );
  }
}

export default App;
