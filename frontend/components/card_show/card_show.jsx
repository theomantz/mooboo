import React from 'react'
import uuid from 'react-uuid';


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


  renderContent() {
    if (!this.props.content) return null;
    const { photoUrl, title, description, id } = this.props.content
    return (
      <div className="content-show-card" key={`content-show-key-${id}`}>
        <div className="content-show-image-container">
          <img src={photoUrl} alt={title}/>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  render() {
    debugger
    return (
      <div className="content-show-card-container" key={uuid()}>
        {this.renderContent()}
      </div>
    );
  }
}

export default CardShow