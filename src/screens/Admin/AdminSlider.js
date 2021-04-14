import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import DelOrPutSlider from '../../components/Admin/DelOrPutSlider'

export default function AdminSlider() {
  const [datas, setDatas] = useState([''])
  const [title, setTitle] = useState()
  const [inputVisible, setInputvisible] = useState(false)
  const [newWord, setNewWord] = useState('')
  const [textModified, setTextModified] = useState('')
  const [display, setDisplay] = useState(true)
  const [picture, setPicture] = useState('')
  const [infos, setInfos] = useState([''])
  const [updatedOk, setUpdatedOk] = useState('')

  function displayPhotos() {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:4242/photos')
      setInfos(res.data)
      setDisplay(!display)
    }
    fetchData()
  }

  let history = useHistory()

  useEffect(async () => { 
    const token = localStorage.getItem('adminUser')
    axios({
      method: 'POST',
      url: 'http://localhost:4242/signin/protected',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
       if(res.data.mess !== "Authorized"){
         history.push('/admin/login')
       }
    })
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
        Photo_id: 1
      })
      .then(res => {
        setInputvisible(!inputVisible)
        setNewWord('')
      })
  }
  const updateTitle = async () => {
    const res = await axios
      .put(`http://localhost:4242/title/1`, {
        Title: title
      })
      .then(res => {
        setUpdatedOk('Titre mise à jour')
      })
  }

  return (
    <section id='admin'>
      <h1>Slider </h1>

      <div>
        <h3>Titre :</h3>
        <div className='form-group'>
          <input
            value={title}
            type='text'
            onChange={e => setTitle(e.target.value)}
          />
          <button onClick={updateTitle} className='BtnAction'>
            <img
              alt='logo edit'
              className='logoBtn'
              src='/images/logo/save.svg'
            />
          </button>
          {updatedOk ? <p className='updateTitle'>{updatedOk}</p> : ''}
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

      <div className=''>
        <h3>Changer l'image de fond : </h3>
        <div className='form-group'>
          <input type='number' name='picture' value={picture} />
          <button className='choice-picture' onClick={displayPhotos}>
            Choisir
          </button>
        </div>
        <div
          className='container-choice-img'
          style={{ display: `${display ? 'none' : 'flex'}` }}
        >
          {infos.map((info, index) => (
            <div className='choicephoto-container'>
              <img className='img-upload' key={index} src={`${info.Name}`} />
              <button onClick={() => addId(info.Id)}>Choisir</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3>Vos textes :</h3>
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
      </div>
    </section>
  )
}
