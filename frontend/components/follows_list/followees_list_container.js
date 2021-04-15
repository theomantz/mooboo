import { connect } from "react-redux";
import FollowersList from "./follows_list";
import { fetchUser, clearUsers } from "../../actions/user_actions";
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return({
    currentUserId: state.session.id,
    user: state.entities.users[ownProps.match.params.userId],
    listType: "Following",
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  clearUsers: () => dispatch(clearUsers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowersList));
