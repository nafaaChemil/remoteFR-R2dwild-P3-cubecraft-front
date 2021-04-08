import React from 'react'
import CardTeam from '../../components/Client/CardTeam'
import EncartSite from '../../components/Client/EncartSite'

function About() {
  return (
    <div className='about'>
      <section id='presentation'>
        <div>
          <EncartSite
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
          <CardTeam
            imagePlayer='images/mrpatate.jpg'
            nameH2='Tolgay Yildiz'
            positionH3="CEO - Fondateur, Directeur du bureau d'étude"
            description='Diplômé en Génie Civil, Tolgay est responsable la gestion du projet et de la relation clientèle'
          />
          <CardTeam
            imagePlayer='images/mrpatate.jpg'
            nameH2='Ali Ozcan'
            positionH3='COO - Directeur Usine'
            description="Fort de 25 ans d'expérience dans le BTP, Ali est en charge de la transformation et l'aménagement des containers maritimes "
          />
          <CardTeam
            imagePlayer='images/mrpatate.jpg'
            nameH2='Salim Ousseni'
            positionH3='CTO - Ingénieur Structure'
            description="Diplômé en Génie Civil, Salim supervise l'étude structure et métré"
          />
          <CardTeam
            imagePlayer='images/mrpatate.jpg'
            nameH2='Soufiane Boulal'
            positionH3='CSO - Responsable Commercial'
            description="Diplômé en marketing, Soufiane pilote le développement commercial et la prépration d'événement pour Highcube "
          />
          <CardTeam
            imagePlayer='images/mrpatate.jpg'
            nameH2='Christelle Mathias'
            positionH3='Architecte HMONP'
            description='Christelle nous aide dans les démarches de dépôt de permis de construire et le développement de visite virtuelle en 3D'
          />
          <CardTeam
            imagePlayer='images/mrpatate.jpg'
            nameH2='Bet Owega'
            positionH3="Bureau d'étude thermique"
            description='Nous collaborons avec Bet Owega pour les attestations Bbio et la sélection de matériaux innovants et écologique'
          />
        </div>
      </section>
    </div>
  )
}

export default About
