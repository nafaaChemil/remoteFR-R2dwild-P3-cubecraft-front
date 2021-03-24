import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminConceptAdd() {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [textConcept, setTextConcept] = useState('')
  const [picture, setPicture] = useState('')
  const [valid, setValid] = useState(false)

  const AddConcept = () =>
    axios
      .post('http://localhost:4242/concept', {
        Text: textConcept,
        Title: title,
        Photo_id: picture
      })
      .then(res => {
        setValid(!valid)
        setTitle(title)
        setTextConcept(textConcept)
        setPicture(picture)
      })
  function comeBack() {
    history.push('/admin/concept')
  }

  return (
    <div>
      <label>
        Titre du concept
        <input
          type='text'
          name='title'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </label>
      <label>
        Concept
        <textarea
          type='text'
          name='concept'
          value={textConcept}
          onChange={event => setTextConcept(event.target.value)}
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
          onClick={AddConcept}
          style={{ display: `${valid ? 'none' : 'block'}` }}
        >
          Ajouter un concept
        </button>
        {valid ? 'Un nouveau concept à été ajouté' : ''}
        <button onClick={comeBack}>Retour</button>
      </div>
    </div>
  )
}
