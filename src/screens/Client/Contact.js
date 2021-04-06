import React from 'react';
import nodemailer from 'nodemailer';
import { getMaxListeners } from 'node:process';

const tranporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ingridpruvost966@gmail.com',
    pass: 'Manoraph2'
  }
});

const mailOptions = {
  from: 'vindication@enron.com',
  to: 'friendsofenron@getMaxListeners.com, enemiesofenron@getMaxListeners.com',
  subject: 'Bonjour',
  text: 'BRAVOOOOO INGRID'
};

transporter.sendMail(mailOptions, function(error, info){
  if(error){
    console.log('erreur');
  }  else {
    console.log('email envoyé' + info.response);
  }
});

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      tel:'',
      message:'',
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
    onChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    submitForm(e) {
      e.preventDefault();
      alert("Message envoyé");
      }

      render() {
        return (
          
          <div className="container-form">
            <div className="background-container">
            <div>
              <h1 className="title-form">
                <p className="p-form"> ✉️ Une question ? Nous sommes là !  </p>

                 </h1>
            </div>
            <form on submit={this.submitForm}>
            
              <div className="data-form">
                <input placeholder="Nom"
                  type="text"
                  id="lastName"
                  name="lastName"
                  onchange={this.onChange}
                  required value={this.state.lastName} />
              </div>

              <div className='data-form'>
                <input placeholder="Prénom"
                  type='text'
                  id="firstName"
                  name="firstName"
                  onchange={this.onChange}
                  required value={this.state.firstName}/>
              </div>

              <div className="data-form">
                <input placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  onchange={this.onChange}
                  required value={this.state.email} />
              </div>

              <div className="data-form">
                <input placeholder="téléphone"
                  type="tel"
                  id="tel"
                  name="tel"
                  onchange={this.onChange}
                  required value={this.state.tel} />
              </div>

              <div className="data-form">
                <textarea placeholder="Message" className="textarea-form"
                  type="text"
                  id="message"
                  name="message"
                  onchange={this.onChange}
                  required value={this.state.message}
                />
                </div>

              <div>
                <input className="btn-form" type="submit" value="Envoyer" />
              </div>
            </form>
          </div>
          </div>
          
        
  )
}
}
export default Contact
