import { connect } from 'react-redux'
import ListView from '../components/ListView'

// This function is used to get state from Redux
// & let some of that state equal to a prop so we can pass
// that prop to our view Component
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

// This function is used to call / dispatch a Redux action
// from our React app so we can update the state in Redux
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView)
