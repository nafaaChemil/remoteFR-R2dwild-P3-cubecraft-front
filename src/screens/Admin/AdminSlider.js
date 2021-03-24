import axios from 'axios'
import { useState, useEffect } from 'react'

import DelOrPutSlider from '../../components/Admin/DelOrPutSlider'

export default function AdminSlider() {
  const [datas, setDatas] = useState([''])
  const [affiched, setAffiched] = useState(true)
  const [inputVisible, setInputvisible] = useState(false)
  const [text, setText] = useState('')
  const [newWord, setNewWord] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get(`http://localhost:4242/slider`)
      setDatas(resq.data)
    }
    fetchData()
  }, [inputVisible])

  const deleteSlider = id => {
    axios.delete(`http://localhost:4242/slider/${id}`, {}).then(res => {
      setAffiched(!affiched)
    })
  }


  function updateSlider(id) {
    axios
      .put(`http://localhost:4242/slider/${id}`, {
        Word: text
      })
      .then(res => {
        setInputvisible(!inputVisible)
        setText('')
      })
  }

  function AddSlider() {
    axios
      .post("http://localhost:4242/slider", {
        Word: newWord,
        Photo_id: 1
      })
      .then(res => {
        setInputvisible(!inputVisible)
        setNewWord('')
      })
  }

  console.log(newWord)
  return (
    <>
      <section id='admin'>
        <h1>Slider </h1>

        <div>
          <h3>Titre :</h3>
          <input type='text' />
          <button>Save</button>
        </div>
        <div className='addTitleSlider'>
          <h3>Ajouter un nouveau texte : </h3>
          <input
            type='text'
            value={newWord}
            onChange={e => setNewWord(e.target.value)}
          />
          <button onClick={AddSlider}>Ajouter</button>
        </div>

        <div>
          {datas.map((data, index) => (
            <DelOrPutSlider
              key={index}
              name={data.Word}
              id={data.Id}
              handleClickSupp={() => deleteSlider(data.Id)}
              handleClickPut={() => updateSlider(data.Id)}
              target={data.Word}
              idUpdate={data.Id}
              setTarget={e => setText(e.target.value)}
            ></DelOrPutSlider>
          ))}
        </div>
      </section>
    </>
  )
}
