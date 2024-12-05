import React, { Component } from 'react'
import './index.scss'
import NavBar from './navbar/NavBar'
import MeteorDemo from '../design-ui/homePageBackground'
import GoogleGeminiEffectDemo from '../design-ui/HomePageAnimation'

export default class HomePage extends Component {
  render() {
    return (
      <div className='homePage'>
        {/* <NavBar/> */}
        <GoogleGeminiEffectDemo/>
      </div>
    )
  }
}
