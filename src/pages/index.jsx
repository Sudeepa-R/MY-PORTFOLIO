import React, { Component } from 'react'
import './index.scss'
import NavBar from './navbar/NavBar'
import MeteorDemo from '../design-ui/homePageBackground'

export default class HomePage extends Component {
  render() {
    return (
      <div className='homePage'>
        <NavBar/>
        
      </div>
    )
  }
}
