/* eslint-disable react/jsx-props-no-spreading */
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { Fragment, useState } from 'react'
import { ClockIcon } from '@heroicons/react/solid'
import { SocialIcon } from 'react-social-icons'

import iconinstaround from '../assets/icon-insta-round.png'
import iconinsta from '../assets/icon-insta.png'
import iconfacebook from '../assets/icon-facebook.png'
import iconfacebookround from '../assets/icon-facebook-round.png'
import iconyoutuberound from '../assets/icon-youtube-round.png'

import logo from '../assets/logo.png'
import socialproof from '../assets/socialproof.png'
import '../styles/global.css'

const navigation = [
  { name: 'Unidades', href: '#' },
  { name: 'Especialidades', href: '#' },
  { name: 'Atendimento', href: '#' },
  { name: 'Convênios', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Equipe', href: '#' },
]

const URLS = {
  whatsapp: 'https://wa.me/554792203282?text=',
  facebook:
    'https://www.facebook.com/academiatimbo/?fb_dtsg_ag=Adyx3XHjgErXBpC3Ivdrd1_uNuXKwApGs99tZMHvdWWgvQ%3AAdxePHy5STMb6oKDFSSIqZC5xfXHDO4HJIYd1pQyVaJe5g',
  instagram: 'https://www.instagram.com/academiacultural',
  youtube: 'https://www.youtube.com/channel/UCBRl2aeplT0kf9w0fH5BqYw',
  playstore: 'https://play.google.com/store/apps/details?id=com.academiacultural.culturalapp',
  appstore: 'https://apps.apple.com/us/app/id1504569755',
}

const CTA_WA_MESSAGES = {
  headerTopCta:
    '1. Ola, estive no site gostaria de conhecer os projetos de vida da academia Cultural!',
  headerCtaMenuItem2: '2. Olá!! Estive no site para agendar uma visita!',
  headerCtaMenuItem3:
    '3. Olá!! Estive no site para me exercitar em casa. Poderia me explicar como funciona??',
  heroCtaLifeProject: '4. Ola, estive no site e quero iniciar um projeto de vida com vocês!',
  heroCtaExerciseAtHome:
    '3. Olá!! Estive no site para me exercitar em casa. Poderia me explicar como funciona??',
  videosCta1:
    '5. Olá!! Estive no site e me inspirei na história da Rose com projeto reabilita! Quero fazer também!',
  videosCta2:
    '5. Olá!! Estive no site e me inspirei na história da Jeniffer com projeto reabilita! Quero fazer também!',
  videosCta3:
    '5. Olá!! Estive no site e me inspirei na história da heide com projeto reabilita! Quero fazer também!',
  greatPlansCta1: '6. Olá!! Estive no site e curti muito o plano Resultado Já. Poderia me ajudar??',
  greatPlansCta2: '7. Olá!! Estive no site e curti muito o plano Reabilita. Poderia me ajudar??',
  greatPlansCta3: '8. Olá!! Estive no site e curti muito o plano Reab-vid. Poderia me ajudar??',
  plansCta1: '9. Olá!! Estive no site e curti muito o plano HIPER-C. Poderia me ajudar??',
  plansCta2: '10. Olá!! Estive no site e curti muito o plano Studio Pilates. Poderia me ajudar??',
  plansCta3: '11. Olá!! Estive no site e curti muito o plano Fisioterapia. Poderia me ajudar??',
  plansCta4: '12. Olá!! Estive no site e curti muito o plano Viva Leve. Poderia me ajudar??',
  plansCta5: '13. Olá!! Estive no site e curti muito o plano Cardio Speed. Poderia me ajudar??',
  sectionCta:
    '14. Olá!! Estive no site e eu gostaria de agendar um atendimento personalizado. Poderia me ajudar??',
  footerCtaContact: '15. Olá!! Estive no site o link Atendimento, poderia me ajudar??',
  footerCtaJobs: '16. Olá!! Estive no site o link Trabalhe conosco, poderia me ajudar??',
}

const getWhatsUrl = (text, url) => encodeURI(`${url || URLS.whatsapp}${text}`)
const openWhatsUrl = (text) => window.open(getWhatsUrl(text), '_blank')

const blogVideos = [
  {
    imageProps: { src: socialproof, alt: 'video 1' },
    title: 'Rose',
    ctaTitle: 'Comece agora',
    ctaOnClick: () => openWhatsUrl(CTA_WA_MESSAGES.videosCta1),
    videoUrl: 'https://www.youtube.com/embed/grxQa2o-jCg',
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.`,
  },
  {
    imageProps: { src: socialproof, alt: 'video 2' },
    title: 'Jeniffer',
    ctaTitle: 'Comece agora',
    ctaOnClick: () => openWhatsUrl(CTA_WA_MESSAGES.videosCta2),
    videoUrl: 'https://www.youtube.com/embed/grxQa2o-jCg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.',
  },
  {
    imageProps: { src: socialproof, alt: 'video 3' },
    title: 'Heide',
    ctaTitle: 'Comece agora',
    ctaOnClick: () => openWhatsUrl(CTA_WA_MESSAGES.videosCta3),
    videoUrl: 'https://www.youtube.com/embed/grxQa2o-jCg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.',
  },
]

const YoutubeVideo = ({ src }) => (
  <iframe
    title="titulo"
    className="w-full"
    id="ytplayer"
    type="text/html"
    height="320"
    src={src}
    frameBorder="0"
  />
)

const Button = ({ children, ...otherProps }) => (
  <button
    type="button"
    className="mt-3 mr-3 px-4 py-3 border border-transparent text-base font-medium text-white bg-blue-500 shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    {children}
  </button>
)

const CTAHeader = () => (
  <nav className="flex bg-blue-600 p-4">
    <div className="flex flex-1 items-center justify-center">
      <a
        href={getWhatsUrl(CTA_WA_MESSAGES.headerTopCta)}
        target="_blank"
        rel="noreferrer"
        className="flex flex-end items-center justify-center font-regular text-lg text-white hover:text-gray-300 mr-8"
      >
        <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="ml-3">Consultas e exames:</span>
        <span className="ml-3">(47) 988665544</span>
      </a>
    </div>
  </nav>
)

const HLTitle = ({ children }) => (
  <h1>
    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
      {children}
    </span>
  </h1>
)
const HLDescription = ({ children }) => (
  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
    {children}
  </p>
)
const HLButtonActions = ({ children }) => (
  <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">{children}</div>
)
const HLLinkActions = ({ children }) => (
  <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">{children}</div>
)
const VideosSection = ({ children }) => <div className="relative max-w-7xl mx-auto">{children}</div>
const VSHeader = ({ children }) => <div className="flex flex-col">{children}</div>
const VSContent = ({ children }) => (
  <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">{children}</div>
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
    <p className="mt-3 text-base text-gray-500">{description}</p>
  </div>
)

const BCContentAuthor = ({ image, name, datetime, href = '#' }) => (
  <div className="mt-6 flex items-center">
    <div className="flex-shrink-0">
      <a href={href}>
        <span className="sr-only">Brenna Goyette</span>
        <img className="h-10 w-10" src={image} alt="" />
      </a>
    </div>
    <div className="ml-3">
      <p className="text-sm font-medium text-gray-900">
        <a href={href} className="hover:underline">
          {name}
        </a>
      </p>
      <div className="flex space-x-1 text-sm text-gray-500">
        <time dateTime="2020-03-10">{datetime}</time>
      </div>
    </div>
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
const CTAImageContentSection = ({ children, className }) => (
  <div id="main-projects" className={className || 'relative py-16 bg-blue-50'}>
    <div className="max-w-7xl mx-auto bg-blue-500 lg:bg-transparent">
      <div className="lg:grid lg:grid-cols-12">{children}</div>
    </div>
  </div>
)

const CTAICSContent = ({ children, reverse }) => (
  <div
    className={`relative bg-blue-400 ${
      reverse ? 'lg:col-start-1' : 'lg:col-start-3'
    } lg:row-start-1 lg:col-span-10  lg:grid lg:grid-cols-10 lg:items-center`}
  >
    {children}
  </div>
)
const CTAICSContentAbsSVG = ({ children }) => (
  <div className="hidden absolute inset-0 overflow-hidden lg:block" aria-hidden="true">
    {children}
  </div>
)

const CTAICSContentDescriptions = ({ children, reverse }) => (
  <div
    className={`relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 ${
      reverse ? 'lg:col-start-2' : 'lg:col-start-4'
    } lg:col-span-6`}
  >
    {children}
  </div>
)

const CTAICSContentDescriptionsCTA = ({ children, ...otherProps }) => (
  <a
    className="block w-full py-3 pl-3 px-5 mr-4 text-center bg-white border border-transparent shadow-md text-base font-medium text-blue-600 hover:bg-blue-50 sm:inline-block sm:w-auto"
    {...otherProps}
  >
    {children}
  </a>
)

const CTAICSContentDescriptionsParagraph = ({ children }) => (
  <p className="text-lg text-white">{children}</p>
)

const CTAICSContentDescriptionsTitle = ({ children }) => (
  <h2 className="text-3xl font-extrabold text-white" id="join-heading">
    {children}
  </h2>
)

const CTAICSImage = ({ image, alt, reverse }) => (
  <div
    className={`relative ${
      reverse ? 'lg:col-start-9' : 'lg:col-start-1'
    } lg:row-start-1 lg:col-span-4 lg:bg-transparent z-10`}
  >
    <div className="max-w-md mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
      <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
        <img className="object-cover object-center shadow-2xl max-height-0" src={image} alt={alt} />
      </div>
    </div>
  </div>
)

const BottomSquaresDots = () => (
  <svg
    className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
    width="404"
    height="384"
    fill="none"
    viewBox="0 0 404 384"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <rect x="0" y="0" width="4" height="4" className="text-blue-500" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
  </svg>
)

const CTABanner = () => (
  <div className="flex py-8 bg-blue-50 ">
    <div className="flex-1 px-4">
      <div className="flex justify-end">
        <ClockIcon className="h-40 w-40 text-blue-500" />
      </div>
    </div>
    <div className="flex-1 px-4 ng-indigo-500">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block text-blue-500 mb-2">Consultas e Exames</span>
        <span className="block mb-2">(47) 99886655</span>
        <Button onClick={() => openWhatsUrl(CTA_WA_MESSAGES.sectionCta)}>Fale conosco</Button>
      </h2>
    </div>
  </div>
)

const Footer = () => (
  <footer className="bg-white" aria-labelledby="footerHeading">
    <h2 id="footerHeading" className="sr-only">
      Footer
    </h2>
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8 xl:col-span-1">
          <img className="h-14" src={logo} alt="Academia cultural" />
          <p className="text-gray-500 text-base">
            Fazendo do mundo um lugar melhor e mais saudável para se viver.
          </p>
          <div className="flex space-x-6">
            <a
              href={URLS.facebook}
              target="_blank"
              className="text-blue-400 hover:text-blue-500"
              rel="noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href={URLS.instagram}
              target="_blank"
              className="text-blue-400 hover:text-blue-500"
              rel="noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href={URLS.youtube}
              target="_blank"
              className="text-blue-400 hover:text-blue-500"
              rel="noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Projetos
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#main-projects" className="text-base text-gray-500 hover:text-gray-900">
                    Mais vendidos
                  </a>
                </li>

                <li>
                  <a href="#more-projects" className="text-base text-gray-500 hover:text-gray-900">
                    Mais comentados
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Informações
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href={getWhatsUrl(CTA_WA_MESSAGES.footerCtaContact)}
                    target="_blank"
                    className="text-base text-gray-500 hover:text-gray-900"
                    rel="noreferrer"
                  >
                    Atendimento
                  </a>
                </li>

                <li>
                  <a
                    href={URLS.appstore}
                    target="_blank"
                    className="text-base text-gray-500 hover:text-gray-900"
                    rel="noreferrer"
                  >
                    App apple store
                  </a>
                </li>

                <li>
                  <a
                    href={URLS.playstore}
                    target="_blank"
                    className="text-base text-gray-500 hover:text-gray-900"
                    rel="noreferrer"
                  >
                    App play store
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Empresa
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Sobre
                  </a>
                </li>

                {/* <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Blog
                  </a>
                </li> */}

                <li>
                  <a
                    href={getWhatsUrl(CTA_WA_MESSAGES.footerCtaJobs)}
                    target="_blank"
                    className="text-base text-gray-500 hover:text-gray-900"
                    rel="noreferrer"
                  >
                    Trabalhe conosco
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Termos de uso
                  </a>
                </li>

                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Políticas de privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 pt-8">
        <p className="text-base text-gray-400 xl:text-center">
          &copy; 2021 Academia Cultural, todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
)

const Specialties = () => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-44 lg:items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            Nossas especialidades
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-2 lg:mt-0">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                alt="Statamic"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                alt="Laravel"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                alt="Statamic"
              />
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full shadow-lg mt-0">
          <YoutubeVideo src="https://www.youtube.com/embed/9oFQzvPUzeU?controls=0" />
          <p className="px-8 pb-6 pt-8 max-w-3xl text-justify text-lg text-bold text-gray-900">
            Maiquel Zafanelli - CEO
          </p>
          <p className="px-8 pb-2 max-w-3xl text-justify text-md text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.
          </p>
          <p className="px-8 pb-8">
            <a
              href={URLS.playstore}
              target="_blank"
              className="font-medium text-blue-500 underline"
              rel="noreferrer"
            >
              Mais sobre a equipe
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

const Index = () => {
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [currentVideoUrlModal, setCurrentVideoUrlModal] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      {/* MENU E HERO */}
      <header>
        <div className="relative">
          <CTAHeader />
        </div>
        <Popover className="relative bg-white">
          {({ open }) => (
            <>
              <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                      alt=""
                    />
                  </a>
                </div>
                {/* mobile menu */}
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                      <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                          <div>
                            <img
                              className="h-8 w-auto"
                              src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                              alt="Workflow"
                            />
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                              <span className="sr-only">Close menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                      <div className="py-6 px-5">
                        <div className="grid grid-cols-2 gap-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                          >
                            Entrar
                          </a>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <SocialIcon
                    className="flex whitespace-nowrap mr-2"
                    url="https://www.facebook.com/freitag.laboratorios/"
                  />
                  <SocialIcon
                    className="flex whitespace-nowrap mr-2"
                    url="https://www.instagram.com/freitaglab/"
                  />
                  <SocialIcon className="flex whitespace-nowrap " url="https://www.youtube.com" />
                </div>
              </div>
            </>
          )}
        </Popover>
      </header>

      <main>
        <div className="flex flex-col">
          {/* Hero card */}
          <div className="relative">
            <div className="max-w-full mx-auto">
              <div className="relative shadow-xl sm:overflow-hidden h-1/2">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-blue-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 lg:p-48 2xl:p-80 lg:px-8">
                  <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    <span className="text-white">Take control of your</span>
                    <span className="text-blue-200"> customer support</span>
                  </h1>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 sm:px-8"
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
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                Nossos convênios
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CTABanner />

      {/* HISTÓRIAS QUE INSPIRAM */}
      <div
        id="inspiring-histories"
        className="relative bg-white-50 pt-16 pb-20 lg:pt-24 lg:pb-28 lg:px-8"
      >
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <VideosSection>
          <VSHeader>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 px-4 sm:text-4xl md:px-0">
              Histórias que inspiram
            </h2>
          </VSHeader>
          <VSContent>
            {blogVideos.map((item) => (
              <BlogCard
                imageProps={item.imageProps}
                title={item.title}
                ctaTitle={item.ctaTitle}
                ctaOnClick={item.ctaOnClick}
                description={item.description}
                onClick={() => {
                  console.log(showVideoModal, currentVideoUrlModal)
                  setShowVideoModal(true)
                  setCurrentVideoUrlModal(item.videoUrl)
                }}
              />
            ))}
          </VSContent>
        </VideosSection>
      </div>

      <CTABanner />
      {/* PLANOS */}
      {/* {mainProjects.map((item) => (
        <CTAImageContent
          key={item.imageTitle}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          imageTitle={item.imageTitle}
          label={item.label}
          description={item.description}
          ctaTitle={item.ctaTitle}
          ctaTitle2={item.ctaTitle2}
          ctaHref={item.ctaHref}
          ctaHref2={item.ctaHref2}
        />
      ))} */}

      {/* MAIS PLANOS */}
      {/* <CTAContentImageSection title="Veja mais projetos para a sua vida">
        {projects.map((item) => (
          <CTAContentImage
            key={item.titleImage}
            titleImage={item.titleImage}
            paragraph={item.paragraph}
            ctaTitle={item.ctaTitle}
            ctaOnClick={item.ctaOnClick}
            image={item.image}
          />
        ))}
      </CTAContentImageSection> */}
      {/* ABSOLUTE MODAL VIDEO */}
      {/* {showVideoModal && (
        <div className="fixed inset-0 p-2 z-10" onClick={() => setShowVideoModal(false)}>
          <div className="overflow-hidden flex items-center justify-center">
            <div className="rounded-lg shadow-md  p-5 w-5/5 md:w-3/5 bg-white mt-32">
              <YoutubeVideo src={currentVideoUrlModal} />
            </div>
          </div>
        </div>
      )} */}
      <div className="flex flex-col items-center mt-4">
        <div className="w-full bg-white rounded overflow-x-hidden flex snap-x">
          <div
            className="flex flex-col snap-start w-full h-full flex items-center justify-center flex-shrink-0"
            id="slide-1"
          >
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 px-4 sm:text-4xl md:px-0">
                Nossas Unidades
              </h2>
            </div>
            <div className="flex shadow-lg m-4">
              <div className="flex justify-end p-4">
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                  className="h-72 w-96"
                  alt="location"
                />
              </div>
              <div className="flex flex-col p-4 justify-center">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">
                  Laboratório Freitag & Weingärtner
                </h1>
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Endereço: R. Aracajú, 78 - Centro, Timbó - SC, 89120-000
                </p>
                <p className="text-lg font-medium text-gray-700 mb-2">Telefone: (47) 333225588</p>
                <p className="text-lg font-medium text-gray-700 mb-2">whatsapp: (47) 988665544</p>
                <a href="#" className="text-lg font-medium text-blue-500">
                  Ver no mapa
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col snap-start w-full h-full flex items-center justify-center flex-shrink-0"
            id="slide-2"
          >
            <div>
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 px-4 sm:text-4xl md:px-0">
                Nossas Unidades
              </h2>
            </div>

            <div className="flex shadow-lg m-4">
              <div className="flex justify-end p-4">
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
                  className="h-72 w-96"
                  alt="location"
                />
              </div>
              <div className="flex flex-col p-4 justify-center">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">
                  Academia Cultural de Timbó
                </h1>
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Endereço: R. Aracajú, 78 - Centro, Timbó - SC, 89120-000
                </p>
                <p className="text-lg font-medium text-gray-700 mb-2">Telefone: (47) 333225588</p>
                <p className="text-lg font-medium text-gray-700 mb-2">whatsapp: (47) 988665544</p>
                <a href="#" className="text-lg font-medium text-blue-500">
                  Ver no mapa
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-8">
          <a
            className="w-8 mr-1 h-8 text-gray-100 rounded-full bg-blue-500 flex justify-center items-center"
            href="#slide-1"
          >
            1
          </a>
          <a
            className="w-8 mr-1 h-8 text-gray-100 rounded-full bg-blue-500 flex justify-center items-center"
            href="#slide-2"
          >
            2
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index
