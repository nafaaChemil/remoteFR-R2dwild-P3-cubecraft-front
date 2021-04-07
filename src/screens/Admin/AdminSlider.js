import axios from 'axios'
import { useState, useEffect } from 'react'

import DelOrPutSlider from '../../components/Admin/DelOrPutSlider'

export default function AdminSlider() {
  const [datas, setDatas] = useState([''])
  const [inputVisible, setInputvisible] = useState(false)
  const [newWord, setNewWord] = useState('')
  const [textModified, setTextModified] = useState('')
  const [display, setDisplay] = useState(true)
  const [picture, setPicture] = useState('')
  const [infos, setInfos] = useState([''])

  function displayPhotos() {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:4242/photos')
      setInfos(res.data)
      setDisplay(!display)
    }
    fetchData()
  }
  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get(`http://localhost:4242/slider`)
      setDatas(resq.data)
    }
    fetchData()
  }, [inputVisible, display])

  const addId = id => {
    setPicture(id)
    setDisplay(!display)
  }

  const deleteSlider = id => {
    axios.delete(`http://localhost:4242/slider/${id}`, {}).then(res => {
      setInputvisible(!inputVisible)
    })
  }

  function AddSlider() {
    axios
      .post('http://localhost:4242/slider', {
        Word: newWord,
        Photo_id: picture
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
        <h3>Changer l'image de fond : </h3>
        <input type='number' name='picture' value={picture} />
        <button className='choice-picture' onClick={displayPhotos}>
          Choisir
        </button>
        <div style={{ display: `${display ? 'block' : 'none'}` }}>
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
        <div style={{ display: `${display ? 'none' : 'block'}` }}>
          {infos.map((info, index) => (
            <>
              <img
                className='img-upload'
                style={{ width: '100px' }}
                key={index}
                src={`${info.Name}`}
              />
              <button onClick={() => addId(info.Id)}>Choisir</button>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
