import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminPhotosAdd() {
  const [valid, setValid] = useState(false)
  const [file, setFile] = useState({
    data: '',
    name: ''
  })

  let history = useHistory()

  console.log(file.name)

  const handleSubmit = () => {
    axios.post('http://localhost:4242/photos', {
      Name: `/images/${file.name}`
    })
    const data = new FormData()
    data.append('name', file.name)
    data.append('file', file.data)
    axios
      .post('http://localhost:4242/upload', data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    history.push('/admin/photos')
  }

  function comeBack() {
    history.push('/admin/photos')
  }

  return (
    <section className='AddPage'>
      <div className='Container-Addpage'>
      <h2>Ajouter une image </h2>
        <div className='formulaire-admin-add'>
          <div className='form-group-add'>
            <label htmlFor='file'>Choisissez une image :</label>
            <input
              type='file'
              id='file'
              accept='image/png, image/jpeg'
              onChange={e =>
                setFile({
                  data: e.target.files[0],
                  name: e.target.files[0].name.replace(/ /g, '')
                })
              }
            />
          </div>
          </div>
          <div className='block-select-img'>
            <p>{file.name}</p>
          </div>
          <div className='Form-group-btn'>
          <button onClick={comeBack}>Retour</button>
           <button
            onClick={handleSubmit}
            style={{ display: `${valid ? 'none' : 'block'}` }}
          >
            Sauvegarder
          </button>
          </div>

      </div>
    </section>
  )
}
