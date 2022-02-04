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
        <h2 className="skills-title">Skills | Tools</h2>
        <div className="icons-container">
          <IconContext.Provider value={{ className: "icons", size: "2em" }}>
            <div className="icon">
              <FaCss3Alt></FaCss3Alt>
              <FaReact></FaReact>
              <FaHtml5></FaHtml5>
              <GrHeroku></GrHeroku>
              <DiJavascript></DiJavascript>
              <GrNode></GrNode>
              <SiMongodb></SiMongodb>
              <SiPostman></SiPostman>
              <SiGithub></SiGithub>
            </div>
          </IconContext.Provider>
        </div>
      </div>

    </div>
  );
}

export default About;