import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'

import middleware from "./redux/middleware";
import reducers from "./redux/reducers";

var store = createStore(
    combineReducers({
        ...reducers
    }),
    applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}> 
        <App />
      </Provider>
   ,
  document.getElementById('root')
);
