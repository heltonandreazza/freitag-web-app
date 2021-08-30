import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'
import React from 'react'
import Footer from '../components/Footer'
import Navigator from '../components/Navigator'
import '../styles/global.css'
import unidadeTimbo from '../assets/unidade_timbo.jpeg'
import banner2 from '../assets/banner2.jpeg'
import { getWhatsUrl } from '../utils'
import { CTA_WA_MESSAGES } from '../utils/constants'

const Equipe = () => (
  <div>
    <Navigator />
    <main>
      <div className='bg-white'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-base font-semibold text-blue-400 tracking-wide uppercase'>
              Hospital de olhos Freitag
            </h2>
            <p className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
              Conheça o nossa história
            </p>
            <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
              Conheça a nossa história e como fazemos a diferença na vida dos
              nossos pacientes ao longo de todos esses anos
            </p>
          </div>
        </div>
      </div>

      <div className='relative bg-white pt-16 pb-32 overflow-hidden'>
        <div className='relative'>
          <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
            <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
              <div>
                <div className='mt-6'>
                  <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                    Sobre nós
                  </h2>
                  <p className='mt-4 text-lg text-gray-500'>
                    Com um trabalho em equipe, hoje somos capazes de oferecer
                    amplo atendimento na área da oftalmologia desde as consultas
                    até cirurgias complexas.
                  </p>
                  <p className='mt-4 text-lg text-gray-500'>
                    Além da tradição da empresa na cidade, o Hospital de Olhos
                    Freitag recebeu ao longo dos anos muitos investimentos, o
                    que possibilita oferecer aparelhos de última geração e uma
                    estrutura de ponta para todos os nossos clientes.
                  </p>
                  <p className='mt-4 text-lg text-gray-500'>
                    A qualidade no atendimento e o conforto dos pacientes é o
                    principal foco do Hospital de Olhos Freitag. O atendimento
                    diferenciado e a vasta experiência do corpo clínico
                    transmitem aos pacientes a tranquilidade e a segurança
                    essencial que você merece.
                  </p>
                  <div className='mt-6'>
                    <a
                      href={getWhatsUrl(CTA_WA_MESSAGES.ctaBanner1)}
                      className='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-400 hover:bg-blue-700'
                    >
                      fale conosco
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 sm:mt-16 lg:mt-0'>
              <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
                <img
                  className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                  src='https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg'
                  alt='Inbox user interface'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default Equipe
