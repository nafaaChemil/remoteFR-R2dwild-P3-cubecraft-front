import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function DelOrPutSlider(props) {
  const [text, setText] = useState(props.name)

  return (
    <div className='admin_general_Del_Edit'>
      <input
        className=''
        id={props.id}
        value={text}
        onChange={e => setText(e.target.value)}
        type='text'
      />

      <div>
        <button onClick={props.handleClickSupp}>Supp</button>
        <button
          id={`btnsliderUp-${props.idUpdate}`}
          onClick={props.handleClickPut}
        >
          Update
        </button>
      </div>
    </div>
  )
}

DelOrPutSlider.propTypes = {
  name: PropTypes.string,
  handleClickSupp: PropTypes.func,
  handleClickEdit: PropTypes.func,
  handleClickPut: PropTypes.func
}
