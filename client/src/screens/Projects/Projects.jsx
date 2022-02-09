import './Projects.css'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Projects(props) {
  return (
    <div className='projects-page'>
      <p className='projects-blerb'>Check out my products via their webpage or take a look at their code on GitHub</p>
      <div className='projects-wrapper'>
        <div className='project-card'>
          <div className='image'>
            <img className='bricks-img' src='https://res.cloudinary.com/dv2buktns/image/upload/v1644424121/Screen_Shot_2022-02-09_at_11.27.54_dadxdr.png' alt='Project One' />
          </div>
          <div className='content'>
            <h4 className='old-bricks-title'>Old Bricks New Tricks</h4>
            <p>This single page website will allow you to enter the ID of a LEGO set and will give back alternative build ideas for that set. Utilizes CSS, HTML, JS and API calls</p>
            <a
              className="git-link"
              href="https://github.com/KaleChip24/Old-Bricks-New-Tricks"
              target="_blank"
              rel="noreferrer">
              <strong>
                <BsGithub></BsGithub>
              </strong>
            </a>
            <Link to='https://kalechip24.github.io/Old-Bricks-New-Tricks/'>Visit Me!</Link>
          </div>
        </div>
        <div className='project-card'>
          <div className='image'>
            <img className='movie-img' src='https://res.cloudinary.com/dv2buktns/image/upload/v1644424120/Screen_Shot_2022-02-09_at_11.14.36_yf7tcv.png' alt='Project Two' />
          </div>
          <div className='content'>
            <h4 className='mov-meow-title'>Movie Meowtian</h4>
            <p>Sit back, find the sun spot and get some laughs as my cats give their take on all our favorit films featuring cats(no role is too small)! Movie Meow-tian is a React build that uses an Airtable to render data and allows users to add their own. Utilizes JS, CSS, React, AirTable and Bootstrap</p>
            <a
              className="git-link"
              href="https://github.com/KaleChip24/it-happened"
              target="_blank"
              rel="noreferrer">
              <strong>
                <BsGithub></BsGithub>
              </strong>
            </a>
          </div>
        </div>
        <div className='project-card'>
          <div className='image'>
            <img className='tilt-img' src='https://res.cloudinary.com/dv2buktns/image/upload/v1644344138/Screen_Shot_2022-02-08_at_13.14.31_zkfd1y.png' alt='Project Three' />
          </div>
          <div className='content'>
            <h4 className='tilt-title'>Tilt</h4>
            <p>Flip, Flip, Ding! Ding! Tilt is a full CRUD, full-stack app where users can add their faviorite pinball venues and the machinces that are availble to play. Utilizes JS, CSS, React, Python, Django and Heroku</p>
            <a
              className="git-link"
              href="https://github.com/KaleChip24/tilt2.0"
              target="_blank"
              rel="noreferrer">
              <strong>
                <BsGithub></BsGithub>
              </strong>
            </a>
            <a
              className="tilt-link"
              href="https://tilted2.netlify.app/"
              target="_blank"
              rel="noreferrer">Tilt
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;