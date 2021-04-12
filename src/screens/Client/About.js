import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardTeam from '../../components/Client/CardTeam'
import EncartConcept from '../../components/Client/EncartConcept'

function About() {
  const [datas, setDatas] = useState([''])

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get(`http://localhost:4242/about/detail`)
      setDatas(resq.data)
    }
    fetchData()
  }, [])
  console.log(datas)
  return (
    <div className='about'>
      <h2 className='uCenter'>A propos</h2>
      <section id='presentation'>
        <div>
          <EncartConcept
            imageEncart='images/Annexe2.jpg'
            titleH3={[`Qui sommes-nous`]}
            texte={[
              `Chez High Cube, nous proposons des solutions économiques et
            écologiques quel que soit votre projet : maison économique,
            écologique, confortable, logement étudiant, logements sociaux,
            piscine, cabane de jardin et bien plus encore !
              
            Notre bureau d’étude, High Cube Eco Design, est spécialisé dans le
            domaine du bâtiment et de la construction de maison container. Il
            saura donc, répondre parfaitement à votre demande. Notre équipe
            composée d'expert de la construction et de l'innovation peux
            répondre à tous les défis techniques afin de réaliser des projets
            immobiliers à l'air du temps!

            Vous allez pouvoir vivre dans un cadre de vie orignal en un temps
            record mais aussi réaliser des économies au quotidien, en matière
            d’électricité et de chauffage ! De plus, le prix d’un container
            habitable est très avantageux avec un coût de construction moindre
            par rapport à une maison classique.`
            ]}
          />
        </div>
      </section>
      <section id='team'>
        <h2>Présentation de l'équipe highcube</h2>
        <div className='encart'>
          {datas.map((info, index) => (
            <>
              <CardTeam
                imagePlayer={info.Name}
                key={index}
                FirstName={info.FirstName}
                LastName={info.LastName}
                Position={info.JobName}
                Description={info.Description}
              />
            </>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
