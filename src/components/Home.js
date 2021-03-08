import React from 'react';
// import background from '../../../assets/img/seaside.jpg';

const Home = () => {
  let width = window.innerWidth;

  return (
    <div className='home'>
      <div className='home-overlay'></div>
      <div className='home-header'>
        <h1 className='text-responsive'>Photography</h1>

        { width < 768 ? (
          <ul>
            <li>VRBO</li>
            <li>Family</li>
            <li>Wedding</li>
            <li>Real Estate</li>
            <li>Fine Art Portraites</li>
          </ul>
        ) :
          <p className='text-p'>Weddings, VRBO, real estate, family and fine art portraites.</p>
         }
      </div>
    </div>
  )
}

export default Home;