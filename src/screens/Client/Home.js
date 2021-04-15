import ScrollingText from './ScrollingText'
import IntroEncart from '../../components/Client/IntroEncart'
import EncartConcept from '../../components/Client/EncartConcept'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
  const [datas, setDatas] = useState([''])
  const [pro, setPro] = useState([''])
  const [part, setPart] = useState([''])

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get(`http://localhost:4242/slider/title`)
      setDatas(resq.data)
      const res = await axios.get(`http://localhost:4242/slider/cardPro`)
      setPro(res.data)
      const response = await axios.get(`http://localhost:4242/slider/cardPart`)
      setPart(response.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      {datas.map(info => (
        <>
          <div
            className='Home'
            style={{
              backgroundImage: `url(${info.Name})`
            }}
          >
            <div className='home-hero-carousel'>
              <h1 className='home-title'>{info.Titre}</h1>
              <div className='carousel-text'>
                <ScrollingText />
              </div>
            </div>
          </div>
        </>
      ))}

      {/* Encart intro */}
      <section className='concept'>
        {part.map(infoPart =>
          pro.map(infoPro => (
            <>
              <h2>{infoPart.Titre}</h2>

              <div className='responsive'>
                <IntroEncart
                  imageEncart={infoPart.Name}
                  titleH3={infoPart.Text}
                  link={infoPart.Word}
                  target='particular'
                />

                <IntroEncart
                  imageEncart={infoPro.Name}
                  titleH3={infoPro.Text}
                  link={infoPro.Word}
                  target='pro'
                />
              </div>
            </>
          ))
        )}
      </section>

      {/* Encart intro */}

      <EncartConcept
        imageEncart='images/Annexe6.jpg'
        titleH3='Particulier'
        texte={[
          `Pour réaliser votre projet, nous recyclons des conteneurs maritimes destinés à être détruit afin de leur donner une seconde vie. En recyclant ces conteneurs, on réduit considérablement notre 
            empreinte carbone sur la construction d'une maison.`
        ]}
        link='Découvrir nos offres
        '
      />

      <EncartConcept
        imageEncart='images/Annexe6.jpg'
        titleH3='Professionnels'
        texte={[
          `Pour réaliser votre projet, nous recyclons des conteneurs maritimes destinés à être détruit afin de leur donner une seconde vie. En recyclant ces conteneurs, on réduit considérablement notre 
                  empreinte carbone sur la construction d'une maison.`
        ]}
        link='Découvrir nos offres
        '
      />

      <section className='concept'>
        <h2>Suivez-nous sur les réseaux</h2>
      </section>
    </div>
  )
}

export default Home
