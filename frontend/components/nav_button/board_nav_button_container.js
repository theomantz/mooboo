import { connect } from 'react-redux'
import NavButton from './nav_button'

const mapStateToProps = ({ activePath }) => {
  debugger
  return({
    active: activePath === 'boards' ? true : false
  })
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, null)(NavButton)