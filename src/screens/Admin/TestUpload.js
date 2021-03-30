import React, {useState} from 'react'
import axios from 'axios'


export default function TestUpload() {
  // const [name, setName] = useState()
  const [file, setFile] = useState()

  console.log(file)
  const send = () => {
    const data = new FormData()
    data.append('name', name)
    data.append('file', file)
    axios.post('http://localhost:4242/upload' , data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }


  return (
    <div className='container'>
      <div className='row'>
          <div className='form-group'>
            <label htmlFor='file'>File</label>
            <input type='file' id='file' onChange={e => setFile(e.target.files[0])} />
            <button onClick={send} type="submit">ajouter</button>
          </div>
        </div>
      </div>
  )
}