import "./Footer.css"
import { FiLinkedin } from 'react-icons/fi'
import { BiMailSend } from 'react-icons/bi'

function Footer(props) {
  return (
    <footer className="foot-container">
      <div className="links">
        <a
          className="gmail"
          href="mailto: oharakale@gmail.com"
          target="_blank"
          rel="noreferrer">
          <BiMailSend></BiMailSend>
        </a>
        <a
          className="linkedIn"
          href="https://www.linkedin.com/in/oharakale/"
          target="_blank"
          rel="noreferrer">
          <FiLinkedin></FiLinkedin>
        </a>
      </div>
      <div className="copyright">
        <small>&copy;Kale O'Hara 2022</small>
      </div>

    </footer>
  );
}

export default Footer;