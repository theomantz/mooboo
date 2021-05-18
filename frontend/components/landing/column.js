import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";

const Column = ({CARDS, index, length}) => {

  const [cards, setCards] = useState(CARDS);

  const transitions = useTransition(cards, {
    from: {
      opacity: 0,
      transform: "translate3d(0px, -50%, 0px)",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0px, 0px, 0px)",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0px, 50%, 0px)",
    },
    delay: (200  ),
    config: config.molasses,
    onRest: () => setCards([]),
  });

  let margin;
  if (length < 3) {
    margin = [0];
  } else if (length === 3) {
    margin = [0, 1, 0];
  } else if (length === 4) {
    margin = [0, 1, 1, 0];
  } else if (length === 5) {
    margin = [0, 1, 2, 1, 0];
  } else if (length === 6) {
    margin = [0, 1, 2, 2, 1, 0];
  } else if (length === 7) {
    margin = [0, 1, 2, 3, 2, 1, 0];
  }

  useEffect(() => {
    // debugger
    if (cards.length === 0) {
      setTimeout(() => {
        setCards(CARDS);
      }, ( 2000 + ( 250 * index )));
    }
  }, [cards]);

  let midPoint;
  if(length % 2 === 0) {
    let mid = length / 2
    midPoint = [mid, mid + 1]
  } else {

  }



  return (
    <div style={{ 
      display: "flex", 
      flexDirection: 'column',
      marginTop: `${margin[index] * 50}px`
    }}>
      {transitions((styles, item) => (
        <animated.div
          style={{
            ...styles
          }}
        >
          {item}
        </animated.div>
      ))}
    </div>
  );
}

export default Column;