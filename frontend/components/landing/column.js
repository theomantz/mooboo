import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";

const Column = ({NUM_CARDS}) => {

  const vhToPixel = (value) => `${(window.innerHeight * value) / 100}px`;
  const vwToPixel = (value) => `${(window.innerWidth * value) / 100}px`;

  const [cards, setCards] = useState(NUM_TRANS);

  const transitions = useTransition(cards, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.molasses,
    onRest: () => setItems([]),
  });

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems(NUM_TRANS);
      }, 2000);
    }
  }, [items]);

  return (
    <div style={{ display: "flex" }}>
      {transitions(({ opacity }, item) => (
        <animated.div
          style={{
            opacity: opacity.to(item.op),
            transform: opacity
              .to(item.trans)
              .to((y) => `translate3d(0,${y}px,0)`),
          }}
        >
          {item.fig}
        </animated.div>
      ))}
    </div>
  );

  
}