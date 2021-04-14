import React from 'react'

class PinForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.pin


  }

  componentDidMount() {
    const { fetchBoards, userId } = this.props
    fetchBoards(userId)
  }
  
  handleChange(e) {
    const { name, value } = e.currentTarget
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()

  }

  renderImage() {
    
  }
  
  render() {
    <div className='pin-form-container'>
      <form className='pin-form'>
        {this.renderImage()}
      </form>
    </div>
  }
}

export default PinForm