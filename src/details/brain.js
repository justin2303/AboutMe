import React, {useState, useEffect} from 'react';
import './brain.css'
const Brain =() => {
    const [NodeShown, showNode] = useState(false);
    const [nodePositions, setNodePositions] = useState([]);
    const [nodeLabels, setNodeLabels] = useState([]);
    const [currentCategory, setCategory] = useState([]);
    const languages = ["Go", "Python", "JavaScript", "MySQL", "PSQL", "C++", "HTML/CSS", "Java", "C" ]
    const frameworks = ["React.js", "Node.js", "Angular", "Django", "Flask", "Celery", "Pytest"]
    const Tools = ["Docker", "AWS", "GitHub", "pdb", "Jupyter", "VS Code", "Bash", "g++"]
    const Concepts = ["Algorithms and datastructures", "Multithreading", "RESTful API Design", "SQL/no-SQL DBs", 
        "Event Driven Architecture", "Version Control", "Agile Scrum"]
    let thing = languages
    const [visibleCount, setVisibleCount] = useState(0);
    // Origin of topLeft button
    const origin={
        topLeft:{ x: 200, y: 220 },//when you do this for the other ones add the offset of 20
        topRight: {x: 300, y:230},
        bottomLeft: {x: 200, y:240},
        bottomRight: {x: 280, y: 280}
    } 
  
    const radius = 200;
    const angles = {
        topLeft: [180, 165, 150, 135, 120, 100, 80, 60, 40    ],
        topRight: [0, 20, 40, 60, 80, 100, 120  ],
        bottomLeft: [180, 200, 220, 240, 255, 275, 290, 300],
        bottomRight:[10, 340, 320, 300, 280, 250, 220]
    }
    const innerOffset = 80  ;
    const outerOffset = 40  ;
    useEffect(() => {
      if (NodeShown) {
        setVisibleCount(0); // Reset visible count on start
        const interval = setInterval(() => {
          setVisibleCount(prev => {
            if (prev >= nodeLabels.length) {
              clearInterval(interval);
              return prev;
            }
            return prev + 1;
          });
        }, 200); // Delay between each node (adjust as needed)
        return () => clearInterval(interval); // Cleanup
      }
    }, [NodeShown, nodeLabels.length]);
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
        if (currentCategory !== "languages") {
          showNode(false); // reset first
          setTimeout(() => {
            const positions = getNodePositions("topLeft");
            setNodePositions(positions);
            setNodeLabels(languages);
            setCategory("languages");
            showNode(true); // re-show
          }, 50); // short delay
        } else {
          showNode(!NodeShown); // toggle if same category
        }
      };
      const handleFrameworks = () => {
        if (currentCategory !== "frameworks") {
          showNode(false); // reset first
          setTimeout(() => {
            const positions = getNodePositions("topRight");
            setNodePositions(positions);
            setNodeLabels(frameworks);
            setCategory("frameworks");
            showNode(true); // re-show
          }, 50); // short delay
        } else {
          showNode(!NodeShown); // toggle if same category
        }
      };
      const handleTools = () => {
        if (currentCategory !== "tools") {
          showNode(false); // reset first
          setTimeout(() => {
            const positions = getNodePositions("bottomLeft");
            setNodePositions(positions);
            setNodeLabels(Tools);
            setCategory("tools");
            showNode(true); // re-show
          }, 50); // short delay
        } else {
          showNode(!NodeShown); // toggle if same category
        }
      };
      const handleConcepts = () => {
        if (currentCategory !== "concepts") {
          showNode(false); // reset first
          setTimeout(() => {
            const positions = getNodePositions("bottomRight");
            setNodePositions(positions);
            setNodeLabels(Concepts);
            setCategory("concepts");
            showNode(true); // re-show
          }, 50); // short delay
        } else {
          showNode(!NodeShown); // toggle if same category
        }
      }
    return (
        <div className = 'brainDiv'>
              <img src="/transparent brain.png" alt="brain" className="brainImg" />
            <button className='topLeft' onClick={handleLanguages}>Languages</button>
            <button className='topRight' onClick={handleFrameworks}>Frameworks</button>
            <button className='bottomLeft' onClick={handleTools}>Tools</button>
            <button className='bottomRight' onClick={handleConcepts}>Concepts</button>
            {NodeShown && (
        <svg className="brainLines">
          {nodePositions.slice(0, visibleCount).map((pos, idx) => (
            <React.Fragment key={idx}>
              <line
                className="nodeFadeIn"
                x1={pos.x1}
                y1={pos.y1}
                x2={pos.x2}
                y2={pos.y2}
                stroke="white"
                strokeWidth="2"
              />
              <text
                className="nodeFadeIn"
                x={pos.x2 + outerOffset * Math.cos(pos.rad)}
                y={pos.y2 - outerOffset * Math.sin(pos.rad)}
                fill="white"
                fontSize="18"
                textAnchor="middle"
                dominantBaseline="middle"
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