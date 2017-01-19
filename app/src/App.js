import React, { Component } from 'react'
import './App.css'
import AddItem from './containers/AddItem'
import List from './containers/List'
import Header from './containers/Header'
import { Link } from 'react-router'
import 'whatwg-fetch'
import { connect } from 'react-redux'
import { fetchPosts } from './actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div className="App">
        <Link to="/about">
          <button>Go to about Page</button>
        </Link>
        <AddItem />
        <Header />
        <div className="List">
          <List />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchPosts())
  }
}

export default connect(null, mapDispatchToProps)(App)
