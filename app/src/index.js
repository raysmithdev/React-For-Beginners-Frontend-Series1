import React from 'react'
import { render } from 'react-dom'
import App from './App'
import About from './components/About'
import './index.css'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

render((
  <Provider store={store} >
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
    </Router>
  </Provider>
), document.getElementById('root'))
