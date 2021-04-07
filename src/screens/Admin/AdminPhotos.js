import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import ButtonAdd from '../../components/Admin/ButtonAdd'

export default function AdminPhotos() {
  const [datas, setDatas] = useState([''])
  const [affiched, setAffiched] = useState(true)
  const history = useHistory()

  function AddPhoto() {
    history.push(`/admin/photos/add`)
  }
  const deletePhoto = id => {
    axios.delete(`http://localhost:4242/photos/${id}`, {}).then(res => {
      setAffiched(!affiched)
    })
  }
  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get('http://localhost:4242/photos')
      setDatas(resq.data)
    }
    fetchData()
  }, [affiched])
  return (
    <>
      <section id='admin'>
        <h1>Photo</h1>
        <div>
          <ButtonAdd name='Ajouter une photo' handleClickAdd={AddPhoto} />
        </div>
        <div className="Container-Image-Storage">
          {datas.map((data, index) => (

            <div className="imageInStorage">
              <img className="img-upload" key={index} src={`${data.Name}`} />
              <button className="BtnAction" onClick={() => deletePhoto(data.Id)}><img alt="logo add" className="logoBtn" src="/images/logo/trash.svg"/></button>
            </div>
// =======
//             <>
//               <img
//                 className='img-upload'
//                 style={{ width: '100px' }}
//                 key={index}
//                 src={`${data.Name}`}
//               />
//               <button onClick={() => deletePhoto(data.Id)}>Suppr</button>
//             </>
// >>>>>>> dev
          ))}
        </div>
      </section>
    </>
  )
}
