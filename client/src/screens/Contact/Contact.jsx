import "./Contact.css"

function Contact(props) {
  return (
    <div className='contact-container'>
      <form className='contact-form'>
        <input className='name-input' type='text' name='name' placeholder='Name' />
        <input className='email-input' type='text' name='email' placeholder='Email' />
        <input className='message-input' type='textarea' name='message' placeholder='Message' />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;