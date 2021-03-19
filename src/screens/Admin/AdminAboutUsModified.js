import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
        console.log(res.data)
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
    <div>
      {datas.map(data => (
        <>
          <label>
            Prénom
            <input
              type='text'
              placeholder={data.FirstName}
              name='firstname'
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
          </label>
          <label>
            Nom
            <input
              type='text'
              placeholder={data.LastName}
              name='lastname'
              value={lastName}
              onChange={event => setLastName(event.target.value)}
            />
          </label>
          <label>
            Poste
            <input
              type='text'
              placeholder={data.JobName}
              name='jobname'
              value={jobName}
              onChange={event => setJobName(event.target.value)}
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
        {valid ? 'Le collaborateur à été modifié' : ''}
        <button onClick={comeBack}>Retour</button>
      </div>
    </div>
  )
}
