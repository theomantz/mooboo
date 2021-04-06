import React from 'react'
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(type) {
    return e => this.setState( { [type]: e.currentTarget.value } )
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.processForm(this.state)
  }

  handleErrors() {
    let errors = Object.values(this.props.errors)
    if (errors.length) {
      errors = errors.map((error) => <p key={uuid()}>{error}</p>);
      return <div className="errors-container">{errors}</div>;
    } else {
      return null;
    }
  }

  render() {
    const { formType } = this.props
    const linkTo = formType === 'login' ? '/signup' : '/login'
    const linkText = formType === 'login' ? 'Sign Up' : 'Log In'
    return (
      <div className={`session-form-container ${formType}-form-container`}>
        <h3 className="session-form-header-text">welcome to mooboo</h3>
        <form onSubmit={this.handleSubmit} className="session-form">
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
            <button className={`session-form-button button-main`}>
              {formType === "login" ? "Log In" : "Continue"}
            </button>
            <Link to={linkTo} className="session-form-button session-form-link">
              {linkText}
            </Link>
            {this.handleErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;