import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AdminSlider.scss'
import SuppOrEdit from '../components/SuppOrEdit'

export default function AdminSlider() {
  const [datas, setDatas] = useState([''])

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get('http://localhost:4242/slider')
      setDatas(resq.data)
    }
    fetchData()
  }, [])

  console.log(datas)
  return (
    <>
      <section id='admin_TitleSlider'>
        <h1>Slider Texte </h1>
        <button>Ajouter</button>
        {/* Titre du slider avec bouton sauvegarde */}
        <div>
          <h3>Titre</h3>
          <input type='text' />
          <button>Save</button>
        </div>
        <div>
          {datas.map((data, index) => (
            <SuppOrEdit key={index} name={data.Word}></SuppOrEdit>
          ))}
        </div>
      </section>
    </>
  )
}
