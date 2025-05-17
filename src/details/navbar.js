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
      </ul>
    </nav>
  );
};

export default NavBar;
