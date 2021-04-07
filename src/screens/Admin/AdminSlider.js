import axios from 'axios'
import { useState, useEffect } from 'react'

import DelOrPutSlider from '../../components/Admin/DelOrPutSlider'

export default function AdminSlider() {
  const [datas, setDatas] = useState([''])
  const [inputVisible, setInputvisible] = useState(false)
  const [newWord, setNewWord] = useState('')
  const [textModified, setTextModified] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get(`http://localhost:4242/slider`)
      setDatas(resq.data)
    }
    fetchData()
  }, [inputVisible])

  const deleteSlider = id => {
    axios.delete(`http://localhost:4242/slider/${id}`, {}).then(res => {
      setInputvisible(!inputVisible)
    })
    console.log(id)
  }

  function AddSlider() {
    axios
      .post('http://localhost:4242/slider', {
        Word: newWord,
        Photo_id: 1
      })
      .then(res => {
        setInputvisible(!inputVisible)
        setNewWord('')
      })
  }

  return (
    <>
      <section id='admin'>
        <h1>Slider </h1>

        <div>
          <h3>Titre :</h3>
          <div className="form-group">
          <input type='text' />
          <button
          className='BtnAction'
        >
          <img
            alt='logo edit'
            className='logoBtn'
            src='/images/logo/save.svg'
          />
        </button>
          </div>
        </div>
        <div className='addTitleSlider'>
          <h3>Ajouter un nouveau texte : </h3>
          <div className='form-group'>
            <input
              type='text'
              value={newWord}
              onChange={e => setNewWord(e.target.value)}
            />
            <button className='BtnAction' onClick={AddSlider}>
              <img
                alt='logo add'
                className='logoBtn'
                src='/images/logo/add.svg'
              />
            </button>
          </div>
        </div>

        <div>
          <h3>Vos textes :</h3>
          {datas.map((data, index) => (
            <DelOrPutSlider
              key={index}
              id={data.Id}
              idUpdate={data.Id}
              text={data.Word} // Condition ternaire ?
              setWord={e => setTextModified(e.target.value)}
              handleClickSupp={() => deleteSlider(data.Id)}
            ></DelOrPutSlider>
          ))}
        </div>
      </section>
    </>
  )
}
