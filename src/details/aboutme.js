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
    const HandleDownload = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/Justin_Resume.pdf`; // Replace with your actual file name
        link.download = 'Justin_Resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
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
                            Both of takeaways I developed further through a personal project, which is now on hold due to more pressing life issues.
                        </p>
                        </div>
                    )}
                    {showSkills && (<div >
                        <div className='Qcard'> 
                            <p className='introText'>
                           <b>Here's a Brief Overview of my skills:</b><br /> 
                           <b>Languages:</b>&nbsp;&nbsp;&nbsp;&nbsp;Go, JavaScript, Python, MySQL, C++, HTML/CSS, Bash, Groovy, Java, C, R <br />
                           <b>Frameworks:</b>&nbsp;&nbsp;&nbsp;&nbsp;React.js, Pytest, Node.js, Angular, Django, Flask, Celery <br />
                           <b>Tools:</b>&nbsp;&nbsp;&nbsp;&nbsp;Docker, AWS, Github, bash, pdb, Jupyter Notebooks, VS Code, g++ <br />
                           <b>Concepts:</b>&nbsp;&nbsp;&nbsp;&nbsp;Algorithms and data structures, Multithreading, RESTful API Design, SQL/no-SQL
                           DBs, Event-Driven, Architecture, Version Control, Agile/Scrum <br />
                        </p>
                        </div>
                        <br />
                        <div className='Qcard'> 
                            <p className='introText'>
                            Here's a version of my resume to download if you want:
                            </p>
                            <img src='/download.webp' className='downloadButton' onClick={HandleDownload} alt='download_button'></img>
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