import React from 'react'

export default function IntroEncart() {
  return (
    <section id='concept'>
      <h2>
        HIGH CUBE ECO DESIGN, spécialiste de la construction en conteneur
        maritime.
      </h2>

      <div className='responsive'>
        <ul
          style={{
            backgroundImage: `url("images/Annexe6.jpg")`
          }}
        >
          <li>
            <h3>Vous êtes un particulier ?</h3>
          </li>
          <li>
            <a href=''>Découvez nos solutions</a>
          </li>
        </ul>

        <ul
          style={{
            backgroundImage: `url("images/Annexe3.jpg")`
          }}
        >
          <li>
            <h3>Vous êtes un professionnel ?</h3>
          </li>
          <li>
            <a href=''>Découvrez nos solutions</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
