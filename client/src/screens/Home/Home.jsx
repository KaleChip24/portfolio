import React from 'react';
import './Home.css'
import 'animate.css'

function Home() {
  return (
    <div className='landing'>
      <div className='landing-container'>
        <h1 className='intro'> Hey! </h1>
        <img
          className='intro-img'
          id="my-img"
          src={'https://res.cloudinary.com/dv2buktns/image/upload/v1642538998/prof_Img_tehudl.jpg'}
          alt="kale-headshot-illustration" />
        <h1 className='name'> I'm Kale </h1>
      </div>
      <h3 className='info-bite animate__animated animate__flipInX'> Web Developer | Software Engineer | 90s Enthusiast</h3>
      <div className='arrow'></div>
    </div>
  );
}

export default Home;
