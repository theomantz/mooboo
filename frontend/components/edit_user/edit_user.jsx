import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'

class EditUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.user
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.currentTarget.value })
  }

  saveFormData() {
    this.props.updateUser(this.state)
    if( this.props.errors ) {
      this.setState({ errors: this.props.errors })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.updateUser(this.state)
      .then(this.props.history.push(`/users/${this.props.user.id}`))
  }

  renderErrors() {
    if( !this.props.errors ) return null
    return(
      <div className='user-form-errors'>
        {this.props.errors.forEach(error => <span className="error">{error}</span> )}
      </div>
    )
  }

  render() {
    if ( !this.props.user ) return null
    return(
      <div className='update-user-form-container'>
        <Link to={`/users/${this.props.user.id}`}>
          <FontAwesomeIcon icon={faArrowLeft} className="update-user-back-arrow"/>
        </Link>
        <div className='update-user-form-header'>
          <h1>Edit profile</h1>
          <span>People visiting your profile will see the following info</span>
          {this.renderErrors()}
        </div>
        <form onSubmit={this.handleSubmit} className='update-user-form'>
          <label className='email-label'>email
            <input
              type='text'
              value={this.state.email}
              onChange={this.handleChange('email')}
              className='email-update update-user-inputs'/>
          </label>
          <label className='username-label'>username
            <input
              type='text'
              value={this.state.username || ''}
              onChange={this.handleChange('username')}
              className='username-update update-user-inputs'
              placeholder={this.state.username ? null : `username`}
              />
          </label>
          <label className='description-label'>description
            <input
              type='textarea'
              value={this.state.description || ''}
              className='description-update update-user-inputs'
              onChange={this.handleChange('description')}
              placeholder={this.state.description ? 
                null : 
                `write a little bit about yourself here`}
              />
          </label>
          <label className='location-label'>location
            <input
              type='text'
              value={this.state.location || ''}
              className='location-update update-user-inputs'
              onChange={this.handleChange('location')}
              placeholder={this.state.location ? null : `ex. mootown, usa`}
              />
          </label>
          <div className='update-user-save-button-container'>
            <button className='update-user-save-button'>Save</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(EditUser)