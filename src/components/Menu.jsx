import React from 'react';

function Menu() {
  return(
    <nav class="h-16 bg-lele-50 text-white">
      <ul class="grid grid-cols-4 border-1 border-black text-center h-full place-content-center">
        <li class="text-2xl font-montserrat cursor-pointer">Home</li>
        <li class="text-2xl font-montserrat cursor-pointer">Sobre</li>
        <li class="text-2xl font-montserrat cursor-pointer">Projetos</li>
        <li class="text-2xl font-montserrat cursor-pointer">Extracurriculares</li>
      </ul>
    </nav>
  )
}

export default Menu;