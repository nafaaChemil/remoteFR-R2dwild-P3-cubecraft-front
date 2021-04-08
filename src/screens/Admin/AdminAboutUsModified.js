import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export default function AdminAboutUsModified() {
  const history = useHistory()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobName, setJobName] = useState('')
  const [picture, setPicture] = useState('')
  const [valid, setValid] = useState(false)
  const [datas, setDatas] = useState([])
  const [display, setDisplay] = useState(true)
  const [infos, setInfos] = useState([])

  let { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get(`http://localhost:4242/about/${id}`)
      setDatas(resq.data)
      setFirstName(resq.data[0].FirstName)
      setLastName(resq.data[0].LastName)
      setJobName(resq.data[0].JobName)
      setPicture(resq.data[0].Photo_id)
    }
    fetchData()
  }, [])

  function displayPhotos() {
    const fetchPhoto = async () => {
      const resq = await axios.get('http://localhost:4242/photos')
      setInfos(resq.data)
      setDisplay(!display)
      setFirstName(firstName)
      setLastName(lastName)
      setJobName(jobName)
      setPicture(picture)
    }
    fetchPhoto()
  }

  const addId = id => {
    setPicture(id)
    setDisplay(!display)
  }

  const modified = () => {
    axios
      .put(`http://localhost:4242/about/${id}`, {
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
        <h2>Modifier un profil </h2>
        <div className='formulaire-admin-add'>
          {datas.map(data => (
            <>
              <div className='form-group-add'>
                <label>Prénom :</label>
                <input
                  type='text'
                  name='firstname'
                  value={firstName}
                  onChange={event => setFirstName(event.target.value)}
                />
              </div>
              <div className='form-group-add'>
                <label>Nom :</label>
                <input
                  type='text'
                  name='lastname'
                  value={lastName}
                  onChange={event => setLastName(event.target.value)}
                />
              </div>
              <div className='form-group-add'>
                <label>Poste :</label>
                <input
                  type='text'
                  name='jobname'
                  value={jobName}
                  onChange={event => setJobName(event.target.value)}
                />
              </div>
              <div className='form-group-add'>
                <label>Choix de la photos</label>
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
                  <>
                    <div className='choicephoto-container'>
                      <img
                        className='img-upload'
                        key={index}
                        src={`${info.Name}`}
                      />
                      <button onClick={() => addId(info.Id)}>Choisir</button>
                    </div>
                  </>
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
            {valid ? 'Le collaborateur à été modifié' : ''}
            <button onClick={comeBack}>Retour</button>
          </div>
        </div>
      </div>
    </section>
  )
}
