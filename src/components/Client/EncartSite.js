import React from 'react'

export default function EncartSite({ imageEncart, titleH3, texte }) {
  return (
    <div
      className='encart_site'
      style={{
        backgroundImage: `url(${imageEncart})`
      }}
    >
      <h3>{titleH3}</h3>
      <p>{texte}</p>
    </div>
  )
}
