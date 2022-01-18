import React from 'react';
import './Home.css'

function Home() {
  return (
    <div className='landing'>
      <div className='landing-container'>
        <h1 className='intro'> Hi! </h1>
        <img
          id="my-img"
          style={{
            boxShadow: "10px 10px #c88df3, -10px -10px black",
            border: "4px solid #5AFFBA",
            borderRadius: "100px",
            width: 400,
            marginTop: 300,
            marginLeft: 217,

          }}
          src={'https://res.cloudinary.com/dv2buktns/image/upload/v1642538998/prof_Img_tehudl.jpg'}
          alt="kale-headshot-illustration" />
        <h1 className='name'> I'm Kale </h1>
      </div>
      <h3 className='info-bite'> Web Developer | Software Engineer | 90s Enthusiast</h3>
      <div className='arrow'></div>
    </div>
  );
}

export default Home;