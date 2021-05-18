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
      contentCards: null,
      loading: true
    }

    // this.handleLoad = this.handleLoad.bind(this)
    
  }

  componentDidMount() {
    const { contentCards, loading } = this.state
    const { fetchPins, openModal, closeModal, content } = this.props

    window.scrollTo(0, 0)


    if(!content.length) {
      fetchPins()
    }
    
    if(!contentCards) {
      openModal('loading')
      this.buildContentCards()
    }

    if( !!contentCards && loading ) {
      this.setState({ loading: false });
      setInterval(closeModal(), 2000)
    }

  }

  componentDidUpdate() {
    if(!!contentCards && !loading) return null
    const {contentCards, loading} = this.state
    const { closeModal } = this.props

    if(!contentCards) {
      this.buildContentCards();
    }

    if( !!contentCards && loading ) {
      this.setState({loading: false})
      setInterval(closeModal(), 2000);
    }
  }

  buildContentCards() {

    if( !this.props.content.length ) return null
    const { content } = this.props

    content.sort((a, b) => {
      let diff = new Date(b.updated_at) - new Date(a.updated_at);
      return diff < 0 ?  -1  : diff === 0 ? 0 : 1
    })

    const contentCards = content.map(( content, index ) => {
      return (
        <PinCardContainer 
          content={content}
          location='main-page'
          key={`doc-card-${index}`}
        />
      )
    })

    this.setState({
      contentCards: contentCards,
    })

  }

  renderContent() {
    const { contentCards } = this.state
    if (!contentCards) return null
    return(
      <div className='profile-page-pin-index'>
        {contentCards}
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