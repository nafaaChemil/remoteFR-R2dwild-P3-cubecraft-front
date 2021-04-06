import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminPhotosAdd() {
  // const [myImage, setMyImage] = useState([])
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
    <div className='container-image'>
      <div>
        <label htmlFor='file'>File</label>
        <input
          type='file'
          id='file'
          accept='image/png, image/jpeg'
          onChange={e =>
            setFile({
              data: e.target.files[0],
              name: e.target.files[0].name.replace(/ /g, '_')
            })
          }
        />
      </div>
      <div className='block-select-img'>
        {/* <ul>
          {myImage.length === 0 ? (
            <li>Aucune photo</li>
          ) : (
            myImage.map((img, i) => (
              <li key={i}>{img[0].name.replace(/ /g, '_')}</li>
            ))
          )}
        </ul> */}
        <p>{file.name}</p>
      </div>
      <button
        onClick={handleSubmit}
        style={{ display: `${valid ? 'none' : 'block'}` }}
      >
        Envoyer
      </button>
      <button onClick={comeBack}>Retour</button>
    </div>
  )
}
