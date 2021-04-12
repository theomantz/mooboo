import React from 'react'

export default ({ data, show }) => {
  if(!show || !data) return null
  const dropdownList = data.map((item, index) => (
    <li className="dropdown-list-item" 
    key={`board-list-item-${index}`}>
      <span className='dropdown-list-text'>
        {item.title}
      </span>
      <button className='dropdown-list-save-button button-link'>Save</button>
    </li>
  ));
  return(
    <div className='drop-down-list-container'>
      <ul className='board-list'>
        {dropdownList}
      </ul>
    </div>
  )
}