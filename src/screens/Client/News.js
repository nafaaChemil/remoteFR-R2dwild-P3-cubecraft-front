import axios from 'axios'
import { useState, useEffect } from 'react'
import ActuEncart from '../../components/Client/ActuEncart'

export default function News() {
  const [datas, setDatas] = useState([''])
  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get(`http://localhost:4242/news`)
      setDatas(resq.data)
    }
    fetchData()
  }, [])
  return (
    <section id='actu'>
      <h2 className='uCenter'>Actualités.</h2>
      <div className='responsive'>
        {datas.map((data, index) => (
          <ActuEncart
            key={index}
            imageEncart='images/Annexe6.jpg'
            titleH3={data.Title}
            text={data.Text}
            link={data.Link}
          />
        ))}
      </div>
    </section>
  )
}
