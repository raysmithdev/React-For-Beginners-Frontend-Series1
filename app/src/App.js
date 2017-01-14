import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import AddItem from './components/AddItem'
import List from './components/List'
import Person from './components/Person'
import { Link } from 'react-router'
import 'whatwg-fetch'

class App extends Component {

  constructor() {
    super()
    this.state = {
      items: [],
      people: []
    }
  }

  addItem(name) {
    let item = { name }
    this.state.items.push(item)
    return this.setState({ items: this.state.items })
  }

  componentDidMount() {
    fetch('http://swapi.co/api/people/')
    .then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ people: json.results })
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }

  render() {
    return (
      <div className="App">
        <Link to="/about">
          <button>Go to about Page</button>
        </Link>
        <Header items={this.state.items} />
        <AddItem addItem={this.addItem.bind(this)} />
        <div className="List">
          <List items={this.state.items} />
        </div>
        <div className="People-Area">
          {this.state.people.map((person, index) => (
            <Person
              key={index}
              person={person}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App
