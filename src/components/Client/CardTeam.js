import React from 'react'

export default function CardTeam({
  imagePlayer,
  nameH2,
  positionH3,
  description
}) {
  return (
    <div className='player'>
      <img src={imagePlayer} />
      <h2>{nameH2}</h2>
      <h3>{positionH3}</h3>
      <p>{description}</p>
    </div>
  )
}
