import React from 'react';
// import photo from '../../../glamshot.jpg';

const About = () => {
  return (
    <div className='about'>
      {/* <img src={ photo } alt='picture of the photographer' className='col'/> */}
      <div className='about-words col'>
        <p>
          Photographs are the perfect way to freeze time.
          For [number] years, I have photographed the natural wonder of Gulf Shores and the amazing personalities that come here. 
          Capturing moments in time and bringing forth their full beauty, is what I do.
        </p>
        <p>
          Engagements and weddings are some of our most treasured [memories, milestones] and yours deserves professional attention.
        </p>
        <p>
          For families, capture your time in paradise with a portrait on the beach, shoes optional!
        </p>
        <p>
          Own rental properties? Our slice of beach here on the Fort Morgan peninsula stretches 22 miles and I have helped businesses big and small bring out the best in their vacation rentals along it all.
        </p>
      </div>
    </div>
  )
}

export default About;