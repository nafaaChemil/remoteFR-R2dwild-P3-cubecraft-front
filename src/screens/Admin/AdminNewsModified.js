import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import axios from 'axios'

export default function AdminNewsModified(props) {
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  const [newsAdded, setNewsAdded] = useState(false)

  // a voir comment recuperer l'id dans react router
  console.log(props)
  const params = props.match.params
  const id = params.id
  /////
  const editNews = async () => {
    const res = await axios
      .put(`http://localhost:4242/news/${id}`, {
        link: link,
        text: text,
        title: title,
        photo_id: image
      })
      .then(function (response) {
        console.log(response)
        setNewsAdded(true)
        setTitle('')
        setLink('')
        setText('')
        setImage('')
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div>
      <label htmlFor='title'>Titre</label>
      <input
        type='text'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <label htmlFor='link'>Lien</label>
      <input
        type='text'
        name='link'
        value={link}
        onChange={event => setLink(event.target.value)}
      />
      <label htmlFor='text'>Texte</label>
      <textarea
        type='text'
        name='text'
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <label htmlFor='image'>ID de l'image</label>
      <input
        type='number'
        name='image'
        value={image}
        onChange={event => setImage(event.target.value)}
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
