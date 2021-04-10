import { connect } from 'react-redux' 


const mapStateToProps = (state, ownProps) => ({
  boards: state.entities.boards,
  userId: ownProps.match.params.userId,

});

const mapDispatchToProps = dispatch => ({
  
})