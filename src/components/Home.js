import React from 'react';
import backImg from '../img/home-back.jpg';
// import background from '../../../assets/img/seaside.jpg';

const Home = () => {
  let width = window.innerWidth;

  return (
    <div className='home'>
      <img src={ backImg } className='home-bg-img' alt=''/>
      {/* <div className='home-overlay'></div> */}
      <div className='home-header'>
        <h1 className='text-responsive'>Photography</h1>

        { width < 768 ? (
          <ul>
            <li>Family</li>
            <li>Fine art</li>
            <li>Weddings</li>
            <li>Real Estate</li>
          </ul>
        ) :
          <ul>
            <li className='family'>Family</li>
            <li className='fine-art'>Fine art</li>
            <li className='weddings'>Weddings</li>
            <li className='real-estate'>Real Estate</li>
          </ul>
         }
      </div>
    </div>
  )
}

export default Home;