import React, {useState} from 'react';
import './brain.css'
const Brain =() => {
    return (
        <div className = 'brainDiv'>
            <button className='topLeft'>Languages</button>
            <button className='topRight'>Frameworks</button>
            <button className='bottomLeft'>Tools</button>
            <button className='bottomRight'>Concepts</button>
        </div>
    )
};
export default Brain;