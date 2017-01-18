import { connect } from 'react-redux'
import AddItemView from '../components/AddItemView'
import { addToDo } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (name) => {
      return dispatch(addToDo(name))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddItemView)
