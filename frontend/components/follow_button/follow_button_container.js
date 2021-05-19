import { connect } from 'react-redux'
import FollowButton from './follow_button'
import { followUser, unfollowUser } from "../../actions/user_actions";

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  return {
    currentUser: users[session.id],
    user: users[ownProps.user.id] || ownProps.user.id
  }
};

const mapDispatchToProps = dispatch => ({
  followUser: (currentUserId, userId) => dispatch(followUser(currentUserId, userId)),
  unfollowUser: (currentUserId, userId) => dispatch(unfollowUser(currentUserId, userId)),
});

export default connect( mapStateToProps, mapDispatchToProps )( FollowButton )