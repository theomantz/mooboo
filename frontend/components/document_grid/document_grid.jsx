import React from 'react';
import { docStyles } from '../config/document_grid'
import PinCardContainer from '../card/pin_card_container'
import DocumentColumnContainer from '../document_col/document_col_container'

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

    // this.updateContainerDimensions = this.updateContainerDimensions.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchPins()
    // this.updateContainerDimensions();
    // actions.forEach(event =>
    //   window.addEventListener(event, this.updateContainerDimensions))
  }

  // componentWillUnmount() {
  //   actions.forEach((event) =>
  //     window.removeEventListener( event, this.updateContainerDimensions)
  //   );
  // }

  // updateContainerDimensions() {
  //   this.setState( { 
  //     width: this.container.offsetWidth, 
  //     height: this.container.offsetHeight,
  //     numCols: Math.floor(this.container.offsetWidth / docStyles.docColWidth) })
  //   this.props.setHeight(this.state.height)
  //   this.props.setCols(this.state.numCols)
  // }

  // columnConstructor() {
  //   const { columns, content } = this.props
  //   let divCols = []
  //   let localContent = content
  //   if(content.length > 0 ) {
  //     let contentSlice = Math.ceil(content.length / columns)
  //     for(let i = 0; i < columns; i++ ) {
  //       divCols.push(
  //         <DocumentColumnContainer
  //           id={i}
  //           key={`div-col-${i}`} 
  //           content={
  //             (i + 1) === columns ? localContent : localContent.slice(0, contentSlice)
  //             }
  //           />
  //       )
  //       localContent = localContent.slice(contentSlice)
  //     }
  //   return divCols;
  //   }
  // }

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
      // <div style={docStyles.docGrid}>
      //   {this.columnConstructor()}
      // </div>
      <div className='profile-page-pin-index'>
        {this.renderContentCards()}
      </div>
    )
  }

  render() {
    return (
      <div className='main-page-pin-index'>
        {this.renderContent()}
      </div>
    );
  }
}

export default DocumentGrid