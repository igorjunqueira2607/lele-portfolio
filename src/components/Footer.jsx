import React from 'react';
import { Link } from 'react-router-dom';
import instagram from "../images/icons8-instagram-50.png"
import linkedin from "../images/icons8-linkedin-50.png"
import behance from "../images/icons8-behance-50.png"
import email from "../images/icons8-nova-mensagem-50.png"

function Footer() {
  return(
    <footer class="bg-lele-50 w-full flex justify-between py-4">
      <div class="flex items-center">
        <Link to="https://www.instagram.com/rezendesgallery/" target="_blank">
          <img src={instagram} class="h-8 w-8 ml-20 mr-6" alt="instagram"></img>
        </Link>
        <img src={linkedin} class="h-8 w-8 mr-6" alt="instagram"></img>
        <img src={behance} class="h-8 w-8 mr-6" alt="instagram"></img>
        <div class="w-8 h-8">
          <div class="">
            <button type="button" class="inline-block transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter1">
              <img src={email} alt="html" className="w-8 h-8 mr-6"/>
            </button>
          </div>
          <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter1" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
              <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 class="text-xl font-semibold leading-normal text-gray-800" id="exampleModalScrollableLabel">
                    CSS
                  </h5>
                  <button type="button"
                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body relative p-4">
                  <p>Linguagem de estilos utilizada para definir cores, fontes, tamanhos, posicionamento e qualquer outro valor estético para os elementos da página.</p>
                </div>
                <div
                  class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-gray-200 rounded-b-md">
                  <a href="https://blog.betrybe.com/css/" target="_blank" rel='noreferrer'>
                    <button type="button"
                      class="inline-block px-6 py-2.5 bg-teal-500 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-600 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                      Saiba mais
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-end">
        <h5 class="text-white text-end font-montserrat mr-20">Leticia Rezende - Todos os direitos reservados.</h5>
        <h5 class="text-white text-end font-montserrat mr-20" >Desenvolvido por Igor Junqueira - 2024 ©</h5>
      </div>
    </footer>
  )
}

export default Footer;