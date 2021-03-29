import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export default function AdminConceptModified() {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [textConcept, setTextConcept] = useState('')
  const [picture, setPicture] = useState('')
  const [valid, setValid] = useState(false)
  const [datas, setDatas] = useState([])

  let { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get(`http://localhost:4242/concept/${id}`)
      setDatas(resq.data)
    }
    fetchData()
  }, [])

  const modified = () => {
    axios
      .put(`http://localhost:4242/concept/${id}`, {
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
  }
  function comeBack() {
    history.push('/admin/concept')
  }

  return (
    <div>
      {datas.map(data => (
        <>
          <label>
            Titre du concept
            <input
              type='text'
              placeholder={data.Title}
              name='title'
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </label>
          <label>
            Concept
            <textarea
              type='text'
              placeholder={data.Text}
              name='concept'
              value={textConcept}
              onChange={event => setTextConcept(event.target.value)}
            />
          </label>
          <label>
            Choix de la photo
            <input
              type='number'
              placeholder={data.Photo_id}
              name='picture'
              value={picture}
              onChange={event => setPicture(event.target.value)}
            />
          </label>
        </>
      ))}
      <div>
        <button
          onClick={modified}
          style={{ display: `${valid ? 'none' : 'block'}` }}
        >
          Valider modification
        </button>
        {valid ? 'Le concept à été modifié' : ''}
        <button onClick={comeBack}>Retour</button>
      </div>
    </div>
  )
}
