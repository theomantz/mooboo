import React from 'react'
import uuid from 'react-uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SaveButtonContainer from '../save_button/save_button_container'
import DocumentGridContainer from '../document_grid/document_grid_container'
import { Link } from 'react-router-dom';


class CardShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoUrl: null,
      title: null,
      description: null,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  componentDidMount() {
    const { fetchContent, fetchUser, match, content } = this.props
    fetchContent(match.params.pinId)
    window.scrollTo(0, 0)
    if ( content ) {
      fetchUser(content.uploader_id)
    }
  }

  renderDeleteButton() {
    if( !this.props.content || !this.props.userId ) return null
    const { content, userId } = this.props
    if( content.uploader_id !== userId ) return null
    return(
      <div className='pin-card-delete-button-container'>
        <Link to='/home'>
          <button
            className='button-link delete-button'
            onClick={this.handleClick}>Delete Pin</button>
        </Link>
      </div>
    )
  }

  renderFollow() {
    if( !this.props.location || !this.props.userId ) return null
    const { uploader, userId } = this.props
    if( !this.props.uploader || uploader.id === userId ) return null
    return(
      <div>
        <h1>Testing Follows</h1>
      </div>
    )
  }

  handleClick() {
    this.props.deletePin(this.props.content.id)
  }

  renderContent() {
    if (!this.props.content) return null;
    const { photoUrl, title, description, id } = this.props.content
    const { pinId } = this.props.match.params
    return (
      <div className="content-show-card" key={`content-show-key-${id}`}>
        <div className="content-card-show-close-button">
          <Link to="/home">
            <FontAwesomeIcon icon={faArrowLeft} className="content-show-card-arrow-close"/>
          </Link>
        </div>
        <div className="content-show-image-container">
          <img src={photoUrl} alt={title} className="content-show-image" />
        </div>
        <div className="content-card-right-container">
          <div className="content-card-save-button-container">
            <SaveButtonContainer pinId={pinId}/>
          </div>
          <div className='content-nav-container'>
            <div className="content-show-card-text-container">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            {this.renderDeleteButton()}
            {this.renderFollow()}
          </div>
        </div>
        <div className="document-grid-show-page-container"></div>
      </div>
    );
  }

  render() {
    return (
      <div className="content-show-card-container" key={uuid()}>
        {this.renderContent()}
      </div>
    );
  }
}

export default CardShow