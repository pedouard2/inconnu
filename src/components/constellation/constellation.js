// ConstellationDots.js
import React, { useState, useEffect, useRef  } from 'react';
import { Stage, Layer} from 'react-konva';
import StarPoint from '../stars/stars';
const Constellation = ({constellationData}) => {

  const stageRef = useRef(null);

  useEffect(() => {
    // Create stars on stage
    console.log(stageRef.current)
  }, []);
  const stars =  constellationData.points.map((data,i) => <StarPoint key={i} points={data} /> ) 
  return (
    <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef}>
      <Layer>
        {stars}
      </Layer>
    </Stage>
  );
};

export default Constellation;

