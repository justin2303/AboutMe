import React, {useState} from 'react';
import NavBar from './navbar';
import './project.css';
import HoverPlayVideo from './video';
const MyProjects = () => {
    return (
        <div>
            <div className='navbar-wrapper'>
                <NavBar/> 
            </div>
            <div className="projectWrapper">
                <div className='projectCard'>
                    <HoverPlayVideo src="/61e app demo.mp4"/>
                    <p>test</p>
                </div>
                <div className='projectCard'>
                    <HoverPlayVideo src="/I&E battlesim.mp4"/>
                    <p>test</p>
                </div>
                <div className='projectCard'>
                    <HoverPlayVideo src="/61e Web Demo.mp4"/>
                    <p>test</p>
                </div>
                <div className='projectCard'>
                <HoverPlayVideo src="/Maze AI demo.mp4"/>
                    <p>test</p>
                </div>  
            </div>
        </div>
    )
};

export default MyProjects;