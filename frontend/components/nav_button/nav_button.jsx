import React from 'react'
import BoardsIndexContainer from '../boards_profile_index/boards_index_container'

export default () => {
  const { activePath }
  const active = 
  const styleClass = active ? 'active' : null
  debugger
  return(
    <div className="nav-button-container">
      <div className={`nav-button-${styleClass}`}>
        <button>Boards</button>
        {active ? <BoardsIndexContainer /> : null}
      </div>
    </div>
  )
}