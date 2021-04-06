import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminAboutUsAdd() {
  const history = useHistory()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobName, setJobName] = useState('')
  const [picture, setPicture] = useState('')
  const [valid, setValid] = useState(false)


  const AddProfile = () => {

     console.log("hello")
      axios
      .post('http://localhost:4242/about', {
        FirstName: firstName,
        LastName: lastName,
        JobName: jobName,
        Photo_id: picture
      })
      .then(res => {
        setValid(!valid)
        setFirstName(firstName)
        setLastName(lastName)
        setJobName(jobName)
        setPicture(picture)
      })
  }
   
   
  function comeBack() {
    history.push('/admin/about')
  }

  return (
        <section className='AddPage'>
      <div className='Container-Addpage'>
        <h2>Ajouter un collaborateur </h2>
        <div className='formulaire-admin-add'>
          <div className='form-group-add'>
            <label htmlFor='title'>Prénom :</label>
            <input
              type='text'
              name='title'
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
          </div>
          <div className='form-group-add'>
            <label htmlFor='title'>Nom :</label>
            <input
              type='text'
              name='lastname'
              value={lastName}
              onChange={event => setLastName(event.target.value)}
            />
          </div>  
          <div className='form-group-add'>
            <label htmlFor='picture'>Poste : </label>
           <input
              type='text'
              name='jobname'
              value={jobName}
              onChange={event => setJobName(event.target.value)}
            />
          </div>
          <div className='form-group-add'>
            <label htmlFor='picture'>Choix de la photo : </label>
              <input
                type='number'
                name='picture'
                value={picture}
                onChange={event => setPicture(event.target.value)}
              />
          </div>
          <div className='Form-group-btn'>
            <button onClick={comeBack}>Retour</button>
            {valid ? 'Un nouveau collaborateur à été ajouté' : ''}
            <button
              onClick={AddProfile}
              style={{ display: `${valid ? 'none' : 'block'}` }}
            >
              Ajouter collaborateur
            </button>
            
          </div>
        </div>
      </div>
    </section>
  
  )
}
