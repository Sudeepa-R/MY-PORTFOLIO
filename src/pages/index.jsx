import React, { Component } from 'react'
import './index.scss'
import NavBar from './navbar/NavBar'

export default class HomePage extends Component {
  render() {
    return (
      <div className='homePage'>
        <NavBar/>
      </div>
    )
  }
}
