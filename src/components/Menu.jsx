import React from 'react';
import { Link } from 'react-router-dom';
import instagram from "../images/icons8-instagram-50.png"
import linkedin from "../images/icons8-linkedin-50.png"
import behance from "../images/icons8-behance-50.png"
import email from "../images/icons8-nova-mensagem-50.png"

function Menu() {
  return(
    <nav class="h-20 bg-lele-50 text-white grid grid-cols-2 shadow-md shadow-slate-500 fixed top-0 w-full">
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
        <div class="flex items-center">
          <Link to="https://www.instagram.com/rezendesgallery/" target="_blank">
            <img src={instagram} class="h-8 w-8 ml-3 mr-5" alt="instagram"></img>
          </Link>
          <img src={linkedin} class="h-8 w-8 mr-5" alt="instagram"></img>
          <img src={behance} class="h-8 w-8 mr-5" alt="instagram"></img>
          <img src={email} class="h-8 w-8" alt="instagram"></img>
        </div>
      </div>
    </nav>
  )
}

export default Menu;