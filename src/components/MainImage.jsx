import React from 'react';
import louvre from '../images/louvre3.jpg'

function MainImage() {
  return(
    <div class="h-screen w-screen">
      <img src={louvre} alt="Museu do Louvre" class="bg-containt"></img>
    </div>
  )
}

export default MainImage;