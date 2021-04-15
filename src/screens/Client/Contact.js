import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import MapLeaflet from '../../components/Client/Map.js'

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [valid, setValid] = useState(false);
  const [consent, setConsent] = useState(true)
  
  function sendEmail(e) {
    e.preventDefault()
    console.log('sending email')
    emailjs.sendForm('service_9ba3ccb', 'template_dnukio6', e.target.reset,
      'user_eyvbTv2muWvgFT0taOlAM')
      .then((result) => {
      setValid(!valid)
      });
  }
  
  return (
    <div className='Contact'>
      <div>
        <h1 className='title-form'>Plus d'infos ?</h1>
      </div>
      <div className="consent">
      <input className="input-consent" type="checkbox"
        required
        consent={consent}
        onChange={() => setConsent(!consent)}
      />
       <p className="p-consent">En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la relation commerciale qui pourrait en découler.</p>
     </div>
      <form onSubmit={sendEmail} className='contact-form'>

        <div className='form-group'>
          <input placeholder='Nom / Raison sociale *'
            type='text'
            id='lastName'
            className='lasttName'
            name='last_name'
            required 
            />
        </div>
        <hr />

        <div className='form-group'>
          <input placeholder='Prénom'
            type='text'
            id='firstName'
            name='user_firstname'
            className='firstName'
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
            <input type="tel"
              pattern="[0-9]"
              maxLength="10"
              placeholder="Téléphone"
              id="phone"
              className="phone"
               />
        </div>
        <hr />

          <div className='form-group'>
            <textarea
              placeholder='Message *'
              id='message'
              name='message'
              required
              className='form-textarea'
              maxLength='150'
            />
          </div>
          <hr />

        <div className="form-group">
          <input className="input-form" 
            type="submit"
            value='Envoyer'
            className="form-btn"
            />
            
        </div>
      </form>
      {valid && <p>Message envoyé</p>}
      
     <MapLeaflet />
    </div>
    );
    }
    
export default Contact;
          
          
      
    
 


