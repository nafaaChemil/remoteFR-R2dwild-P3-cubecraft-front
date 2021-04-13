import { Link } from 'react-router-dom'

function News() {
  return (
    <section id='home-actualite'>
      <h2 className='uCenter'>Notre actualités</h2>
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
    </section>
  )
}

export default News
