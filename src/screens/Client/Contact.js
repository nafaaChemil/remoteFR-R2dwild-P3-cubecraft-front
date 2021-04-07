import React, { useState } from "react";
import emailjs from 'emailjs-com';


export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('my.gmail', 'template_qforei9', e.target, 'user_fELVRdb1kJc5SzL1ge2Br')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}

  function handleSubmit(e) {
  e.preventDefault();
  alert('Merci pour votre message');

}
    

  return (
    <div className="Contact">
      <div>
        <h1 className="title-form">Nous contacter</h1>
      </div>
    
      <form onSubmit={sendEmail} className="form">
        <div className="form-group">
          <input placeholder="Nom / Raison sociale *"
            type="text"
            id="firstName"
            className="firstName"
            required />
        </div>
        <hr />

        <div className="form-group">
          <input placeholder="Prénom"
            type="text"
            id="lastName"
            className="lastName"
            />
        </div>
        <hr />

        <div className="form-group">
            <input placeholder="Email *"
              type="email"
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
              required
              className="form-textarea"
               />
        </div>
        <hr />

        <div className="form-group">
          <button /*onClick={handleSubmit}*/
            type="submit"
            className="form-btn">Envoyer</button>
        </div>

      </form>
    </div>
    );
    }


