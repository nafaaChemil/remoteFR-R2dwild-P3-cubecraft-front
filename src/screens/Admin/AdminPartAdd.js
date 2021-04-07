import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminPartAdd() {
  const [formData, setFormData] = useState({
    CategoryName: '',
    Price: 0,
    Description: '',
    Individual: 1,
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
            Individual: 1,
            photo_id: 1
          })
        }
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
          if (error.response.status === 422) {
            setStatus(`ID photo incorrect`)
            setProductAdded(false)
          }
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }
  return (
    <section className='AddPage'>
      <div className='Container-Addpage'>
        <h2>Ajouter un article particulier</h2>
        <div className='formulaire-admin-add'>
          <div className='form-group-add'>
            <label htmlFor='CategoryName'>Nom :</label>
            <input
              type='text'
              name='CategoryName'
              value={formData.CategoryName}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group-add'>
            <label htmlFor='Price'>Prix :</label>
            <input
              type='number'
              name='Price'
              value={formData.Price}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group-add'>
            <label htmlFor='Description'>Description :</label>
            <textarea
              type='text'
              name='Description'
              value={formData.Description}
              onChange={e => onChange(e)}
              cols='40'
              rows='15'
            />
          </div>
          <div className='form-group-add'>
            <label htmlFor='photo_id'>ID de l'image :</label>
            <input
              type='number'
              name='photo_id'
              value={formData.photo_id}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='Form-group-btn'>
            <button onClick={addProduct}>Ajouter le produit</button>
            {productAdded ? (
              <div className='popupMessage'>
                <p>Produit ajouté !</p>
                <Link className='Backlink' to='/admin/particulier/'>
                  Retourner aux produits pour particuliers
                </Link>
              </div>
            ) : (
              ''
            )}
            {status}
          </div>
        </div>
      </div>
    </section>
  )
}
