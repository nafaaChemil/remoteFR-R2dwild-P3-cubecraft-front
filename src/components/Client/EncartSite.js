import React from 'react'
import { Link } from 'react-router-dom'

export default function EncartSite({
  imageEncart,
  titleH3,
  texte,
  price,
  link
}) {
  return (
    <div
      className='encart_site'
      style={{
        backgroundImage: `url(${imageEncart})`
      }}
    >
      <h3>{titleH3}</h3>
      <p>{texte}</p>

      {price && <p>{price}€/m2</p>}
      {link && <Link to={link}>{link}</Link>}
    </div>
  )
}
