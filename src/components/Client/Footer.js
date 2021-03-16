import React, { useState, useEffect } from 'react'
import { FooterClient } from '../../components/Client/FooterClient'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SuppOrEdit from '../../components/Admin/SuppOrEdit'


function Footer() {
  const [datas, setDatas] = useState([''])

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios.get('http://localhost:4242/contact')
     setDatas(resq.data)
    }
    fetchData()
  }, [])

  return (
    <div className='footer'>
      <div className="footer_container">
        <div className='coordonnees'>
          <p id="coord-1">{datas[0].Adress}</p>
          <p id="coord-2">{datas[0].Adress}</p>
          <p id="coord-3">{datas[0].Adress}</p>
        </div>
        <div className='footer_reseaux'>
          <i class="fab fa-facebook ico-social"></i>
          <i class="fab fa-twitter ico-social"></i> 
        </div>
        <ul className='footer_link'>
          {FooterClient.map((link, i) => (
            <li key={i}>
              <Link to={link.route}>{link.linkname}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer;
