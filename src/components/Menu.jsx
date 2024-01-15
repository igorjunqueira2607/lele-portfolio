import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return(
    <nav class="h-20 bg-lele-50 text-white grid grid-cols-2 shadow-md shadow-slate-500">
      <div class="flex flex-col items-center max-w-fit justify-center pl-6">
        <h1 class="text-3xl font-montserrat">Leticia Rezende</h1>
        <div class="text-lg flex justify-between w-full">
          <h4>A</h4>
          <h4>R</h4>
          <h4>Q</h4>
          <h4>U</h4>
          <h4>I</h4>
          <h4>T</h4>
          <h4>E</h4>
          <h4>T</h4>
          <h4>A</h4>
        </div>
      </div>
      <div class="w-full h-20 grid grid-cols-4">
        <Link to="/" class="text-2xl font-montserrat cursor-pointer h-full w-full flex justify-center items-center hover:bg-white hover:text-lele-50 transition duration-500" >Home</Link>
        <Link to="/about" class="text-2xl font-montserrat cursor-pointer h-full w-full flex justify-center items-center hover:bg-white hover:text-lele-50 transition duration-500">Sobre</Link>
        <Link to="/projects" class="text-2xl font-montserrat cursor-pointer h-full w-full flex justify-center items-center hover:bg-white hover:text-lele-50 transition duration-500">Projetos</Link>
        <Link to="/extracurricular" class="pr-6 text-2xl font-montserrat cursor-pointer h-full w-full flex justify-center items-center hover:bg-white hover:text-lele-50 transition duration-500">Extracurriculares</Link>
      </div>
    </nav>
  )
}

export default Menu;