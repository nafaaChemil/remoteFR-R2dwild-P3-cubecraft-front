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
    <section className='AddPage'>
    <div className='Container-Addpage'>
    <h2>Modifier un concept </h2>
    <div className='formulaire-admin-add'>
      {datas.map(data => (
        <>
        <div className='form-group-add'>
          <label>
            Titre du concept
            </label>
            <input
              type='text'
              placeholder={data.Title}
              name='title'
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
        </div>      
        <div className='form-group-add'>
          <label>
            Concept
            </label>
            <textarea
              type='text'
              placeholder={data.Text}
              name='concept'
              value={textConcept}
              cols="30"
              rows="15"
              onChange={event => setTextConcept(event.target.value)}
            />
          </div>
          <div className='form-group-add'>
          <label>
            Choix de la photo
            </label>
            <input
              type='number'
              placeholder={data.Photo_id}
              name='picture'
              value={picture}
              onChange={event => setPicture(event.target.value)}
            />
          </div>
        </>
      ))}
      <div className='Form-group-btn'>
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
    </div>
  </section>
  )
}
