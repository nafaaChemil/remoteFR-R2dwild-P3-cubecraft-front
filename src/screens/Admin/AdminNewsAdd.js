import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

export default function AdminNewsAdd() {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    text: '',
    photo_id: 1
  })

  const [newsAdded, setNewsAdded] = useState(false)
  const [status, setStatus] = useState(null)

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const addNews = async () => {
    await axios
      .post('http://localhost:4242/news/', {
        ...formData
      })
      .then(function (response) {
        if (response.status === 200) {
          setNewsAdded(true)
          setStatus()
          setFormData({
            title: '',
            link: '',
            text: '',
            photo_id: 1
          })
        }
      })
      .catch(error => {
        // Error 😨
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
          if (error.response.status === 422) {
            setStatus(`ID photo incorrect`)
            setNewsAdded(false)
          }
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request)
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }
  return (
    <div>
      <label htmlFor='title'>Titre</label>
      <input
        type='text'
        name='title'
        value={formData.title}
        onChange={e => onChange(e)}
      />
      <label htmlFor='link'>Lien</label>
      <input
        type='text'
        name='link'
        value={formData.link}
        onChange={e => onChange(e)}
      />
      <label htmlFor='text'>Texte</label>
      <textarea
        type='text'
        name='text'
        value={formData.text}
        onChange={e => onChange(e)}
      />
      <label htmlFor='photo_id'>ID de l'image</label>
      <input
        type='number'
        name='photo_id'
        value={formData.photo_id}
        onChange={e => onChange(e)}
      />
      <button onClick={addNews}>Ajouter la news</button>
      {newsAdded ? (
        <div>
          Actu ajoutée !{' '}
          <Link to='/admin/actualites/'>Retourner aux actus</Link>
        </div>
      ) : (
        ''
      )}
      {status}
    </div>
  )
}
