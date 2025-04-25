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
                    <HoverPlayVideo src="/61e app demo.mp4" name="Napoleonic Wars Social App" techstack="Go, React.js, MySQL, Docker" />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;It's a social web app for use of Saturday NA linebattle attendees in the game 
                        Mount and Blade: Napoleonic Wars. The backend is made with Go, the frontend with React.js but the database uses a hybrid
                        storage approach where large statistical data is stored in a MySQL DB, while some user data like profile pictures, passwords, sessionIDs,
                        etc are stored within the backend's file system. 
                        This web app is like an upscaled and upgraded version of the leaderboard page in the 61e Website project
                        (which is shown just below). </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;
                        It's concept is a social app that revolves around the Saturday NA linebattles that take place weekly, so it would revole around the statistics of these events, the players and the regiments (groups) which attend. So in addition to
                        storing player statistics over time (like a leaderboards database), it also has uses not showed in the short demo above. One of the more 
                        important uses not shown is the administrative tool. This app also has an admin login for leaders of the regiments, which enables them to
                        enlist their members, give them decorations/medals, create medals, choose who to set as player of the week based on number of commendations,
                        etc.
                         </p>
                         <p>This project at it's current state contains many more features such as an email verification/password reset system, profile personalization,
                         etc, but I've taken enough of your time talking about it. I'd be happy to discuss it further over an interview though!
                         </p>
                </div>
                <div className='projectCard'>
                    <HoverPlayVideo src="/I&E battlesim.mp4" name="I&E battle simulator" techstack="HTML/CSS, JavaScript"/>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;This is a simple web based battle simulator for a game my friend made called Industry & Empire.
                    It's purpose is to simulate a battle for this game, using a similar battle calculator as a popular grand strategy game called
                    Victoria II. I made this project shortly after the 61e Website project because I wanted to learn more Javascript and 
                    HTML, which gave me a lot of the experience I needed for writing the frontend of the Napoleonic Wars Social App. </p> <p>
                    All of it's functionality is shown in the short demo,  you can modify different battle modifiers on 
                    the top left such as terrain, leadership, tactics, etc, then you can set a combat width to build a 2xCwdith on each side map to deploy 
                    your forces. After that you can build your armies by clicking on the unit symbols to give some basic statistics (Which you can modify),
                    then you can add that unit to an army. After building your army in this way, you can deploy your units by clicking on the map, and pressing
                    deploy unit, once done with deployment, you can press the fight button to simulate a "turn" of fighting, where usually battles have as many
                    turns until one army runs out of troops or decides to retreat prematurely.
                    </p>
                </div>
                <div className='projectCard' style={{height: '600px'}}>
                    <HoverPlayVideo src="/61e Web Demo.mp4" name="61e Website" techstack="Python, Django, HTML/CSS, JavaScript, Celery"/>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;This was one of my first personal projects, one that I made to get better at programming in general because at this point,
                    I had just switched from Electrical Engineering to Computer Science. This project was inspired by a series of youtube vidoes
                    posted by Harvard about web programming using Django. In addition to my familiarity with Python, this is the reason why I used Django.
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;This website is the unofficial website of a gaming community in Mount and Blade: Napoleonic Wars called the 61e.
                    In addition to giving information about the community, it contains a leaderboards page which updates each week, parsing a server log file
                    to populate some Python lists with player data. Data is not persistent, but this approach works for a weekly showing.
                    It also has a newsletter which emails you whenever a 61e community post is made in a website called Moria Shrine.
                    
                    </p>
                </div>
                <div className='projectCard'  style={{height: '600px'}}>
                <HoverPlayVideo src="/Maze AI demo.mp4" name="Maze game AI solver" techstack="Python, Flask, JavaScript, HTML/CSS"/>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;This is a group project for an AI class for college. The idea was to make a Maze solver which used multiple algorithms
                        to test how one does against another. After some research we decided to use Beam search, A star, and Dijkstra's.
                        You can press start to generate a random maze, which will then be solved by 3 different algorithms, the solutions will then be 
                        animated concurrently to show how one compares against the other.
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;
                        My main roles were implementing a random maze generation algorithm (with a definitive, non-trivial answer), 
                        the frontend UI, and writing the testing code for the algorithms and maze generation. I also helped with the implementation
                        of the Dijkstra algorithm.
                    </p>
                </div>  
            </div>
        </div>
    )
};

export default MyProjects;