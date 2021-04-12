import React from 'react'

class CreateBoard extends React.Component {
  constructor(props) {
    this.state = this.props.board
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type) {
    return(e =>
        this.setState({ [type]: e.currentTarget.value })
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.CreateBoard(this.state)
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>title
            <input
              type='text'
              onChange={this.handleChange('title')}
              placeholder="Like 'travel' or 'recipes to make'.." />
          </label>
          <button>Create</button>
        </form>
      </div>
    )
  }
}

export default CreateBoard