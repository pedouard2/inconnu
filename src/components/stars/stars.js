import "./stars.css"
import {Star} from 'react-konva'
// const handleStarClick = (starData) => {
//     // Animate star scaling and position
//   };

// pass xy 
const width = window.innerWidth
const height= window.innerHeight
const StarPoint = () => {
    return (
      <Star
        x = {width/2}
        y = {height/2}
        numPoints = {4}
        innerRadius = {40}
        outerRadius = {70}
        fill = {"yellow"}
        stroke = {"black"}
        strokeWidth = {4}
        // onClick={() => handleStarClick(starData)}
      />
    );
  };

  export default StarPoint;