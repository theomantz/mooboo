import React from 'react'
import PinCardContainer from '../card/pin_card_container'
import { docStyles } from '../config/document_grid'

const actions = [
  "scroll"
]


class DocumentColumn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: null,
      loading: true,
    }
  }

  componentDidMount() {
    this.setState({loading: false})
    actions.forEach( event => 
      window.addEventListener(event, this.updateContainerDimensions))
  }

  updateContainerDimensions() {
    if( this.container ) {
      this.setState( {
        height: this.container.offsetHeight,
        loading: true
      });
    }
  }

  componentWillUnmount() {
    actions.forEach(event => 
      window.removeEventListener(event, this.addEventListener))
  }

  renderContent() {
    let docCards
    if( this.props.content.length ) {
      const { content } = this.props
      docCards = content.map((item, index) => <PinCardContainer content={item} key={`doc-card-${index}`} /> )
    }
    return docCards
  }

  render() {
    const { id } = this.props;
    return (
      <div
        style={docStyles.docColumn}
        id={id}
        ref={(el) => (this.container = el)}>
        {this.renderContent()}
      </div>
    );}

}

export default DocumentColumn