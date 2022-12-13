import React, { useState } from 'react'
import YoutubeVideo from '../YoutubeVideo'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'
import '../../styles/global.css'

const Specialties = ({ specialties, src, alt }) => {
  const [collapsedIndex, setCollapsedIndex] = useState(-1)
  return (
    <div className='bg-white' id='especialidades'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-44 lg:items-center'>
          <div>
            <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8'>
              Nossas especialidades
            </h2>
            <div className='mt-8 grid grid-cols-1 lg:mt-0'>
              {specialties.map((specialty, index) => (
                <div className={`col-span-2 mb-2`} key={index}>
                  <div
                    className={`flex justify-center items-center p-1 bg-gray-50 font-bold cursor-pointer  rounded-t-lg ${
                      collapsedIndex === index ? 'bg-blue-400' : ''
                    }`}
                    onClick={() => {
                      if (collapsedIndex === index) {
                        setCollapsedIndex(-1)
                      } else {
                        setCollapsedIndex(index)
                      }
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className={`hidden sm:flex h-8 w-1/5 stroke-current  ${
                        collapsedIndex === index
                          ? 'text-gray-100'
                          : 'text-gray-400'
                      }`}
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
                    <h3
                      className={`text-md w-5/5 sm:w-4/5 max-h-12 sm:text-xl text-center ${
                        collapsedIndex === index
                          ? 'text-gray-100'
                          : 'text-gray-400'
                      }`}
                    >
                      {specialty.name}
                    </h3>
                    {collapsedIndex === index ? (
                      <ChevronUpIcon
                        className={`hidden sm:flex h-8 w-1/5 stroke-current  ${
                          collapsedIndex === index
                            ? 'text-gray-100'
                            : 'text-gray-400'
                        }`}
                      />
                    ) : (
                      <ChevronDownIcon
                        className={`hidden sm:flex h-8 w-1/5 stroke-current  ${
                          collapsedIndex === index
                            ? 'text-gray-100'
                            : 'text-gray-400'
                        }`}
                      />
                    )}
                  </div>
                  <div
                    className={`overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 hover:scrollbar-thumb-blue-400 scrollbar-track-transparent`}
                    style={{
                      transition: 'height 500ms',
                      height: collapsedIndex === index ? `25rem` : `0rem`,
                    }}
                  >
                    {collapsedIndex === index && (
                      <>
                        <div>
                          <img
                            className='h-52 w-full object-cover rounded-b-lg'
                            src={specialty.img}
                            alt={specialty.name}
                          />
                        </div>
                        <div className={`py-4 pr-3`}>
                          <p className='text-justify text-gray-600'>
                            {specialty.desc}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='relative mx-auto w-full mt-4 md:mt-0'>
            <div className=' shadow-lg mt-8 sm:mt-0'>
              <YoutubeVideo src='https://www.youtube.com/embed/_8xCyKIz-o0' />
              <p className='px-8 pb-6 pt-8 max-w-3xl text-justify text-lg text-bold text-gray-900'>
                Dr. Alexandre Rocha Freitag - Fundador
              </p>
              <p className='px-8 pb-2 max-w-3xl text-justify text-md text-gray-400'>
                O Dr. Alexandre Rocha Freitag é fundador e diretor técnico do
                HOF. Ganhou título de Especialista em Oftalmologia pela
                Associação Médica Brasileira (AMB) e pelo Conselho Brasileiro de
                Oftalmologia – CBO. É Membro Titular do Conselho Brasileiro de
                Oftalmologia (CBO). É Membro Titular da Sociedade Brasileira de
                Oftalmologia (SBO).
              </p>
              <p className='px-8 pb-8'>
                <a
                  href='/equipe'
                  className='font-medium text-blue-400 underline'
                  rel='noreferrer'
                >
                  Mais sobre o corpo clínico
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Specialties
