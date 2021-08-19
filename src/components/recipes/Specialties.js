import React from 'react'
import YoutubeVideo from '../YoutubeVideo'

const Specialties = ({ specialties, src, alt }) => (
  <div className='bg-white' id='especialidades'>
    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-44 lg:items-center'>
        <div>
          <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8'>
            Nossas especialidades
          </h2>
          <div className='mt-8 grid grid-cols-2 gap-2 lg:mt-0'>
            {specialties.map((specialty) => (
              <div className='col-span-1 flex justify-center items-center p-4 bg-gray-50 font-bold'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='hidden sm:flex h-12 w-1/5 stroke-current text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
                  />
                </svg>
                <h3 className='text-md w-5/5 sm:w-4/5 max-h-12 sm:text-xl text-gray-400 text-center'>
                  {specialty}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className='relative mx-auto w-full shadow-lg mt-8 sm:mt-0'>
          <YoutubeVideo src='https://www.youtube.com/embed/_8xCyKIz-o0' />
          {/* <img src={src} alt={alt} /> */}
          <p className='px-8 pb-6 pt-8 max-w-3xl text-justify text-lg text-bold text-gray-900'>
            Dr. Alexandre Rocha Freitag - Fundador
          </p>
          <p className='px-8 pb-2 max-w-3xl text-justify text-md text-gray-400'>
            O Dr. Alexandre Rocha Freitag é fundador e diretor técnico do HOF.
            Ganhou título de Especialista em Oftalmologia pela Associação Médica
            Brasileira (AMB) e pelo Conselho Brasileiro de Oftalmologia – CBO. É
            Membro Titular do Conselho Brasileiro de Oftalmologia (CBO). É
            Membro Titular da Sociedade Brasileira de Oftalmologia (SBO).
          </p>
          <p className='px-8 pb-8'>
            <a
              href='/equipe'
              className='font-medium text-blue-400 underline'
              rel='noreferrer'
            >
              Mais sobre a equipe
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Specialties
