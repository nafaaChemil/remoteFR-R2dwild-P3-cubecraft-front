import React from 'react'
import ActuEncart from '../../components/Client/ActuEncart'
import '../../components/Style/elements/actuEncart.scss'

export default function News() {
  return (
    <section id='actu'>
      <div className='responsive'>
        <ActuEncart
          imageEncart='images/Annexe5.jpg'
          titleH3='Le Monde2'
          text='Article'
          link='Lien'
        />
      </div>
    </section>
  )
}
