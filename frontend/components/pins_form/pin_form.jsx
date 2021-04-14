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
} from '@fortawesome/free-solid-svg-icons'

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
    if( !this.state.photoFile ) {
      return this.setState({ errors: 'No pic, no pin'})
    } else {
      const formData = new FormData;
      formData.append( 'pin[title]', this.state.title )
      formData.append( 'pin[description]', this.state.description )
      formData.append( 'pin[photo]', this.state.photoFile )
      this.props.createPin()
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
  
  render() {
    const { formType } = this.props
    const icon = this.state.icon.iconName
    const icon2 = icons[Math.floor(Math.random() * icons.length)].iconName
    return(
    <div className='pin-form-container'>
      <form className='pin-form'>
        <div className='pin-image-container pin-form-left-container'>
          {this.renderImage()}
          <label className='pin-image-input-label'>
            <input
              type='file' 
              className='pin-file-input'
              onChange={this.handleFile}
              />
          </label>
        </div>
        <div className='pin-form-right-container'>
          <header className='pin-form-header'>
            <div className='pin-form-header-container'>
              <h1 className='pin-form-header-text'>
                { formType === 'Create' ? 
                'Lets Pin!' :
                'Lets make a Change!' }
              </h1>
            </div>
            <div className='pin-form-save-container'>
              <button className='button-link'>{this.props.formType}</button>
            </div>
          </header>
          <div className='pin-form-input-container'>
            <label className='pin-title-input-label'>title
              <input
                type='text'
                value={this.state.title} 
                className='pin-input title-input'
                onChange={this.handleChange}
                placeholder={`Like '${icon}' or '${icon2}'`}
                />
            </label>
            <label className='pin-description-input-label'>description
              <input
                type='textarea'
                value={this.state.description} 
                className='pin-input description-input'
                onChange={this.handleChange}
                placeholder={`This wonderful ${icon}`}
                />
            </label>
          </div>
        </div>
      </form>
    </div>
    )
  }
}

export default PinForm