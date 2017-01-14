import React from 'react'
import { render } from 'react-dom'
import App from './App'
import About from './components/About'
import './index.css'
import { Router, Route, hashHistory } from 'react-router'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>
), document.getElementById('root'))
