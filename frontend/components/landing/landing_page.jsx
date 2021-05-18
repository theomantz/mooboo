import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from "react-spring";
import Column from './column'
import Urls from './urls';
import uuid from 'react-uuid';

const LandingPage = () =>  {

  const [numColumns, setNumColumns] = useState(undefined)
  const [windowHeight, setWindowHeight] = useState(undefined)
  const [columns, setColumns] = useState(null)

  const greetings = [
    "mood",
    "taste",
    "style",
    "attitude"
  ]
  
  const renderGreeting = () => {
    return (
      <div className="landing-page-text">
        <h1 className="landing-page-header">welcome to mooboo</h1>
        <span className="landing-page-subtext">find your next mood</span>
      </div>
    )
  }

  
  useEffect(() => {
    
    function handleResize() {
      setNumColumns(Math.floor((window.innerWidth - 32) / 250));
      setWindowHeight(window.innerHeight);
    }
    
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    } 
  }, [])

  useEffect(() => {
    if(windowHeight && !columns) {
      setColumns(buildColumns());
    }
  })

  const renderGrid = () => {
    if(!windowHeight || !numColumns) return null
    return(
       <div 
        className="splash-page-pin-index"
        style={{
          gridTemplateColumns: `repeat(${numColumns}, 250px)`,
          gridTemplateRows: 'none',
          height: '100vh',
          overflowY: 'hidden',
        }}
      >
      {columns ? columns : null}
      </div>
    );
  }

  const buildColumns = () => {
    if(!windowHeight) return null
    const columns = []
    let index = 0

    for(let i = 0; i < numColumns; i++) {
      let height = windowHeight
      let cards = []
      while(height > 0 && cards.length < 10) {
        const photo = Urls[index]
        cards.push(renderCard(photo))
        height = Math.floor(height - (photo.height / (photo.width / 250)))
        index++
      }
      columns.push(<Column CARDS={cards} key={uuid()} index={i} length={numColumns}/>)
    }

    return columns
  }

  const renderCard = (urlInput) => {
    const url = urlInput
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
  

  return (
    <div className="outer-landing-container">
      {renderGreeting()}
      {renderGrid()}
      <div
        style={{
          height: "180px",
          maxHeight: "20%",
          width: "100%",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))",
          position: 'fixed',
          bottom: '0'
        }}
      ></div>
    </div>
  );

}

export default LandingPage