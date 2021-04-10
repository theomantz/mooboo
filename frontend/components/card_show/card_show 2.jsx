import React from 'react'
import uuid from 'react-uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
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
          <img src={photoUrl} alt={title}
            className="content-show-image"
          />
        </div>
        <div className="content-card-right-container">
          <div className="content-card-save-button-container">
            <SaveButtonContainer />
            <div className="content-card-show-close-button">
              <Link to='/home'>
                <FontAwesomeIcon icon={faWindowClose} size='2x' className='close-button-icon' />
              </Link>
            </div>
          </div>
          <div className="content-show-card-text-container">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="document-grid-show-page-container">
        </div>
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