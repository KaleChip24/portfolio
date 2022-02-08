import './Projects.css'

import React from 'react';

function Projects(props) {
  return (
    <div className='projects-wrapper'>
      <p>Check out my products via their webpage or take a look at their code on GitHub</p>
      <div className='project-card'>
        <img className='bricks-img' src='https://res.cloudinary.com/dv2buktns/image/upload/v1644344138/Screen_Shot_2022-02-08_at_13.09.19_yc7ri7.png' alt='Project One' />
        <h4 className='old-bricks-title'>Old Bricks New Tricks</h4>
        <p></p>
      </div>
      <div className='project-card'>
        <img className='movie-img' src='https://res.cloudinary.com/dv2buktns/image/upload/v1644344138/Screen_Shot_2022-02-08_at_13.10.17_ui93xe.png' alt='Project Two' />
        <h4 className='mov-meow-title'>Movie Meowtian</h4>
        <p></p>
      </div>
      <div className='project-card'>
        <img className='tilt-img' src='https://res.cloudinary.com/dv2buktns/image/upload/v1644344138/Screen_Shot_2022-02-08_at_13.14.31_zkfd1y.png' alt='Project Three' />
        <h4 className='tilt-title'>Tilt</h4>
        <p></p>
      </div>
    </div>
  );
}

export default Projects;