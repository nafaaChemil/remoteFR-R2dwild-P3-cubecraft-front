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
          text='
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          sodales leo eu libero luctus finibus. Aliquam id eleifend felis. 
          Pellentesque eget maximus ipsum. Ut hendrerit, turpis vitae lobortis 
          fermentum, mi lectus aliquam tortor, eu convallis tortor lectus eu 
          neque. Cras id orci tortor. Vestibulum laoreet malesuada nulla, 
          eget mollis purus egestas ut. Integer bibendum, justo eu fringilla 
          elementum, ex magna vestibulum ipsum, vel interdum ligula est vel 
          eros. Praesent accumsan, urna non sollicitudin porta, orci nisl 
          interdum elit, id gravida dolor mauris ut nisl. Aliquam lacinia, 
          lectus sit amet porta iaculis, nisi elit tincidunt purus, nec 
          suscipit velit lacus in nibh. Interdum et malesuada fames ac ante 
          ipsum primis in faucibus. In libero odio, consequat nec sodales ac, 
          feugiat non velit.'
          link='Lien'
        />
        <ActuEncart
          imageEncart='images/Annexe4.jpg'
          titleH3='Journal'
          text='
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          sodales leo eu libero luctus finibus. Aliquam id eleifend felis. 
          Pellentesqiquam lacinia, 
          lectus sit amet porta iaculis, nisi elit tincidunt purus, nec 
          suscipit velit lacus in nibh. Interdum et malesuada fames ac ante 
          ipsum primis in faucibus. In libero odio, consequat nec sodales ac, 
          feugiat non velit.'
          link='Lien'
        />
      </div>
    </section>
  )
}
