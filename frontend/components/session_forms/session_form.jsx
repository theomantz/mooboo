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
    return(
      <div className={`session-form-container ${formType}-form-container`}>
        <h3>welcome to mooboo</h3>
        <form onSubmit={this.handleSubmit}>

          <label>
            <input
              type="text"
              value={this.state.email}
              placeholder="email"
              onChange={this.handleChange('email')}   
            />
          </label>
          <label>
            <input
              type="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange('password')}   
            />
          </label>
          <div className="button-container form-nav-container">
            <button className={`session-form-button button`}>
              {formType === 'login' ? 'Log In' : 'Continue' }
            </button>
            <Link to={linkTo} className="session-form-link button">{linkText}</Link>
            {this.handleErrors()}
          </div>
        </form>
      </div>
    )
  }
}

export default SessionForm;