import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminSliderAdd() {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [word, setWord] = useState('')
  const [picture, setPicture] = useState('')
  const [valid, setValid] = useState(false)

  const AddSlider = () =>
    axios
      .post('http://localhost:4242/about', {
        Title: title,
        Word: word,
        Photo_id: picture
      })
      .then(res => {
        setValid(!valid)
        setTitle(title)
        setWord(word)
        setPicture(picture)
      })
  function comeBack() {
    history.push('/admin/slider')
  }

  return (
    <div>
      <label>
        Title
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
