import "./Navbar.css"
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS } from 'react-scroll'

function Header() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-links">
          <LinkR className="about-link" to="/about">About</LinkR>
          <LinkR className="projects-link" to="/projects">Projects</LinkR>
          <LinkR className="contact-link" to="/contact">Contact</LinkR>
        </div>
      </div>
    </nav>
  );
}

export default Header; 