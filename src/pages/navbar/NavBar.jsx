import React, { Component } from 'react'
import logo from '../../assets/logo.png'
import logoTitle from '../../assets/logo2.png'
import './navbar.scss'

export default class NavBar extends Component {
  render() {
    return (
      <div className='navBar'>
        <div className='logoImg mx-5'>
            <img src={logo} alt="logo" className='w-20' />
            <img src={logoTitle} alt="logo" className='w-40' />
        </div>

        <div className='sectionLinks'>
            <a href="#" className="p-2 links">Home</a>
            <a href="#" className="p-2 links">About</a>
            <a href="#" className="p-2 links">Skills</a>
            <a href="#" className="p-2 links">Projects</a>
            <a href="#" className="p-2 links">Contact</a>
        </div>

      </div>
    )
  }
}
