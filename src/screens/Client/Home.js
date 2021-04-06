import { Link } from 'react-router-dom'
import ScrollingText from './ScrollingText'
import IntroEncart from '../../components/Client/IntroEncart'
import EncartSite from '../../components/Client/EncartSite'
import EncartConcept from '../../components/Client/EncartConcept'

function Home() {
  return (
    <div>
      <div
        className='Home'
        style={{
          backgroundImage: `url("images/Annexe1.jpg")`
        }}
      >
        <div className='home-hero-carousel'>
          <h1 className='home-title'>Une solution</h1>
          <div className='carousel-text'>
            <ScrollingText />
          </div>
        </div>
      </div>

      {/* Encart intro */}
      <section className='concept'>
        <h2>
          HIGH CUBE ECO DESIGN, spécialiste de la construction en conteneur
          maritime.
        </h2>

        <div className='responsive'>
          <IntroEncart
            imageEncart='images/Annexe6.jpg'
            titleH3='Vous êtes un particulier ?'
            link='Découvrez nos solutions'
          />

          <IntroEncart
            imageEncart='images/Annexe5.jpg'
            titleH3='Vous êtes un professionnel ?'
            link='Découvrez nos solutions'
          />
        </div>
      </section>

      {/* Encart Site */}
      <section className='responsive'>
        <h2 className='uCenter'>Un concept avec de nombreux avantages.</h2>

        <EncartSite
          imageEncart='images/Annexe2.jpg'
          titleH3={[`A l'origine`]}
          texte={[
            `Les conteneurs maritimes qui ont été conçus pour transporter des marchandises à travers le monde ont été créées por résister à tous les climats les plus rudes du monde. De l'eau salée aux températures glaciales, le container maritime est destiné à gérer le pire des pires tout en protégeant sa cargaison. Composé d'acier corten, 
            ils résistent énormément à la corrosion ou à la rouille`
          ]}
        />
      </section>

      {/* Encart intro */}

      <EncartConcept
        imageEncart='images/Annexe6.jpg'
        titleH3='Particulier'
        texte={[
          `Pour réaliser votre projet, nous recyclons des conteneurs maritimes destinés à être détruit afin de leur donner une seconde vie. En recyclant ces conteneurs, on réduit considérablement notre 
            empreinte carbone sur la construction d'une maison.`
        ]}
        link='Découvrez nos solutions'
      />

      <EncartConcept
        imageEncart='images/Annexe6.jpg'
        titleH3='Professionnels'
        texte={[
          `Pour réaliser votre projet, nous recyclons des conteneurs maritimes destinés à être détruit afin de leur donner une seconde vie. En recyclant ces conteneurs, on réduit considérablement notre 
                  empreinte carbone sur la construction d'une maison.`
        ]}
        link='Découvrez nos solutions'
      />
      <section id='home-actualite'>
        <h2>Notre actualités</h2>
        <ul className='container-thumbnail-actualite'>
          <li>
            <img
              className='thumbnails-actualite'
              src='images/Annexe4.jpg'
              alt='actu'
            />
            <h3>Titre</h3>
            <p>jkfdjfkdsjfkds jfkdsjfdsk jfkdsjfkds</p>
          </li>
          <li>
            <img
              className='thumbnails-actualite'
              src='images/Annexe4.jpg'
              alt='actu'
            />
            <h3>Titre</h3>
            <p>jkfdjfkdsjfkds jfkdsjfdsk jfkdsjfkds</p>
          </li>
          <li>
            <img
              className='thumbnails-actualite'
              src='images/Annexe4.jpg'
              alt='actu'
            />
            <h3>Titre</h3>
            <p>jkfdjfkdsjfkds jfkdsjfdsk jfkdsjfkds</p>
          </li>
        </ul>
        <Link className='button' to='/news'>
          Toute notre actualités
        </Link>
      </section>
    </div>
  )
}

export default Home
