/* eslint-disable react/jsx-props-no-spreading */
import { useStaticQuery, graphql } from 'gatsby'
import React, { useState } from 'react'
import banner from '../assets/banner.png'
import ceo from '../assets/ceo.png'
import socialproof from '../assets/socialproof.png'
import BlogColunCards, { BlogColunCardsItem } from '../components/BlogColunCards'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Navigator from '../components/Navigator'
import CTABanner from '../components/recipes/CTABanner'
import CTAHeader from '../components/recipes/CTAHeader'
import Place from '../components/recipes/Place'
import Specialties from '../components/recipes/Specialties'
import YoutubeVideo from '../components/YoutubeVideo'
import '../styles/global.css'
import { getWhatsUrl, openWhatsUrl } from '../utils'
import { CTA_WA_MESSAGES } from '../utils/constants'
import staticData from '../utils/staticData'

const { convenios, places, specialties } = staticData
const POSTS_QUERY = graphql`
  query {
    posts: allContentfulPost(
      limit: 3
      filter: { visible: { eq: true } }
      sort: { order: DESC, fields: createdAt }
    ) {
      edges {
        node {
          title
          slug
          description
          createdAt
          updatedAt
          featuredImage {
            gatsbyImageData
          }
          categories {
            category
            slug
          }
          readTime
          author {
            name
            image {
              gatsbyImageData
            }
            urlInstagram
          }
        }
      }
    }
  }
`

const Index = () => {
  const data = useStaticQuery(POSTS_QUERY)
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
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium shadow-sm text-blue-400 bg-white hover:bg-blue-50 sm:px-8 opacity-90 hover:opacity-100"
                    >
                      Fale conosco
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Specialties specialties={specialties} src={ceo} alt="ceo" />

          {/* CONVENIOS */}
          <div className="bg-gray-100" id="convenios">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-400 tracking-wide">
                Nossos convênios
              </p>
              <div className="container flex justify-around flex-wrap">
                {convenios.map((c) => (
                  <img className="h-14 m-8" src={c.src} alt={c.alt} />
                ))}
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
        <div className="flex flex-col sm:flex-row justify-start">
          <div className="text-center sm:text-left flex-1 py-8 pr-8 px-4 sm:px-0">
            <h3 className="font-bold text-2xl pb-4 text-gray-900">Um grande dia para o Gui!!</h3>
            <p className="text-lg py-4 pr-8 text-gray-500">
              Veja em detalhes como o Hospital de olhos Freitag ajudou a fazer da vida do pequeno
              Gui uma vida mais alegre, com mais oportunidades para transformar o futuro da nossa
              sociedade!
            </p>
            <Button onClick={() => openWhatsUrl(CTA_WA_MESSAGES.headerTopCta)}>Fale conosco</Button>
          </div>
          <div className="relative flex-1">
            <div className={`${showSocialProof ? '' : 'hidden'}`}>
              <YoutubeVideo
                src={`https://www.youtube.com/embed/mIHpNy1l9VE${
                  showSocialProof ? '?autoplay=1' : ''
                }`}
              />
            </div>
            <div className={`${showSocialProof ? 'hidden' : ''} pt-8`}>
              <img className="object-cover rounded-lg" src={socialproof} alt="prova social" />
              <button type="button" onClick={() => setShowSocialProof(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-24 left-36 sm:top-20 sm:left-28 md:top-28 md:left-40 lg:top-40 lg:left-64 2xl:top-52 2xl:left-80 h-16 w-16 fill-current text-blue-400 hover:text-blue-500"
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
          {places.map((p) => (
            <Place
              id={p.id}
              title={p.title}
              description={p.description}
              description2={p.description2}
              contact={p.contact}
              contact2={p.contact2}
              contactUrl={p.contactUrl}
              urlmap={p.urlmap}
              src={p.src}
            />
          ))}
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
      <BlogColunCards title="Postagens mais recentes" href="\blog">
        {data.posts.edges.slice(0, 3).map(({ node }) => (
          <BlogColunCardsItem
            title={node.title}
            imageUrl={node.featuredImage.gatsbyImageData}
            categoryName={node.categories?.map((c) => c.category).join('/')}
            categoryHref={`/blog${node.categories[0]?.slug}`}
            href={`/blog${node.slug}`}
            description={node.description}
            authorName={node.author?.name}
            authorImageUrl={node.author?.image.gatsbyImageData}
            authorHref={node.author?.urlInstagram}
            datetime={node.createdAt}
            date={new Date(node.createdAt).toLocaleDateString()}
            readingTime={node.readTime}
          />
        ))}
      </BlogColunCards>
      <Footer />
    </div>
  )
}

export default Index
