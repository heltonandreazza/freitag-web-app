/* eslint-disable react/jsx-props-no-spreading */
import { ClockIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import banner from '../assets/banner.png'
import c1 from '../assets/c1.png'
import c10 from '../assets/c10.png'
import c11 from '../assets/c11.png'
import c12 from '../assets/c12.png'
import c13 from '../assets/c13.png'
import c14 from '../assets/c14.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
import c7 from '../assets/c7.png'
import c8 from '../assets/c8.png'
import c9 from '../assets/c9.png'
import ceo from '../assets/ceo.png'
import unidadeTimbo from '../assets/unidade_timbo.jpeg'
import socialproof from '../assets/socialproof.png'
import Footer from '../components/Footer'
import Navigator from '../components/Navigator'
import '../styles/global.css'

const URLS = {
  whatsapp: 'https://wa.me/5547992626100',
  facebook: 'https://www.facebook.com/hospitaldeolhosfreitag/',
  instagram: 'https://www.instagram.com/hospitaldeolhosfreitag/',
  youtube: '',
  playstore: '',
  appstore: '',
}

const CTA_WA_MESSAGES = {
  headerTopCta: '1. Ola, estive no site e gostaria de contatar vcs!',
}

const getWhatsUrl = (text, url) => encodeURI(`${url || URLS.whatsapp}${text ? `?text=${text}` : ''}`)
const openWhatsUrl = (text) => window.open(getWhatsUrl(text), '_blank')
const YoutubeVideo = ({ src }) => (
  <iframe
    title="titulo"
    className="w-full"
    id="ytplayer"
    type="text/html"
    height="320"
    src={src}
    frameBorder="0"
    allow="autoplay;"
  />
)

const Button = ({ children, ...otherProps }) => (
  <button
    type="button"
    className="mt-3 mr-3 px-4 py-3 border border-transparent text-base font-medium text-white bg-blue-400 shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </button>
)

const CTAHeader = () => (
  <nav className="flex bg-blue-500 p-4">
    <div className="flex flex-1 items-center justify-center">
      <a
        href={getWhatsUrl()}
        target="_blank"
        rel="noreferrer"
        className="flex flex-end items-center justify-center font-regular text-lg text-white hover:text-gray-300 mr-8"
      >
        <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="ml-3">Consultas e exames:</span>
        <span className="ml-3">(47) 99262-6100</span>
      </a>
    </div>
  </nav>
)

const BlogCardContainer = ({ children, onClick }) => (
  <div
    onClick={onClick}
    className="flex flex-col items-center shadow-lg overflow-hidden bg-white cursor-pointer"
  >
    {children}
  </div>
)
const BCHeader = ({ children }) => <div className="flex-shrink-0">{children}</div>
const BCContent = ({ children }) => (
  <div className="flex-1 bg-white p-6 flex flex-col">
    <div className="flex-1">{children}</div>
  </div>
)
const BCFooter = ({ children }) => (
  <div className="flex-1 bg-white px-6 pb-6 flex items-center justify-center">{children}</div>
)
const BCContentSubtitle = ({ children, href = '#' }) => (
  <p className="text-sm font-medium text-blue-600">
    <a href={href} className="hover:underline">
      {children}
    </a>
  </p>
)
const BCContentDescription = ({ title, description, href = '#' }) => (
  <div href={href} className="block mt-2 text-center">
    <p className="text-xl font-semibold text-gray-900">{title}</p>
    <p className="mt-3 text-base text-gray-400">{description}</p>
  </div>
)

const BlogCard = ({
  imageProps: { src, alt },
  subtitle,
  title,
  description,
  ctaTitle,
  ctaOnClick,
  onClick,
}) => (
  <BlogCardContainer onClick={onClick}>
    <BCHeader>
      <img className="h-48 w-full object-cover" src={src} alt={alt} />
    </BCHeader>
    <BCContent>
      {subtitle && <BCContentSubtitle>{subtitle}</BCContentSubtitle>}
      <BCContentDescription title={title} description={description} />
    </BCContent>
    <BCFooter>
      <Button onClick={ctaOnClick}>{ctaTitle}</Button>
    </BCFooter>
  </BlogCardContainer>
)

const CTABanner = () => (
  <div className="flex py-8 bg-blue-50 ">
    <div className="flex-1 px-4">
      <div className="flex justify-end">
        <ClockIcon className="h-40 w-40 text-blue-400" />
      </div>
    </div>
    <div className="flex-1 px-4 ng-blue-400">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block text-blue-400 mb-2">Consultas e Exames</span>
        <span className="block mb-2">(47) 99262-6100</span>
        <Button onClick={() => openWhatsUrl(CTA_WA_MESSAGES.headerTopCta)}>Fale conosco</Button>
      </h2>
    </div>
  </div>
)

const Specialties = () => (
  <div className="bg-white" id="especialidades">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-44 lg:items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            Nossas especialidades
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-2 lg:mt-0">
            <div className="col-span-2 flex justify-center items-center py-8 px-8 bg-gray-50 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-1/6 stroke-current text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <h3 className="w-5/6 max-h-12 text-xl text-gray-400 text-center">
                Facectomia com implante intraocular (Catarata)
              </h3>
            </div>
            <div className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-1/5 stroke-current text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <h3 className="w-4/5 max-h-12 text-xl text-gray-400 text-center">
                Exérese de Xantelasma
              </h3>
            </div>
            <div className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-1/5 stroke-current text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <h3 className="w-4/5 max-h-12 text-xl text-gray-400 text-center">
                Exérese de Tumoração
              </h3>
            </div>
            <div className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-1/5 stroke-current text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <h3 className="w-4/5 max-h-12 text-xl text-gray-400 text-center">
                Cirurgia Refrativa
              </h3>
            </div>
            <div className="col-span-1 flex justify-center items-center py-8 px-8 bg-gray-50 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-1/5 stroke-current text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <h3 className="w-4/5 max-h-12 text-xl text-gray-400 text-center">Crosslinking</h3>
            </div>
          </div>
          <div className="col-span-2 flex justify-center items-center py-8 px-8 bg-gray-50 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-1/6 stroke-current text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            <h3 className="w-5/6 max-h-12 text-xl text-gray-400 text-center">
              Exérese de Pterigio com autotransplante conjuntival
            </h3>
          </div>
        </div>
        <div className="relative mx-auto w-full shadow-lg mt-0">
          <img src={ceo} alt="ceo" />
          <p className="px-8 pb-6 pt-8 max-w-3xl text-justify text-lg text-bold text-gray-900">
            Dr. Alexandre Rocha Freitag - Fundador
          </p>
          <p className="px-8 pb-2 max-w-3xl text-justify text-md text-gray-400">
            O Dr. Alexandre Rocha Freitag é fundador e diretor técnico do HOF. Ganhou título de
            Especialista em Oftalmologia pela Associação Médica Brasileira (AMB) e pelo Conselho
            Brasileiro de Oftalmologia – CBO. É Membro Titular do Conselho Brasileiro de
            Oftalmologia (CBO). É Membro Titular da Sociedade Brasileira de Oftalmologia (SBO).
          </p>
          <p className="px-8 pb-8">
            <a href="/equipe" className="font-medium text-blue-400 underline" rel="noreferrer">
              Mais sobre a equipe
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

const Index = () => {
  const [showSocialProof, setShowSocialProof] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      {/* MENU E HERO */}
      <header>
        <div className="relative">
          <CTAHeader />
        </div>
        <Navigator />
      </header>

      <main>
        <div className="flex flex-col">
          {/* Hero card */}
          <div className="relative">
            <div className="max-w-full mx-auto">
              <div className="relative shadow-xl sm:overflow-hidden h-1/2">
                <div className="absolute inset-0">
                  <img className="h-full w-full object-cover" src={banner} alt="doctors" />
                  {/* <div className="absolute inset-0 bg-blue-500 mix-blend-multiply" /> */}
                </div>
                <div className="relative px-4 py-16 sm:px-6 lg:p-48 2xl:p-80">
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <a
                      href={getWhatsUrl(CTA_WA_MESSAGES.headerTopCta)}
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-400 bg-white hover:bg-blue-50 sm:px-8 opacity-90 hover:opacity-100"
                    >
                      Fale conosco
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Specialties />

          {/* CONVENIOS */}
          <div className="bg-gray-100" id="convenios">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-400 tracking-wide">
                Nossos convênios
              </p>
              <div className="container flex justify-around flex-wrap">
                <img className="h-14 m-8" src={c1} alt="Beyer" />
                <img className="h-14 m-8" src={c2} alt="Sc saúde" />
                <img className="h-14 m-8" src={c3} alt="Prestomed" />
                <img className="h-14 m-8" src={c4} alt="Unimed" />
                <img className="h-14 m-8" src={c5} alt="boavida" />
                <img className="h-14 m-8" src={c6} alt="postal saúde" />
                <img className="h-14 m-8" src={c7} alt="clinipam" />
                <img className="h-14 m-8" src={c8} alt="saúde caixa" />
                <img className="h-14 m-8" src={c9} alt="bradesco saúde" />
                <img className="h-14 m-8" src={c10} alt="geap saúde" />
                <img className="h-14 m-8" src={c11} alt="cassi" />
                <img className="h-14 m-8" src={c12} alt="renal vida" />
                <img className="h-14 m-8" src={c13} alt="amo" />
                <img className="h-14 m-8" src={c14} alt="ammvi" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="atendimento">
        <CTABanner />
      </div>

      {/* HISTÓRIAS QUE INSPIRAM */}
      <div
        id="inspiring-histories"
        className="container mx-auto relative bg-white-50 pt-16 pb-20 lg:pt-24 lg:pb-28 lg:px-8"
      >
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 px-4 sm:text-4xl md:px-0">
          Histórias que inspiram
        </h2>
        <div className="flex justify-start">
          <div className="flex-1 py-8 pr-8">
            <h3 className="font-bold text-2xl pb-4 text-gray-900">Um grande dia para o Gui!!</h3>
            <p className="text-lg py-4 pr-8 text-gray-500">
              Veja em detalhes como o Hospital dos olhos Freitag ajudou a fazer da vida do pequeno
              Gui uma vida mais alegre, com mais oportunidades para transformar o futuro da nossa
              sociedade!
            </p>
            <Button onClick={() => openWhatsUrl(CTA_WA_MESSAGES.headerTopCta)}>Fale conosco</Button>
          </div>
          <div className="relative flex-1">
            <div className={`${showSocialProof ? '' : 'hidden'}`}>
              <YoutubeVideo
                src={`https://www.youtube.com/embed/mIHpNy1l9VE?controls=0${
                  showSocialProof ? '&autoplay=1' : ''
                }`}
              />
            </div>
            <div className={`${showSocialProof ? 'hidden' : ''}`}>
              <img className="object-cover rounded-lg" src={socialproof} alt="prova social" />
              <button type="button" onClick={() => setShowSocialProof(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-36 left-64 2xl:top-44 2xl:left-80 h-16 w-16 fill-current text-blue-400 hover:text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CTABanner />
      <div className="flex flex-col items-center mt-14" id="unidades">
        <div id="unidades" className="w-full bg-white rounded overflow-x-hidden flex snap-x">
          <Place
            id="slide-1"
            title="Hospital de Olhos Freitag - Timbó"
            description="Endereço: R. Germano Brandes Sênior, 726 - Centro, Timbó - SC"
            description2="Ref: Ao lado do Hospital Oase"
            contact="Telefone: (47) 3382-0266"
            contact2="Whatsapp: (47) 99262-6100"
            contactUrl="https://wa.me/5547992626100"
            urlmap="https://www.google.com/maps/place/Hospital+de+Olhos+Freitag/@-26.8265823,-49.272391,15z/data=!4m5!3m4!1s0x0:0xbc5d7dec96d3936c!8m2!3d-26.8265311!4d-49.272286"
            src={unidadeTimbo}
          />
          <Place
            id="slide-2"
            title="Hospital de Olhos Freitag - Indaial"
            description="Endereço: Rua Marechal Deodoro da Fonseca, 1025 - Sala 04 - Tapajós, Indaial - SC"
            description2="Ref: Tapajós"
            contact="Telefone: (47) 99168-9605"
            contact2="Whatsapp: (47) 99168-9605"
            contactUrl="https://wa.me/5547991689605"
            urlmap="https://www.google.com/maps/place/Rua+Marechal+Deodoro+da+Fonseca,+1025+-+Tapaj%C3%B3s,+Indaial+-+SC,+89130-000/@-26.9008823,-49.2433544,17z/data=!3m1!4b1!4m5!3m4!1s0x94df028a331fab73:0xc94877b2eea8b0c1!8m2!3d-26.9008823!4d-49.2411657"
            src={unidadeTimbo}
          />
          <Place
            id="slide-3"
            title="Hospital de Olhos Freitag - Benedito Novo"
            description="Endereço: Rua Quirino Longo, 300 - Centro, Benedito Novo - SC"
            description2="Ref: Anexo ao Hospital São Benedito"
            contact="Telefone: (47) 3382-0266"
            contact2="Whatsapp: (47) 99262-6100"
            contactUrl="https://wa.me/5547992626100"
            urlmap="https://www.google.com/maps/place/R.+Quirino+Longo,+300+-+Centro,+Benedito+Novo+-+SC,+89124-000/@-26.7820527,-49.3648838,17z/data=!4m5!3m4!1s0x94def80889b565a3:0x1df98072b912c294!8m2!3d-26.7820527!4d-49.3626951"
            src={unidadeTimbo}
          />
          <Place
            id="slide-4"
            title="Hospital de Olhos Freitag - Apiúna"
            description="Endereço: Rua Rio de Janeiro, 57, Apiúna - SC"
            description2="Ref: Próximo ao posto Mime"
            contact="Telefone: (47) 99175-2857"
            contact2="Whatsapp: (47) 99175-2857"
            contactUrl="https://wa.me/5547991752857"
            urlmap="https://www.google.com/maps/place/R.+Rio+de+Janeiro,+57,+Api%C3%BAna+-+SC,+89135-000/@-27.0381848,-49.3933441,17z/data=!3m1!4b1!4m5!3m4!1s0x94dfa9bdb72fcb25:0xd80e0d170f09232a!8m2!3d-27.0381848!4d-49.3911554"
            src={unidadeTimbo}
          />
        </div>

        <div className="flex mt-8">
          <a
            className="mr-1 p-2 text-gray-100 rounded-2xl bg-blue-400 hover:bg-blue-500 flex justify-center items-center"
            href="#slide-1"
          >
            timbó
          </a>
          <a
            className="mr-1 p-2 text-gray-100 rounded-2xl bg-blue-400 hover:bg-blue-500 flex justify-center items-center"
            href="#slide-2"
          >
            indaial
          </a>
          <a
            className="mr-1 p-2 text-gray-100 rounded-2xl bg-blue-400 hover:bg-blue-500 flex justify-center items-center"
            href="#slide-3"
          >
            benedito novo
          </a>
          <a
            className="mr-1 p-2 text-gray-100 rounded-2xl bg-blue-400 hover:bg-blue-500 flex justify-center items-center"
            href="#slide-4"
          >
            apiúna
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
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
    className="flex flex-col snap-start w-full h-full flex items-center justify-center flex-shrink-0"
    id={id}
  >
    <div>
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 px-4 sm:text-4xl md:px-0">
        Nossas Unidades
      </h2>
    </div>

    <div className="flex shadow-lg m-4">
      <div className="flex justify-end p-4">
        <img src={src} className="h-72 w-96" alt="location" />
      </div>
      <div className="flex flex-col p-4 justify-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">{title}</h1>
        <p className="text-lg font-medium text-gray-700 mb-2">{description}</p>
        <p className="text-lg text-gray-700 mb-2">{description2}</p>
        <p className="text-lg text-gray-700 mb-2">{contact}</p>
        <a
          href={contactUrl}
          className="text-lg text-gray-700 mb-2"
          target="_blank"
          rel="noreferrer"
        >
          {contact2}
        </a>
        <a href={urlmap} className="text-lg text-blue-400" target="_blank" rel="noreferrer">
          Ver no mapa
        </a>
      </div>
    </div>
  </div>
)

export default Index
