import { connect } from 'react-redux'
import FollowButton from './follow_button'

const mapStateToProps = ({ session }) => ({
  currentUserId: session.id
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect( mapStateToProps, null )( FollowButton )