import "./Navbar.css"
import { Link } from "react-router-dom"


function Header() {
  return (
    <nav>
      <div className="nav-container">
        <Link className="home-btn" to='/'>Home</Link>
        <div className="nav-links">
          <Link className="about-link" to="/about">About</Link>
          <Link className="projects-link" to="/projects">Projects</Link>
          <Link className="contact-link" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header; 