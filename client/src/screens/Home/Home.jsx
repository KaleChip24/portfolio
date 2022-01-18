import React from 'react';
// import logo from './image/prof_Img.png'

function Home() {
  return (
    <div className='landing'>
      <div className='landing-container'>
        <h1 className='intro'> Hi! </h1>
        <img
          id="my-img"
          style={{
            boxShadow: "9px -5px 3px #5AFFBA, -4px 9px 3px #EDFF1F, -14px 8px 5px #3965FF, 12px -10px 8px #FF5ABD",
            border: "4px solid #5AFFBA",
            borderRadius: "900px",
            width: 400,

          }}
          src={'./image/prof_Img.png'}
          alt="kale-headshot-illustration" />
        <h1 className='name'> I'm Kale </h1>
      </div>
    </div>
  );
}

export default Home;