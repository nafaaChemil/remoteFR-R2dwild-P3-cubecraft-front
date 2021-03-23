import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import axios from 'axios'
import SuppOrEdit from '../../components/Admin/SuppOrEdit'
import ButtonAdd from '../../components/Admin/ButtonAdd'

export default function AdminPart() {
  const history = useHistory()
  const [datas, setDatas] = useState([''])
  const [change, setChange] = useState(false)

  const deleteProduct = async id => {
    const res = await axios
      .delete(`http://localhost:4242/particularPro/${id}`)
      .then(function (response) {
        setChange(!change)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get('http://localhost:4242/particularPro/part')
      setDatas(resq.data)
    }
    fetchData()
  }, [change])

  function handleClickEdit(number) {
    history.push(`/admin/particulier/modif/${number}`)
  }

  function handleClickAdd() {
    history.push(`/admin/particulier/add`)
  }

  return (
    <>
      <section id='admin'>
        <h1>Produits pour particuliers</h1>

        <div>
          <ButtonAdd
            name='Ajouter un produit'
            handleClickAdd={handleClickAdd}
          />
        </div>

        <div>
          {datas.map((data, index) => (
            <SuppOrEdit
              handleClickSupp={() => deleteProduct(data.Id)}
              handleClickEdit={() => handleClickEdit(data.Id)}
              key={index}
              name={data.CategoryName + ' ' + data.Price + '€'}
              id={data.Id}
            ></SuppOrEdit>
          ))}
        </div>
      </section>
    </>
  )
}
