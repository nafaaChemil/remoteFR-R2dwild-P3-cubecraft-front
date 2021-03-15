import React from 'react'
import PropTypes from 'prop-types'

import './ButtonAdd.scss'

export default function ButtonAdd(props) {
  return (
    <div className='admin_general_Add_Field'>
      <p> {props.name}</p>
      <button onClick={props.handleClickAdd}>+</button>
    </div>
  )
}

ButtonAdd.propTypes = {
  name: PropTypes.string,
  handleClickAdd: PropTypes.func
}
