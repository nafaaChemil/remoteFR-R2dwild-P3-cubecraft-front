import { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export default function DelOrPutSlider(props) {
  const [text, setText] = useState(props.text)
  console.log('composant', props.text, text)
  function updateSlider(id, t) {
    axios.put(`http://localhost:4242/slider/${id}`, {
      Word: t
    })
  }

  return (
    <div className='admin_general_Del_Edit'>
      <input
        id={props.id}
        value={text || text === '' ? text : props.text}
        onChange={e => setText(e.target.value)}
        type='text'
      />

      <div>
        <button className='BtnAction' onClick={props.handleClickSupp}>
          <img
            alt='logo del'
            className='logoBtn'
            src='/images/logo/trash.svg'
          />
        </button>
        <button
          className='BtnAction'
          id={`btnsliderUp-${props.idUpdate}`}
          onClick={() => updateSlider(props.id, text)}
        >
          <img
            alt='logo edit'
            className='logoBtn'
            src='/images/logo/save.svg'
          />
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
