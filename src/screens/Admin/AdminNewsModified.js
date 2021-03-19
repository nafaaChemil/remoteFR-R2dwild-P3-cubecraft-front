import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import axios from 'axios'

export default function AdminNewsModified(props) {
  const [newsAdded, setNewsAdded] = useState(false)
  const [status, setStatus] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    text: '',
    photo_id: 1
  })
  const params = props.match.params
  const id = params.id

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios
        .get(`http://localhost:4242/news/${id}`)
        .then(function (response) {
          if (response.status === 200) {
            setStatus(200)
            setFormData({
              title: response.data.Title,
              link: response.data.Link,
              text: response.data.Text,
              photo_id: response.data.Photo_id
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
            if (error.response.status === 404) {
              setStatus(404)
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
    fetchData()
  }, [])

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const editNews = async () => {
    const res = await axios
      .put(`http://localhost:4242/news/${id}`, {
        ...formData
      })
      .then(function (response) {
        setNewsAdded(true)
        setStatus(null)
        setFormData({
          title: '',
          link: '',
          text: '',
          photo_id: 1
        })
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
  return status === 404 ? (
    <div>
      <h1>404 Aucune actualité ne correspond à cette URL</h1>
      <br />
      <Link to='/admin/actualites/'>Retourner aux actus</Link>
    </div>
  ) : (
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
      <button onClick={editNews}>Modifier la news</button>
      {newsAdded ? (
        <div>
          Actu modifiée !
          <Link to='/admin/actualites/'>Retourner aux actus</Link>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

AdminNewsModified.propTypes = {
  match: PropTypes.object
}
