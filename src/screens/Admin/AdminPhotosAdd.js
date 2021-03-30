import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AdminPhotosAdd() {
  const [myImage, setMyImage] = useState([])
  const [valid, setValid] = useState(false)

  let history = useHistory()

  const handleAdd = e => {
    setMyImage(oldArray => [...oldArray, e.target.files])
  }

  const handleSubmit = () => {
    myImage.map(img =>
      axios
        .post(`http://localhost:4242/photos`, {
          Name: `images/${img[0].name.replace(/ /g, '_')}`
        })
        .then(res => {
          setValid(!valid)
        })
    )
    history.push('/admin/photos')
  }
  function comeBack() {
    history.push('/admin/photos')
  }

  return (
    <div className='container-image'>
      <div>
        <label> image : </label>
        <input type='file' onChange={handleAdd} />
      </div>
      <div className='block-select-img'>
        <ul>
          {myImage.length === 0 ? (
            <li>Aucune photo</li>
          ) : (
            myImage.map((img, i) => (
              <li key={i}>{img[0].name.replace(/ /g, '_')}</li>
            ))
          )}
        </ul>
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
