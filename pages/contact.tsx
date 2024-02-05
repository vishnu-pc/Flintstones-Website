import type {NextPage} from 'next';
import {useState} from 'react';
import styles from '../styles/About.module.css';
import HeaderWithLogo from '../components/header-with-logo';
import ContactUs from '../components/landing-page/contact-us';
import {init, send} from '@emailjs/browser';

const Contact: NextPage = () => {
  init('Umo2eevxzv3CLTiwg');
    let serviceId = 'service_m0qvqz2';
    let templateId = 'template_zyi275n';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    function sendMail() {
        let payload = {
            from_name: name,
            reply_to: email,
            from_number: number,
            message_html: message,
        };
        //console.log(payload);
        sendFeedback(payload);
    }

    const sendFeedback = (payload: any) => {
      send(serviceId, templateId, payload)
          .then(() => {
              console.log('email success');
              showAlert('Email sent successfully!', 'success');
          })
          .catch((err: any) => {
              console.error('error', err);
              showAlert('Failed to send email. Please try again.', 'error');
          });
  
      // Clear input fields after sending email
      setName('');
      setEmail('');
      setNumber('');
      setMessage('');
  };
  
  const showAlert = (message: string, type: 'success' | 'error') => {
      // You can customize this alert based on your UI library or implementation
      alert(`${type.toUpperCase()}: ${message}`);
  };
    return (
        <>
            <HeaderWithLogo header="Contact"></HeaderWithLogo>
            

<div className={styles.cardBody}>
  {/* Example iframe for embedding a Google Map */}
  <div className="container">
  <div className="row">
    <div className="col-md-8">
      <iframe
        title="Google Map"
        width="100%"
        height="500"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.0061843994171!2d77.63793903098518!3d12.970268849505086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17bb7227497f%3A0x3084b4633af4fa97!2sFlintstones!5e0!3m2!1sen!2sin!4v1650678432883!5m2!1sen!2sin"
        allowFullScreen
      ></iframe>
    </div>
    <div className="col-md-4">
   
        <form className="ddiv card card-body">
        <h3 className="text-center mb-3">Email Us</h3>
          <div className="form-group">
          <label className='form-label'>Name:</label><br/>
          <input
            placeholder="Name"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          ></input>
          </div>
          <div className="form-group">
          <label className='form-label'>Email:</label><br/>
          <input
            placeholder="Email"
            className=""
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          </div>
          <div className="form-group">
          <label className='form-label'>Mobile:</label><br/>
          <input
            placeholder="Phone Number"
            className=""
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          </div>
          <div className="form-group">
          <label className='form-label'>Message</label><br/>
          <input
            placeholder="Your Message"
            className=""
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          </div><br />
          <button
            type="button"
            className="btn btn-warning"
            onClick={sendMail}
          >
            Submit
          </button>
        </form>
    </div>
  </div>
  </div>
</div>
        </>
    );
};

export default Contact;
