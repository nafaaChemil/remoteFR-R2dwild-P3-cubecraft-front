import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminConceptAdd() {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [textConcept, setTextConcept] = useState('')
  const [picture, setPicture] = useState('')
  const [valid, setValid] = useState(false)
  const [datas, setDatas] = useState([''])
  const [display, setDisplay] = useState(true)

  function displayPhotos() {
    const fetchData = async () => {
      const resq = await axios.get('http://localhost:4242/photos')
      setDatas(resq.data)
      setDisplay(!display)
    }
    fetchData()
  }

  const addId = id => {
    setPicture(id)
    setDisplay(!display)
  }

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
        <input type='number' name='picture' value={picture} />
        <button className='choice-picture' onClick={displayPhotos}>
          Choisir
        </button>
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
      <div style={{ display: `${display ? 'none' : 'block'}` }}>
        {datas.map((data, index) => (
          <>
            <img
              className='img-upload'
              style={{ width: '100px' }}
              key={index}
              src={`${data.Name}`}
            />
            <button onClick={() => addId(data.Id)}>Choisir</button>
          </>
        ))}
      </div>
    </div>
  )
}
