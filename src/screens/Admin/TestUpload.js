import React, { useState } from 'react'
import axios from 'axios'

export default function TestUpload() {
  const [file, setFile] = useState({
    data: '',
    name: ''
  })

  console.log(file)

  const send = () => {
    const data = new FormData()
    data.append('name', file.name)
    data.append('file', file.data)
    axios
      .post('http://localhost:4242/upload', data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='form-group'>
          <label htmlFor='file'>File</label>
          <input
            type='file'
            id='file'
            accept='image/png, image/jpeg'
            onChange={e =>
              setFile({
                data: e.target.files[0],
                name: e.target.files[0].name
              })
            }
          />
          <button onClick={send} type='submit'>
            ajouter
          </button>
        </div>
      </div>
    </div>
  )
}
