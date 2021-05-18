import { connect } from 'react-redux'
import FollowButton from './follow_button'

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  debugger
  return {
    currentUser: users[session.id],
    user: users[ownProps.user.id] || ownProps.user.id
  }
};

const mapDispatchToProps = dispatch => ({
  
});

export default connect( mapStateToProps, null )( FollowButton )