import React from 'react';
import { docStyles } from '../config/document_grid'
import PinCardContainer from '../card/pin_card_container'
import AddButtonContainer from '../add_button/add_button_container'


const actions = [
  "DOMContentLoaded",
  "scroll",
  "resize",
]

class DocumentGrid extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: null,
      height: null,
      numCols: null,
    }

    this.handleLoad = this.handleLoad.bind(this)
    
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchPins()
    this.props.openModal('loading')
    document.addEventListener('load', this.handleLoad())
  }

  componentWillUnmount() {
    document.removeEventListener('load', this.handleLoad())
  }

  handleLoad() {
    setTimeout(() => this.props.closeModal() ,2000);
  }

  renderContentCards() {
    if( !this.props.content.length ) return null
    const { content } = this.props
    const contentCards = content.map(( content, index ) => {
      return(
      <PinCardContainer 
        content={content}
        location='main-page'
        key={`doc-card-${index}`}
      />
      )
    })
    return contentCards
  }

  renderContent() {
    return(
      <div className='profile-page-pin-index'>
        {this.renderContentCards()}
      </div>
    )
  }

  render() {
    return (
      <div className='main-page-pin-index'>
        {this.renderContent()}
        <AddButtonContainer className="add-button-main" location='main'/>
      </div>
    );
  }
}

export default DocumentGrid