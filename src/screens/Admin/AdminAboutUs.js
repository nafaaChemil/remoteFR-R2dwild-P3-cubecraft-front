import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import ButtonAdd from '../../components/Admin/ButtonAdd'
import SuppOrEdit from '../../components/Admin/SuppOrEdit'

export default function AdminAboutUs() {
  const [datas, setDatas] = useState([''])
  const [affiched, setAffiched] = useState(true)
  const [title, setTitle] = useState('')
  const [updatedOk, setUpdatedOk] = useState('')
  const history = useHistory()

  const deleteProfile = id => {
    axios.delete(`http://localhost:4242/about/${id}`, {}).then(res => {
      setAffiched(!affiched)
    })
  }
  function AddProfile() {
    history.push(`/admin/about/profile/`)
  }

  function modifiedProfile(id) {
    history.push(`/admin/about/profile/${id}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get('http://localhost:4242/about')
      setDatas(resq.data)
      const res = await axios.get('http://localhost:4242/about/card')
      setTitle(res.data[0].Titre)
    }
    fetchData()
  }, [affiched])

  const updateInfos = async () => {
    await axios
      .put(`http://localhost:4242/about/card/3`, {
        Titre: title
      })
      .then(res => {
        setUpdatedOk('Titre mis à jour')
      })
  }

  return (
    <>
      <section id='admin'>
        <h1>A propos</h1>
        {/* Titre du slider avec bouton sauvegarde */}
        <div>
          <ButtonAdd name='Ajouter un profil' handleClickAdd={AddProfile} />
        </div>
        <div>
          {datas.map((data, index) => (
            <SuppOrEdit
              handleClickSupp={() => deleteProfile(data.Id)}
              handleClickEdit={() => modifiedProfile(data.Id)}
              key={index}
              name={data.FirstName + '  ' + data.LastName}
            ></SuppOrEdit>
          ))}
        </div>

        <div>
          <h3>Titre :</h3>
          <div className='form-group'>
            <input
              value={title}
              type='text'
              onChange={e => setTitle(e.target.value)}
            />
            <button onClick={updateInfos} className='BtnAction'>
              <img
                alt='logo edit'
                className='logoBtn'
                src='/images/logo/save.svg'
              />
            </button>
            {updatedOk ? <p className='updateTitle'>{updatedOk}</p> : ''}
          </div>
        </div>
      </section>
    </>
  )
}
