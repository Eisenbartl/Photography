import React from 'react';

// !!! look into lazy loading the photos !!!

// wedding photos
import WeddingOne from '../img/wedding-1.jpg';
import WeddingTwo from '../img/wedding-2.jpg';
import WeddingThree from '../img/wedding-3.jpg';
import WeddingFour from '../img/wedding-4.jpg';
import WeddingFive from '../img/wedding-5.jpg';

// family photos
import FamOne from '../img/family-7.jpg';
import FamTwo from '../img/family-1.jpg';
import FamThree from '../img/family-5.jpg';
import FamFour from '../img/family-2.jpg';
import FamFive from '../img/family-8.jpg';

// real estate photos
import RealOne from '../img/real-3.jpg';
import RealTwo from '../img/real-4.jpg';
import RealThree from '../img/real-5.jpg';
import RealFour from '../img/real-7.jpg';
import RealFive from '../img/real-12.jpg';

// fine art
import FAOne from '../img/fa-1.jpg';
import FATwo from '../img/fa-2.jpg';
import FAThree from '../img/fa-3.jpg';
import FAFour from '../img/fa-4.jpg';


const Portfolio = props => {
  return (
    <div className='portfolio'>
      {/* weddings and engagments */}
      <div className='img-section weddings'>
        <h3>weddings</h3>
        <div className='img-container wedding-img'>
          <img src={ WeddingOne }  className='weddingOne' alt=""/>
          <img src={ WeddingTwo }  className='weddingOne' alt=""/>
          <img src={ WeddingThree }  className='weddingOne' alt=""/>
          <img src={ WeddingFour }  className='weddingOne' alt=""/>
          <img src={ WeddingFive }  className='weddingOne' alt=""/>
        </div>
      </div>
      {/* family */}
      <div className='img-section family'>
        <h3>family</h3>
        <div className='img-container family-img'>
          <img src={ FamOne }  className='famOne' alt=""/>
          <img src={ FamTwo }  className='famTwo' alt=""/>
          <img src={ FamThree }  className='famThree' alt=""/>
          <img src={ FamFour }  className='famFour' alt=""/>
          <img src={ FamFive }  className='famFive' alt=""/>
        </div>
      </div>
      {/* real estate */}
      <div className='img-section real'>
        <h3>real estate</h3>
        <div className='img-container real-img'>
          <img src={ RealOne }  className='realOne' alt=""/>
          <img src={RealTwo }  className='realTwo' alt=""/>
          <img src={ RealThree }  className='realThree' alt=""/>
          <img src={ RealFour }  className='realFour' alt=""/>
          <img src={ RealFive }  className='realFive' alt=""/>
        </div>
      </div>
      {/* fine art portaites */}
      <div className='img-section real'>
        <h3>fine art portraites</h3>
        <div className='img-container fa-img'>
          <img src={ FAOne }  className='faOne' alt=""/>
          <img src={ FATwo }  className='faTwo' alt=""/>
          <img src={ FAThree }  className='faThree' alt=""/>
          <img src={ FAFour }  className='faFour' alt=""/>
          {/* <img src={ FAFive }  className='faFive' alt=""/> */}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;