import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
export default function Connexion() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState()

  let history = useHistory()
  const handleConnect = e => {
    e.preventDefault()
    axios
      .post('http://localhost:4242/signin', {
        username: username,
        password: password
      })
      .then(res => {
        history.push('/admin/slider')
        localStorage.setItem('adminUser', res.headers['x-access-token'])
      })
      .catch(err => setAlert('Mauvais identifiant ou mot de passe'))
  }

  return (
    <div id='admin'>
      <form onSubmit={handleConnect} className='Form-Connexion'>
        <img
          className='logo-connexion'
          src='images/Highcubelogo.png'
          alt='Logo High cube'
        />
        <div className='Form-group-connexion'>
          <label htmlFor='username'>Pseudo :</label>
          <input
            type='text'
            name='username'
            onChange={e => setUsername(e.target.value)}
            value={username}
          ></input>
        </div>
        <div className='Form-group-connexion'>
          <label htmlFor='password'>Mot de passe :</label>
          <input
            type='password'
            name='password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          ></input>
        </div>
        <button type='submit'>
          Connexion
        </button>
        <p>{alert}</p>
      </form>
    </div>
  )
}
