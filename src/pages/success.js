import React from 'react'
import logo from '../assets/logo.png'
import { getWhatsUrl } from '../utils'
import { CTA_WA_MESSAGES, URLS } from '../utils/constants'
import '../styles/global.css'

const Sucess = () => (
  <div className="min-h-screen pt-16 pb-12 flex flex-col bg-white">
    <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex-shrink-0 flex justify-center">
        <a href="/" className="inline-flex">
          <img className="h-12 w-auto" src={logo} alt="logo" />
        </a>
      </div>
      <div className="py-16">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Deu certo!</p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Mensagem enviada com sucesso!
          </h1>
          <p className="mt-2 text-base text-gray-500">
            Obrigado por entrar em contato
          </p>
          <div className="mt-6">
            <a href="/" className="text-base font-medium text-blue-600 hover:text-blue-500">
              Volte para a página principal
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </main>
    <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex justify-center space-x-4">
        <a
          href={getWhatsUrl(CTA_WA_MESSAGES.Sucess)}
          className="text-sm font-medium text-gray-500 hover:text-gray-600"
        >
          Contato
        </a>
        <span className="inline-block border-l border-gray-300" aria-hidden="true" />
        <a href={URLS.facebook} className="text-sm font-medium text-gray-500 hover:text-gray-600">
          Facebook
        </a>
        <span className="inline-block border-l border-gray-300" aria-hidden="true" />
        <a href={URLS.instagram} className="text-sm font-medium text-gray-500 hover:text-gray-600">
          Instagram
        </a>
      </nav>
    </footer>
  </div>
)

export default Sucess
