import React from 'react'
import PropTypes from 'prop-types'

export default function DelOrPutSlider(props) {
  return (
    <div className='admin_general_Del_Edit'>
      <span>
        <p> {props.name}</p>
      </span>
      <input className="invisible" id={props.id} style={{display : `${props.display}`}} value={props.target} onChange={props.setTarget} type="text"/>
      <div>
        <button onClick={props.handleClickSupp}>Supp</button>
        <button onClick={props.handleClickEdit}>Edit</button>
        <button onClick={props.handleClickPut}>Update</button>
      </div>
    </div>
  )
}

DelOrPutSlider.propTypes = {
  name: PropTypes.string,
  handleClickSupp: PropTypes.func,
  handleClickEdit: PropTypes.func
}
