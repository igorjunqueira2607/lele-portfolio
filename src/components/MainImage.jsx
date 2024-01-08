import React from 'react';
import louvre from '../images/louvre3.jpg'

function MainImage() {
  return(
    <section class="h-dvh bg-green-200">
      <img src={louvre} alt="Museu do Louvre" class="h-96"></img>
    </section>
  )
}

export default MainImage;