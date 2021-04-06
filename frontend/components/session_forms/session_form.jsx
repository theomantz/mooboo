import React from 'react'
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import DemoUserButtonContainer from '../demo_user/demo_user_button_container'

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

  handleChange(type) {
    return (e) => this.setState({ [type]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(this.state);
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
    const { formType, linkTo, linkText } = this.props;
    return (
      <div className={`session-form-container ${formType}-form-container`}>
        <form onSubmit={this.handleSubmit} className="session-form">
          <h3 className="session-form-header-text">welcome to mooboo</h3>
          {this.renderErrors()}
          <label>
            <input
              type="text"
              className="session-form-inputs"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange("email")}
            />
          </label>
          <label>
            <input
              type="password"
              className="session-form-inputs"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange("password")}
            />
          </label>
          <div className="session-form-button-container">
            <button className={`session-form-button button-main button`}>
              {formType === "login" ? "Log In" : "Continue"}
            </button>
            <DemoUserButtonContainer/>
            <Link to={linkTo} className="session-form-link">
              {linkText}
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;