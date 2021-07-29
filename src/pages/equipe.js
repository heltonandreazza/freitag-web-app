import React from 'react'
import banner from '../assets/banner.png'
import Footer from '../components/Footer'
import Navigator from '../components/Navigator'
import '../styles/global.css'

const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 current-fill text-green-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const Colaborador = ({ name, desc, items, reverse }) => (
  <div className={`shadow flex ${reverse ? 'flex-row-reverse' : ''}`}>
    <div className="h-80 w-1/3">
      <img className="h-full w-full object-cover" src={banner} alt="médico 1" />
    </div>
    <div className="h-80 w-2/3 px-12 py-8">
      <h2 className="text-4xl font-bold text-gray-700">Dr. Helton Andreazza</h2>
      <p className="text-lg font-medium text-gray-600 py-2">
        esse é o médico esse é o médico esse é o médico esse é o médico esse é o médico esse é o
      </p>
      {items.map((item) => (
        <p className="flex text-lg font-medium text-gray-500">
          <span className="pr-4">
            <Check />
          </span>
          <span>{item}</span>
        </p>
      ))}
    </div>
  </div>
)

const Equipe = () => (
  <div>
    <Navigator />
    <main>
      <div className="relative h-40 flex items-center justify-center">
        <div className="absolute top-0 left-0 h-full w-full bg-blue-400 opacity-50" />
        <img className="h-full w-full object-cover" src={banner} alt="banner" />
        <h1 className="absolute text-6xl text-bold text-gray-700 text-center">EQUIPE MÉDICA</h1>
      </div>
      <Colaborador
        name="Dr. Helton Andreazza"
        desc="esse é o médico esse é o médico esse é o médico esse é o médico esse é o médico esse é o"
        items={[
          'item item item item item item item item item item',
          'item item item item item item item item item item',
          'item item item item item item item item item item',
          'item item item item item item item item item item',
          'item item item item item item item item item item',
          'item item item item item item item item item item',
        ]}
      />
      <Colaborador
        reverse
        name="Dr. Helton Andreazza"
        desc="esse é o médico esse é o médico esse é o médico esse é o médico esse é o médico esse é o"
        items={[
          'item item item item item item item item item item',
          'item item item item item item item item item item',
          'item item item item item item item item item item',
          'item item item item item item item item item item',
          'item item item item item item item item item item',
          'item item item item item item item item item item',
        ]}
      />
      <Colaborador
        name="Dr. Helton Andreazza"
        desc="esse é o médico esse é o médico esse é o médico esse é o médico esse é o médico esse é o"
        items={[
          'item item item item item item item item item item',
          'item item item item item item item item item item',
          'item item item item item item item item item item',
          'item item item item item item item item item item',
          'item item item item item item item item item item',
          'item item item item item item item item item item',
        ]}
      />
    </main>
    <Footer />
  </div>
)

export default Equipe
