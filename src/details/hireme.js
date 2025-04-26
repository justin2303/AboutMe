import React, {useState} from 'react';
import NavBar from './navbar';
import './hireme.css'
const HireMe = () => {
    return (
        <div>
            <div className='navbar-wrapper'>
                <NavBar/> 
            </div>
               <div className='oneLine'>
                    <div className='traitCard'>
                        <p>1. On top of my existing skills, I'm a <u><b>fast learner</b></u> who is determined to contribute to whatever team I find 
                            myself a part of. The very reason why I do personal projects is to learn some new skill/technology/framework, so 
                            I can pick up things faster in any software development environment.
                        </p>
                        </div>
                    <div className='traitCard'>
                        <p>2. I'm a <u><b>hard worker</b></u>. I am happy to work late hours if there is a specific goal I have in mind. I 
                        use a great deal of my free time improving myself physically and mentally. Additionally, I'm not afraid to get my 
                        hands dirty. For example, I did a series of construction and carpentry related volunteer jobs while I was in highschool.
                        </p>
                    </div>
                    <div className='traitCard'>
                        <p>3. I'm a <u><b>problem solver</b></u>. I enjoy solving tricky problems, whether they take the form of algorithm problems or 
                        tactical problems in military strategy games, I spend a lot of time doing both and more.
                        </p>
                    </div>
               </div>
               <div className='oneLine'>
                    <div className='traitCard'>
                        <p>4. I am <u><b>humble</b></u>, and am always willing to learn something new. It's a bit ironic to claim humbleness on
                        an self promoting website, but I really didn't want to do this. I don't like promoting myself and stating "facts" about me which
                        realistically change based on the person reviewing me, since all of my traits here are subjective to begin with. However,
                        I had to try something new in my quest to find a Software related job today, and this is one way to stand out.
                        </p>
                        </div>
                    <div className='traitCard'>
                        <p>5. I'm a <u><b>team player</b></u>. I've consistently made it a priority to be a reliable and supportive team member. 
                        I actively encourage open communication, seek input from quieter voices, and work to ensure that every group member feels included
                         and valued. I also hold myself to a high standard of accountability, striving to contribute meaningfully, meet deadlines, 
                         and ensure that my work strengthens rather than burdens the team. I believe that a team’s success is built not just on individual performance, but on how well members empower each other to succeed.
                        </p>
                    </div>
                    <div className='traitCard'>
                        <p>6. I have high <u><b>initiative</b></u>. I don't like to wait for problems to occur, instead I actively seek ways 
                        to fix possible problems, or to improve myself or whatever I'm working on. Even through bouts of heart break or depression,
                        I still inch myself forward, towards a better me, and a better future.
                        </p>
                    </div>
               </div>
                
            </div>
    )
};
export default HireMe;