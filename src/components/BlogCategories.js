import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

export const BlogCategoriesItem = ({ category, image, slug }) => (
  <Link
    to={slug}
    className='flex items-center justify-center border hover:shadow-xl border-blue-100 p-4 m-8 ml-0 mt-4'
  >
    <GatsbyImage className='h-14 w-14' image={image} />
    <h1 className='text-lg font-medium px-4 text-blue-500'>{category}</h1>
  </Link>
)

const BlogCategories = ({ children }) => (
  <div className='container mx-auto'>
    <h2 className='font-bold text-gray-900 text-2xl pt-4'>Categorias</h2>
    <div className='flex flex-nowrap overflow-x-auto'>{children}</div>
  </div>
)

export default BlogCategories
