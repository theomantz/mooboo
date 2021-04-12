import React from "react";

export default ({ show }) => {
  if( show ) {
    return <div className='modal'></div>
  } else {
    return null
  }
}