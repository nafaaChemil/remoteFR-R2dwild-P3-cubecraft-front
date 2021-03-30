import React from 'react'
import { useState } from 'react'

export default function NavBarClose({ close }) {
  return (
    <div className='close' style={{ color: 'red' }}>
      <a onClick={close}>Close X</a>
    </div>
  )
}
