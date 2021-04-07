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

  let { id } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get(`http://localhost:4242/about/${id}`)
      setDatas(resq.data)
    }
    fetchData()
  }, [])

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
          <label>
            Prénom :
            </label>
            <input
              type='text'
              placeholder={data.FirstName}
              name='firstname'
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
          </div>
          <div className='form-group-add'>
          <label>
            Nom :
            </label>
            <input
              type='text'
              placeholder={data.LastName}
              name='lastname'
              value={lastName}
              onChange={event => setLastName(event.target.value)}
            />
          </div>
          <div className='form-group-add'>
          <label>
            Poste :
            </label>
            <input
              type='text'
              placeholder={data.JobName}
              name='jobname'
              value={jobName}
              onChange={event => setJobName(event.target.value)}
            />
          </div>
          <div className='form-group-add'>
          <label>
            Choix de la photo :
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
        {valid ? 'Le collaborateur à été modifié' : ''}
        <button onClick={comeBack}>Retour</button>
      </div>
    </div>
    </div>
    </section>
  )
}
