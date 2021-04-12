import React from 'react'
import uuid from 'react-uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import DropdownCardContainer from '../dropdown_card/dropdown_card_container'

class SaveButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'Quick Save',
      open: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

 
  componentDidMount() {
    this.props.fetchBoards(this.props.userId)
  }



  handleClick() {
    this.state.open ? this.setState({ open: false }) : this.setState({ open: true })
  }

  renderSaveButton() {
    if( this.state.open ) return null
    return (
      <div className="save-button-button-container button">
        <button 
          className={`save-button-button`}>
          Save
        </button>
      </div>
    );
  }

  render() {
    if(!this.props.boards) return null
    const { boards, pinId } = this.props
    const show = this.state.open
    return (
      <div className={`save-button-container save-button-container-${this.state.open}`} key={uuid()}>
        <div className="save-button-dropdown-container">
          <button
            className={`save-button-dropdown save-button-${this.state.open}`}
            onClick={this.handleClick}>
            {!this.state.open ? 'Quick Save' : 'Save to a Board'}
            <FontAwesomeIcon icon={faChevronCircleDown} className='dropdown-list-icon'/>
          </button>
            <DropdownCardContainer data={boards} show={show} pinId={pinId} />
        </div>
        {this.renderSaveButton()}
      </div>
    )
  }
}

export default SaveButton