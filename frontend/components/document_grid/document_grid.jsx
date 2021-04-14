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
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchPins()
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