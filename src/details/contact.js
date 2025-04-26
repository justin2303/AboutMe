import React, {useState} from 'react';
import NavBar from './navbar';
import './contact.css'
const Contact = () => {
    return (
        <div>
            <div className='navbar-wrapper'>
                <NavBar/> 
            </div>
            <div className='contactContainer'>
                <div className='contactCard'>
                    <p><b style={{color:'red'}}>Name:</b>&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Justin Chiu
                    <br />
                    <b style={{color:'red'}}>Email:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justin.ypc@gmail.com
                    <br />
                    <b style={{color:'red'}}>Phone Number:</b>&nbsp;&nbsp;&nbsp;408-333-5926
                    <br />
                    <b style={{color:'red'}}>GitHub:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://github.com/justin2303'>https://github.com/justin2303</a>
                    <br />
                    <b style={{color:'red'}}>Linkedin:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://www.linkedin.com/in/justin-chiu-599028296/'>link</a>
                    <br />
                    <b style={{color:'red'}}>Address:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    187 Mint st, Apt 328B, Davis, CA
                    <br />
                    <b style={{color:'red'}}>School Email:</b>&nbsp;&nbsp;
                    jychiu@ucdavis.edu
                    </p>
                </div>
                <br />
                <div className='refCard'>
                    <h3>References:</h3>
                    <div className='refInfo'>
                            <p style={{marginRight: "20px", paddingRight:"20px", borderRight:"5px solid white", Width:"300px"}}>Name:
                                &nbsp;&nbsp;&nbsp;Jeran Jeyachandran
                                <br />Email:
                                &nbsp;&nbsp;jeran@xage.com<br />
                                Title:
                                &nbsp;&nbsp;QA team lead at<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Xage Security
                                </p>
                            <p>Name:&nbsp;&nbsp;&nbsp;&nbsp;Rohit Jhangiani
                            <br />Email:
                                &nbsp;&nbsp;rohit@xage.com<br />
                            Title:
                            &nbsp;&nbsp;Engineering<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;director at Xage<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Security
                            </p>
                            
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Contact;