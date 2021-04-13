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
        <ActuEncart
          imageEncart='images/Annexe4.jpg'
          titleH3='Journal'
          text='
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          sodales leo eu libero luctus finibus. Aliquam id eleifend felis. 
          Pellentesqiquam lacinia, 
          lectus sit amet porta iaculis, nisi elit tincidunt purus, nec 
          suscipit velit lacus in nibh. Interdum et malesuada fames ac ante 
          ipsum primis in faucibus. In libero odio, consequat nec sodales ac, 
          feugiat non velit.'
          link='Lien'
        />
      </div>
    </section>
  )
}
