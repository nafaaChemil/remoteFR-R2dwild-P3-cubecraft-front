import React from 'react'

export default function CardTeam({
  imagePlayer,
  nameH2,
  positionH3,
  description
}) {
  return (
    <ul>
      <li>{imagePlayer}</li>
      <li>{nameH2}</li>
      <li>{positionH3}</li>
      <li>{description}</li>
    </ul>
  )
}
