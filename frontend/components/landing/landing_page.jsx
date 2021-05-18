import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from "react-spring";
import Urls from './urls';
import uuid from 'react-uuid';
const LandingPage = () =>  {

  const [numColumns, setNumColumns] = useState(0)
  const [columns, setColumns] = useState(null)
  const [index, setIndex] = useState(0)

  const renderGreeting = () => {
    return (
      <div className="landing-page-text">
        <h1 className="landing-page-header">welcome to mooboo</h1>
        <span className="landing-page-subtext">find your mood</span>
      </div>
    )
  }
  
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;



  useEffect(() => {

    setNumColumns(Math.floor((window.innerWidth - 32) / 250));

  }, [])

  const renderGrid = () => {
    if(!windowHeight || !windowWidth) return null
    return(
       <div 
        className="splash-page-pin-index"
        style={{
          gridTemplateColumns: `repeat(${numColumns}, 250px)`,
          gridTemplateRows: 'none'
        }}
      >
      {columns ? columns : null}
      </div>
    );
  }

  const buildColumns = () => {

    const columns = []
    
    for(let i = 0; i < numColumns ; i++ ) {
      columns.push(buildColumn(i))
    }

    return columns
  }

  const buildColumn = (i) => {
    
    let height = windowHeight;
    const column = []

    debugger
    
    while ( height > 0 && column.length < (windowHeight / 200) ) {
      let photo = Urls[index]
      column.push(renderCard(photo))
      setIndex(index + 1)
      height = height - (32 + (photo.height/(photo.width / 250)))
    }

    return column;
    
  }

  const renderColumns = () => {
        debugger;
        const transitions = useTransition(column, {
          from: { opacity: 0 },
          enter: { opacity: 1 },
          leave: { opacity: 0 },
          delay: 200,
          config: config.molasses,
        });

        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {transitions(({ opacity }, item) => (
              <animated.div
                style={{
                  opacity: opacity.to(item.op),
                  transform: opacity
                    .to(item.trans)
                    .to((y) => `translate3d(0,${y}px,0)`),
                }}
              >
                {item}
              </animated.div>
            ))}
          </div>
        );
  }

  const renderCard = (url) => {
    return (
        <div 
          className="content-card-splash"
          key={uuid()}>
          <img
            className="content-card-image-landing"
            src={url.urls.small}
          ></img>
        </div>
    )
  }
  

  return(
    <div className='outer-landing-container'>
        {renderGreeting()}
        {renderGrid()}
    </div>
  )

}

export default LandingPage