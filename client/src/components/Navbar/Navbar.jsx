import "./Navbar.css"
import { Link } from "react-router-dom"
// import { AiOutlineLinkedin } from 'react-icons/ai'



function Header() {
  return (
    <nav class="navbar">
      <div class="container nav-container">
        <input class="checkbox" type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div className="menu-items">
          <li><Link className="home-btn" to='/'>Home</Link></li>
          <li><Link className="about-link" to="/about">About</Link></li>
          <li><Link className="projects-link" to="/projects">Projects</Link></li>
          <li><Link className="contact-link" to="/contact">Contact</Link></li>
        </div>
      </div>
    </nav>
  );
}

export default Header; 