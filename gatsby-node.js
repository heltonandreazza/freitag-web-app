const path = require('path')

const createPagePolicies = ({ graphql, actions: { createPage } }) => {
  const policiesTemplate = path.resolve('src/templates/policies.js')

  createPage({
    path: '/politicas-de-privacidade',
    component: policiesTemplate,
    context: {
      slug: '/politicas-de-privacidade',
    },
  })
}

const createPage404 = ({ graphql, actions: { createPage } }) => {
  const pageNotFoundTemplate = path.resolve('src/templates/pageNotFound.js')

  createPage({
    path: '/404',
    component: pageNotFoundTemplate,
    context: {
      slug: '/404',
    },
  })
}

const createPagePost = ({ graphql, actions: { createPage } }, response) => {
  const postTemplate = path.resolve('src/templates/post.js')

  response.data.posts.edges.forEach((post) => {
    createPage({
      path: `/blog${post.node.slug}`,
      component: postTemplate,
      context: {
        slug: post.node.slug,
      },
    })
  })
}

const createPageBlog = ({ graphql, actions: { createPage } }, response) => {
  const pageSizeBlog = 10
  const totalPostsBlog = response.data.posts.edges.length
  const numPagesBlog = Math.ceil(totalPostsBlog / pageSizeBlog)
  const templateBlog = path.resolve('src/templates/blog.js')

  Array.from({ length: numPagesBlog }).forEach((_, i) => {
    createPage({
      path: `/blog${i === 0 ? '' : `/${i}`}`,
      component: templateBlog,
      context: {
        limit: pageSizeBlog,
        skip: i * pageSizeBlog,
        numPages: numPagesBlog,
        currentPage: i,
      },
    })
  })
}

const createPageCategories = ({ graphql, actions: { createPage } }, response) => {
  const filterByCategory = (category) => ({ node: { categories } = {} }) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    categories.map((c) => c.category).includes(category)

  response.data.categories.edges.forEach((item) => {
    // pagination
    const pageSizeCategory = 10
    const totalPostsCategory = response.data.posts.edges.filter(
      filterByCategory(item.node.category)
    ).length
    const numPagesCategory = Math.ceil(totalPostsCategory / pageSizeCategory)

    const templateCategory = path.resolve('src/templates/category.js')

    Array.from({ length: numPagesCategory }).forEach((_, i) => {
      createPage({
        path: `/blog${item.node.slug}${i === 0 ? '' : `/${i}`}`,
        component: templateCategory,
        context: {
          limit: pageSizeCategory,
          skip: i * pageSizeCategory,
          numPages: numPagesCategory,
          currentPage: i,
          title: item.node.category,
          slug: item.node.slug,
        },
      })
    })
  })
}

const createPageAuthors = ({ graphql, actions: { createPage } }, response) => {
  const authorsTemplate = path.resolve('src/templates/authors.js')
  createPage({
    path: '/authors',
    component: authorsTemplate,
    context: {
      slug: '/authors',
    },
  })
}

exports.createPages = async (props) => {
  const { graphql } = props

  const response = await graphql(`
    {
      posts: allContentfulPost(filter: { visible: { eq: true } }) {
        edges {
          node {
            slug
            categories {
              category
              slug
            }
          }
        }
      }
      categories: allContentfulPostCategory {
        edges {
          node {
            category
            slug
          }
        }
      }
    }
  `)

  createPagePolicies(props)
  createPage404(props)
  createPageBlog(props, response)
  createPagePost(props, response)
  createPageCategories(props, response)
  createPageAuthors(props, response)
}
