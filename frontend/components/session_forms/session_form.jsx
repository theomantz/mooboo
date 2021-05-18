import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import uuid from 'react-uuid';
import DemoUserButtonContainer from '../demo_user/demo_user_button_container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineClose } from 'react-icons/ai'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const { processForm } = this.props
    const credentials = this.state

    processForm(credentials)
      .then(() => this.props.closeModal())

  }

  renderErrors() {
    if( this.props.errors === [] ) return null;
    return (
      <ul className="session-form-errors-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="session-form errors-list">{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType, linkTo, linkText, openModal } = this.props;
    return (
      <div className={`session-form-container ${formType}-form-container`}>
        <div className='session-form close-button'>
          <AiOutlineClose className='close-button-icon' onClick={() => this.props.closeModal()}/>
        </div>
        <img src={window.moobooLarge} alt="logo" className="session-form-logo"></img>
        <form onSubmit={this.handleSubmit} className="session-form">
          <div className="session-form-header">
            <h3 className="session-form-header-text">welcome to mooboo</h3>
            {this.renderErrors()}
          </div>
          <label>
            <input
              type="text"
              className="session-form-inputs text-input"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange("email")}
            />
          </label>
          <label>
            <input
              type="password"
              className="session-form-inputs text-input"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange("password")}
            />
          </label>
          <div className="session-form-button-container">
            <button className={`session-form-button button-main button`}>
              {formType === "login" ? "Log In" : "Continue"}
            </button>
          </div>
        </form>
        <div className="session-form-divider">
          <span>OR</span>
        </div>
        <div className="session-form-button-link-container">
          <DemoUserButtonContainer />
          <span 
            onClick={() => openModal(linkTo)}
            className="session-form-link"
          >
            {linkText}
          </span>
        </div>
      </div>
    );
  }
}

export default SessionForm;