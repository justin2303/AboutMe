import React, {useState} from 'react';
import NavBar from './navbar';
import './general.css';
const AboutMe = () => {
    const [showAbout, setAbout] = useState(true);
    const [showSkills, setSkills] = useState(false)
    const HandleAbout = () => {
        setAbout(!showAbout);
        setSkills(!showSkills);
      };
    const HandleFAQ = () => {
        setSkills(!showSkills);
        setAbout(!showAbout);
      };
    return (
        <div>
            <div className='navbar-wrapper'>
                <NavBar/> 
            </div>
            <div className="pageWrapper">
                <button className="sideButton" onClick={HandleAbout} disabled={showAbout}>← Back</button>
                <div className='container'>
                    {showAbout && (<div className='personCard'>
                        <img src="/seydlitz.png" alt="Profile" className="cardImage" />
                        <p className='introText1'>Hi, I'm Justin, I'm a software engineer who's passionate about writing functional, efficient,
                            clean code. I'm somewhat of a fullstack engineer as I'm comfortable with any part of the stack, but my backend knowledge
                            is definitely stronger than my frontend.
                        </p> 
                        <p className='introText'>
                            I decided to make an about me page because I thought it would help me stand out as a job applicant, and to touch up on some 
                            react. As you can probably gather, I am looking for a job, hopefully software related, but at this point I'd take anything
                            that gives me the opportunity to get the job I'm looking for. In terms of relevant experience, I interned for Xage Security
                            in Palo Alto throughout the summer of 2024, where I successfully integrated a performace metric collecting system into the 
                            testing suite of the QA team. I did a few other things there like fixing minor bugs, creating simple tools, writing CI/CD pipelines.
                            The 2 main things I took away from that internship was: <br />
                            1. The ability and tools required to work effectively on projects as a team. (e.g. Git, AGILE, etc.) <br />
                            2. Familiarity and comfortability with writing fullstack, especially backend code. <br />
                            Both of which I developed further through a personal project, which is now on hold due to more pressing life issues.
                        </p>
                        </div>
                    )}
                    {showSkills && (<div >
                        <div className='Qcard'> 
                            <p className='introText'>
                           
                        </p>
                        </div>
                        <div className='Qcard'> 
                            <p className='introText'>

                            </p>
                        </div>
                        </div>
                    )}
                </div>
                <button className="sideButton" onClick={HandleFAQ} disabled = {showSkills}>Tools and Skills→</button>
            </div>
        </div>
    )
};

export default AboutMe;