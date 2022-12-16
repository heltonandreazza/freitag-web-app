import React from 'react'

const Place = ({
  id,
  title,
  description,
  description2,
  contact,
  contact2,
  contactUrl,
  urlmap,
  src,
}) => (
  <div
    className='flex flex-col snap-start w-full h-full items-center justify-center flex-shrink-0'
    id={id}
  >
    <div>
      <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 px-4 sm:text-4xl md:px-0'>
        Nossas Unidades
      </h2>
    </div>

    <div className='flex flex-col sm:flex-row shadow-lg m-4'>
      {src && (
        <div className='flex justify-end p-4'>
          <img src={src} className='h-72 w-96 object-cover' alt='location' />
        </div>
      )}
      <div className='flex flex-col p-4 py-8 justify-center'>
        <h1 className='text-2xl font-bold text-gray-700 mb-4'>{title}</h1>
        <p className='text-lg font-medium text-gray-700 mb-2'>{description}</p>
        <p className='text-lg text-gray-700 mb-2'>{description2}</p>
        <p className='text-lg text-gray-700 mb-2'>{contact}</p>
        <a
          href={contactUrl}
          className='text-lg text-blue-400 mb-2 underline'
          target='_blank'
          rel='noreferrer'
        >
          {contact2}
        </a>
        <a
          href={urlmap}
          className='text-lg text-blue-400'
          target='_blank'
          rel='noreferrer'
        >
          Ver no mapa
        </a>
      </div>
    </div>
  </div>
)

export default Place
