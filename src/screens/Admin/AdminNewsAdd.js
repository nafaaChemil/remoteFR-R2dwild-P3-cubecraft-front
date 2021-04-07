import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminNewsAdd() {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    text: '',
    photo_id: ''
  })
  const [datas, setDatas] = useState([''])
  const [display, setDisplay] = useState(true)
  const [newsAdded, setNewsAdded] = useState(false)
  const [status, setStatus] = useState(null)

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  function displayPhotos() {
    const fetchData = async () => {
      const resq = await axios.get('http://localhost:4242/photos')
      setDatas(resq.data)
      setDisplay(!display)
    }
    fetchData()
  }
  const addId = id => {
    setFormData({ photo_id: id })
    setDisplay(!display)
  }

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
            photo_id: ''
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
     <label>
        Choix de la photo
        <input type='number' name='picture' value={formData.photo_id} />
        <button className='choice-picture' onClick={displayPhotos}>
          Choisir
        </button>
      </label>
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
