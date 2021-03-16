import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import './styles/home.scss'

function Home() {
  return (
    <div>
      <div
        className='Home'
        style={{
          backgroundImage: `url("images/Annexe1.jpg")`
        }}
      ></div>
      <section id='home-concept'>
        <h2></h2>
        <div className='home-concept-image'></div>
        <Link to=''>Notre concept</Link>>
      </section>
      <section id='home-produits'>
        <img className='img-produits' src='images/Annexe1.jpg' alt='maison' />
        <div className='produits-right'>
          <h2>Professionnels</h2>
          <p>
            Iam in altera philosophiae parte. quae est quaerendi ac disserendi,
            quae logikh dicitur, iste vester plane, ut mihi quidem videtur,
            inermis ac nudus est. tollit definitiones, nihil de dividendo ac
          </p>
        </div>
      </section>
      <section id='home-actualite'></section>
    </div>
  )
}

export default Home
