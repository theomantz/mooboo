import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoadingContainer from '../loading/loading_container'
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';
import CreateBoardFormContainer from '../board_form/create_board_container';
import CreatePinFormContainer from '../pins_form/create_pin_form_container';
import FollowersListContainer from '../follows_list/followers_list_container'
import FolloweesListContainer from '../follows_list/followees_list_container'

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
    case 'loading':
      component = <LoadingContainer />;
      break;
    default:
      return null;
  }
  if( modal !== 'loading' ) {
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  } else {
    return(
      <div className="loading-modal-background">
        <div className="modal-child">
          {component}
        </div>
      </div>
    )
  }
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
