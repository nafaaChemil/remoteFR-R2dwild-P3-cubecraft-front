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

  const AddProfile = () =>
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
        <input type='number' name='picture' value={picture} />
        <button className='choice-picture' onClick={displayPhotos}>
          Choisir
        </button>
      </label>
      <div>
        <button
          onClick={AddProfile}
          style={{ display: `${valid ? 'none' : 'block'}` }}
        >
          Ajouter collaborateur
        </button>
        <h1 style={{ display: `${valid ? 'block' : 'none'}` }}>
          Un collaborateur a été ajouté avec succès
        </h1>
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
