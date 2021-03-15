import React from 'react'
import PropTypes from 'prop-types'

import './SuppOrEdit.scss'

export default function SuppOrEdit(props) {
  return (
    <div className='admin_general_Del_Edit'>
      <span>
        <p> {props.name}</p>
      </span>
      <div>
        <button onClick={props.handleClickSupp}>Supp</button>
        <button onClick={props.handleClickEdit}>Edit</button>
      </div>
    </div>
  )
}

SuppOrEdit.propTypes = {
  name: PropTypes.string,
  handleClickSupp: PropTypes.func,
  handleClickEdit: PropTypes.func
}
