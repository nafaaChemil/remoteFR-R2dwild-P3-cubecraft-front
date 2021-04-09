import React from 'react'

export default function CardTeam({
  imagePlayer,
  FirstName,
  LastName,
  Position,
  Description
}) {
  return (
    <div className='player'>
      <img src={imagePlayer} />
      <h2>
        <span>{FirstName} </span>
        <span> {LastName}</span>
      </h2>
      <h3>{Position}</h3>
      <p>{Description}</p>
    </div>
  )
}
