import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function AdminProModified(props) {
  const [productAdded, setProductAdded] = useState(false)
  const [status, setStatus] = useState(null)
  const [formData, setFormData] = useState({
    CategoryName: '',
    Price: 0,
    Description: '',
    Individual: 0,
    photo_id: 1
  })
  const params = props.match.params
  const id = params.id
  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios
        .get(`http://localhost:4242/particularPro/${id}`)
        .then(function (response) {
          if (response.status === 200) {
            setStatus(200)
            setFormData({
              CategoryName: response.data.CategoryName,
              Price: response.data.Price,
              Description: response.data.Description,
              Individual: 0,
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
    fetchData()
  }, [])

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const editProduct = async () => {
    const res = await axios
      .put(`http://localhost:4242/particularPro/${id}`, {
        ...formData
      })
      .then(function (response) {
        setProductAdded(true)
        setStatus(null)
        setFormData({
          CategoryName: '',
          Price: 0,
          Description: '',
          Individual: 0,
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
  return status === 404 ? (
    <div>
      <h1>404 Aucun produit ne correspond à cette URL</h1>
      <br />
      <Link to='/admin/professionnel/'>
        Retourner aux produits pour professionnels
      </Link>
    </div>
  ) : (
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
      <button onClick={editProduct}>Modifier le produit</button>
      {productAdded ? (
        <div>
          Produit modifié !
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

AdminProModified.propTypes = {
  match: PropTypes.object
}
