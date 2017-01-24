import { connect } from 'react-redux'
import AddItemView from '../components/AddItemView'
import { savePost } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    savePost: (postName) => {
      return dispatch(savePost(postName))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddItemView)
