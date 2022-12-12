import React from 'react'
import alexandre from '../assets/alexandre.png'
import bannerCorpoClinico from '../assets/bannerCorpoClinico.jpeg'
import lucas from '../assets/lucas.png'
import mauricio from '../assets/mauricio.png'
import vinicius from '../assets/vinicius.png'
import Footer from '../components/Footer'
import Navigator from '../components/Navigator'
import '../styles/global.css'

const Check = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='h-8 w-8 current-fill text-blue-500'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
    />
  </svg>
)

const Colaborador = ({ name, desc, items, reverse, image }) => (
  <div
    className={`shadow flex flex-col md:flex-row ${
      reverse ? 'md:flex-row-reverse' : ''
    }`}
  >
    <div className='h-full md:w-1/3 2xl:w-1/4'>
      <img className='h-full w-full object-cover' src={image} alt='médico 1' />
    </div>
    <div className='h-full md:w-2/3 2xl:w-3/4 px-10 pt-10 mb-8'>
      <h2 className='text-4xl font-bold text-gray-700'>{name}</h2>
      <p className='text-lg font-medium text-gray-600 py-2'>{desc}</p>
      <div className='pt-4'>
        {items.map((item) => (
          <p className='flex text-lg font-medium text-gray-500 py-1'>
            <span className='pr-4'>
              <Check />
            </span>
            <span>{item}</span>
          </p>
        ))}
      </div>
    </div>
  </div>
)

const team = [
  {
    name: 'Dr. Alexandre Rocha Freitag',
    desc: 'O Dr. Alexandre Rocha Freitag é fundador e diretor técnico do HOF.',
    items: [
      'Especialista em Estrabismo e lentes de contato',
      'Graduado em Medicina pela Universidade Federal de Santa Maria com Residência Médica em Oftalmologia.',
      'Ganhou título de Especialista em Oftalmologia pela Associação Médica Brasileira (AMB) e pelo Conselho Brasileiro de Oftalmologia – CBO.',
      'É Membro Titular do Conselho Brasileiro de Oftalmologia (CBO).',
      'É Membro Titular da Sociedade Brasileira de Oftalmologia (SBO).',
      'O Dr. Alexandre atende na unidade HOF - Timbó.',
    ],
    image: alexandre,
  },
  {
    name: 'Dr. Vinicius R. Joner',
    desc:
      'O Dr. Vinicius R. Joner Atua em segmento anterior (catarata, lentes de contato, crosslinking).',
    items: [
      'Graduado em Medicina pela Universidade Federal de Pelotas/UFPel-RS, realizou residência Médica em Oftalmologia no Hospital de Olhos do Blumenau.',
      'Membro do Conselho Brasileiro de Oftalmologia (CBO).',
      'Membro da Sociedade Brasileira de Catarata e Implantes Intraoculares.',
      'Membro da Sociedade Brasileira de Cirurgia Refrativa.',
      'O Dr. Vinicius atende na unidades HOF - Timbó.',
    ],
    image: vinicius,
  },
  {
    name: 'Dr. Lucas H. Leitis',
    desc: 'O Dr. Lucas H. Leitis é especialista em retina aqui no HOF!',
    items: [
      'O Dr. Lucas é Graduado pela Universidade Regional de Blumenau.',
      'Realizou a especialização em retina clínica pelo Hospital de Olhos do Paraná.',
      'Realizou a especialização em retina clínica pelo Hospital de olhos Sadalla Amin Ghanem.',
      'Realizou a especialização cirúrgica em retina e vítreo pelo Hospital de Olhos do Paraná.',
      'Residência médica em oftalmologia pelo Hospital de Olhos de Blumenau!',
      'O Dr. Lucas atende na unidade HOF - Timbó.',
    ],
    image: lucas,
  },
  {
    name: 'Dr. Mauricio C. Munareto',
    desc: 'O Dr. Mauricio C. Munareto atua em segmento anterior (catarata, lentes de contato e crosslinking).',
    items: [
      'Especialista em oftalmologia (Clínica e cirurgica) pelo MEC desde 2018 (Hospital de olho de Blumenau).',
      'Membro da Soblec - Sociedade Brasileira de Lente de Contato.',
      'Membro da BRASCS - Associação Brasileira de Catarata e Cirurgia Refrativa - Brazilian Association of Cataract and Refractive Surgery.',
      'O Dr. Mauricio atende na unidade HOF - Timbó.',
    ],
    image: mauricio,
  },
]

const Equipe = () => (
  <div>
    <Navigator />
    <main>
      <div className='relative h-80 flex items-center justify-center'>
        <div className='absolute top-0 left-0 h-full w-full bg-blue-400 opacity-20' />
        <img
          className='h-full w-full object-cover'
          src={bannerCorpoClinico}
          alt='bannerCorpoClinico'
        />
      </div>
      {team.map(({ name, desc, items, image }, index) => (
        <Colaborador
          name={name}
          desc={desc}
          items={items}
          image={image}
          reverse={index % 2 !== 0}
        />
      ))}
    </main>
    <Footer />
  </div>
)

export default Equipe
