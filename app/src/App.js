import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import AddItem from './components/AddItem'
import List from './components/List'

class App extends Component {

  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  addItem(name) {
    let item = { name }
    this.state.items.push(item)
    return this.setState({ items: this.state.items })
  }

  render() {
    return (
      <div className="App">
        <Header items={this.state.items} />
        <AddItem addItem={this.addItem.bind(this)} />
        <div className="List">
          <List items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App
