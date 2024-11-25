import React, { Component } from 'react';
import './styles.scss';
import logo from '../assets/logo.png'; // Correct import for the logo
import logo2 from '../assets/logo2.png'

export default class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <div className='logo'>
        <img src={logo} alt="logo" className="projectLogo " />
        <img src={logo2} alt="logo2" className="logo2 " />
        </div>
    
        

        {/* Navigation links */}
        <div style={{ display: 'flex' }} className="mt-3 navigationLink">
          <a href="#" className="p-2 links">Home</a>
          <a href="#" className="p-2 links">About</a>
          <a href="#" className="p-2 links">Skills</a>
          <a href="#" className="p-2 links">Projects</a>
          <a href="#" className="p-2 links">Contact</a>
        </div>
      </div>
    );
  }
}
