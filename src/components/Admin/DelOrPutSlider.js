import { useState} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export default function DelOrPutSlider(props) {
  const [text, setText] = useState(props.text)

  function updateSlider(id, t) {
    axios.put(`http://localhost:4242/slider/${id}`, {
      Word: t
    })
  }

  return (
    <div className='admin_general_Del_Edit'>
      <input
        id={props.id}
        value={text}
        onChange={e => setText(e.target.value)}
        type='text'
      />

      <div>
        <button onClick={props.handleClickSupp}>Supp</button>
        <button
          id={`btnsliderUp-${props.idUpdate}`}
          onClick={() => updateSlider(props.id, text)}
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
