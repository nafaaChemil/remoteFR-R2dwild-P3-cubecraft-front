import React, { useState } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);
  
  function sendEmail(e) {
    e.preventDefault();
    console.log('sending email')
    emailjs.sendForm('my.gmail', 'template_qforei9', e.target,
    'user_fELVRdb1kJc5SzL1ge2Br')
    .then((result) => {
      console.log('result')
      setValid(!valid)
      });
  }
  
  return (
    <div className="Contact">
      <div>
        <h1 className="title-form">Plus d'infos ?</h1>
      </div>
    
      <form onSubmit={sendEmail} className="form">

        <div className="form-group">
          <input placeholder="Nom / Raison sociale *"
            type="text"
            id="lastName"
            className="lasttName"
            name="last_name"
            required />
        </div>
        <hr />

        <div className="form-group">
          
          <input placeholder="Prénom"
            type="text"
            id="firstName"
            name="user_firstname"
            className="firstName"
            />
        </div>
        <hr />

        <div className="form-group">
          
            <input placeholder="Email *"
              type="email"
              name="user_email"
              id="email"
              className="email"
              required />
        </div>
        <hr />

        <div className="form-group">
            <input type="tel" pattern="[0-9]" size="10" placeholder="Téléphone "
              id="phone"
              className="phone"
              
               />
        </div>
        <hr />

        <div className="form-group">
            <textarea placeholder="Message *"
              id="message"
              name='message'
              required
              className="form-textarea"
              maxLength="150"
               />
        </div>
        <hr />

        <div className="form-group">
          <input className="input-form" 
            type="submit"
            value='Envoyer'
            className="form-btn"
            >
            </input>
        </div>

      </form>
     {valid && <p>Message envoyé</p>}
    </div>
    );
    }
  
export default Contact;