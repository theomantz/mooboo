import React from 'react'
import uuid from 'react-uuid'

class SaveButton extends React.Component {
 
  render() {
    return (
      <div className="save-button-container" key={uuid()}>
        <div className="save-button-dropdown-container">
          <button className="save-button-dropdown">
            Quick Save
          </button>
        </div>
        <div className="save-button-button-container button">
          <button className="save-button-button">
            Save
          </button>
        </div>
      </div>
    )
  }
}

export default SaveButton