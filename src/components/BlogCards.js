import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

export const BlogCardsItem = ({
  title,
  datetime,
  date,
  description,
  href,
  imageUrl,
  authorName,
  readingTime,
  authorHref,
  authorImageUrl,
}) => (
  <a href={href} key={title} className="flex">
    <div className="hidden sm:flex flex-1 px-8">
      <GatsbyImage
        className="h-48 w-full object-cover border border-transparent shadow"
        image={imageUrl}
        alt="Imagen"
      />
    </div>
    <div className="flex-1 flex flex-col">
      <div className="mt-2 block text-center sm:text-left">
        <p className="text-lg font-semibold text-gray-900">{title}</p>
        <p className="mt-3 text-gray-500 text-sm">{description}</p>
      </div>
      <div className="flex-1 mt-6 flex items-end">
        <div className="flex-shrink-0">
          <a href={authorHref}>
            <span className="sr-only">{authorName}</span>
            <GatsbyImage className="h-10 w-10 rounded-sm" image={authorImageUrl} alt='imagen'/>
          </a>
        </div>

        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">
            <a href={authorHref} className="hover:underline">
              {authorName}
            </a>
          </p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <time dateTime={datetime}>{date}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{readingTime}</span>
          </div>
        </div>
      </div>
    </div>
  </a>
)

const BlogCards = ({ title, children }) => (
  <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-10 lg:px-8">
    <div className="relative max-w-lg mx-auto divide-gray-200 lg:max-w-7xl">
      <div>
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">{children}</div>
    </div>
  </div>
)

export default BlogCards
