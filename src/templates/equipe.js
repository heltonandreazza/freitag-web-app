import { graphql } from 'gatsby';
import React from 'react'
import bannerCorpoClinico from '../assets/bannerCorpoClinico.jpeg'
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
          <p className='flex text-lg font-medium text-gray-500 py-1 ' key={item}>
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

const Equipe = ({ data }) => {
  const team = data.allContentfulTeamMember.edges.map(edge => ({
    name: edge.node.name,
    desc: edge.node.desc,
    items: edge.node.items,
    image: `https:${edge.node.image.file.url}`,
  }));

  return (
  <div>
    <Navigator />
    <main>
      {/* <div className='relative h-80 flex items-center justify-center'>
        <div className='absolute top-0 left-0 h-full w-full bg-blue-400 opacity-20' />
        <img
          className='h-full w-full object-cover'
          src={bannerCorpoClinico}
          alt='bannerCorpoClinico'
        />
      </div> */}
      {team.map(({ name, desc, items, image }, index) => (
          <Colaborador
            name={name}
            desc={desc}
            items={items}
            image={image}
            reverse={index % 2 !== 0}
            key={name}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export const pageQuery = graphql`
  query {
    allContentfulTeamMember {
      edges {
        node {
          name
          desc
          items
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default Equipe
