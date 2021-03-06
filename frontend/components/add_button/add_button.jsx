import React from 'react'
import DropDownProfile from './dropdown_create_profile'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class AddButton extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: false
    }
    
    this.handleClick = this.handleClick.bind(this)
    
  }

  handleClick() {
    const active = this.state.active
    let flag = active ? false : true
    this.setState( { active: flag } )
  }


  
  render() {
    const { location } = this.props
    return (
      <div className={
        `plus-icon-outer-container
        ${location}
        ${this.state.active}`
        }>
        <div 
          className={
            `plus-icon-container
            ${location}
            plus-icon-container-${this.state.active}`
            }
          onClick={this.handleClick}>
          <DropDownProfile 
            active={this.state.active} 
              openModal={this.props.openModal}
              closeModal={this.props.closeModal}
            />
        </div>
          <FontAwesomeIcon 
            icon={faPlus} 
            size="3x" 
            className={
              `profile-add-icon 
              ${location}
              profile-add-icon-${this.state.active}`
              }
            onClick={this.handleClick}
            />
      </div>
    );
  }
}

export default AddButton