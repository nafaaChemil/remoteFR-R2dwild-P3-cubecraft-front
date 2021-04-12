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
      <div className='card-header'>
        <img src={imagePlayer} />
      </div>
      <div className='card-content'>
        <h2>
          <span>{FirstName} </span>
          <span> {LastName}</span>
        </h2>
        <h3>{Position}</h3>
        <p>{Description}</p>
      </div>
    </div>
  )
}
