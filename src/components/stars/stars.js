import "./stars.css"
import {Star} from 'react-konva'
import React, { useState, useEffect, useRef  } from 'react';
import {Spring, animated, useSpring } from "@react-spring/konva"
// const handleStarClick = (starData) => {
//     // Animate star scaling and position
//   };

// pass xy 
const width = window.innerWidth
const height= window.innerHeight
const StarPoint = ({points}) => {

    const [active, setActive] = useState(true)
    const handleClick = () => setActive(!active);
    
    return (
    <Spring
    from = {{
        x :points.x,
        y :points.y,
        numPoints: 6,
        innerRadius: 10,
        outerRadius : 20,
        // fill : "yellow",
        stroke : "black",
        strokeWidth : 4
    }}
    to = {{
        fill: active ? "yellow" : "blue"
    }}>
    {(props) => (
    <animated.Star {...props} onClick={handleClick} />
        )}  
    </Spring>
    );
  };

  export default StarPoint;