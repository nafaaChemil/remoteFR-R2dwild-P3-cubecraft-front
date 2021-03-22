import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminProAdd() {
  const [formData, setFormData] = useState({
    CategoryName: '',
    Price: 0,
    Description: '',
    ParticularPro: 0,
    photo_id: 1
  })

  const [productAdded, setProductAdded] = useState(false)
  const [status, setStatus] = useState(null)

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

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
            ParticularPro: 0,
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
      <label htmlFor='photo_id'>ID de l'image</label>
      <input
        type='number'
        name='photo_id'
        value={formData.photo_id}
        onChange={e => onChange(e)}
      />
      <button onClick={addProduct}>Ajouter le produit</button>
      {productAdded ? (
        <div>
          Produit ajouté !
          <Link to='/admin/professionnel/'>
            Retourner aux produits pour professionnels
          </Link>
        </div>
      ) : (
        ''
      )}
      {status}
    </div>
  )
}
