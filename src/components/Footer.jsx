import React from 'react';
import { Link } from 'react-router-dom';
import instagram from "../images/icons8-instagram-50.png"
import linkedin from "../images/icons8-linkedin-50.png"
import behance from "../images/icons8-behance-50.png"
import email from "../images/icons8-nova-mensagem-50.png"

function Footer() {
  return(
    <footer class="bg-lele-50 absolute bottom-0 w-full flex justify-between py-4">
      <div class="flex items-center">
        <Link to="https://www.instagram.com/rezendesgallery/" target="_blank">
          <img src={instagram} class="h-8 w-8 ml-20 mr-6" alt="instagram"></img>
        </Link>
        <img src={linkedin} class="h-8 w-8 mr-6" alt="instagram"></img>
        <img src={behance} class="h-8 w-8 mr-6" alt="instagram"></img>
        <img src={email} class="h-8 w-8" alt="instagram"></img>
      </div>
      <div class="flex flex-col items-end">
        <h5 class="text-white text-end font-montserrat mr-20">Leticia Rezende - Todos os direitos reservados.</h5>
        <h5 class="text-white text-end font-montserrat mr-20" >Desenvolvido por Igor Junqueira - 2024 ©</h5>
      </div>
    </footer>
  )
}

export default Footer;