import React from 'react'

class SaveButton extends React.Component {
 
  render() {
    return (
      <div className="save-button-container">
        <div className="save-button-dropdown-container">
          <button className="save-button-dropdown">
            Quick Save
          </button>
        </div>
        <div className="save-button-button-container button">
          <button>Save</button>
        </div>
      </div>
    )
  }
}

export default SaveButton