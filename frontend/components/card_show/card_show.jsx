import React from 'react'


class CardShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoUrl: null,
      title: null,
      description: null,

    }
  }
  
  componentDidMount() {
    this.props.fetchContent(this.props.match.params.pinId)
  }

  updateContentDetails() {
    const { photoUrl, title, description } = this.props.content
    this.setState({
      photoUrl: photoUrl,
      title: title,
      description: description
    })
  }

  renderCardDetails() {
    const { title, description } = this.state
    if(this.title) {
      <div>
        {title}
        {description}
      </div>
    }
  }

  renderContent() {
    const { photoUrl, title, description } = this.props.content
    debugger
    return (
      <div className="content-show-card">
        <div className="content-show-image-container">
          <img src={this.props.content.photoUrl} alt={title}/>
          <p>{title}</p>
        </div>
      </div>
    );
  }

  render() {
    if(!this.props.content) return null;
    return (
      <div className="content-show-card-container">
        {this.renderContent()}
        {this.renderCardDetails()}
      </div>
    );
  }
}

export default CardShow