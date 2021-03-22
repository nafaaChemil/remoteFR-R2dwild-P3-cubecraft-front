import axios from 'axios'
import { useState, useEffect } from 'react'

import SuppOrEdit from '../../components/Admin/SuppOrEdit'
import ButtonAdd from '../../components/Admin/ButtonAdd'

export default function AdminSlider() {
  const [datas, setDatas] = useState([''])

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get('http://localhost:4242/slider')
      setDatas(resq.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <section id='admin'>
        <h1>Slider Texte </h1>

        {/* Titre du slider avec bouton sauvegarde */}
        <div>
          <h3>Titre</h3>
          <input type='text' />
          <button>Save</button>
        </div>
        <div>
          <ButtonAdd name='Ajouter un texte au slider' />
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
