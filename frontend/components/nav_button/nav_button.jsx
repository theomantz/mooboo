import React from 'react'
import { render } from 'react-dom'
import BoardsIndexContainer from '../boards_profile_index/boards_index_container'

class NavButton extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { activePath } = this.props
    const active = activePath === 'boards' 
    const styleClass = active ? 'active' : null
    return(
      <div className="nav-button-container">
        <div className={`nav-button-${styleClass}`}>
          <button>Boards</button>
          {active ? <BoardsIndexContainer /> : null}
        </div>
     </div>
    )
  }

}

export default NavButton