import React, {useState} from 'react';
import './brain.css'
const Brain =() => {
    const [NodeShown, showNode] = useState(false);
    const [showLanguages, setLanguages] = useState(false);
    const [showFrameworks, setFrameworks] = useState(false);
    const [showTools, setTools] = useState(false);
    const [showConcepts, setConcepts] = useState(false);
    const [nodePositions, setNodePositions] = useState([]);
    const [nodeLabels, setNodeLabels] = useState([]);
    const languages = ["Go", "Python", "JavaScript", "MySQL", "PSQL", "C++", "HTML/CSS", "Java", "C" ]
    const frameworks = ["React.js", "Node.js", "Angular", "Django", "Flask", "Celery", "Pytest"]
    const Tools = ["Docker", "AWS", "GitHub", "pdb", "Jupyter", "VS Code", "Bash", "g++"]
    const Concept = ["Algorithms and datastructures", "Multithreading", "RESTful API Design", "SQL/no-SQL DBs", 
        "Event Driven Architecture", "Version Control", "Agile Scrum"]
    let thing = languages
    // Origin of topLeft button
    const origin={
        topLeft:{ x: 300, y: 370 },//when you do this for the other ones add the offset of 20
        topRight: {x: 440, y:380},
        bottomLeft: {x: 320, y:430},
        bottomRight: {x: 490, y: 440}
    } 
  
    // 5 directions (like spokes)
    const radius = 200;
    const angles = {
        topLeft: [180, 165, 150, 135, 120, 105, 90, 75, 60    ],
        topRight: [0, 20, 40, 60, 80, 100, 120  ],
        bottomLeft: [180, 200, 220, 240, 260, 280, 300, 320],
        bottomRight:[10, 340, 310, 275, 240, 205, 190]
    }
    const innerOffset = 20  ;
    const setAllFalse = () => {
        setLanguages(false)
        setFrameworks(false)
        setTools(false)
        setConcepts(false)
    }
    const getNodePositions = (type) => {
        return angles[type].map(angle => {
          const rad = (angle * Math.PI) / 180;
          let x = origin[type].x + radius * Math.cos(rad);
          let y = origin[type].y - radius * Math.sin(rad);
          return {
            rad,
            x1: origin[type].x + innerOffset * Math.cos(rad),
            y1: origin[type].y - innerOffset * Math.sin(rad),
            x2: x,
            y2: y,
          };
        });
      };
      const handleLanguages = () => {
        const positions = getNodePositions("topLeft");
        setNodePositions(positions);
        setNodeLabels(languages);
        setAllFalse()  // optional: turn others off
        showNode(!showLanguages);
        setLanguages(!showLanguages);
      };
      const handleFrameworks = () => {
        const positions = getNodePositions("topRight");
        setNodePositions(positions);
        setNodeLabels(frameworks);
        setAllFalse()
        showNode(!showFrameworks);
        setFrameworks(!showFrameworks);
      };
      const handleTools = () => {
        const positions = getNodePositions("bottomLeft");
        setNodePositions(positions);
        setNodeLabels(Tools);
        setAllFalse()
        showNode(!showTools);
        setTools(!showTools);
      };
      const handleConcepts = () => {
        const positions = getNodePositions("bottomRight");
        setNodePositions(positions);
        setNodeLabels(Concept);
        setAllFalse()
        showNode(!showConcepts);
        setConcepts(!showConcepts);
      }
    return (
        <div className = 'brainDiv'>
              <img src="/transparent brain.png" alt="brain" className="brainImg" />
            <button className='topLeft' onClick={handleLanguages}>Languages</button>
            <button className='topRight' onClick={handleFrameworks}>Frameworks</button>
            <button className='bottomLeft' onClick={handleTools}>Tools</button>
            <button className='bottomRight' onClick= {handleConcepts}>Concepts</button>
            {NodeShown && (
        <svg className="brainLines">
          {nodePositions.map((pos, idx) => (
            <React.Fragment key={idx}>
              <line
                x1={pos.x1}
                y1={pos.y1}
                x2={pos.x2}
                y2={pos.y2}
                stroke="white"
                strokeWidth="2"
              />
              <text
                x={pos.x2 + innerOffset * Math.cos(pos.rad)}
                y={pos.y2 - innerOffset * Math.sin(pos.rad)}
                fill="white"
                fontSize="14"
                textAnchor="middle"
                dominantBaseline="middle"
                color="white"
                stroke="white"
              >
                {nodeLabels[idx]}
              </text>
            </React.Fragment>
          ))}
        </svg>
      )}
        </div>
    )
};
export default Brain;