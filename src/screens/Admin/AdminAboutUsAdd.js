import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function AdminAboutUsAdd() {
  const history = useHistory()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobName, setJobName] = useState('')
  const [picture, setPicture] = useState('')
  const [valid, setValid] = useState(false)

  const AddProfile = () =>
    axios
      .post('http://localhost:4242/about', {
        FirstName: firstName,
        LastName: lastName,
        JobName: jobName,
        Photo_id: picture
      })
      .then(res => {
        console.log(res.data)
        setValid(!valid)
        setFirstName(firstName)
        setLastName(lastName)
        setJobName(jobName)
        setPicture(picture)
      })
  function comeBack() {
    history.push('/admin/about')
  }

  return (
    <div>
      <label>
        Prénom
        <input
          type='text'
          name='firstname'
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
      </label>
      <label>
        Nom
        <input
          type='text'
          name='lastname'
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
      </label>
      <label>
        Poste
        <input
          type='text'
          name='jobname'
          value={jobName}
          onChange={event => setJobName(event.target.value)}
        />
      </label>
      <label>
        Choix de la photo
        <input
          type='number'
          name='picture'
          value={picture}
          onChange={event => setPicture(event.target.value)}
        />
      </label>
      <div>
        <button
          onClick={AddProfile}
          style={{ display: `${valid ? 'none' : 'block'}` }}
        >
          Ajouter collaborateur
        </button>
        {valid ? 'Un nouveau collaborateur à été ajouté' : ''}
        <button onClick={comeBack}>Retour</button>
      </div>
    </div>
  )
}
