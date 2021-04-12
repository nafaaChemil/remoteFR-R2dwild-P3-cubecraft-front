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
  const [infos, setInfos] = useState([])
  const [display, setDisplay] = useState(true)

  function displayPhotos() {
    const fetchPhoto = async () => {
      const resq = await axios.get('http://localhost:4242/photos')
      setInfos(resq.data)
      setDisplay(!display)
    }
    fetchPhoto()
  }

  let { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get(`http://localhost:4242/concept/${id}`)
      setDatas(resq.data)
      setTitle(resq.data[0].Title)
      setTextConcept(resq.data[0].Text)
      setPicture(resq.data[0].Photo_id)
    }
    fetchData()
  }, [])

  const addId = id => {
    setPicture(id)
    setDisplay(!display)
  }

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
    <section className='AddPage' id='admin'>
      <div className='Container-Addpage'>
        <h1>Concept: Modifier un concept </h1>
        <div className='formulaire-admin-add'>
          {datas.map(data => (
            <>
              <div className='form-group-add'>
                <label>Titre du concept</label>
                <input
                  type='text'
                  name='title'
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                />
              </div>
              <div className='form-group-add'>
                <label>Concept</label>
                <textarea
                  type='text'
                  name='concept'
                  value={textConcept}
                  cols='30'
                  rows='15'
                  onChange={event => setTextConcept(event.target.value)}
                />
              </div>
              <div className='form-group-add'>
                <label>Choix de la photo</label>
                <input type='number' name='picture' value={picture} />
                <button className='choice-picture' onClick={displayPhotos}>
                  Choisir
                </button>
              </div>
              <div
                className='container-choice-img'
                style={{ display: `${display ? 'none' : 'flex'}` }}
              >
                {infos.map((info, index) => (
                  <div className='choicephoto-container'>
                    <img
                      className='img-upload'
                      key={index}
                      src={`${info.Name}`}
                    />
                    <button onClick={() => addId(info.Id)}>Choisir</button>
                  </div>
                ))}
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
