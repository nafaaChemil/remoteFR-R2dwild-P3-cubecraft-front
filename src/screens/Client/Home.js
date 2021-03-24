import { Link } from 'react-router-dom'

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
            <p>Ecologique</p>
          </div>
        </div>
      </div>
      <section id='home-concept'>
        <h2>
          HIGH CUBE ECO DESIGN, SPÉCIALISTE DE LA CONSTRUCTION EN CONTENEUR
          MARITIME
        </h2>
        <div className='home-concept-image'>
          <img
            className='thumbnail-home-concept'
            src='images/Annexe3.jpg'
            alt='a def'
          />
        </div>
        <Link className='buttonWide' to='/concept'>
          Notre concept
        </Link>
      </section>
      <section id='home-produits'>
        <div className='produits-pro'>
          <img className='img-produits' src='images/Annexe1.jpg' alt='maison' />
          <div className='produits-right'>
            <h2>Professionnels</h2>
            <p>
              Iam in altera philosophiae parte. quae est quaerendi ac
              disserendi, quae logikh dicitur, iste vester plane, ut mihi quidem
              videtur, inermis ac nudus est. tollit definitiones, nihil de
              dividendo ac
            </p>
            <Link className='button' to='/pro'>
              Découvrez nos solutions
            </Link>
          </div>
        </div>
        <div className='produits-part'>
          <div className='produits-right'>
            <h2>Particuliers</h2>
            <p>
              Iam in altera philosophiae parte. quae est quaerendi ac
              disserendi, quae logikh dicitur, iste vester plane, ut mihi quidem
              videtur, inermis ac nudus est. tollit definitiones, nihil de
              dividendo ac
            </p>
            <Link className='button' to='/particular'>
              Découvrez nos solutions
            </Link>
          </div>
          <img className='img-produits' src='images/Annexe2.jpg' alt='maison' />
        </div>
      </section>
      <section id='home-actualite'>
        <h2>Notre actualités</h2>
        <div className='container-thumbnail-actualite'>
          <img
            className='thumbnails-actualite'
            src='images/Annexe4.jpg'
            alt='actu'
          />
          <img
            className='thumbnails-actualite'
            src='images/Annexe4.jpg'
            alt='actu'
          />
          <img
            className='thumbnails-actualite'
            src='images/Annexe4.jpg'
            alt='actu'
          />
        </div>
        <Link className='button' to='/news'>
          Toute notre actualités
        </Link>
      </section>
    </div>
  )
}

export default Home
