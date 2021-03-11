import React, { useState, useEffect } from 'react';
// import '../style/style.css';
import { Link } from 'react-router-dom';

import contactImg from '../img/mail-icon.png';


const Navigation = props => {
  const navStyle = {
    color: 'white',
    fontSize: '1.3rem',
    textDecoration: 'none',
    textTransform: 'uppercase'
  }

  const [devWidth, setDevWidth] = useState(window.innerWidth);
  const [menuVisible, setMenuVisibility] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setDevWidth(window.innerWidth);
      if (devWidth < 768) {
        setMenuVisibility(false)
      }
    }
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, []) // setting a delay and removing event listener necessary to avoid too many re-renders

// console.log(devWidth)
  // let menuVisible = false;

  const menuClick = () => {
    setMenuVisibility(!menuVisible)
  }
// console.log(menuVisible, devWidth)
  return (
    <div className='navigation'>
      <h3>Starla Doud</h3>
      <div className="nav-menu-links">
        { devWidth < 768 ? (
          <div className='hamburgerMenu' onClick={() => menuClick()}>
            <div className='line top-line'></div>
            <div className='line mid-line'></div>
            <div className='line bottom-line'></div>
          </div>
        ) : null }
        { menuVisible === true ? (
          // <div className='navigation'>
          <div>
            {/* <h3>Turtle Boy</h3> */}
            <ul className='navigation-links'>
              <Link to='/' style={navStyle}>
                <li onClick={ () => props.contactVis === true ? props.toggleContact() : null}>Home</li>
                {/* <li>Home</li> */}
              </Link>
              <Link to='/portfolio' style={navStyle}>
                <li onClick={ () => props.contactVis === true ? props.toggleContact() : null}>Portfolio</li>
                {/* <li>Portfolio</li> */}
              </Link>
              <Link to='/about' style={navStyle}>
                <li onClick={ () => props.contactVis === true ? props.toggleContact() : null}>About</li>
                {/* <li>About</li> */}
              </Link>
              <Link to='/login' style={navStyle}>
                <li onClick={ () => props.contactVis === true ? props.toggleContact() : null}>login</li>
                {/* <li>login</li> */}
              </Link>
              <button 
                className='contact-btn' 
                onClick={ () => props.toggleContact() }
                
                >
                  <img src={ contactImg } alt=''/>
                </button>
            </ul>
          </div>
        ) : null }
      </div>
    </div>
  )
}

export default Navigation;