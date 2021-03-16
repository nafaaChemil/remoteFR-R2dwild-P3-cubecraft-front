import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SuppOrEdit from '../../components/Admin/SuppOrEdit'
import ButtonAdd from '../../components/Admin/ButtonAdd'

export default function AdminAboutUs() {
  const [datas, setDatas] = useState([''])

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get('http://localhost:4242/about')
      setDatas(resq.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <section id='admin'>
        <h1>A propos</h1>

        {/* Titre du slider avec bouton sauvegarde */}

        <div>
          <ButtonAdd name='Ajouter un profil' />
        </div>

        <div>
          {datas.map((data, index) => (
            <SuppOrEdit key={index} name={data.FirstName}></SuppOrEdit>
          ))}
        </div>
      </section>
    </>
  )
}
