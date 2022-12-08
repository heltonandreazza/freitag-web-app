import { graphql } from 'gatsby'
import React, { useState } from 'react'
import BlogCards, { BlogCardsItem } from '../components/BlogCards'
import BlogColunCards, { BlogColunCardsItem } from '../components/BlogColunCards'
import BlogPagination from '../components/BlogPagination'
import Footer from '../components/BlogFooter'
import Navigator from '../components/BlogNavigator'
import Seo from '../components/Seo'
import '../styles/global.css'

const Blog = ({ data, pageContext }) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false)
  const pages = Array.from({ length: pageContext.numPages })
  return (
    <div>
      <Seo title={`Blog Hospital de Olhos Freitag ${pageContext.title}`} />
      <Navigator
        onClickOpenMenuMobile={() => setShowMenuMobile(true)}
        onClickCloseMenuMobile={() => setShowMenuMobile(false)}
        showMenuMobile={showMenuMobile}
      />
      <main>
        <BlogColunCards title={pageContext.title} description="Postagens mais recentes">
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
        <BlogCards>
          {data.posts.edges.slice(3, 9).map(({ node }) => (
            <BlogCardsItem
              imageUrl={node.featuredImage.gatsbyImageData}
              title={node.title}
              datetime={node.createdAt}
              date={new Date(node.createdAt).toLocaleDateString()}
              description={node.description}
              href={`${node.slug}`}
            />
          ))}
        </BlogCards>
        <BlogPagination
          currentPage={pageContext.currentPage}
          pagesLength={pages.length}
          prefix={pageContext.slug}
        />
      </main>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!, $slug: String!) {
    posts: allContentfulPost(
      limit: $limit
      skip: $skip
      filter: { visible: { eq: true }, categories: { elemMatch: { slug: { eq: $slug } } } }
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
      totalCount
    }
  }
`

export default Blog
