import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai'

function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ap7mha5', 'template_j9vqqdt', form.current, 'user_7zNUHNBT0eBZIW8DxPddr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };




  return (
    <div className='contact-container'>
      <h2 className="contact-title">Let's Work Together!</h2>
      <p className="contact-blerb">Send me an email or connect with me on LinkedIn</p>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <input className='name-input' type='text' name='from_name' placeholder='Name' />
        <input className='email-input' type='text' name='email' placeholder='Email' />
        <input className='message-input' type='textarea' name='message' placeholder='Message' />
        <input className='submit-btn' type="submit" value="Send" />
        {/* <button className="submit-btn">Submit</button> */}
      </form>
      <div className="vl"></div>
      <div className="contact-linkedIn">
        <a
          className="linked-link"
          href="https://www.linkedin.com/in/oharakale/"
          target="_blank"
          rel="noreferrer">
          <AiOutlineLinkedin></AiOutlineLinkedin>
        </a>
      </div>
    </div>
  );
}

export default Contact;