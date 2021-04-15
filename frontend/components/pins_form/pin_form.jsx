import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPaw, 
  faOtter,
  faHippo,
  faDog,
  faSpider,
  faKiwiBird,
  faHorse,
  faFrog,
  faFish,
  faDragon,
  faDove,
  faCrow,
  faCat,
  faCamera,
  faCloudMeatball,
  faHamburger,
  faPizzaSlice,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid';

const icons = [
  faPaw,
  faOtter,
  faHippo,
  faDog,
  faSpider,
  faKiwiBird,
  faHorse,
  faFrog,
  faFish,
  faDragon,
  faDove,
  faCrow,
  faCat,
  faCamera,
  faCloudMeatball,
  faHamburger,
  faPizzaSlice,
];

class PinForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.pin
    this.state.errors = this.props.errors || null
    this.state.icon = icons[Math.floor( Math.random() * icons.length )]

    this.handleFile = this.handleFile.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  componentDidMount() {
    const { fetchBoards, userId } = this.props
    const icon = icons[Math.floor(Math.random() * icons.length)];
    this.setState({ icon: icon })
    fetchBoards(userId)
  }
  
  handleChange(e) {
    const { name, value } = e.currentTarget
    this.setState({ [name]: value })
  }

  handleFile(e) {
    this.setState({
      photoFile: e.currentTarget.files[0],
      photoPreview: URL.createObjectURL(e.currentTarget.files[0])
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if( this.state.errors ) this.setState({ errors: null })
    const { formType, userId } = this.props
    if( !this.state.photoFile ) {
      return this.setState({ errors: 'No pic, no pin'})
    } else if( !this.state.title ) {
      return this.setState({ errors: 'Needs a title!'})
    } else {
      const formData = new FormData;
      formData.append( 'pin[title]', this.state.title )
      formData.append( 'pin[photo]', this.state.photoFile )
      formData.append( 'pin[uploader_id]', this.props.userId )
      formData.append( 'pin[description]', this.state.description )
      this.props.createPin(formData)
        .then(this.props.history.push(
            formType === 'Create' ? 
            `/home` :
            `users/${userId}`
          ),
          errors => this.setState({ errors: errors })
        )
    }
  }

  renderImage() {
    if( !this.state.photoPreview ) {
      const icon = this.state.icon
      return(
        <div className='pin-image placeholder'>
          <FontAwesomeIcon icon={icon} size='5x' />
        </div>
      )
    } else {
      return(
        <div className='pin-image'>
          <img src={this.state.photoPreview} />
        </div>
      )
    }
  }

  renderErrors() {
    if( !this.state.errors ) return null
    const errors = this.state.errors
    return(
      <ul className='pin-form-errors'>
          {errors}
      </ul>
    )
  }
  
  render() {
    const { formType } = this.props
    const icon = this.state.icon.iconName
    const icon2 = icons[Math.floor(Math.random() * icons.length)].iconName
    return (
      <div className="pin-form-container">
        <div className="update-user-back-arrow-container">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="update-user-back-arrow"
          onClick={() => this.props.closeModal()}
        />
        </div>
        <form className="pin-form" onSubmit={this.handleSubmit}>
          <div className="pin-image-container pin-form-left-container">
            {this.renderImage()}
            <label className="pin-image-input-label">
              <input
                type="file"
                name="photo"
                className="pin-file-input"
                onChange={this.handleFile}
              />
            </label>
          </div>
          <div className="pin-form-right-container">
            <header className="pin-form-header">
              <div className="pin-form-header-container">
                <h1 className="pin-form-header-text">
                  {formType === "Create" ? "Lets Pin!" : "Lets make a Change!"}
                </h1>
              </div>
              <div className="pin-form-save-container">
                <button className="button-link">{this.props.formType}</button>
              </div>
            </header>
            <div className="pin-form-input-container">
              <label className="pin-title-input-label">
                title
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  className="pin-input title-input"
                  onChange={this.handleChange}
                  placeholder={`Like '${icon}' or '${icon2}'`}
                />
              </label>
              <label className="pin-description-input-label">
                description
                <input
                  type="textarea"
                  name="description"
                  value={this.state.description}
                  className="pin-input description-input"
                  onChange={this.handleChange}
                  placeholder={`This wonderful ${icon}`}
                />
              </label>
              {this.renderErrors()}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PinForm