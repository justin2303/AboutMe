import React, {useState} from 'react';
import './brain.css'
const Brain =() => {
    const [showNodes, setShowNodes] = useState(false);
    const languages = ["Go", "Python", "JavaScript", "MySQL", "PSQL", "C++", "HTML/CSS", "Java", "C" ]
    // Origin of topLeft button
    const origin = { x: 300, y: 370 };//when you do this for the other ones add the offset of 20
  
    // 5 directions (like spokes)
    const radius = 200;
    const angles = [180, 165, 150, 135, 120, 105, 90, 75, 60    ]; // in degrees
    const innerOffset = 20  ;
    const nodePositions = angles.map(angle => {
      const rad = (angle * Math.PI) / 180;
      let x1= origin.x + radius * Math.cos(rad)
      const padding = 200
      let y1= origin.y - radius * Math.sin(rad)
      if (x1 <0) {
        x1 = padding + x1
      }
      if (y1 <0) {
        y1=  padding + y1
      }
      return {
        rad,
        x: x1,
        y: y1
      };
    });
    const lineOffset = 0;
    return (
        <div className = 'brainDiv'>
              <img src="/transparent brain.png" alt="brain" className="brainImg" />
            <button className='topLeft' onClick={() => setShowNodes(!showNodes)}>Languages</button>
            {showNodes && (
        <>
          <svg className="brainLines">
            {nodePositions.map((pos, idx) => (
              <React.Fragment key={idx}>
              <line
                x1={origin.x + innerOffset * Math.cos(pos.rad)}
                y1={origin.y - innerOffset * Math.sin(pos.rad)}
                x2={pos.x}
                y2={pos.y}
                stroke="white"
                strokeWidth="2"
              />
              <text
                x={pos.x + innerOffset * Math.cos(pos.rad)}
                y={pos.y - innerOffset * Math.sin(pos.rad)}
                fill="white"
                fontSize="14"
                textAnchor="middle"
                dominantBaseline="middle"
                color="white"
                stroke="white"
              >
                {languages[idx]}
              </text>
            </React.Fragment>
            ))}
          </svg>
        </>
      )}
            <button className='topRight'>Frameworks</button>
            <button className='bottomLeft'>Tools</button>
            <button className='bottomRight'>Concepts</button>
        </div>
    )
};
export default Brain;