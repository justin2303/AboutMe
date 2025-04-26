// NavBar.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const profilePic = '/settings.png'
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to={`/AboutMe`} className="custom-link">About Me</Link>
        </li>
        <li>
        <Link to={`/MyProjects`} className="custom-link">My Projects</Link>
        </li>
        <li>
        <Link to={`/WhyMe`} className="custom-link">Why Hire Me?</Link>
        </li>
        <li>
        <Link to={`/Contact`} className="custom-link">Contact</Link>
        </li>
        <li>
        <Link to={`/CoolThings`} className="custom-link">Things I find Cool</Link>
        </li>
        <li>
            <div className='Settings'>
            <img src={profilePic} alt="Profile" className="profile-pic" onClick={toggleDropdown} />
          {dropdownVisible && (
                    <div className="dropdown-menu">
                        <Link to={"/change-profile-pic"} className="dropdown-item">Change Profile Picture</Link>
                        <Link to={"/my-profile"} className="dropdown-item">My Profile</Link>
                        <Link to="/settings" className="dropdown-item">Settings</Link>
                        <Link to={"/login"} className="dropdown-item">Logout</Link>
                    </div>
                )}
            </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
