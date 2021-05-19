import CardShow from './card_show'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/user_actions'
import { fetchPin, deletePin } from '../../actions/pins_actions'

const mapStateToProps = ( {entities: {users, pins}, session}, { match } ) => {
  return {
    content: pins[match.params.pinId],
    uploader: users[match.params.userId],
    userId: session.id
  }
};

const mapDispatchToProps = dispatch => ({
  fetchContent: pinId => dispatch(fetchPin(pinId)),
  deletePin: pinId => dispatch(deletePin(pinId)),
  fetchUser: userId => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardShow)