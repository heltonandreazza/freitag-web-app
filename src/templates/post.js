import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import Author from '../components/Author'
import BlogCards, { BlogCardsItem } from '../components/BlogCards'
import Footer from '../components/BlogFooter'
import Navigator from '../components/BlogNavigator'
import Seo from '../components/Seo'
import '../styles/global.css'

const buildOptions = (currentUrl) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <strong className='text-gray-900 font-bold'>{text}</strong>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className='mt-16 mb-12 text-6xl font-bold'>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className='mt-14 mb-8 text-4xl font-bold'>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h2 className='mt-10 mb-6 text-2xl font-bold'>{children}</h2>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h2 className='mt-8 mb-4 text-xl font-bold'>{children}</h2>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h2 className='mt-6 mb-2 text-lg font-bold'>{children}</h2>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h2 className='mt-4 text-sm font-bold'>{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className='mt-8 text-xl text-gray-500 leading-8'>{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className='ml-6 list-disc'>{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className='text-gray-300'>{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className='border-l-4 pl-6'>
          <p className='mt-8 text-xl text-gray-900 italic leading-8'>
            {node.content[0].content[0].value}
          </p>
        </blockquote>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          className='text-blue-400 hover:text-blue-500 underline'
          href={node.data.uri}
        >
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        // eslint-disable-next-line react/destructuring-assignment
        <GatsbyImage
          className='mt-8'
          image={node.data.target?.fields?.gatsbyImageData}
          alt='imagem'
        />
      ),
    },
  }
  return options
}

const Post = ({ data: { post, posts } = {}, path }) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false)
  const contentRichJson = JSON.parse(post.contentRich.raw)

  // workaround: add image from 'references' since we have an issue where
  // we dont have the file data in the embedded asset nodes
  post.contentRich.references?.forEach((ref) => {
    const node = contentRichJson?.content.find(
      // eslint-disable-next-line comma-dangle
      (n) => n?.data?.target?.sys?.id === ref.contentful_id
    )
    if (node) {
      node.data.target.fields = { ...ref }
    }
  })

  return (
    <div>
      <Seo title={`Blog Hospital de Olhos Freitag ${post?.title}`} />
      <Navigator
        onClickOpenMenuMobile={() => setShowMenuMobile(true)}
        onClickCloseMenuMobile={() => setShowMenuMobile(false)}
        showMenuMobile={showMenuMobile}
      />
      <div className='relative py-16 bg-white overflow-hidden'>
        <AbsoluteBlock />
        <div className='container container mx-auto relative px-6 lg:px-64 2xl:px-80'>
          <figure className='mx-auto'>
            <GatsbyImage
              className='h-80 w-full object-cover my-8'
              image={post.featuredImage.gatsbyImageData}
            />
          </figure>
          <div className='text-lg'>
            <h1>
              <a
                className='block text-base text-center text-blue-400 hover:text-blue-500 font-semibold tracking-wide uppercase'
                href={`/blog${post.categories[0]?.slug}`}
              >
                {post.categories[0]?.category}
              </a>
              <span className='mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                {post?.title}
              </span>
            </h1>
            <div>
              {documentToReactComponents(contentRichJson, buildOptions(path))}
            </div>
          </div>
        </div>
      </div>
      <Author author={post.author} />
      <BlogCards title='Veja os conteúdos mais recentes'>
        {posts.edges.map(({ node }) => (
          <BlogCardsItem
            imageUrl={node.featuredImage.gatsbyImageData}
            title={node.title}
            datetime={node.createdAt}
            date={new Date(node.createdAt).toLocaleDateString()}
            description={node.description}
            href={`/blog${node.slug}`}
            authorName={node.author?.name}
            authorImageUrl={node.author?.image.gatsbyImageData}
            authorHref={node.author?.urlInstagram}
            readingTime={node.readTime}
            key={node.title}
          />
        ))}
      </BlogCards>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    post: contentfulPost(visible: { eq: true }, slug: { eq: $slug }) {
      title
      categories {
        category
        slug
      }
      author {
        bio {
          childMarkdownRemark {
            html
          }
        }
        image {
          gatsbyImageData
        }
        createdAt
        name
        urlInstagram
        post {
          id
        }
        frase
        role
      }
      featuredImage {
        gatsbyImageData
      }
      contentRich {
        raw
      }
    }
    posts: allContentfulPost(
      limit: 4
      filter: { visible: { eq: true } }
      sort: { createdAt: DESC }
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
export default Post

const AbsoluteBlock = () => (
  <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
    <div
      className='relative h-full text-lg max-w-prose mx-auto'
      aria-hidden='true'
    >
      <svg
        className='absolute top-12 left-full transform translate-x-32'
        width={404}
        height={384}
        fill='none'
        viewBox='0 0 404 384'
      >
        <defs>
          <pattern
            id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits='userSpaceOnUse'
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className='text-gray-200'
              fill='currentColor'
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={384}
          fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
        />
      </svg>
      <svg
        className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
        width={404}
        height={384}
        fill='none'
        viewBox='0 0 404 384'
      >
        <defs>
          <pattern
            id='f210dbf6-a58d-4871-961e-36d5016a0f49'
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits='userSpaceOnUse'
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className='text-gray-200'
              fill='currentColor'
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={384}
          fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
        />
      </svg>
      <svg
        className='absolute bottom-12 left-full transform translate-x-32'
        width={404}
        height={384}
        fill='none'
        viewBox='0 0 404 384'
      >
        <defs>
          <pattern
            id='d3eb07ae-5182-43e6-857d-35c643af9034'
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits='userSpaceOnUse'
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className='text-gray-200'
              fill='currentColor'
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={384}
          fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
        />
      </svg>
    </div>
  </div>
)
