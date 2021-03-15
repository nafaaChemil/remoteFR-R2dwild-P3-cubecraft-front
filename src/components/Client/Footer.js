import React, { useState, useEffect } from 'react'
import { FooterClient } from '../../components/Client/FooterClient'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SuppOrEdit from '../../components/Admin/SuppOrEdit'
import './Footer.css'

function Footer() {
  const [datas, setDatas] = useState([''])

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get('http://localhost:4242/contact')
     setDatas(resq.data)
     console.log(resq.data)
    }
    fetchData()
  }, [])

  return (
    <div className='footer_container'>
      <div className='coordonnees'>
         
            <p>{datas[0].Adress}</p>
      </div>
        <ul className='footer_link'>
          {FooterClient.map((link, i) => (
            <li key={i}>
              <Link to={link.route}>{link.linkname}</Link>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Footer;
