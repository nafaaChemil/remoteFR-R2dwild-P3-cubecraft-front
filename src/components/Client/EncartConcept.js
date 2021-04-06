import React from 'react'

export default function EncartConcept({ imageEncart, titleH3, link }) {
  return (
    <ul
      style={{
        backgroundImage: `url(${imageEncart})`
      }}
    >
      <li>
        <h3>{titleH3}</h3>
      </li>
      <li>
        <a href=''>{link}</a>
      </li>
    </ul>
  )
}
