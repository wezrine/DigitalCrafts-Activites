import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BaseLayout from './components/BaseLayout';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage'
import BookListPage from './components/BookListPage'
import AddBookPage from './components/AddBookPage'
import CartPage from './components/CartPage'

import { createStore } from 'redux'
import reducer from './store/reducer/reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path = "/" component = {BookListPage} />
            <Route exact path = "/login" component = {LoginPage} />
            <Route path = "/register" component = {RegisterPage} />
            <Route path = "/add-book" component = {AddBookPage} />
            <Route path = "/cart" component = {CartPage} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
