import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import './styles/Admin.scss'
import SuppOrEdit from '../components/SuppOrEdit'
import ButtonAdd from '../components/ButtonAdd'

export default function AdminNews() {
  const [datas, setDatas] = useState([''])
  const [change, setChange] = useState(false)
  const deleteNews = async id => {
    console.log(id)

    const res = await axios
      .delete(`http://localhost:4242/news/${id}`)
      .then(function (response) {
        console.log(response)
        setChange(!change)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get('http://localhost:4242/news/')
      setDatas(resq.data)
    }
    fetchData()
  }, [change])

  console.log(datas)
  return (
    <>
      <section id='admin'>
        <h1>Actualités</h1>

        {/* Titre du slider avec bouton sauvegarde */}

        <div>
          {/* <ButtonAdd name='Ajouter une news' handleClickAdd={addNews} /> */}
          <Link to='/admin/actualites/add'>Ajouter une actu</Link>
        </div>

        <div>
          {datas.map((data, index) => (
            <SuppOrEdit
              handleClickSupp={e => deleteNews(data.Id)}
              key={index}
              name={`Article ${data.Title}`}
              id={data.Id}
            ></SuppOrEdit>
          ))}
        </div>
      </section>
    </>
  )
}
