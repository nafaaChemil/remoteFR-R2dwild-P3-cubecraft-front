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
    <section className='AddPage'>
      <div className='Container-Addpage'>
        <h2>Ajouter un concept </h2>
        <div className='formulaire-admin-add'>
          <div className='form-group-add'>
            <label htmlFor='title'>Titre du concept :</label>
            <input
              type='text'
              name='title'
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </div>
          <div className='form-group-add'>
            <label htmlFor='concept'>Concept :</label>
            <textarea
              type='text'
              name='concept'
              value={textConcept}
              cols="40"
              rows="15"
              onChange={event => setTextConcept(event.target.value)}
            />
          </div>
          <div className='form-group-add'>
             <label>
              Choix de la photo
              </label>
              <input type='number' name='picture' value={picture} />
              <button className='choice-picture' onClick={displayPhotos}>
                Choisir
              </button>
          </div>
           <div className="container-choice-img" style={{ display: `${display ? 'none' : 'flex'}` }}>
            {datas.map((data, index) => (
              <div className="choicephoto-container">
                <img
                  className='img-upload'
                  key={index}
                  src={`${data.Name}`}
                />
                <button onClick={() => addId(data.Id)}>Choisir</button>
              </div>
            ))}
          </div>
          <div className='Form-group-btn'>
            <button onClick={comeBack}>Retour</button>
            {valid ? 'Un nouveau concept à été ajouté' : ''}
            <button
              onClick={AddConcept}
              style={{ display: `${valid ? 'none' : 'block'}` }}
            >
              Ajouter un concept
            </button>
          </div>
        </div>
       
      </div>
    </section>
  )
}
