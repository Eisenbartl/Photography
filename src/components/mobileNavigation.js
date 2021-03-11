import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navigation = props => {
  const navStyle = {
    color: 'white',
    fontSize: '1.3rem',
    textDecoration: 'none',
    textTransform: 'uppercase'
  }

  const [menuVisible, setMenuVisibility] = useState(false)

  const menuClick = () => {
    setMenuVisibility(!menuVisible)
  }

  return (
    <div className='navigation'>
      <h3>Starla Doud</h3>
      <div className="nav-menu-links">
        
          <div className='hamburgerMenu' onClick={() => menuClick()}>
            <div className='line top-line'></div>
            <div className='line mid-line'></div>
            <div className='line bottom-line'></div>
          </div>
        
        { menuVisible === true ? (
          <div>
            <ul className='navigation-links'>
              <Link to='/' style={navStyle}>
                <li onClick={ () => {menuClick(); if ( props.contactVis === true) {props.toggleContact()}}}>Home</li>
              </Link>
              <Link to='/portfolio' style={navStyle}>
                <li onClick={ () => {menuClick(); if ( props.contactVis === true) {props.toggleContact()}}}>Portfolio</li>
              </Link>
              <Link to='/about' style={navStyle}>
                <li onClick={ () => {menuClick(); if ( props.contactVis === true) {props.toggleContact()}}}>About</li>
              </Link>
              <Link to='/login' style={navStyle}>
                <li onClick={ () => {menuClick(); if ( props.contactVis === true) {props.toggleContact()}}}>login</li>
              </Link>
              <button 
                className='contact-btn' 
                onClick={ () => {
                  props.toggleContact() ;
                  menuClick()
                  }
                } 
                >contact</button>
            </ul>
          </div>
        ) : null }
      </div>
    </div>
  )
}

export default Navigation;