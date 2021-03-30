import React from 'react'

export default function ActuEncart({ imageEncart, titleH3, text, link }) {
  return (
    <ul className='actu_card'>
      <li>
        <img src={imageEncart}></img>
      </li>
      <ul className='actu_text'>
        <li>
          <h3>{titleH3}</h3>
        </li>
        <li>
          <p>{text}</p>
        </li>
        <li>
          <a href=''>{link}</a>
        </li>
      </ul>
    </ul>
  )
}
