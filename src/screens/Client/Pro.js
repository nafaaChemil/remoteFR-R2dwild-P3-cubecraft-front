import axios from 'axios'
import { useState, useEffect } from 'react'
import EncartSite from '../../components/Client/EncartSite'

export default function Pro() {
  const [datas, setDatas] = useState([''])
  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get(
        `http://localhost:4242/particularPro/pro/detail`
      )
      setDatas(resq.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h2 className='uCenter'>Professionnels</h2>

      {datas.map((data, index) => (
        <EncartSite
          key={index}
          imageEncart={data.Name}
          titleH3={data.CategoryName}
          texte={data.Description}
          price={data.Price}
          link='contact'
        ></EncartSite>
      ))}
    </div>
  )
}
