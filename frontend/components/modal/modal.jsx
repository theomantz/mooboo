import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';
import CreateBoardFormContainer from '../board_form/create_board_container';
import CreatePinFormContainer from '../pins_form/create_pin_form_container';
import FollowersListContainer from '../follows_list/followers_list_container'
import FolloweesListContainer from '../follows_list/followees_list_container'
import SearchBarContainer from '../search_bar/search_bar_container'

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'pin':
      component = <CreatePinFormContainer />;
      break;
    case 'board':
      component = <CreateBoardFormContainer />;
      break;
    case 'Followers':
      component = <FollowersListContainer />;
      break;
    case 'Following':
      component = <FolloweesListContainer />;
      break;
    case 'search':
      component = <SearchBarContainer />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
