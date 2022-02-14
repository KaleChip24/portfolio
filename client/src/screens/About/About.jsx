import "./About.css"
import { IconContext } from "react-icons"
import { FaCss3Alt, FaReact, FaHtml5 } from "react-icons/fa"
import { GrHeroku, GrNode } from "react-icons/gr"
import { DiJavascript } from "react-icons/di"
import { SiMongodb, SiPostman, SiGithub } from "react-icons/si"

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="abt" >ABOUT : </h1>
        <hr style={{ width: 200 }} />
        <p className="blerb"> Design-minded software engineer with a passion for Lego, puzzles, and pops of color.
          My decade of experience in people-facing roles has prepared me to handle any situation
          with a cool head and open heart. I’m seeking a role at a community-oriented
          company, where I can use my skills to create a more inclusive online experience.</p>
        <p className="blerb">My web design journey was born in the early aughts, when teenage me simply <strong>had</strong> to make my myspace page one notch better than my friends’.
          I took (and loved) graphic design and CS courses, before pursuing a psych degree in college.
          When the pandemic hit and I was forced to pause and think about what I wanted my future to look like, all roads seemed to lead back to coding.
          I enrolled in the General Assembly bootcamp, cried a few times in the first week from sheer overwhelm,
          but quickly started to revel in the joys and challenges of learning new languages. I realized that as a coder,
          I can use my passions and past experiences to bring a unique and thoughtful perspective to any team. </p>
        <h2 className="skills-title">
          <strong>Skills | Tools</strong>
        </h2>
        <div className="icons-container">
          <IconContext.Provider value={{ className: "icons", size: "2em" }}>
            <div className="icons-box">
              <div className="icon">
                <label className="icon-label">CSS</label>
                <FaCss3Alt></FaCss3Alt>
              </div>
              <div className="icon">
                <label className="icon-label">React</label>
                <FaReact></FaReact>
              </div>
              <div className="icon">
                <label className="icon-label">HTML</label>
                <FaHtml5></FaHtml5>
              </div>
              <div className="icon">
                <label className="icon-label">Heroku</label>
                <GrHeroku></GrHeroku>
              </div>
              <div className="icon">
                <label className="icon-label">JavaScript</label>
                <DiJavascript></DiJavascript>
              </div>
              <div className="icon">
                <label className="icon-label">Node</label>
                <GrNode></GrNode>
              </div>
              <div className="icon">
                <label className="icon-label">MongoDB</label>
                <SiMongodb></SiMongodb>
              </div>
              <div className="icon">
                <label className="icon-label">Postman</label>
                <SiPostman></SiPostman>
              </div>
              <div className="icon">
                <label className="icon-label">GitHub</label>
                <SiGithub></SiGithub>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>

    </div>
  );
}

export default About;