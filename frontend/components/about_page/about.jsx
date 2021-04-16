import React from 'react'

export default () => {
  return(
    <div className="about-page-div">
      <h2 className="mooboo-header-text">mooboo</h2>
      <span className='fullstack'>is a fullstack</span>
      <span className='pinterest-span'>
        <img 
          src={window.pinterest} 
          alt='pinterest' 
          style={{width: '90px', margin: 'auto'}}
          classname='pinterest'/>
      </span>
      <span className='clone'>clone</span>
      <p className='built-with'>
        Built with
      </p>
      <div className='build-logos'>
        <img
          src={window.react}
          style={{width: '90px', margin: 'auto'}}
          className='react'/>
        <img
          src={window.ruby_on_rails}
          style={{height: '90px', margin: 'auto'}}
          className='ruby-on-rails'/>
      </div>
    </div>
  )
}

