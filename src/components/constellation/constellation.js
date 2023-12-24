// ConstellationDots.js
import React, { useState, useEffect, useRef  } from 'react';
import { Stage, Layer} from 'react-konva';
import StarPoint from '../stars/stars';
const Constellation = () => {

  const stageRef = useRef(null);

  useEffect(() => {
    // Create stars on stage
    console.log(stageRef.current)
  }, []);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef}>
      <Layer>
        {/* Render stars here */}
        <StarPoint />
      </Layer>
    </Stage>
  );
};

export default Constellation;

