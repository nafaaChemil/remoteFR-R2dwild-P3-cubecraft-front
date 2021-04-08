import React, { useState } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  function sendEmail(e) {

    e.preventDefault();

    console.log('sending email')
    console.log(e)

    emailjs.sendForm('my.gmail', 'template_qforei9', e.target,
    'user_fELVRdb1kJc5SzL1ge2Br')
    .then((result) => {
      console.log('result')
      console.log(result.text) 
      });
      alert('Merci pour votre message');
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
            <input placeholder="Téléphone"
              type="text"
              id="phone"
              className="phone"
              id="phone"
               />
        </div>
        <hr />

        <div className="form-group">
            <textarea placeholder="Message *"
              id="message"
              name='message'
              required
              className="form-textarea"
               />
        </div>
        <hr />

        <div className="form-group">
          <input 
            type="submit"
            value='Envoyer'
            className="form-btn"></input>
        </div>

      </form>
    </div>
    );
    }

export default Contact;