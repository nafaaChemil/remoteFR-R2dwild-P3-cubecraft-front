import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminPartAdd() {
  const [formData, setFormData] = useState({
    CategoryName: '',
    Price: 0,
    Description: '',
    Individual: 1,
    photo_id: ''
  })
  const [datas, setDatas] = useState([''])
  const [display, setDisplay] = useState(true)
  const [productAdded, setProductAdded] = useState(false)
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
  const addProduct = async () => {
    const res = await axios
      .post('http://localhost:4242/particularPro/', {
        ...formData
      })
      .then(function (response) {
        if (response.status === 200) {
          setProductAdded(true)
          setStatus()
          setFormData({
            CategoryName: '',
            Price: 0,
            Description: '',
            Individual: 1,
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
            setProductAdded(false)
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
      <label htmlFor='CategoryName'>Nom</label>
      <input
        type='text'
        name='CategoryName'
        value={formData.CategoryName}
        onChange={e => onChange(e)}
      />
      <label htmlFor='Price'>Prix</label>
      <input
        type='number'
        name='Price'
        value={formData.Price}
        onChange={e => onChange(e)}
      />
      <label htmlFor='Description'>Description</label>
      <textarea
        type='text'
        name='Description'
        value={formData.Description}
        onChange={e => onChange(e)}
      />
      <label>
        Choix de la photo
        <input type='number' name='picture' value={formData.photo_id} />
        <button className='choice-picture' onClick={displayPhotos}>
          Choisir
        </button>
      </label>
      <button onClick={addProduct}>Ajouter le produit</button>
      {productAdded ? (
        <div>
          Produit ajouté !
          <Link to='/admin/particulier/'>
            Retourner aux produits pour particuliers
          </Link>
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
