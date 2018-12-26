import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {browserHistory} from "react-router";
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Router from './routers';
import reducer from './redux/reducers/reducers';
import Header from './components/Header/Header';

import './assets/css/bootstrap-grid.css'
import './assets/css/bootstrap-grid.min.css'
import './assets/css/bootstrap-reboot.css'
import './assets/css/bootstrap.css'

const rootReducer = combineReducers({
  routing: routerReducer,
  reducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

if(!localStorage.getItem('privateKeys'))
  localStorage.setItem('privateKeys', JSON.stringify([]))

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div className="app">
      <BrowserRouter history={history}>
        <div>
          <Header/>
          <Router/>
        </div>
      </BrowserRouter>
    </div>
  </Provider>,

  document.getElementById('root'));
registerServiceWorker();

;
