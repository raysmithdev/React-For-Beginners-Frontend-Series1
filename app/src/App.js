import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import AddItem from './containers/AddItem'
import List from './containers/List'
import Person from './components/Person'
import { Link } from 'react-router'
import 'whatwg-fetch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/about">
          <button>Go to about Page</button>
        </Link>
        <AddItem />
        <div className="List">
          <List />
        </div>
      </div>
    );
  }
}

export default App
