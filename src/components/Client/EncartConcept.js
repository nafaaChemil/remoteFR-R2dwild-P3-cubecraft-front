import React from 'react'

export default function EncartConcept({ imageEncart, titleH3, texte, link }) {
  return (
    <section className='encart_concept'>
      <div
        className='responsive'
        style={{
          backgroundImage: `url(${imageEncart})`
        }}
      >
        <ul>
          <li>
            <h3>{titleH3}</h3>
            <p>{texte}</p>
          </li>
          <li className='Center'>
            <a href=''>{link}</a>
          </li>
        </ul>
      </div>
    </section>
  )
}
