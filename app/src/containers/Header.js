import { connect } from 'react-redux'
import HeaderView from '../components/HeaderView'

const mapStateToProps = (state) => {
  return {
    username: state.user.name,
    userLocation: state.user.location
  }
}

export default connect(mapStateToProps)(HeaderView)
