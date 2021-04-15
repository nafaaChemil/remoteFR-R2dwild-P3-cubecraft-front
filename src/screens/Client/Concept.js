import { useEffect, useState } from 'react'
import axios from 'axios'
import EncartConcept from '../../components/Client/EncartConcept'

function Concept() {
  const [datas, setDatas] = useState([''])

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get(`http://localhost:4242/concept/detail`)
      setDatas(resq.data)
    }
    fetchData()
  }, [])

  return (
    <div className='concept-block'>
      {/* Encart Site */}
      <section className='responsive'>
        <h2 className='uCenter'>Un concept avec de nombreux avantages.</h2>

        <EncartConcept
          imageEncart='images/Annexe2.jpg'
          titleH3={[`A l'origine`]}
          texte={[
            `Les conteneurs maritimes qui ont été conçus pour transporter des marchandises à travers le monde ont été créées por résister à tous les climats les plus rudes du monde. De l'eau salée aux températures glaciales, le container maritime est destiné à gérer le pire des pires tout en protégeant sa cargaison. Composé d'acier corten, 
            ils résistent énormément à la corrosion ou à la rouille`
          ]}
        />
      </section>

      {datas.map((info, index) => (
        <>
          <EncartConcept
            imageEncart={info.Name}
            key={index}
            titleH3={info.Title}
            texte={info.Text}
          />
        </>
      ))}
    </div>
  )
}

export default Concept
